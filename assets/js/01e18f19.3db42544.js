"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[6600],{5222:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var i=r(5893),t=r(1151),s=r(3692);const o={title:"Deploying on Amazon Web Services",sidebar_label:"Run on AWS"},a=void 0,c={id:"infrastructure/infrastructure-aws",title:"Deploying on Amazon Web Services",description:"Amazon Web Services (AWS) provides a robust set of services and AI/ML suite you can run your virtual agent on.",source:"@site/docs/infrastructure/infrastructure-aws.mdx",sourceDirName:"infrastructure",slug:"/infrastructure/infrastructure-aws",permalink:"/docs/infrastructure/infrastructure-aws",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Deploying on Amazon Web Services",sidebar_label:"Run on AWS"},sidebar:"docs",previous:{title:"Architecture",permalink:"/docs/infrastructure/infrastructure-architecture"},next:{title:"Channels",permalink:"/docs/channels/"}},l={},u=[{value:"Quick Links",id:"quick-links",level:3},{value:"Architecture",id:"architecture",level:2},{value:"AWS Marketplace",id:"aws-marketplace",level:2},{value:"Securing your Application",id:"securing-your-application",level:2},{value:"Deploying to AWS",id:"deploying-to-aws",level:2},{value:"Provisioning Lambda",id:"provisioning-lambda",level:3},{value:"Deployed Resources",id:"deployed-resources",level:3},{value:"Additional Resources",id:"additional-resources",level:2}];function d(e){const n={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Amazon Web Services (AWS) provides a robust set of services and AI/ML suite you can run your virtual agent on."}),"\n",(0,i.jsx)(n.h3,{id:"quick-links",children:"Quick Links"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(s.Z,{to:"/docs/infrastructure/aws/usage-instructions",children:"AWS Usage Instructions"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(s.Z,{to:"/docs/infrastructure/aws/free-trial",children:"Free Trial on AWS"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(s.Z,{to:"/docs/infrastructure/aws/description-of-services",children:"Deployed Services"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(s.Z,{to:"/docs/infrastructure/aws/iam-roles",children:"Deployed IAM Roles"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"architecture",src:r(3545).Z+"",width:"1539",height:"745"})})}),"\n",(0,i.jsx)(n.p,{children:"OC Studio leverages an architecture where the runtime environment is controlled by the customer. While this architecture doesn't let us take full advantage of typical SaaS features, we believe the pros outweigh the cons."}),"\n",(0,i.jsx)(n.p,{children:"Advantages:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Security"})," You are in 100% control of your runtime environment and subsequently your customer's data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Access"})," With full control, you also get access to the underlying services leveraged, like Lex & Kendra, which allow you to directly take advantage of their additional features"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Independence"})," We can guarantee zero-vendor lock-in. If you cancel your subscription to OC Studio, your application will continue running."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"aws-marketplace",children:"AWS Marketplace"}),"\n",(0,i.jsxs)(n.p,{children:["Existing AWS customers can easily pay and deploy their application & infrastructure through our ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/marketplace/pp/B08N39KTFR",children:"AWS Marketplace listing"})," for Conversational Self Service for Contact Center Intelligence."]}),"\n",(0,i.jsxs)(n.p,{children:["You must have an existing AWS account and we ",(0,i.jsx)(n.strong,{children:"highly recommend"})," setting up a new account under an ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/organizations/",children:"AWS Organization"}),". This will isolate the installation from other resources you manage."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"aws/free-trial",children:"Free Trial on AWS"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"securing-your-application",children:"Securing your Application"}),"\n",(0,i.jsx)(n.p,{children:"Before you can deploy your application to an AWS account, you must setup a new secret in AWS Secrets Manager. The secret will ensure you have the authority to deploy the application and secures content retrieval and event posting at runtime."}),"\n",(0,i.jsxs)(n.p,{children:["You can find detailed step by step instructions ",(0,i.jsx)(n.a,{href:"aws/secrets-manager-setup",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"deploying-to-aws",children:"Deploying to AWS"}),"\n",(0,i.jsx)(n.p,{children:"The deployment to your AWS account leverages a CloudFormation script with a custom provisioning lambda."}),"\n",(0,i.jsx)(n.h3,{id:"provisioning-lambda",children:"Provisioning Lambda"}),"\n",(0,i.jsx)(n.p,{children:"One of the first tasks for the CloudFormation script is to deploy a lambda that will help coordinate deployment. It will move crawled web pages to your account and setup a Kendra Data Source, help establish the connection between Kendra and Lex, and kick off an initial build of your Lex bot for immediate use."}),"\n",(0,i.jsx)(n.h3,{id:"deployed-resources",children:"Deployed Resources"}),"\n",(0,i.jsx)(n.p,{children:"The CLoudFormation script also deploys the necessary compute, storage, AI/ML, and security resources for your application."}),"\n",(0,i.jsxs)(n.p,{children:["You can find a detailed description of all the services ",(0,i.jsx)(n.a,{href:"aws/description-of-services",children:"here"})]}),"\n",(0,i.jsx)(n.p,{children:"The deployment will take between 15 to 40 minutes, with setting up Kendra typically taking the longest and has the most variance. Another variable contributing to the deployment is the amount of web pages crawled."}),"\n",(0,i.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"aws/secrets-manager-setup",children:"Secrets Manager Setup"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"aws/description-of-services",children:"Deployment: Services"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"aws/iam-roles",children:"Deployment: IAM Roles"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"aws/common-errors-in-stack-deployment",children:"Common Errors in AWS Deployment"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"aws/verify-deployment",children:"Verifying your AWS deployment"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"aws/iam-policy-for-deployment",children:"IAM Policy for Deployment"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3545:function(e,n,r){n.Z=r.p+"assets/images/aws-architecture-598893085311258be52f7f2b2dc9fbc5.svg"},1151:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var i=r(7294);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);