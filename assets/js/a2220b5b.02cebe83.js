"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[6045],{5319:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"channels/channel-lex","title":"AWS Lex (V2) Channel","description":"Overview","source":"@site/docs/channels/channel-lex.md","sourceDirName":"channels","slug":"/channels/aws-lex","permalink":"/docs/channels/aws-lex","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"AWS Lex (V2) Channel","sidebar_label":"AWS Lex (V2) Channel","slug":"/channels/aws-lex"},"sidebar":"docs","previous":{"title":"Channels","permalink":"/docs/channels/"},"next":{"title":"Chat Widget","permalink":"/docs/channels/channel-chat-widget"}}');var i=l(4848),a=l(8453);const s={title:"AWS Lex (V2) Channel",sidebar_label:"AWS Lex (V2) Channel",slug:"/channels/aws-lex"},o=void 0,r={},c=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Create a Lex V2 Bot (optional)",id:"create-a-lex-v2-bot-optional",level:3},{value:"Create Lex V2 Channel",id:"create-lex-v2-channel",level:3},{value:"Create IAM Policy for Studio Management",id:"create-iam-policy-for-studio-management",level:3},{value:"Create an IAM Role for Studio Management",id:"create-an-iam-role-for-studio-management",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Bot Name",id:"bot-name",level:3},{value:"PostText Lex URL",id:"posttext-lex-url",level:3},{value:"Fulfillment Lambda ARN",id:"fulfillment-lambda-arn",level:3},{value:"Management Role",id:"management-role",level:3},{value:"Management Role External ID",id:"management-role-external-id",level:3},{value:"Installation",id:"installation",level:2},{value:"Use as an NLU",id:"use-as-an-nlu",level:3},{value:"Use as a Channel",id:"use-as-a-channel",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"The AWS Lex channel provides you two options for integration; either with fulfillment where all requests first go through Lex or as a pure NLU without fulfillment defined in Lex and instead Lex is called from within Stentor."}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["AWS Account and user with appropriate permissions to:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"To create a Lex Bot"}),"\n",(0,i.jsx)(n.li,{children:"To create IAM Roles"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:'This is a new channel currently in beta and is subject to change.  You will need to enable it in your app\'s settings to access it on the "Add Channel" dialog.'})}),"\n",(0,i.jsx)(n.h3,{id:"create-a-lex-v2-bot-optional",children:"Create a Lex V2 Bot (optional)"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In your AWS console, create a Lex V2 bot","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://us-east-1.console.aws.amazon.com/lexv2/home?region=us-east-1#createBot",children:"Create a bot in us-east-1"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:'Select "Create a blank bot"'}),"\n",(0,i.jsxs)(n.li,{children:["Add a name, we recommend the appId of your application in Studio","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/development/development-faqs#how-do-i-find-my-application-id",children:"How do you find your application ID?"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:'Select "Create a role with basic Amazon Lex Permissions"'}),"\n",(0,i.jsxs)(n.li,{children:["Take note of the ID of your newly created bot","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You will add it to the policy we create below"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Delete the first intent that is created for you automatically."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"create-lex-v2-channel",children:"Create Lex V2 Channel"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"In Studio within your application, select Publish --\x3e Channels"}),"\n",(0,i.jsx)(n.li,{children:"Click the + button in the Channels header"}),"\n",(0,i.jsx)(n.li,{children:'Select "Amazon Lex V2"'}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Note: If you don't see this option, you may need to first enable this channel in your app's settings"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"create-iam-policy-for-studio-management",children:"Create IAM Policy for Studio Management"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create IAM Policy"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click JSON tab and copy paste the following after you made the following replacements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"region"})," - Only ",(0,i.jsx)(n.code,{children:"us-east-1"})," is supported at this time."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"account"})," - Your AWS account number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bot-id"})," - The ID of the bot you made earlier"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bot-alias"})," - Only ",(0,i.jsx)(n.code,{children:"TSTALIASID"})," is supported at this time, this is the default alias for the latest version."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name-of-management-role"})," - Decide now what you management role will be, we reccomend ",(0,i.jsx)(n.code,{children:"studio-{appId}-lex-management"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"NOTE"})," You will use this in the next step, it will need to match exactly"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": [\n                "iam:PassRole"\n            ],\n            "Resource": "arn:aws:iam::<account>:role/<name-of-management-role>"\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "lex:Build*",\n                "lex:Create*",\n                "lex:Delete*",\n                "lex:Describe*",\n                "lex:Get*",\n                "lex:List*",\n                "lex:Put*",\n                "lex:Recognize*",\n                "lex:Search*",\n                "lex:Start*",\n                "lex:Stop*",\n                "lex:Tag*",\n                "lex:Update*",\n                "lex:Untag*"\n            ],\n            "Resource": [\n                "arn:aws:lex:<region>:<account>:bot/<bot-id>",\n                "arn:aws:lex:<region>:<account>:bot-alias/<bot-id>/<bot-alias-id>"\n            ]\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "lex:CreateUploadUrl",\n                "lex:ListBuiltInSlotTypes",\n                "lex:ListBots",\n                "lex:ListBuiltInIntents",\n                "lex:ListImports",\n                "lex:ListExports"\n            ],\n            "Resource": "*"\n        }\n    ]\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add optional tags for your own tracking"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Name and save the policy."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For the policy name we recommend ",(0,i.jsx)(n.code,{children:"studio-{appId}-lex-management-policy"})," or similar."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"create-an-iam-role-for-studio-management",children:"Create an IAM Role for Studio Management"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create IAM Role"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Select AWS account"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select 'Another AWS account', select 'Another AWS account' radio button and enter account ID: ",(0,i.jsx)(n.code,{children:"204595997473"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If you are running a single tenant version, this will be the account number where your Studio instance is deployed.  Keep the default value."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check 'Require external ID', paste in the external ID from your newly created Lex channel under setting \"Management Role External ID\""}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"external role",src:l(6944).A+"",width:"1265",height:"865"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Back in the AWS Console, click "Next"'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"new role",src:l(7887).A+"",width:"1436",height:"981"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Search for you policy you created above and select it, click "Next"'}),"\n",(0,i.jsxs)(n.li,{children:["Use the exact same role name you added to the policy in the previous step","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For role name we recommend ",(0,i.jsx)(n.code,{children:"studio-{appId}-lex-management"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["When you create it, click ",(0,i.jsx)(n.code,{children:"View Role"})," in the green banner at the top."]}),"\n",(0,i.jsx)(n.li,{children:'Copy the role\'s ARN and paste it to the channel in Studio that you created earlier under "Management Role"'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.h3,{id:"bot-name",children:"Bot Name"}),"\n",(0,i.jsx)(n.p,{children:"The name of the bot you will be managing with Studio.  This is not the ID but is the name."}),"\n",(0,i.jsx)(n.h3,{id:"posttext-lex-url",children:"PostText Lex URL"}),"\n",(0,i.jsxs)(n.p,{children:["The PostFix URL is generated for you automatically when you leverage the provided CloudFormation script for deployment. It is a lambda exposed through API Gateway that calls your Lex bot's ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html",children:"PostText API"}),". The PostText is part of the Lex Runtime Service that receives user input and returns the bot's response. The PostText URL takes Stentor requests and then returns Stentor responses."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Read More"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/development/posttext-lambda",children:"PostText Lambda"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"fulfillment-lambda-arn",children:"Fulfillment Lambda ARN"}),"\n",(0,i.jsx)(n.p,{children:"Optional, if you provide this it will set it as the fulfillment ARN for each intent.  It will then be called whenever an intent is resolved.  This is required when you use Lex as a channel."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Read More"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/channels/aws-lex#use-as-a-channel",children:"Using Lex as a Channel"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/development/nlu#types-of-nlu",children:"Types of NLU"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"management-role",children:"Management Role"}),"\n",(0,i.jsx)(n.p,{children:"The role, as described above in configuration, this is the ARN for the IAM Role you setup to allow management by Studio."}),"\n",(0,i.jsx)(n.h3,{id:"management-role-external-id",children:"Management Role External ID"}),"\n",(0,i.jsx)(n.p,{children:"Readonly, use this when setting up your management role.  It helps further secure the connection betwen AWS accounts."}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["This is only required if you have your own ",(0,i.jsx)(n.a,{href:"/docs/development/custom-application",children:"runtime environment"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"You can use your new Lex V2 bot as a stand alone NLU, use it as a channel or both methods at the same time.  When you use it as a channel, you must provide a fulfillment ARN to the channel.  This lets Lex know what Lambda to call for responses."}),"\n",(0,i.jsx)(n.h3,{id:"use-as-an-nlu",children:"Use as an NLU"}),"\n",(0,i.jsxs)(n.p,{children:["You can use Lex as a stand-alone NLU for channels that require one, such as the ",(0,i.jsx)(n.a,{href:"/docs/channels/channel-chat-widget",children:"chat widget channel"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Add the Lex service to your project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm i @xapp/stentor-service-lex --production\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then within your app:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'import { LexServiceV2 } from "@xapp/stentor-service-lex";\n\n// ... a few lines of code later\n\nconst nlu = new LexServiceV2({\n    botId: process.env.LEX_BOT_ID,\n    botAliasId: process.env.LEX_BOT_ALIAS_ID\n});\n\n// ... a few more lines of code later\n\n        .withChannels([\n            Stentor(nlu)\n        ])\n'})}),"\n",(0,i.jsx)(n.h3,{id:"use-as-a-channel",children:"Use as a Channel"}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsx)(n.p,{children:"If you want to leverage Lex V2 as a channel, you must provide the Lambda ARN where the following code resides."})}),"\n",(0,i.jsx)(n.p,{children:"Add the channel to your project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm i @xapp/stentor-lex-v2 --production\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then import and integrate:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'import { LexV2Channel } from "@xapp/stentor-lex-v2";\n\n// ... a few lines of code later\n\n    const assistant = new Assistant()\n\n        .withUserStorage(new DynamoUserStorage())\n        .withHandlers({\n            // Add pre-built handlers or make custom ones!\n            ContactCaptureHandler: ContactCaptureHandler,\n            QuestionAnsweringHandler: QuestionAnsweringHandler\n        })\n        .withChannels([\n            // ADD LexV2Channel here!\n            LexV2Channel(),\n            Stentor(nlu)\n        ])\n        .lambda();\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7887:(e,n,l)=>{l.d(n,{A:()=>t});const t=l.p+"assets/images/aws-iam-role-lex-v2-management-9756aeeddfd02b4cd0d3995e9aeb4405.png"},6944:(e,n,l)=>{l.d(n,{A:()=>t});const t=l.p+"assets/images/lex-v2-management-external-id-9f60af350d559b9952bd7847f607aa64.png"},8453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>o});var t=l(6540);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);