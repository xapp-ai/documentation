"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[3460],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9662:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"CSS4CCI on AWS Usage Instructions"},u=void 0,s={unversionedId:"infrastructure/aws/usage-instructions",id:"infrastructure/aws/usage-instructions",title:"CSS4CCI on AWS Usage Instructions",description:"Although not required, have these instructions open while you walk through onboarding, deployment, and initial steps.",source:"@site/docs/infrastructure/aws/usage-instructions.md",sourceDirName:"infrastructure/aws",slug:"/infrastructure/aws/usage-instructions",permalink:"/docs/infrastructure/aws/usage-instructions",draft:!1,editUrl:"https://github.com/xapp-ai/documentation/edit/main/docs/infrastructure/aws/usage-instructions.md",tags:[],version:"current",frontMatter:{title:"CSS4CCI on AWS Usage Instructions"},sidebar:"aws",next:{title:"Free Trial on AWS",permalink:"/docs/infrastructure/aws/free-trial"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Onboarding",id:"onboarding",level:3},{value:"Next Steps",id:"next-steps",level:2}],m={toc:p},d="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Although not required, have these instructions open while you walk through onboarding, deployment, and initial steps.")),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"AWS Account"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You must have console access with access to creating resources & IAM roles"),(0,i.kt)("li",{parentName:"ul"},"We recommend creating a new AWS account within an organization"),(0,i.kt)("li",{parentName:"ul"},"Kendra's free tier can only be used once, either for an account or organization, you may need to create a new independent account to get another trial"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Publicly accessible self-serve knowledge base"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It will be crawled and used as initial training material"),(0,i.kt)("li",{parentName:"ul"},"It helps if the knowledge base is on a unique subdomain or path")))),(0,i.kt)("h3",{id:"onboarding"},"Onboarding"),(0,i.kt)("p",null,"These steps follow along the individual onboarding steps that you go through after you sign up through AWS Marketplace."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Name your application and organization",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can change these later"),(0,i.kt)("li",{parentName:"ul"},"Usage plans are associated with the organization, which allows you to create many applications that share the same resources"))),(0,i.kt)("li",{parentName:"ol"},"Crawl knowledge base",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Provide the URL to your publicly available knowledge base that will be used as initial training material"),(0,i.kt)("li",{parentName:"ul"},"We will begin crawling immediately, the HTML pages crawled will be copied over to your infrastructure after deployment for use within AWS Kendra"))),(0,i.kt)("li",{parentName:"ol"},"Secure your Deployment and Application",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set up the secret in AWS Secrets Manager"),(0,i.kt)("li",{parentName:"ul"},"Detailed instructions can be found ",(0,i.kt)("a",{parentName:"li",href:"secrets-manager-setup"},"here")))),(0,i.kt)("li",{parentName:"ol"},"Deploy your stack",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Leveraging AWS Cloudformation, the application will deploy to your AWS account"),(0,i.kt)("li",{parentName:"ul"},"If you have multiple AWS accounts, make sure you signed in with the same one your earlier linked"),(0,i.kt)("li",{parentName:"ul"},"If any errors occur during deployment, see ",(0,i.kt)("a",{parentName:"li",href:"common-errors-in-stack-deployment"},"common errors")," for possible help.")))),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Verify deployment"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ensure your crawled content is what you expected by asking questions in the AWS Kendra Search Console"),(0,i.kt)("li",{parentName:"ul"},"Talk to your application through the AWS Lex test console"),(0,i.kt)("li",{parentName:"ul"},"More verification steps can be found ",(0,i.kt)("a",{parentName:"li",href:"verify-deployment"},"here")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Setup a Channel"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../channels/slack-through-lex"},"Slack through Lex"))))))}f.isMDXComponent=!0}}]);