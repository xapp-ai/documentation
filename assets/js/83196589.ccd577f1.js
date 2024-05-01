"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[8024],{4857:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var o=t(5893),r=t(1151);const a={title:"Verify your AWS Application Deployment"},i=void 0,c={id:"infrastructure/aws/verify-deployment",title:"Verify your AWS Application Deployment",description:"Amazon Kendra",source:"@site/docs/infrastructure/aws/verify-deployment.md",sourceDirName:"infrastructure/aws",slug:"/infrastructure/aws/verify-deployment",permalink:"/docs/infrastructure/aws/verify-deployment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Verify your AWS Application Deployment"},sidebar:"aws",previous:{title:"Common Errors in Stack Deployment",permalink:"/docs/infrastructure/aws/common-errors-in-stack-deployment"},next:{title:"IAM Policy for Stack Deployment",permalink:"/docs/infrastructure/aws/iam-policy-for-deployment"}},s={},u=[{value:"Amazon Kendra",id:"amazon-kendra",level:2},{value:"AWS Lambda",id:"aws-lambda",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"amazon-kendra",children:"Amazon Kendra"}),"\n",(0,o.jsx)(n.p,{children:"A new Kendra index will be created. It will have a data source setup that is pointed at a newly created S3 bucket. You will want to confirm that the data source has synced the documents within the S3 bucket."}),"\n",(0,o.jsx)(n.p,{children:"You can open the Search Console for the new index to test the search."}),"\n",(0,o.jsx)(n.h2,{id:"aws-lambda",children:"AWS Lambda"}),"\n",(0,o.jsx)(n.p,{children:"There will be a new AWS Lambda function on your account."}),"\n",(0,o.jsx)(n.p,{children:"If you want more verbose logging, add the following environment variable to your lambda function:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"STENTOR_LOG_LEVEL=debug\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can configure the following test payload to ensure the lambda is working correctly. This will test connection with OC Studio and that you have the Lex channel configured properly."}),"\n",(0,o.jsx)(n.p,{children:"Test Payload"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "messageVersion": "1.0",\n  "invocationSource": "FulfillmentCodeHook",\n  "userId": "userId",\n  "sessionAttributes": {},\n  "bot": {\n    "name": "Test Bot",\n    "alias": "$LATEST",\n    "version": "$LATEST"\n  },\n  "outputDialogMode": "Text",\n  "currentIntent": {\n    "name": "LaunchRequest",\n    "slots": {},\n    "confirmationStatus": "None"\n  }\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var o=t(7294);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);