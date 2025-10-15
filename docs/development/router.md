---
title: Router Protocol
---


This document describes the complete message protocol for the Stentor Chat Router WebSocket system, which routes messages between chat widgets, bots, live agents, and other endpoints.

## Overview

The Chat Router acts as a central message relay ("post office") that connects multiple participants in a conversation. It uses WebSocket connections with structured JSON messages. Each message contains an `event` field that identifies the message type, along with additional data specific to that event.

## Participants

The router manages three types of participants:

- **Widget Users (Visitors)**: End users interacting through the chat widget
- **Bots**: Automated conversational AI endpoints (Stentor bots)
- **Live Agents (Admins)**: Human agents who can monitor and join conversations

## Connection Flow

```
Widget                          Router                           Bot
  |                               |                               |
  |--- WebSocket Connect -------->|                               |
  |<-- Connection Accepted -------|                               |
  |                               |                               |
  |--- "user joined" ------------>|                               |
  |                               |--- Create Bot Endpoint ------->|
  |<-- "user joined" (Bot) -------|                               |
  |<-- "connection update" -------|                               |
  |                               |                               |
  |--- "new message" (Launch)---->|                               |
  |                               |--- "typing" ------------------>|
  |<-- "typing" ------------------|                               |
  |                               |--- "new message" ------------->|
  |                               |<-- Bot Response ---------------|
  |                               |--- "stop typing" ------------->|
  |<-- "stop typing" -------------|                               |
  |<-- "new message" (Response)---|                               |
  |                               |                               |
  |--- "new message" (User msg)-->|--- "new message" ------------->|
  |<-- "new message" (Bot reply)--|<-- Bot Response ---------------|
  |                               |                               |
```

## Message Structure

All messages follow the `RouterMessage` format:

```typescript
interface RouterMessage {
  event: EventType;
  data?: any;
  sender: VisitorInfo;
  sessionId: string;
  messageId?: string;
  timeMs: number;
}
```

### Event Types

The router supports the following event types:

- `"user joined"` - Participant joins the conversation
- `"user left"` - Participant leaves the conversation
- `"connection update"` - Session creation/update confirmation
- `"new message"` - Content messages (user input or bot responses)
- `"typing"` - Typing indicator (someone is composing)
- `"stop typing"` - Stop typing indicator
- `"barge in"` - Live agent takes over from bot
- `"barge out"` - Live agent leaves, bot resumes
- `"live agent"` - User requests human agent
- `"failure"` - Error notification
- `"user rating"` - User rates the conversation
- `"action report"` - Action tracking event
- `"account status"` - Account status update
- `"disconnect"` - Disconnect notification
- `"reconnect"` - Reconnect notification
- `"reconnect failed"` - Reconnect failed
- `"reconnect error"` - Reconnect error

```typescript
type EventType =
  | "account status"
  | "connection update"
  | "new message"
  | "user joined"
  | "user left"
  | "typing"
  | "stop typing"
  | "disconnect"
  | "reconnect"
  | "reconnect failed"
  | "reconnect error"
  | "barge in"
  | "barge out"
  | "failure"
  | "live agent"
  | "action report"
  | "user rating";
```

### Sender (VisitorInfo) Structure

```typescript
interface VisitorInfo {
  deviceId: "Widget" | "Bot";
  userId: string;
  isAdmin: boolean;
  avatarPath?: string;
  displayName?: string;
  email?: string;
  urlAttributes?: {
    path?: string[];
    query?: { [name: string]: string };
  };
}
```

**Field Details:**
- `deviceId`: `"Widget"` for users and admins, `"Bot"` for bot messages
- `userId`: Unique identifier for the participant (UUID format)
- `isAdmin`: `true` for live agents, `false` for visitors and bots
- `avatarPath`: URL to avatar image (typically used for bots)
- `displayName`: Display name (e.g., "Visitor", "Agent", "Assistant")
- `urlAttributes`: Context about where the widget is embedded

## Message Flow Details

### 1. Initial Connection

**Direction:** Widget → Router

The WebSocket connection is established with query parameters:

```
wss://your-router-url/?userId=a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d&isAdmin=false
```

**Query Parameters:**
- `userId`: Unique identifier for the user (UUID format)
- `isAdmin`: `"true"` for live agents, `"false"` for regular users

The router creates an `Endpoint` record for the connection tracking the participant's state:

```typescript
interface Endpoint {
  userId: string;
  connectionUrl: string;      // REST endpoint or AWS WebSocket endpoint
  connectionId: string;        // Internal connection identifier
  connectionType: ConnectionType;

  // Permission flags
  receives: boolean;           // Can receive messages
  sends: boolean;              // Can send messages
  messageOnly: boolean;        // Only receives "new message" events (bots)

  // Connection state
  disconnected: boolean;
  disconnectTimeMs?: number;
  disconnectReason?: string;

  // Participant information
  visitorInfo: VisitorInfo;
  sessionId?: string;          // Linked session
  messageIdsSent: string[];    // For deduplication
  lastOffsetMs?: number;       // Time drift tracking
}

type ConnectionType = "stentor" | "aws" | "http" | "gbm" | "genesis";
```

