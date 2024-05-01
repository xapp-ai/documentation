"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[674],{6834:function(e,t,n){n.r(t),n.d(t,{assets:function(){return a},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(5893),i=n(1151);const s={title:"Runtime Environment Variables"},o=void 0,l={id:"development/runtime-environment-variables",title:"Runtime Environment Variables",description:"Environment variables provide a way to configure the runtime without needing to redeploy.",source:"@site/docs/development/runtime-environment-variables.md",sourceDirName:"development",slug:"/development/runtime-environment-variables",permalink:"/docs/development/runtime-environment-variables",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Runtime Environment Variables"},sidebar:"docs",previous:{title:"Running Locally",permalink:"/docs/development/running-locally"},next:{title:"CLI",permalink:"/docs/development/cli"}},a={},c=[{value:"Using AWS Secrets Manager",id:"using-aws-secrets-manager",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Environment variables provide a way to configure the runtime without needing to redeploy."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variable"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Values"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"USER_STORAGE_TABLE"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Name of the DynamoDB table"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"String value, name of the DynamoDB table"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"STENTOR_LOG_LEVEL"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Configurable logging"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:'"debug", "info", "warn", "error" (default)'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"STUDIO_TOKEN"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Access token to OC Studio"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"Generated token specific to the APP ID"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"STUDIO_ORG_TOKEN"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Access token to OC Studio, which has access to all the apps within an organization"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"Contact customer support for this token"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"STUDIO_SECRET_NAME"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Optional, name of the secret within AWS Secrets Manager to use"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"The name of the secret, see below for more information"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"STUDIO_APP_ID"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"The application ID within studio"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"String"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"STUDIO_BASE_URL"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Configure the Studio Service to point to another environment"}),(0,r.jsxs)(t.td,{style:{textAlign:"right"},children:['Defaults to "',(0,r.jsx)(t.a,{href:"https://api.xapp.ai",children:"https://api.xapp.ai"}),'"']})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"STENTOR_LOG_PII"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"For development, no redaction of PII (such as phone numbers) will be performed"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:'Defaults to "false"'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"STENTOR_LOG_PII_MASK_PARTIAL"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Similar to STENTOR_LOG_PII, this instead will only do a partial mask of PII"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:'Defaults to "false"'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"STUDIO_MAX_HISTORY"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Max number of items in request history & transcripts to maintain"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"Defaults to 20"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"using-aws-secrets-manager",children:"Using AWS Secrets Manager"}),"\n",(0,r.jsx)(t.p,{children:"AWS Secrets Manager allows you to securely store API credentials, access tokens, and other sensitive information for use at runtime.  This is the recommended approach for production environments as opposed to storing this type of information in environment variables."}),"\n",(0,r.jsxs)(t.p,{children:["If you provide ",(0,r.jsx)(t.code,{children:"STUDIO_SECRET_NAME"})," as an environment variable, then before every request all the key value based information from the provided secret name will be loaded as environment variables to the runtime and can be access from:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"process.env[`NAME_OF_VALUE_IN_SECRET`]\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"Do not print out this information to the console."})}),"\n",(0,r.jsx)(t.admonition,{type:"important",children:(0,r.jsx)(t.p,{children:"Make sure your runtime Lambda has the proper IAM policy to read the secret."})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var r=n(7294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);