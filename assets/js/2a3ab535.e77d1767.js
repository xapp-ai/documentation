"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[3460],{1497:function(e,n,i){i.r(n),i.d(n,{assets:function(){return a},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var t=i(5893),r=i(1151);const s={title:"CSS4CCI on AWS Usage Instructions"},o=void 0,l={id:"infrastructure/aws/usage-instructions",title:"CSS4CCI on AWS Usage Instructions",description:"Although not required, have these instructions open while you walk through onboarding, deployment, and initial steps.",source:"@site/docs/infrastructure/aws/usage-instructions.md",sourceDirName:"infrastructure/aws",slug:"/infrastructure/aws/usage-instructions",permalink:"/docs/infrastructure/aws/usage-instructions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"CSS4CCI on AWS Usage Instructions"},sidebar:"aws",next:{title:"Free Trial on AWS",permalink:"/docs/infrastructure/aws/free-trial"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Onboarding",id:"onboarding",level:3},{value:"Next Steps",id:"next-steps",level:2}];function u(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Although not required, have these instructions open while you walk through onboarding, deployment, and initial steps."})}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AWS Account"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You must have console access with access to creating resources & IAM roles"}),"\n",(0,t.jsx)(n.li,{children:"We recommend creating a new AWS account within an organization"}),"\n",(0,t.jsx)(n.li,{children:"Kendra's free tier can only be used once, either for an account or organization, you may need to create a new independent account to get another trial"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Publicly accessible self-serve knowledge base"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"It will be crawled and used as initial training material"}),"\n",(0,t.jsx)(n.li,{children:"It helps if the knowledge base is on a unique subdomain or path"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"onboarding",children:"Onboarding"}),"\n",(0,t.jsx)(n.p,{children:"These steps follow along the individual onboarding steps that you go through after you sign up through AWS Marketplace."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Name your application and organization","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You can change these later"}),"\n",(0,t.jsx)(n.li,{children:"Usage plans are associated with the organization, which allows you to create many applications that share the same resources"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Crawl knowledge base","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Provide the URL to your publicly available knowledge base that will be used as initial training material"}),"\n",(0,t.jsx)(n.li,{children:"We will begin crawling immediately, the HTML pages crawled will be copied over to your infrastructure after deployment for use within AWS Kendra"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Secure your Deployment and Application","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Set up the secret in AWS Secrets Manager"}),"\n",(0,t.jsxs)(n.li,{children:["Detailed instructions can be found ",(0,t.jsx)(n.a,{href:"secrets-manager-setup",children:"here"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Deploy your stack","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Leveraging AWS Cloudformation, the application will deploy to your AWS account"}),"\n",(0,t.jsx)(n.li,{children:"If you have multiple AWS accounts, make sure you signed in with the same one your earlier linked"}),"\n",(0,t.jsxs)(n.li,{children:["If any errors occur during deployment, see ",(0,t.jsx)(n.a,{href:"common-errors-in-stack-deployment",children:"common errors"})," for possible help."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Verify deployment"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ensure your crawled content is what you expected by asking questions in the AWS Kendra Search Console"}),"\n",(0,t.jsx)(n.li,{children:"Talk to your application through the AWS Lex test console"}),"\n",(0,t.jsxs)(n.li,{children:["More verification steps can be found ",(0,t.jsx)(n.a,{href:"verify-deployment",children:"here"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Setup a Channel"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../../channels/slack-through-lex",children:"Slack through Lex"})}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1151:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return o}});var t=i(7294);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);