### 2. User Joined Event (Handshake)

**Direction:** Widget → Router

This is the **first message** sent after connection. It initializes the session.

```json
{
  "event": "user joined",
  "sender": {
    "deviceId": "Widget",
    "userId": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    "displayName": "Visitor",
    "isAdmin": false,
    "urlAttributes": {
      "path": ["", ""]
    }
  },
  "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
  "timeMs": 1234567890123
}
```

**Router Processing:**

```typescript
// 1. Validate session - must be new for non-admin first join
if (!session && (message.event !== "user joined" || message.sender.isAdmin)) {
  await sendConnectionUpdate(endpoint, sessionId, false, "Invalid session request");
  return;
}

// 2. Create bot endpoint if new session
if (!session) {
  const botUserId = `bot-user-id-${generateUUID()}`;

  await createEndpoint({
    messageOnly: true,         // Bots only receive "new message" events
    receives: true,
    sends: true,
    disconnected: false,
    connectionUrl: botDescriptor.url,
    connectionType: "stentor",
    connectionId: botUserId,
    userId: botUserId,
    visitorInfo: {
      deviceId: "Bot",
      isAdmin: false,
      userId: botUserId,
      displayName: botDescriptor.displayName || "Bot",
      avatarPath: botDescriptor.avatarPath
    },
    messageIdsSent: []
  });

  // Create session
  session = {
    sessionId,
    participantIds: [sender.userId, botUserId],
    topic: botTopic,
    lastActiveMs: Date.now(),
    notificationSent: false,
    history: [],
    lastHistoryTsSentMs: {}
  };
}

// 3. Add participant if returning to existing session
if (!session.participantIds.includes(sender.userId)) {
  session.participantIds.unshift(sender.userId);
}

// 4. Send introductions to new participant
for (const participantId of session.participantIds) {
  if (participantId === sender.userId) continue;

  const participant = await getEndpoint(participantId);
  if (participant.sends || (participant.deviceId === "Bot" && participant.receives)) {
    await send({
      event: "user joined",
      data: {},
      sender: participant.visitorInfo,
      sessionId: session.sessionId,
      timeMs: Date.now()
    }, endpoint);
  }
}
```

### 3. Bot Introduction (Optional)

**Direction:** Router → Widget

The router sends a "user joined" event to introduce the bot.

```json
{
  "event": "user joined",
  "data": {},
  "sender": {
    "avatarPath": "https://example.com/bot-avatar.png",
    "isAdmin": false,
    "deviceId": "Bot",
    "userId": "bot-user-id-6f5e4d3c-2b1a-4098-8765-fedcba987654",
    "displayName": "Assistant"
  },
  "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
  "timeMs": 1234567890456
}
```

### 4. Connection Update (Required)

**Direction:** Router → Widget

Confirms that the session has been created successfully. **The widget waits for this message before proceeding.**

```json
{
  "event": "connection update",
  "data": {
    "sessionCreated": true
  },
  "sender": {
    "isAdmin": false,
    "deviceId": "Widget",
    "userId": "server",
    "displayName": "Visitor"
  },
  "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
  "timeMs": 1234567890500
}
```

**Important:**
- `data.sessionCreated` must be `true`
- `sender.userId` is set to `"server"` to indicate a system message
- The widget will timeout if this is not received within 30 seconds

### 5. Launch Request (Initial Greeting)

**Direction:** Widget → Router → Bot

After receiving the connection update, the widget automatically sends a LaunchRequest.

```json
{
  "event": "new message",
  "data": {
    "type": "LAUNCH_REQUEST",
    "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
    "userId": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    "isNewSession": true,
    "intentId": "LaunchRequest",
    "platform": "stentor-platform",
    "channel": "widget",
    "attributes": {
      "currentUrl": "https://example.com/",
      "isGreeting": true
    }
  },
  "sender": {
    "deviceId": "Widget",
    "userId": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    "displayName": "Visitor",
    "isAdmin": false,
    "urlAttributes": {
      "path": ["", ""]
    }
  },
  "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
  "timeMs": 1234567893000
}
```

**Key Fields:**
- `data.type`: `"LAUNCH_REQUEST"` for initial greeting
- `data.intentId`: `"LaunchRequest"` - standard Stentor intent
- `data.isNewSession`: `true` for first message
- `data.attributes.isGreeting`: `true` indicates greeting flow

## Forwarding Messages to Stentor Bot

When the router receives a message for the bot, it forwards the **`data`** field as the request body to the bot's URL via HTTP POST.

### Request to Bot

