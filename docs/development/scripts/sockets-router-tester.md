---
title: Testing Router WebSockets
---

Copy paste the JavaScript below to a local .js file and run:

```bash
node test-wss-endpoint.js "wss://your-endpoint-url"
```


```javascript
#!/usr/bin/env node

/**
 * WSS Endpoint Tester for StentorRouterChat
 *
 * This script tests WebSocket endpoints to verify they work with the StentorRouterChat ChatServer.
 * It performs the following:
 * 1. Connects to the WSS endpoint
 * 2. Performs the handshake (sends "user joined" event)
 * 3. Waits for "connection update" event confirming session creation
 * 4. Sends a LaunchRequest (initial greeting)
 * 5. Waits for a welcome response
 * 6. Provides detailed diagnostics about any issues
 *
 * Usage:
 *   node test-wss-endpoint.js <wss-url> [options]
 *
 * Note: Quote URLs containing special characters (like &):
 *   node test-wss-endpoint.js "wss://example.com/?appId=123&channelId=456"
 *
 * Options:
 *   --appId=<id>         Application ID (optional)
 *   --userId=<id>        User ID (default: test-user-{timestamp})
 *   --message=<text>     Test message to send (optional, for future use)
 *   --timeout=<ms>       Timeout in milliseconds (default: 30000)
 *   --verbose            Enable verbose logging
 */

const WebSocket = require('ws');

// ANSI color codes for terminal output
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
    gray: '\x1b[90m'
};

function log(message, color = colors.reset) {
    console.log(`${color}${message}${colors.reset}`);
}

function logSection(title) {
    log(`\n${'='.repeat(60)}`, colors.cyan);
    log(title, colors.bright + colors.cyan);
    log('='.repeat(60), colors.cyan);
}

function logSuccess(message) {
    log(`✓ ${message}`, colors.green);
}

function logError(message) {
    log(`✗ ${message}`, colors.red);
}

function logWarning(message) {
    log(`⚠ ${message}`, colors.yellow);
}

function logInfo(message) {
    log(`ℹ ${message}`, colors.blue);
}

function logVerbose(message, verbose) {
    if (verbose) {
        log(`  ${message}`, colors.gray);
    }
}

// Parse command line arguments
function parseArgs() {
    const args = process.argv.slice(2);

    if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
        console.log(`
WSS Endpoint Tester for StentorRouterChat

Usage:
  node test-wss-endpoint.js <wss-url> [options]

Arguments:
  <wss-url>            WebSocket URL to test (required)

Options:
  --appId=<id>         Application ID (optional)
  --userId=<id>        User ID (default: test-user-{timestamp})
  --timeout=<ms>       Timeout in milliseconds (default: 30000)
  --verbose            Enable verbose logging
  --help, -h           Show this help message

Examples:
  node test-wss-endpoint.js wss://example.com/chat
  node test-wss-endpoint.js "wss://example.com/chat?appId=123&channelId=456" --verbose
  node test-wss-endpoint.js wss://example.com/chat --userId=test123
  node test-wss-endpoint.js wss://example.com/chat --userId=test123 --message="Test message"

