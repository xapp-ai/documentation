"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[1313],{7248:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"development/posttext-lambda","title":"PostText Lambda","description":"The PostText Lambda is named after the Amazon Lex API PostText which is used to turn a natural language query into an intent and slots.","source":"@site/docs/development/posttext-lambda.md","sourceDirName":"development","slug":"/development/posttext-lambda","permalink":"/docs/development/posttext-lambda","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"PostText Lambda"}}');var o=t(4848),a=t(8453);const r={title:"PostText Lambda"},i=void 0,l={},c=[{value:"Source Code",id:"source-code",level:3},{value:"Common Errors in PostText",id:"common-errors-in-posttext",level:3}];function u(e){const n={a:"a",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The PostText Lambda is named after the Amazon Lex API ",(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html",children:"PostText"})," which is used to turn a natural language query into an intent and slots."]}),"\n",(0,o.jsx)(n.p,{children:"This Lambda sits behind APIGateway and will receive messages from the chat widget and will call the PostText API if a natural language query needs to be translated to an intent or pass it straight to the runtime lambda."}),"\n",(0,o.jsx)(n.p,{children:"When it calls the PostText API, it is Lex that then calls the App Lambda and the response is returned in the response to the PostText API call."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"posttext-lambda",src:t(3295).A+"",width:"578",height:"367"})}),"\n",(0,o.jsx)(n.h3,{id:"source-code",children:"Source Code"}),"\n",(0,o.jsxs)(n.p,{children:["You can setup your own PostText Lambda as part of your project and deployment process.  Alternatively you can upload to your own Lambda with the archive ",(0,o.jsx)(n.a,{href:"https://xapp-ai-deployment.s3.amazonaws.com/posttext.zip",children:"here"}),", this same archive is used by some of our deployment scripts."]}),"\n",(0,o.jsxs)(n.p,{children:["Make sure you add the following dependencies to your ",(0,o.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'  "dependencies": {\n    "@xapp/stentor-lex-lib": "1.45.32",\n    "stentor-constants": "1.57.95",\n    "stentor-interaction-model": "1.57.95",\n    "stentor-locales": "1.57.95",\n    "stentor-models": "1.57.95",\n    "stentor-request": "1.57.95",\n    "stentor-utils": "1.57.95"\n  }\n'})}),"\n",(0,o.jsx)(n.p,{children:"Then for the handler of the Lambda:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'import {\n    TranslateLexPostTextResponse,\n    TranslateLexV2PostTextResponse,\n    TranslateToLexPostTextRequest,\n    TranslateToLexV2PostTextRequest\n} from "@xapp/stentor-lex-lib";\nimport { Lambda, LexRuntime, LexRuntimeV2 } from "aws-sdk";\nimport { ActiveContext, Request, Response } from "stentor-models";\n\n/**\n * A common Context object for lambdas.\n */\nexport type AWSApiGatewayLambdaContext = LambdaContext;\n\nexport interface LambdaContext {\n    callbackWaitsForEmptyEventLoop?: boolean;\n    logGroupName?: string;\n    logStreamName?: string;\n    functionName?: string;\n    memoryLimitInMB?: string;\n    functionVersion?: number;\n    awsRequestId?: string;\n    invokedFunctionArn?: string;\n}\n\nexport const LEX_BOT = process.env.LEX_BOT;\nexport const LEX_BOT_ID = process.env.LEX_BOT_ID;\nexport const LEX_BOT_LOCALE = process.env.LEX_BOT_LOCALE;\nexport const LEX_BOT_VERSION = process.env.LEX_BOT_VERSION;\nexport const LEX_BOT_ALIAS = process.env.LEX_BOT_ALIAS;\nexport const LEX_BOT_ALIAS_ID = process.env.LEX_BOT_ALIAS_ID;\n\nexport const OCSTUDIO_ARN = process.env.OC_STUDIO_ARN;\nconst LambdaArnSplit = OCSTUDIO_ARN.split(":");\nconst OCSTUDIO_NAME = LambdaArnSplit[LambdaArnSplit.length - 1];\n\nexport type BaseEvent = Request;\n\nexport interface APIGatewayEvent {\n    body?: string;\n}\n\nexport type Event = BaseEvent | APIGatewayEvent;\n\nconst lambda = new Lambda();\n\nconst lex = new LexRuntime();\nconst requestTranslator = new TranslateToLexPostTextRequest();\nconst responseTranslator = new TranslateLexPostTextResponse();\n\nconst lexV2 = new LexRuntimeV2();\nconst requestV2Translator = new TranslateToLexV2PostTextRequest();\nconst responseV2Translator = new TranslateLexV2PostTextResponse();\n\nexport async function handler(event: any, context: LambdaContext) {\n    const translatorRequest = getTranslatorRequest(event);\n\n    let sessionId;\n    let userId;\n\n    // We only want this request to be handled by PostText if there\'s an inputText.\n    // Otherwise the Studio handler will take care of the request.\n    if (LEX_BOT_VERSION === "v2") {\n        const lexV2Request = requestV2Translator.translate(translatorRequest);\n\n        // We will need a session id in Lex V2\n        sessionId = lexV2Request.sessionId;\n\n        if (lexV2Request.text) {\n            return lexV2.recognizeText({\n                ...lexV2Request,\n                botId: LEX_BOT_ID,\n                botAliasId: LEX_BOT_ALIAS_ID,\n                localeId: LEX_BOT_LOCALE\n            }).promise()\n                .then((lexResponse: any) => responseV2Translator.translate(lexResponse))\n                .then((response: any) => getHandlerReturnValue(event, response));\n        }\n    } else {\n        const lexRequest = requestTranslator.translate(translatorRequest);\n\n        userId = lexRequest.userId;\n\n        if (lexRequest.inputText) {\n            return lex.postText({\n                botName: LEX_BOT,\n                botAlias:  LEX_BOT_ALIAS || "latest",\n                userId: "TestUserId",\n                ...lexRequest\n            }).promise()\n                .then((lexResponse: any) => responseTranslator.translate(lexResponse))\n                .then((response: any) => getHandlerReturnValue(event, response));\n        }\n    }\n\n    let response: Response;\n\n    await lambda.invoke({\n        FunctionName: OCSTUDIO_NAME,\n        Payload: JSON.stringify(event)\n    }).promise().then((result: any) => {\n        response = JSON.parse(JSON.parse(result.Payload).body) as Response; // Stentor response\n    });\n\n    if (response.context) {\n        if (LEX_BOT_VERSION === "v2") {\n            const putSessionV2Request: LexRuntimeV2.PutSessionRequest = {\n                botId: LEX_BOT_ID,\n                botAliasId: LEX_BOT_ALIAS_ID,\n                localeId: LEX_BOT_LOCALE,\n                sessionId,\n                sessionState: {\n                    activeContexts: convertV2ActiveContext(response.context.active)\n                }\n            };\n\n            await lexV2.putSession(putSessionV2Request).promise();\n        } else {\n            // In Lex V1 the name/alias/user identifies the conversation aka. session\n            const putSessionRequest: LexRuntime.PutSessionRequest = {\n                botName: LEX_BOT,\n                botAlias:  LEX_BOT_ALIAS || "latest",\n                userId: userId || "TestUserId",\n                activeContexts: convertActiveContext(response.context.active)\n            };\n\n            await lex.putSession(putSessionRequest).promise();\n        }\n    }\n\n    return getHandlerReturnValue(event, response);\n}\n\nfunction getHandlerReturnValue(event: Event, response: object): object {\n    if (isApiGatewayEvent(event)) {\n        return {\n            statusCode: 200,\n            body: JSON.stringify(response),\n            headers: {\n                "Content-Type": "application/json",\n                "Access-Control-Allow-Origin": "*"\n            }\n        };\n    }\n    return response;\n}\n\nfunction getTranslatorRequest(event: Event): Request {\n    if (isApiGatewayEvent(event)) {\n        try {\n            return JSON.parse(event.body);\n        } catch (e) {\n            console.error("Could not parse body", event.body, e);\n            throw new Error("Invalid API Gateway input body.");\n        }\n    }\n    return event;\n}\n\nfunction isApiGatewayEvent(event: Event): event is APIGatewayEvent  {\n    return !!(event as APIGatewayEvent).body;\n}\n\nfunction convertActiveContext(active: ActiveContext[]): LexRuntime.ActiveContext[] {\n    if (!active || active.length === 0) return [];\n\n    return active.map((value, index) => {\n        return {\n            name: value.name,\n            timeToLive: value.timeToLive,\n            parameters: value.parameters || {}\n        };\n    });\n}\n\nfunction convertV2ActiveContext(active: ActiveContext[]): LexRuntimeV2.ActiveContext[] {\n    if (!active || active.length === 0) return [];\n\n    return active.map((value, index) => {\n        return {\n            name: value.name,\n            timeToLive: {\n                timeToLiveInSeconds: value.timeToLive?.timeToLiveInSeconds,\n                turnsToLive: value.timeToLive?.turnsToLive\n            },\n            contextAttributes: value.parameters || {}\n        };\n    });\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"common-errors-in-posttext",children:"Common Errors in PostText"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Post Text V2 Response does not include a content or contentType. Can not translate.\n"})}),"\n",(0,o.jsx)(n.p,{children:"When using Lex V2, this occurs when your runtime did not return any responses.  You have an unresolved intent at some point in your application."})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},3295:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/posttext-lambda-c16fc35a58ed251a52f1d0e51ada924c.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(6540);const o={},a=s.createContext(o);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);