```typescript
// Extract the data payload from the router message
const botRequestPayload = routerMessage.data;

// POST to the bot's endpoint
const response = await fetch(botEndpoint.connectionUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "User-Agent": "Stentor Chat Router"
  },
  body: JSON.stringify(botRequestPayload),
  timeout: 14000  // 14 second timeout
});

const botResponse = await response.json();
```

**Example Bot Request (LaunchRequest):**

```json
{
  "type": "LAUNCH_REQUEST",
  "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
  "userId": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
  "isNewSession": true,
  "intentId": "LaunchRequest",
  "platform": "stentor-platform",
  "channel": "widget",
  "attributes": {
    "currentUrl": "https://example.com/",
    "isGreeting": true
  }
}
```

**Example Bot Request (User Query):**

```json
{
  "type": "INTENT_REQUEST",
  "rawQuery": "What are your business hours?",
  "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
  "userId": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
  "isNewSession": false,
  "intentId": "NLU_RESULT_PLACEHOLDER",
  "platform": "stentor-platform",
  "channel": "widget",
  "attributes": {
    "currentUrl": "https://example.com/contact"
  }
}
```

### Expected Bot Response

The bot should return a response following the Stentor response format:

```json
{
  "outputSpeech": {
    "displayText": "We're open Monday through Friday, 9 AM to 5 PM.",
    "ssml": "<speak>We're open Monday through Friday, 9 AM to 5 PM.</speak>",
    "html": "<p>We're open Monday through Friday, 9 AM to 5 PM.</p>\n",
    "suggestions": [
      { "title": "Contact Us" },
      { "title": "Get Directions" }
    ]
  },
  "reprompt": {
    "displayText": "Is there anything else I can help you with?",
    "ssml": "<speak>Is there anything else I can help you with?</speak>",
    "html": "<p>Is there anything else I can help you with?</p>\n"
  },
  "displays": [],
  "tag": "BUSINESS_HOURS"
}
```

**Response Fields:**
- `outputSpeech`: Primary response content
  - `displayText`: Plain text (required)
  - `ssml`: SSML format for voice platforms (optional)
  - `html`: HTML formatted text (optional)
  - `suggestions`: Quick reply chips/buttons (optional)
- `reprompt`: Follow-up prompt if user doesn't respond (optional)
- `displays`: Rich content like lists, cards, carousels (optional)
- `tag`: Response categorization tag (optional)

### Bot Retry Logic

The router implements automatic retry logic for bot failures:

```typescript
const TIMEOUT_MS = 14000;      // 14 second timeout per attempt
const WAIT_BETWEEN_RETRIES = 5000;  // 5 second delay between retries
const MAX_RETRIES = 3;

async function callBotWithRetry(message: RouterMessage, botEndpoint: Endpoint) {
  let tries = 1;

  while (tries <= MAX_RETRIES) {
    const startTime = Date.now();

    try {
      const result = await postToBot(message, botEndpoint, TIMEOUT_MS);

      if (result.ok) {
        return result;
      }

      // Send failure notification to widget
      await broadcastFailure({
        type: "BOT",
        tries,
        error: result.error,
        delay: WAIT_BETWEEN_RETRIES / 1000  // In seconds
      }, message.sessionId);

    } catch (error) {
      await broadcastFailure({
        type: "BOT",
        tries,
        error: "TIMEOUT",
        delay: WAIT_BETWEEN_RETRIES / 1000
      }, message.sessionId);
    }

    // Wait before retry (ensure at least 5 seconds between attempts)
    const elapsed = Date.now() - startTime;
    if (elapsed < WAIT_BETWEEN_RETRIES) {
      await sleep(WAIT_BETWEEN_RETRIES - elapsed);
    }

    tries++;
  }

  // All retries exhausted
  return { ok: false, error: "MAX_RETRIES_EXCEEDED" };
}
```

### 6. Typing Indicator

**Direction:** Router → Widget

Indicates the bot is processing the message. Sent automatically before calling the bot.

```json
{
  "event": "typing",
  "data": {},
  "sender": {
    "avatarPath": "https://example.com/bot-avatar.png",
    "isAdmin": false,
    "deviceId": "Bot",
    "userId": "bot-user-id-6f5e4d3c-2b1a-4098-8765-fedcba987654",
    "displayName": "Assistant"
  },
  "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
  "timeMs": 1234567893050
}
```

### 7. Stop Typing Indicator

**Direction:** Router → Widget

Indicates the bot has finished processing. Sent automatically after receiving bot response.

```json
{
  "event": "stop typing",
  "data": {},
  "sender": {
    "avatarPath": "https://example.com/bot-avatar.png",
    "isAdmin": false,
    "deviceId": "Bot",
    "userId": "bot-user-id-6f5e4d3c-2b1a-4098-8765-fedcba987654",
    "displayName": "Assistant"
  },
  "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
  "timeMs": 1234567896000
}
```

### 8. Bot Response

**Direction:** Router → Widget

