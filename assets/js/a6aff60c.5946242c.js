"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[328],{5514:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"infrastructure/aws/iam-roles","title":"IAM Roles Created during AWS Deployment","description":"During the deployment of your infrastructure, Cloudformation will create the following IAM Roles","source":"@site/docs/infrastructure/aws/iam-roles.md","sourceDirName":"infrastructure/aws","slug":"/infrastructure/aws/iam-roles","permalink":"/docs/infrastructure/aws/iam-roles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"IAM Roles Created during AWS Deployment"},"sidebar":"aws","previous":{"title":"Description of AWS Services","permalink":"/docs/infrastructure/aws/description-of-services"},"next":{"title":"Common Errors in Stack Deployment","permalink":"/docs/infrastructure/aws/common-errors-in-stack-deployment"}}');var t=r(4848),n=r(8453);const i={title:"IAM Roles Created during AWS Deployment"},d=void 0,s={},l=[{value:"{app-id}-StudioLambdaRole-{random}",id:"app-id-studiolambdarole-random",level:2},{value:"{app-id}-ProvisioningLambdaRole-{random}",id:"app-id-provisioninglambdarole-random",level:2},{value:"{app-id}-PreCheckLambdaRole-{random}",id:"app-id-prechecklambdarole-random",level:2},{value:"{app-id}-scalingRole-{random}",id:"app-id-scalingrole-random",level:2},{value:"{app-id}-XappAIKendraIndexRole-{random}",id:"app-id-xappaikendraindexrole-random",level:2}];function c(e){const a={h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"During the deployment of your infrastructure, Cloudformation will create the following IAM Roles"}),"\n",(0,t.jsx)(a.h2,{id:"app-id-studiolambdarole-random",children:"{app-id}-StudioLambdaRole-{random}"}),"\n",(0,t.jsx)(a.p,{children:"The role used by the runtime fulfillment Lambda to read and write to the database, create logs, and access the secret in Secrets Manager."}),"\n",(0,t.jsx)(a.h2,{id:"app-id-provisioninglambdarole-random",children:"{app-id}-ProvisioningLambdaRole-{random}"}),"\n",(0,t.jsx)(a.p,{children:"Provides the provisioning Lambda ability to create a log group that will be used by the Lambda and access to the secret within Secrets Manager that authorizes the deployment."}),"\n",(0,t.jsx)(a.h2,{id:"app-id-prechecklambdarole-random",children:"{app-id}-PreCheckLambdaRole-{random}"}),"\n",(0,t.jsx)(a.p,{children:"Used by the pre-check lambda that does quick verification, making sure you have added a secret to the SecretsManager and are authorized."}),"\n",(0,t.jsx)(a.p,{children:"It has access to the OCStudio secret in SecretsManager and can put logs to the CloudWatch log group. It can also create the log group if it doesn't exist yet."}),"\n",(0,t.jsx)(a.h2,{id:"app-id-scalingrole-random",children:"{app-id}-scalingRole-{random}"}),"\n",(0,t.jsx)(a.p,{children:"Used to set auto scaling on the DynamoDB based user storage."}),"\n",(0,t.jsx)(a.h2,{id:"app-id-xappaikendraindexrole-random",children:"{app-id}-XappAIKendraIndexRole-{random}"}),"\n",(0,t.jsx)(a.p,{children:"Provides the ability for Kendra to create logs in CloudWatch for debugging and provides the ability to for Kendra to access the contents of an S3 bucket for use as a data source in Kendra."})]})}function p(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,a,r)=>{r.d(a,{R:()=>i,x:()=>d});var o=r(6540);const t={},n=o.createContext(t);function i(e){const a=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(n.Provider,{value:a},e.children)}}}]);