Note: URLs containing special characters like & must be quoted:
  node test-wss-endpoint.js "wss://routerws.xapp.ai/?appId=assistant&channelId=chat-widget"
        `);
        process.exit(0);
    }

    const config = {
        url: args[0],
        appId: null,
        userId: `test-user-${Date.now()}`,
        message: 'Hello, this is a test',
        timeout: 30000,
        verbose: false
    };

    // Parse optional flags
    for (let i = 1; i < args.length; i++) {
        const arg = args[i];
        if (arg.startsWith('--appId=')) {
            config.appId = arg.split('=')[1];
        } else if (arg.startsWith('--userId=')) {
            config.userId = arg.split('=')[1];
        } else if (arg.startsWith('--message=')) {
            config.message = arg.split('=')[1];
        } else if (arg.startsWith('--timeout=')) {
            config.timeout = parseInt(arg.split('=')[1], 10);
        } else if (arg === '--verbose') {
            config.verbose = true;
        }
    }

    return config;
}

// Generate a simple UUID (not cryptographically secure, just for testing)
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Main test function
async function testWSSEndpoint(config) {
    logSection('WSS Endpoint Test for StentorRouterChat');

    logInfo(`Target URL: ${config.url}`);
    logInfo(`User ID: ${config.userId}`);
    logInfo(`Test Message: "${config.message}"`);
    logInfo(`Timeout: ${config.timeout}ms`);

    const results = {
        success: false,
        stages: {
            urlParsing: false,
            connection: false,
            handshake: false,
            sessionCreation: false,
            messageSend: false,
            messageReceive: false
        },
        errors: [],
        warnings: [],
        timings: {},
        serverType: null,
        httpStatusCode: null,
        receivedMessages: []
    };

    const startTime = Date.now();

    // Stage 1: URL Parsing and Validation
    logSection('Stage 1: URL Parsing and Validation');
    try {
        const url = new URL(config.url);

        if (url.protocol !== 'wss:' && url.protocol !== 'ws:') {
            throw new Error(`Invalid protocol: ${url.protocol}. Must be 'wss:' or 'ws:'`);
        }

        if (url.protocol === 'ws:') {
            logWarning('Using unsecured WebSocket (ws://). For production, use wss://');
            results.warnings.push('Using unsecured WebSocket protocol');
        }

        // Detect server type
        if (url.hostname.includes('execute-api') && url.hostname.includes('amazonaws.com')) {
            results.serverType = 'AWS API Gateway';
            logInfo(`Detected server type: AWS API Gateway`);
        } else if (url.hostname.includes('xapp.ai')) {
            results.serverType = 'Stentor Router';
            logInfo(`Detected server type: Stentor Router`);
        }

        // Add userId and isAdmin parameters
        url.searchParams.set('userId', config.userId);
        url.searchParams.set('isAdmin', 'false');
        url.searchParams.set('createWsReason', 'wss-endpoint-test');

        if (config.appId) {
            url.searchParams.set('appId', config.appId);
        }

        const finalUrl = url.toString();
        logVerbose(`Final URL: ${finalUrl}`, config.verbose);

        results.stages.urlParsing = true;
        logSuccess('URL parsing and validation complete');

        // Stage 2: WebSocket Connection
        logSection('Stage 2: WebSocket Connection');

        const ws = await new Promise((resolve, reject) => {
            const connectionTimeout = setTimeout(() => {
                reject(new Error('Connection timeout - server did not respond'));
            }, config.timeout);

            logVerbose('Creating WebSocket connection...', config.verbose);
            const socket = new WebSocket(finalUrl);

            socket.on('open', () => {
                clearTimeout(connectionTimeout);
                const elapsed = Date.now() - startTime;
                results.timings.connection = elapsed;
                logSuccess(`WebSocket connected (${elapsed}ms)`);
                results.stages.connection = true;
                resolve(socket);
            });

            socket.on('error', (error) => {
                clearTimeout(connectionTimeout);

                // Try to extract HTTP status code from error message
                const statusMatch = error.message.match(/Unexpected server response: (\d+)/);
                if (statusMatch) {
                    results.httpStatusCode = parseInt(statusMatch[1], 10);
                }

                reject(error);
            });

            socket.on('upgrade', (response) => {
                logVerbose(`WebSocket upgrade successful, status: ${response.statusCode}`, config.verbose);
            });
        });

        // Stage 3: Handshake (Send "user joined" event)
        logSection('Stage 3: Handshake - Send "user joined" Event');

        const sessionId = `stentor-widget-session-${uuid()}`;
        const visitorInfo = {
            deviceId: 'Widget',
            userId: config.userId,
            displayName: 'Visitor',
            isAdmin: false,
            urlAttributes: {
                path: ['', '']
            }
        };

        const handshakeMessage = {
            event: 'user joined',
            sender: visitorInfo,
            sessionId: sessionId,
            timeMs: Date.now()
        };

        logVerbose(`Sending handshake: ${JSON.stringify(handshakeMessage, null, 2)}`, config.verbose);

        ws.send(JSON.stringify(handshakeMessage));
        results.stages.handshake = true;
        logSuccess('Handshake message sent');

        // Stage 4: Wait for "connection update" event
        logSection('Stage 4: Wait for Session Creation');

        let sessionCreated = false;
        let messageReceived = false;

        const sessionTimeout = setTimeout(() => {
            if (!sessionCreated) {
                logError('Session creation timeout - no "connection update" event received');
                results.errors.push('Session was not created within timeout period');

                if (results.receivedMessages.length > 0) {
                    results.errors.push(`Received ${results.receivedMessages.length} message(s) but none were "connection update" events`);
                    results.warnings.push('Lambda is responding but not using StentorRouterChat message format');
                } else {
                    results.errors.push('No messages received from server at all');
                    results.warnings.push('Lambda may not be handling messages after $connect, or $default route not configured');
                }

                ws.close();
            }
        }, config.timeout);

        ws.on('message', (data) => {
            try {
                const message = JSON.parse(data.toString());
                results.receivedMessages.push(message);

                logVerbose(`Received: ${JSON.stringify(message, null, 2)}`, config.verbose);

                // Always log the event type if it exists
                if (message.event) {
                    logInfo(`Received event: "${message.event}"`);
                } else {
                    logWarning(`Received message without "event" field - may not be StentorRouterChat format`);
                }

                if (message.event === 'connection update') {
                    clearTimeout(sessionTimeout);
                    const elapsed = Date.now() - startTime;
                    results.timings.sessionCreation = elapsed;

                    if (message.data && message.data.sessionCreated) {
                        logSuccess(`Session created successfully (${elapsed}ms)`);
                        results.stages.sessionCreation = true;
                        sessionCreated = true;

                        // Stage 5: Send LaunchRequest
                        logSection('Stage 5: Send LaunchRequest');

                        const launchRequest = {
                            type: 'LAUNCH_REQUEST',
                            sessionId: sessionId,
                            userId: config.userId,
                            isNewSession: true,
                            intentId: 'LaunchRequest',
                            platform: 'stentor-platform',
                            channel: 'widget',
                            attributes: {
                                currentUrl: 'https://test-page.com',
                                isGreeting: true
                            }
                        };

                        const launchMessage = {
                            event: 'new message',
                            data: launchRequest,
                            sender: visitorInfo,
                            sessionId: sessionId,
                            timeMs: Date.now()
                        };

                        logVerbose(`Sending LaunchRequest: ${JSON.stringify(launchMessage, null, 2)}`, config.verbose);

                        ws.send(JSON.stringify(launchMessage));
                        results.stages.messageSend = true;
                        logSuccess('LaunchRequest sent');

                        // Wait for response
                        logSection('Stage 6: Wait for Response');
                    } else {
                        logError('Session creation failed');
                        if (message.data && message.data.errorMessage) {
                            logError(`Error: ${message.data.errorMessage}`);
                            results.errors.push(`Session creation error: ${message.data.errorMessage}`);
                        }
                        ws.close();
                    }
                } else if (message.event === 'new message') {
                    if (!messageReceived) {
                        const elapsed = Date.now() - startTime;
                        results.timings.messageReceive = elapsed;
                        messageReceived = true;
                        results.stages.messageReceive = true;

                        logSuccess(`Response received (${elapsed}ms)`);

                        if (message.data) {
                            if (message.data.outputSpeech) {
                                logInfo(`Response: "${message.data.outputSpeech.displayText || message.data.outputSpeech.ssml}"`);
                            } else {
                                logVerbose(`Response data: ${JSON.stringify(message.data, null, 2)}`, config.verbose);
                            }
                        }

                        // Test complete
                        results.success = true;
                        ws.close();
                    }
                } else if (message.event === 'failure') {
                    logError(`Failure event received: ${message.data ? message.data.error : 'Unknown error'}`);
                    results.errors.push(`Failure event: ${message.data ? message.data.error : 'Unknown'}`);
                } else {
                    logVerbose(`Received event: ${message.event}`, config.verbose);
                }
            } catch (e) {
                // Might be a non-JSON message
                const rawMessage = data.toString();
                results.receivedMessages.push({ __raw: rawMessage });
                logWarning(`Received non-JSON message: ${rawMessage.substring(0, 100)}${rawMessage.length > 100 ? '...' : ''}`);
                logError(`Failed to parse message: ${e.message}`);
                results.errors.push(`Message parsing error: ${e.message}`);
            }
        });

        ws.on('close', (code, reason) => {
            logVerbose(`WebSocket closed: ${code} ${reason}`, config.verbose);
        });

        ws.on('error', (error) => {
            logError(`WebSocket error: ${error.message}`);
            results.errors.push(`WebSocket error: ${error.message}`);
        });

        // Wait for test completion or timeout
        await new Promise((resolve) => {
            const checkInterval = setInterval(() => {
                if (!ws || ws.readyState === WebSocket.CLOSED) {
                    clearInterval(checkInterval);
                    resolve();
                }
            }, 100);

            setTimeout(() => {
                if (ws && ws.readyState !== WebSocket.CLOSED) {
                    ws.close();
                }
                clearInterval(checkInterval);
                resolve();
            }, config.timeout);
        });

    } catch (error) {
        logError(`Error: ${error.message}`);
        results.errors.push(error.message);

        // Diagnose common errors
        if (error.code === 'ENOTFOUND') {
            results.errors.push('DNS resolution failed - check if the hostname is correct');
        } else if (error.code === 'ECONNREFUSED') {
            results.errors.push('Connection refused - server may not be running or firewall blocking');
        } else if (error.code === 'ETIMEDOUT') {
            results.errors.push('Connection timeout - server not responding');
        } else if (error.message.includes('Unexpected server response')) {
            results.errors.push('Server returned non-WebSocket response - check if URL path is correct');

            // Add specific diagnostics for HTTP status codes
            if (results.httpStatusCode) {
                results.errors.push(`HTTP Status Code: ${results.httpStatusCode}`);
            }
        }
    }

    // Final Report
    logSection('Test Results Summary');

    const totalTime = Date.now() - startTime;
    logInfo(`Total time: ${totalTime}ms`);

    if (results.serverType) {
        logInfo(`Server Type: ${results.serverType}`);
    }

    if (results.httpStatusCode) {
        logInfo(`HTTP Status Code: ${results.httpStatusCode}`);
    }

    console.log('\nStage Results:');
    Object.keys(results.stages).forEach(stage => {
        const status = results.stages[stage];
        if (status) {
            logSuccess(`  ${stage}: PASSED`);
        } else {
            logError(`  ${stage}: FAILED`);
        }
    });

    if (results.timings.connection) {
        console.log('\nTimings:');
        logInfo(`  Connection: ${results.timings.connection}ms`);
        if (results.timings.sessionCreation) {
            logInfo(`  Session Creation: ${results.timings.sessionCreation}ms`);
        }
        if (results.timings.messageReceive) {
            logInfo(`  Message Response: ${results.timings.messageReceive}ms`);
        }
    }

    // Show received messages if any
    if (results.receivedMessages.length > 0) {
        logSection('Messages Received from Server');
        logInfo(`Total messages received: ${results.receivedMessages.length}`);
        results.receivedMessages.forEach((msg, index) => {
            console.log(`\nMessage #${index + 1}:`);
            if (msg.__raw) {
                log(`  ${msg.__raw}`, colors.gray);
            } else {
                log(JSON.stringify(msg, null, 2), colors.gray);
            }
        });
    }

    if (results.warnings.length > 0) {
        console.log('\nWarnings:');
        results.warnings.forEach(warning => logWarning(`  ${warning}`));
    }

    if (results.errors.length > 0) {
        console.log('\nErrors:');
        results.errors.forEach(error => logError(`  ${error}`));
    }

    // Provide diagnostic recommendations
    if (!results.success) {
        logSection('Diagnostic Recommendations');

        if (!results.stages.urlParsing) {
            log('• Check that the URL is valid and uses wss:// or ws:// protocol', colors.yellow);
        }

        if (!results.stages.connection) {
            // Provide specific diagnostics based on HTTP status code and server type
            if (results.httpStatusCode && results.serverType === 'AWS API Gateway') {
                logSection('AWS API Gateway Error Diagnostics');

                switch (results.httpStatusCode) {
                    case 502:
                        logError('502 Bad Gateway - Lambda Integration Error');
                        log('\nIMPORTANT: 502 means API Gateway cannot get a valid response from Lambda.', colors.bright);
                        log('This is almost always a configuration issue, not a firewall problem.', colors.bright);
                        log('\nMost common causes (check in this order):', colors.bright);
                        log('1. $connect route not configured or misconfigured', colors.yellow);
                        log('   → Go to API Gateway Console > Routes > Check $connect exists', colors.gray);
                        log('   → Verify $connect route has a Lambda integration attached', colors.gray);
                        log('   → Confirm the Lambda function name is correct', colors.gray);
                        log('\n2. Lambda function error or crash on startup', colors.yellow);
                        log('   → Check CloudWatch Logs for the Lambda function', colors.gray);
                        log('   → Look for runtime errors, unhandled exceptions, or initialization failures', colors.gray);
                        log('   → Common: syntax errors, missing dependencies, or environment variable issues', colors.gray);
                        log('\n3. IAM permissions missing', colors.yellow);
                        log('   → API Gateway needs lambda:InvokeFunction permission', colors.gray);
                        log('   → Check the Lambda resource policy allows API Gateway to invoke it', colors.gray);
                        log('   → AWS Console: Lambda > Configuration > Permissions > Resource-based policy', colors.gray);
                        log('\n4. Lambda timeout or cold start issues', colors.yellow);
                        log('   → Lambda taking longer than API Gateway integration timeout (30s)', colors.gray);
                        log('   → Check Lambda function execution time in CloudWatch', colors.gray);
                        log('\n5. Lambda returning invalid response format', colors.yellow);
                        log('   → Lambda must return { statusCode: 200 } for $connect route', colors.gray);
                        log('   → Verify the Lambda handler code for $connect route', colors.gray);

                        log('\nAWS Console checks:', colors.bright);
                        log('→ CloudWatch > Log Groups > /aws/lambda/<function-name>', colors.cyan);
                        log('→ API Gateway > Your API > Routes > $connect', colors.cyan);
                        log('→ Lambda > Your Function > Configuration > Permissions', colors.cyan);

                        log('\nNote about firewalls:', colors.bright);
                        log('If this were a firewall issue, you would see:', colors.gray);
                        log('  • Connection timeout (cannot reach server at all)', colors.gray);
                        log('  • Connection refused (port blocked)', colors.gray);
                        log('  • 403 Forbidden (WAF/security group blocking)', colors.gray);
                        log('Since you got a 502, the connection succeeded but Lambda failed.', colors.gray);
                        break;

                    case 403:
                        logError('403 Forbidden - Authorization Error');
                        log('\nCommon causes:', colors.bright);
                        log('1. API Gateway resource policy denying access', colors.yellow);
                        log('2. WAF (Web Application Firewall) blocking the request', colors.yellow);
                        log('3. Missing or invalid authorization token', colors.yellow);
                        log('4. Lambda authorizer rejecting the connection', colors.yellow);
                        log('\nCheck API Gateway resource policies and WAF rules', colors.cyan);
                        break;

                    case 500:
                        logError('500 Internal Server Error');
                        log('\nCommon causes:', colors.bright);
                        log('1. API Gateway internal error', colors.yellow);
                        log('2. Integration configuration error', colors.yellow);
                        log('3. Lambda function returning invalid response format', colors.yellow);
                        log('\nCheck CloudWatch Logs for API Gateway execution logs', colors.cyan);
                        break;

                    case 503:
                        logError('503 Service Unavailable');
                        log('\nCommon causes:', colors.bright);
                        log('1. API Gateway throttling (rate limit exceeded)', colors.yellow);
                        log('2. Lambda concurrent execution limit reached', colors.yellow);
                        log('3. AWS service degradation or outage', colors.yellow);
                        log('\nCheck AWS Service Health Dashboard and Lambda metrics', colors.cyan);
                        break;

                    case 504:
                        logError('504 Gateway Timeout');
                        log('\nCommon causes:', colors.bright);
                        log('1. Lambda function exceeded integration timeout (29s)', colors.yellow);
                        log('2. Lambda cold start taking too long', colors.yellow);
                        log('3. Lambda function hanging or in infinite loop', colors.yellow);
                        log('\nOptimize Lambda initialization and execution time', colors.cyan);
                        break;

                    default:
                        logError(`HTTP ${results.httpStatusCode} Error`);
                        log('Check API Gateway and Lambda logs for details', colors.yellow);
                }

                log('\n\nQuick debugging steps:', colors.bright);
                log('1. Check CloudWatch Logs:', colors.cyan);
                log('   aws logs tail /aws/lambda/<function-name> --follow', colors.gray);
                log('\n2. Test Lambda function directly:', colors.cyan);
                log('   Go to Lambda Console > Test tab > Create test event', colors.gray);
                log('\n3. Check API Gateway stages:', colors.cyan);
                log('   Ensure the API is deployed to the correct stage', colors.gray);
                log('\n4. Enable API Gateway logging:', colors.cyan);
                log('   Settings > CloudWatch log role ARN > Enable detailed logs', colors.gray);

            } else {
                // Generic connection failure diagnostics
                log('• Verify the server is running and accessible', colors.yellow);
                log('• Check firewall and network settings', colors.yellow);
                log('• Ensure the URL and port are correct', colors.yellow);
                log('• Try pinging the host: ping <hostname>', colors.yellow);
            }
        }

        if (results.stages.connection && !results.stages.sessionCreation) {
            logSection('Message Protocol Mismatch Diagnostics');

            if (results.receivedMessages.length === 0) {
                log('\n══════════════════════════════════════════════════════════', colors.bright);
                log('Problem: No messages received after handshake', colors.bright + colors.red);
                log('══════════════════════════════════════════════════════════', colors.bright);

                log('\nYour Lambda connected successfully but is NOT sending any messages back.', colors.yellow);
                log('The widget sent "user joined" event but got no response.', colors.yellow);

                log('\n\nMost likely causes (check in order):', colors.bright);

                log('\n1. $default route NOT configured in API Gateway', colors.bright + colors.yellow);
                log('   Problem:', colors.yellow);
                log('   → WebSocket messages after $connect need a $default route', colors.gray);
                log('   → Without it, API Gateway doesn\'t know where to send incoming messages', colors.gray);
                log('   Fix:', colors.green);
                log('   → AWS Console: API Gateway > Your API > Routes', colors.cyan);
                log('   → Click "Create" and add route key: $default', colors.cyan);
                log('   → Attach your Lambda function that handles messages', colors.cyan);
                log('   → Deploy the API', colors.cyan);

                log('\n2. Lambda is NOT sending responses back', colors.bright + colors.yellow);
                log('   Problem:', colors.yellow);
                log('   → Your Lambda may be processing messages but not replying', colors.gray);
                log('   → Must use API Gateway Management API to send messages to connection', colors.gray);
                log('   Fix:', colors.green);
                log('   → Your Lambda needs code like this:', colors.cyan);
                log('', colors.reset);
                log('   const AWS = require(\'aws-sdk\');', colors.gray);
                log('   ', colors.gray);
                log('   exports.handler = async (event) => {', colors.gray);
                log('     const connectionId = event.requestContext.connectionId;', colors.gray);
                log('     const domain = event.requestContext.domainName;', colors.gray);
                log('     const stage = event.requestContext.stage;', colors.gray);
                log('     ', colors.gray);
                log('     // Parse incoming message', colors.gray);
                log('     const incomingMessage = JSON.parse(event.body);', colors.gray);
                log('     ', colors.gray);
                log('     // Check if it\'s a "user joined" event', colors.gray);
                log('     if (incomingMessage.event === \'user joined\') {', colors.gray);
                log('       ', colors.gray);
                log('       // Create API Gateway Management API client', colors.gray);
                log('       const apigwManagementApi = new AWS.ApiGatewayManagementApi({', colors.gray);
                log('         endpoint: `${domain}/${stage}`', colors.gray);
                log('       });', colors.gray);
                log('       ', colors.gray);
                log('       // Send "connection update" response', colors.gray);
                log('       const responseMessage = {', colors.gray);
                log('         event: \'connection update\',', colors.gray);
                log('         data: { sessionCreated: true },', colors.gray);
                log('         sender: {', colors.gray);
                log('           isAdmin: false,', colors.gray);
                log('           deviceId: \'Widget\',', colors.gray);
                log('           userId: \'server\',', colors.gray);
                log('           displayName: \'Visitor\'', colors.gray);
                log('         },', colors.gray);
                log('         sessionId: incomingMessage.sessionId,', colors.gray);
                log('         timeMs: Date.now()', colors.gray);
                log('       };', colors.gray);
                log('       ', colors.gray);
                log('       await apigwManagementApi.postToConnection({', colors.gray);
                log('         ConnectionId: connectionId,', colors.gray);
                log('         Data: JSON.stringify(responseMessage)', colors.gray);
                log('       }).promise();', colors.gray);
                log('     }', colors.gray);
                log('     ', colors.gray);
                log('     return { statusCode: 200 };', colors.gray);
                log('   };', colors.gray);

                log('\n3. IAM Permissions missing', colors.bright + colors.yellow);
                log('   Problem:', colors.yellow);
                log('   → Lambda needs permission to send messages via API Gateway', colors.gray);
                log('   Fix:', colors.green);
                log('   → Add this policy to your Lambda execution role:', colors.cyan);
                log('   {', colors.gray);
                log('     "Effect": "Allow",', colors.gray);
                log('     "Action": "execute-api:ManageConnections",', colors.gray);
                log('     "Resource": "arn:aws:execute-api:REGION:ACCOUNT:API-ID/STAGE/POST/@connections/*"', colors.gray);
                log('   }', colors.gray);

                log('\n4. Lambda crashing after connection', colors.bright + colors.yellow);
                log('   Check:', colors.yellow);
                log('   → CloudWatch Logs: /aws/lambda/<your-function-name>', colors.gray);
                log('   → Look for errors after the "user joined" message arrived', colors.gray);
            } else {
                log('\nProblem: Received messages but not in StentorRouterChat format', colors.bright);
                log('\nThe Lambda is responding but not using the expected message protocol.', colors.gray);
                log('\nExpected format:', colors.bright);
                log(JSON.stringify({
                    event: 'connection update',
                    data: { sessionCreated: true },
                    sessionId: '<session-id>',
                    timeMs: Date.now()
                }, null, 2), colors.gray);

                log('\nYour Lambda needs to:', colors.bright);
                log('1. Parse incoming messages with "event" field', colors.yellow);
                log('2. Respond to "user joined" event with "connection update" event', colors.yellow);
                log('3. Use API Gateway Management API to send messages:', colors.yellow);
                log('   const apiGatewayManagementApi = new AWS.ApiGatewayManagementApi({', colors.gray);
                log('     endpoint: <your-endpoint>/<stage>', colors.gray);
                log('   });', colors.gray);
                log('   await apiGatewayManagementApi.postToConnection({', colors.gray);
                log('     ConnectionId: connectionId,', colors.gray);
                log('     Data: JSON.stringify(message)', colors.gray);
                log('   }).promise();', colors.gray);
            }

            log('\nFor implementation reference:', colors.cyan);
            log('  packages/chat-widget/src/xapp/StentorRouterChat.ts', colors.cyan);
        }

        if (results.stages.sessionCreation && !results.stages.messageReceive) {
            log('• Session created but no response to test message', colors.yellow);
            log('• Check if the bot is configured correctly on the server', colors.yellow);
            log('• Verify the bot is responding to requests', colors.yellow);
            log('• Check server-side logs for bot errors', colors.yellow);
        }
    } else {
        logSection('✓ SUCCESS - WSS Endpoint is Working!');
        log('The endpoint successfully:', colors.green);
        log('  ✓ Accepted WebSocket connection', colors.green);
        log('  ✓ Created a session', colors.green);
        log('  ✓ Received and responded to test message', colors.green);
    }

    return results.success ? 0 : 1;
}

// Run the test
const config = parseArgs();
testWSSEndpoint(config)
    .then(exitCode => process.exit(exitCode))
    .catch(error => {
        logError(`Unhandled error: ${error.message}`);
        console.error(error);
        process.exit(1);
    });
```