The bot's response containing welcome or reply content. The router wraps the bot's response in a router message.

```json
{
  "event": "new message",
  "data": {
    "channel": { "name": "widget" },
    "name": "First Time User",
    "outputSpeech": {
      "displayText": "Hello, how can I help?",
      "ssml": "<speak>Hello, how can I help?</speak>",
      "suggestions": [
        { "title": "Contact Us" }
      ],
      "html": "<p>Hello, how can I help?</p>\n"
    },
    "reprompt": {
      "displayText": "What can I help you with?",
      "ssml": "<speak>What can I help you with?</speak>",
      "suggestions": [],
      "html": "<p>What can I help you with?</p>\n"
    },
    "displays": [
      {
        "type": "LIST",
        "items": [
          {
            "title": "Product Information",
            "description": "Learn about our products",
            "image": {
              "url": "https://example.com/icon.png"
            }
          }
        ]
      }
    ],
    "segments": {
      "GREETING": [
        { "segment": { "displayText": "Hi", "ssml": "<speak>Hi</speak>" } }
      ]
    },
    "tag": "KB_CHAT_RESPONSE"
  },
  "sender": {
    "avatarPath": "https://example.com/bot-avatar.png",
    "isAdmin": false,
    "deviceId": "Bot",
    "userId": "bot-user-id-6f5e4d3c-2b1a-4098-8765-fedcba987654",
    "displayName": "Assistant"
  },
  "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
  "timeMs": 1234567896050
}
```

### 9. User Messages

**Direction:** Widget → Router → Bot

User sends text messages to the bot.

```json
{
  "event": "new message",
  "data": {
    "type": "INTENT_REQUEST",
    "rawQuery": "What are your business hours?",
    "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
    "userId": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    "isNewSession": false,
    "intentId": "NLU_RESULT_PLACEHOLDER",
    "platform": "stentor-platform",
    "channel": "widget",
    "attributes": {
      "currentUrl": "https://example.com/contact"
    }
  },
  "sender": {
    "deviceId": "Widget",
    "userId": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    "displayName": "Visitor",
    "isAdmin": false,
    "urlAttributes": { "path": ["contact", ""] }
  },
  "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
  "timeMs": 1734567900000
}
```

**Key Fields:**
- `data.type`: `"INTENT_REQUEST"` for user text input (or `"INPUT_UNKNOWN"`)
- `data.rawQuery`: The user's message text
- `data.attributes.currentUrl`: Current page URL (can change during session)

The bot responds with the same format as in step 8, preceded by typing indicators.

## Live Agent (Admin) Interactions

### Barge In (Agent Takes Over)

**Direction:** Admin Widget → Router

When a live agent wants to take over from the bot:

```json
{
  "event": "barge in",
  "sender": {
    "deviceId": "Widget",
    "userId": "9f8e7d6c-5b4a-4321-8765-fedcba098765",
    "displayName": "Live Agent",
    "isAdmin": true,
    "urlAttributes": { "path": ["", ""] }
  },
  "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
  "timeMs": 1734567900000
}
```

**Router Processing:**

```typescript
async function handleBargeIn(message: RouterMessage) {
  const adminEndpoint = await getEndpoint(message.sender.userId);

  // 1. Update admin name if changed
  if (adminEndpoint.visitorInfo.displayName !== message.sender.displayName) {
    adminEndpoint.visitorInfo.displayName = message.sender.displayName || "Agent";
  }

  // 2. Enable sending for admin
  adminEndpoint.sends = true;
  await saveEndpoint(adminEndpoint);

  // 3. Announce admin joined
  await broadcast({
    event: "user joined",
    data: {},
    sender: adminEndpoint.visitorInfo,
    sessionId: message.sessionId,
    timeMs: Date.now()
  });

  // 4. Silence the bot
  const botEndpoint = getBotForSession(message.sessionId);
  if (botEndpoint && botEndpoint.receives) {
    botEndpoint.receives = false;
    await saveEndpoint(botEndpoint);

    // Announce bot left
    await broadcast({
      event: "user left",
      data: {},
      sender: botEndpoint.visitorInfo,
      sessionId: message.sessionId,
      timeMs: Date.now()
    });
  }
}
```

**Results:**
1. Admin endpoint is marked as `sends: true`
2. Bot endpoint is marked as `receives: false` (silenced)
3. "user joined" event broadcast for admin
4. "user left" event broadcast for bot

### Agent Messages

**Direction:** Admin Widget → Router → Visitor Widget

Messages from live agents look similar to regular messages but with `isAdmin: true`:

```json
{
  "event": "new message",
  "data": {
    "type": "INTENT_REQUEST",
    "rawQuery": "Hello, this is the live agent. How can I help you today?",
    "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
    "userId": "9f8e7d6c-5b4a-4321-8765-fedcba098765",
    "isNewSession": false,
    "intentId": "NLU_RESULT_PLACEHOLDER",
    "platform": "stentor-platform",
    "channel": "widget",
    "attributes": {
      "currentUrl": "https://agent.example.com/dashboard"
    }
  },
  "sender": {
    "deviceId": "Widget",
    "userId": "9f8e7d6c-5b4a-4321-8765-fedcba098765",
    "displayName": "Live Agent",
    "isAdmin": true,
    "urlAttributes": { "path": ["", ""] }
  },
  "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
  "timeMs": 1734568056997
}
```

**Key Identifiers:**
- `sender.isAdmin`: `true` indicates this is from a live agent
- `sender.deviceId`: Still `"Widget"` (not `"Bot"`)

Agent messages are **not** sent to the bot - they go directly to other widget participants.

### Barge Out (Agent Leaves)

**Direction:** Admin Widget → Router

When a live agent leaves the conversation:

```json
{
  "event": "barge out",
  "sender": {
    "deviceId": "Widget",
    "userId": "9f8e7d6c-5b4a-4321-8765-fedcba098765",
    "displayName": "Live Agent",
    "isAdmin": true,
    "urlAttributes": { "path": ["", ""] }
  },
  "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
  "timeMs": 1734568100000
}
```

**Router Processing:**

```typescript
async function handleBargeOut(message: RouterMessage) {
  const adminEndpoint = await getEndpoint(message.sender.userId);

  // 1. Disable sending for admin
  adminEndpoint.sends = false;
  await saveEndpoint(adminEndpoint);

  // 2. Announce admin left
  await broadcast({
    event: "user left",
    data: {},
    sender: adminEndpoint.visitorInfo,
    sessionId: message.sessionId,
    timeMs: Date.now()
  });

  // 3. Run housekeeping to check if bot should be reactivated
  await houseKeeping(message.sessionId);
}
```

**Results:**
1. Admin endpoint is marked as `sends: false`
2. "user left" event broadcast for admin
3. Housekeeping checks if bot should be reactivated

### Live Agent Request

**Direction:** Widget → Router

User requests to speak with a human agent:

```json
{
  "event": "live agent",
  "data": {},
  "sender": {
    "deviceId": "Widget",
    "userId": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    "displayName": "Visitor",
    "isAdmin": false
  },
  "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
  "timeMs": 1734568200000
}
```

**Router Processing:**
- Triggers alerts to configured channels (email, SMS, Slack)
- Marks session as `notificationSent: true` to prevent duplicate alerts

## Auto Barge-Out (Housekeeping)

The router automatically manages agent disconnections through a housekeeping process.

**Trigger Conditions:**
- Called after "new message", "typing", "stop typing" events
- Called after "barge out" event
- Called after "user joined" event

**Housekeeping Logic:**

```typescript
const ADMIN_AGE_MS = 60000;  // 60 seconds (configurable via ADMIN_SESSION_AGE_MS)

async function houseKeeping(sessionId: string) {
  const session = await getSession(sessionId);
  const now = Date.now();
  const staleAdmins: Endpoint[] = [];

  // 1. Mark stale disconnected admins
  const disconnectedEndpoints = await getDisconnectedEndpointsForSession(sessionId);

  for (const endpoint of disconnectedEndpoints) {
    if (!endpoint.sends || !endpoint.visitorInfo.isAdmin) {
      continue;  // Skip if already non-sender or not admin
    }

    if (now - endpoint.disconnectTimeMs > ADMIN_AGE_MS) {
      endpoint.sends = false;
      await saveEndpoint(endpoint);
      staleAdmins.push(endpoint);
    }
  }

  // 2. Check if bot should be reactivated
  const botEndpoint = await getBotForSession(sessionId);

  // If bot is already receiving, we're done
  if (botEndpoint.receives) {
    return;
  }

  // Count active sender admins
  const allAdmins = await getAdminsForSession(sessionId);
  const activeSenderAdmins = allAdmins.filter(admin => admin.sends).length;

  if (activeSenderAdmins === 0) {
    // No active admins - reactivate bot
    botEndpoint.receives = true;
    await saveEndpoint(botEndpoint);

    // Announce bot rejoined
    await broadcast({
      event: "user joined",
      data: {},
      sender: botEndpoint.visitorInfo,
      sessionId,
      timeMs: now
    });
  }

  // 3. Send "user left" for all stale admins
  for (const staleAdmin of staleAdmins) {
    await broadcast({
      event: "user left",
      data: {},
      sender: staleAdmin.visitorInfo,
      sessionId,
      timeMs: now
    });
  }
}
```

**Conditions for Bot Reactivation:**
- Admin has been disconnected for > 60 seconds (configurable)
- No active admins with `sends: true`

**Actions:**
1. Marks stale admin endpoints as `sends: false`
2. Reactivates bot with `receives: true`
3. Broadcasts "user left" for stale admins
4. Broadcasts "user joined" for bot

## Error Handling

### Failure Messages

**Direction:** Router → Widget

When the bot fails to respond after retries:

```json
{
  "event": "failure",
  "data": {
    "type": "BOT",
    "tries": 3,
    "delay": 5,
    "error": "TIMEOUT"
  },
  "sender": {
    "deviceId": "Bot",
    "userId": "bot-user-id-6f5e4d3c-2b1a-4098-8765-fedcba987654",
    "displayName": "Assistant",
    "isAdmin": false
  },
  "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
  "timeMs": 1734568300000
}
```

**Failure Data Structure:**

```typescript
interface FailureData {
  readonly type: "BOT";
  readonly tries: number;    // Attempt number (1-3)
  readonly delay: number;    // Seconds until next retry
  readonly error: string;    // Error type
}
```

**Error Types:**
- `"TIMEOUT"` - Bot didn't respond within 14 seconds
- `"NETWORK_ERROR"` - Network connection failed
- `"UNKNOWN_ERROR"` - Other errors

The router sends a failure message after each failed attempt, then retries up to 3 times with 5-second delays.

### Invalid Session

**Direction:** Router → Widget

When a message references an invalid session:

```json
{
  "event": "connection update",
  "data": {
    "sessionCreated": false,
    "errorMessage": "Invalid session request"
  },
  "sender": {
    "isAdmin": false,
    "deviceId": "Widget",
    "userId": "server",
    "displayName": "Visitor"
  },
  "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
  "timeMs": 1734568400500
}
```

## Disconnection

**Direction:** WebSocket Disconnect Event

When a WebSocket connection closes, the router handles cleanup:

```typescript
async function handleDisconnection(connectionId: string, disconnectReason: string) {
  const endpoint = await getEndpointByConnection(connectionId);

  if (!endpoint) {
    return;  // Unknown connection
  }

  // 1. Mark endpoint as disconnected
  endpoint.disconnected = true;
  endpoint.disconnectTimeMs = Date.now();
  endpoint.disconnectReason = disconnectReason;
  await saveEndpoint(endpoint);

  // 2. If visitor (not admin), announce departure
  if (endpoint.sessionId && !endpoint.visitorInfo.isAdmin) {
    const session = await getSession(endpoint.sessionId);

    if (session) {
      await broadcast({
        event: "user left",
        data: {},
        sender: endpoint.visitorInfo,
        sessionId: session.sessionId,
        timeMs: Date.now()
      });
    }
  }

  // Note: Endpoint remains in database for potential reconnection
}
```

**Processing:**
1. Endpoint marked as `disconnected: true`
2. Disconnect time and reason recorded
3. If visitor (not admin), "user left" event broadcast
4. Endpoint remains in database for potential reconnection

## Session History

The router maintains conversation history for admins joining mid-conversation.

**History Structure:**

```typescript
interface Session {
  sessionId: string;
  participantIds: string[];
  topic: string;
  lastActiveMs: number;
  notificationSent: boolean;
  history: RouterMessage[];           // Saved messages
  lastHistoryTsSentMs: {             // Track what each admin has seen
    [adminUserId: string]: number;
  };
}
```

**Saved Events:**
- `"new message"` events
- `"failure"` events

**History Usage:**

```typescript
async function sendHistoryToAdmin(admin: Endpoint, session: Session) {
  // Get timestamp of last message this admin received
  const sendAfterMs = session.lastHistoryTsSentMs[admin.userId] || 0;

  // Send only new messages
  for (const message of session.history) {
    if (message.timeMs >= sendAfterMs) {
      await send(message, admin);
    }
  }

  // Update timestamp (prevent resending on next reconnect)
  // Set to far future to ensure only one history send per join
  session.lastHistoryTsSentMs[admin.userId] = Date.now() + 314496000000;  // +10 years
  await saveSession(session);
}
```

**When History is Sent:**
- When admin joins via "user joined" event
- Only sends messages since last history timestamp
- Prevents duplicate messages when admin reconnects

## Additional Events

### User Rating

**Direction:** Widget → Router

User provides feedback on the conversation:

```json
{
  "event": "user rating",
  "data": {
    "rating": 5,
    "comment": "Very helpful!"
  },
  "sender": {
    "deviceId": "Widget",
    "userId": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    "displayName": "Visitor",
    "isAdmin": false
  },
  "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
  "timeMs": 1734568500000
}
```

Currently logged but not processed further.

### Action Report

**Direction:** Widget → Router

Tracks user actions within the widget:

```json
{
  "event": "action report",
  "data": {
    "action": "clicked_suggestion",
    "value": "Contact Us"
  },
  "sender": {
    "deviceId": "Widget",
    "userId": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    "displayName": "Visitor",
    "isAdmin": false
  },
  "sessionId": "stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba",
  "timeMs": 1734568600000
}
```

Currently logged but not processed further.

## Implementation Guidelines

### AWS API Gateway Setup

**Required Routes:**
- `$connect` - Handle WebSocket connection
- `$disconnect` - Handle disconnection and cleanup
- `$default` - Handle all messages

**Lambda Handler Example:**

```typescript
export async function wsHandler(event: any, context: any) {
  const eventType = event.requestContext?.eventType;

  switch (eventType) {
    case "CONNECT":
      return await handleConnection(event);

    case "DISCONNECT":
      return await handleDisconnection(event);

    case "MESSAGE":
      return await handleMessage(event);

    default:
      return { statusCode: 401 };
  }
}

async function handleConnection(event: any) {
  const { connectionId, userId, isAdmin } = extractConnectionData(event);

  // Create or update endpoint record
  await createOrUpdateEndpoint({
    userId,
    connectionId,
    isAdmin,
    // ... other fields
  });

  return { statusCode: 200 };
}

async function handleMessage(event: any) {
  const routerMessage: RouterMessage = JSON.parse(event.body);

  // Route based on event type
  switch (routerMessage.event) {
    case "user joined":
      await handleUserJoined(routerMessage);
      break;
    case "new message":
      await handleNewMessage(routerMessage);
      break;
    // ... other events
  }

  return { statusCode: 200 };
}
```

**Required IAM Permissions:**

```json
{
  "Effect": "Allow",
  "Action": "execute-api:ManageConnections",
  "Resource": "arn:aws:execute-api:REGION:ACCOUNT:API-ID/STAGE/POST/@connections/*"
}
```

### Sending Messages to WebSocket Connections

```typescript
import AWS from "aws-sdk";

async function sendToWidget(
  message: RouterMessage,
  endpoint: Endpoint
): Promise<void> {
  const apigatewaymanagementapi = new AWS.ApiGatewayManagementApi({
    apiVersion: "2018-11-29",
    endpoint: endpoint.connectionUrl  // e.g., "https://abc123.execute-api.us-east-1.amazonaws.com/prod"
  });

  try {
    await apigatewaymanagementapi.postToConnection({
      ConnectionId: endpoint.connectionId,
      Data: JSON.stringify(message)
    }).promise();
  } catch (err) {
    if (err.statusCode === 410) {
      // Connection is dead - mark endpoint as disconnected
      endpoint.disconnected = true;
      await saveEndpoint(endpoint);
    }
    throw err;
  }
}
```

### Time Synchronization

The router tracks time drift between client and server:

```typescript
async function handleMessage(message: RouterMessage, endpoint: Endpoint) {
  const serverTimeMs = Date.now();

  // Calculate offset (positive means client is ahead)
  if (message.timeMs) {
    endpoint.lastOffsetMs = message.timeMs - serverTimeMs;
  }

  // Update message with server time
  message.timeMs = serverTimeMs;

  // When sending to this endpoint, adjust time back
  await saveEndpoint(endpoint);
}

async function sendToEndpoint(message: RouterMessage, endpoint: Endpoint) {
  // Adjust time for client's clock
  if (endpoint.lastOffsetMs) {
    const adjustedMessage = { ...message };
    adjustedMessage.timeMs = message.timeMs + endpoint.lastOffsetMs;
    await send(adjustedMessage, endpoint);
  } else {
    await send(message, endpoint);
  }
}
```

### Message Deduplication

Endpoints track sent message IDs to prevent duplicates:

```typescript
async function sendToEndpoint(message: RouterMessage, endpoint: Endpoint) {
  // Check if already sent
  if (message.messageId && endpoint.messageIdsSent.includes(message.messageId)) {
    return;  // Skip duplicate
  }

  await send(message, endpoint);

  // Track sent message
  if (message.messageId) {
    endpoint.messageIdsSent.push(message.messageId);

    // Keep only recent 100 IDs to avoid unbounded growth
    if (endpoint.messageIdsSent.length > 100) {
      endpoint.messageIdsSent = endpoint.messageIdsSent.slice(-100);
    }

    await saveEndpoint(endpoint);
  }
}
```

## Best Practices

1. **Always send timeMs**: Include accurate timestamps in all messages
2. **Match sessionId**: Always use the same sessionId throughout a conversation
3. **Use consistent IDs**: Keep format `stentor-widget-session-{uuid}` for sessions
4. **Wait for connection update**: Don't send LaunchRequest until session is confirmed
5. **Handle failures gracefully**: Display user-friendly messages for failure events
6. **Implement typing indicators**: Show when bot is processing for better UX
7. **Respect deviceId convention**: Use "Widget" for humans, "Bot" for bots
8. **Use isAdmin correctly**: Set true only for live agents, false for visitors
9. **Handle user left events**: Update UI when participants leave
10. **Store userId persistently**: Keep the same userId across sessions for a user
11. **Include currentUrl**: Helps with context-aware bot responses
12. **Implement bot timeout handling**: Handle 14-second timeout gracefully
13. **Support retry logic**: Display intermediate failure messages during retries

## Common Issues

### Issue: Widget Timeout at Session Creation

**Symptom:** Widget never receives "connection update" event

**Causes:**
1. Missing `$default` route in API Gateway
2. Lambda not sending response via API Gateway Management API
3. Missing IAM permissions for `execute-api:ManageConnections`
4. Lambda crashing during "user joined" processing

**Solution:** Check CloudWatch logs for Lambda errors and verify API Gateway configuration

### Issue: Duplicate Messages

**Symptom:** Same message appears multiple times

**Causes:**
1. Multiple WebSocket connections with same userId
2. Message deduplication not working properly

**Solution:** Implement `messageIdsSent` tracking on endpoints

### Issue: Bot Not Responding

**Symptom:** User messages sent but no bot response

**Causes:**
1. Bot endpoint marked as `receives: false` (agent has barged in)
2. Bot URL not configured correctly
3. Bot service down or timing out
4. Bot not returning expected response format

**Solution:**
- Check bot descriptor configuration
- Verify bot service health
- Test bot endpoint directly with sample payload
- Check bot response format matches Stentor protocol

### Issue: Agent Cannot Send Messages

**Symptom:** Agent joins but messages don't go through

**Causes:**
1. Agent endpoint has `sends: false`
2. Agent didn't send "barge in" event

**Solution:** Send "barge in" event before attempting to send messages

### Issue: Bot Comes Back Too Soon

**Symptom:** Bot reactivates while admin is still helping

**Causes:**
1. Admin disconnected briefly
2. `ADMIN_SESSION_AGE_MS` set too low

**Solution:** Increase `ADMIN_SESSION_AGE_MS` environment variable (default 60000ms)

## Field Reference Quick Guide

### Common Fields (All Messages)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `event` | string | Yes | Message type identifier |
| `sessionId` | string | Yes | Unique session identifier |
| `timeMs` | number | Yes | Timestamp in milliseconds since epoch |
| `sender` | object | Yes | Information about who sent the message |
| `data` | any | No | Event-specific data payload |
| `messageId` | string | No | Unique message identifier |

### Sender Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `deviceId` | string | Yes | `"Widget"` or `"Bot"` |
| `userId` | string | Yes | Unique identifier for the sender |
| `isAdmin` | boolean | Yes | Whether sender has admin privileges |
| `displayName` | string | No | Display name of the sender |
| `avatarPath` | string | No | URL to avatar image (bot only) |
| `email` | string | No | Email address (if available) |
| `urlAttributes` | object | No | URL context information (widget only) |

### ID Formats

**Session ID:**
- Pattern: `stentor-widget-session-{uuid}`
- Example: `stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba`
- Must be consistent throughout the entire conversation

**User ID (Visitor):**
- Pattern: UUID format
- Example: `a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d`
- Should be unique per user and persistent across sessions

**User ID (Admin):**
- Pattern: UUID format
- Example: `9f8e7d6c-5b4a-4321-8765-fedcba098765`
- Should be unique per admin and persistent across sessions

**Bot User ID:**
- Pattern: `bot-user-id-{uuid}`
- Example: `bot-user-id-6f5e4d3c-2b1a-4098-8765-fedcba987654`
- Generated by router, new for each session

## Testing

### Test Script

Use the script [here](/docs/development/scripts/sockets-router-tester.md), copy paste it to a .js file.

Then use it to verify your WebSocket endpoint:

```bash
node test-wss-endpoint.js "wss://your-endpoint-url"
```

The test will:
1. Connect to WebSocket endpoint
2. Send "user joined" handshake
3. Wait for "connection update" response
4. Send a LaunchRequest
5. Wait for welcome message response
6. Provide detailed diagnostics if any step fails

### Manual Testing with wscat

```bash
# Install wscat
npm install -g wscat

# Connect to your endpoint
wscat -c "wss://your-router-url/?userId=a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d&isAdmin=false"

# Send user joined
{"event":"user joined","sender":{"deviceId":"Widget","userId":"a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d","displayName":"Visitor","isAdmin":false,"urlAttributes":{"path":["",""]}},"sessionId":"stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba","timeMs":1234567890123}

# Wait for connection update, then send LaunchRequest
{"event":"new message","data":{"type":"LAUNCH_REQUEST","sessionId":"stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba","userId":"a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d","isNewSession":true,"intentId":"LaunchRequest","platform":"stentor-platform","channel":"widget","attributes":{"currentUrl":"https://example.com/","isGreeting":true}},"sender":{"deviceId":"Widget","userId":"a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d","displayName":"Visitor","isAdmin":false,"urlAttributes":{"path":["",""]}},"sessionId":"stentor-widget-session-f9e8d7c6-b5a4-4321-9876-543210fedcba","timeMs":1234567893000}
```

## Related Documentation

- [AWS API Gateway WebSocket](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html) - For AWS setup
- [Test Script](/docs/development/scripts/sockets-router-tester)