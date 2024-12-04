"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[5938],{1514:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"integrations/integration-fieldpulse","title":"FieldPulse","description":"3rd party integrations are available starting at the Leads+ tier","source":"@site/help/integrations/integration-fieldpulse.md","sourceDirName":"integrations","slug":"/integrations/integration-fieldpulse","permalink":"/help/integrations/integration-fieldpulse","draft":false,"unlisted":false,"editUrl":"https://github.com/xapp-ai/documentation/edit/main/help/integrations/integration-fieldpulse.md","tags":[],"version":"current","frontMatter":{"title":"FieldPulse","sidebar_label":"FieldPulse"},"sidebar":"help","previous":{"title":"Housecall Pro","permalink":"/help/integrations/integration-housecall-pro"},"next":{"title":"Less Annoying CRM","permalink":"/help/integrations/integration-lacrm"}}');var s=i(4848),o=i(8453);const r={title:"FieldPulse",sidebar_label:"FieldPulse"},l=void 0,a={},d=[{value:"Connect your FieldPulse Account to XAPP AI",id:"connect-your-fieldpulse-account-to-xapp-ai",level:2},{value:"Step 1. Request API Token",id:"step-1-request-api-token",level:3},{value:"Step 2. Setup Integration",id:"step-2-setup-integration",level:3},{value:"Step 3. Verify",id:"step-3-verify",level:3},{value:"How it Works",id:"how-it-works",level:2},{value:"Customer Lead",id:"customer-lead",level:3},{value:"Job Creation",id:"job-creation",level:3}];function c(e){const t={admonition:"admonition",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"important",children:(0,s.jsx)(t.p,{children:"3rd party integrations are available starting at the Leads+ tier"})}),"\n",(0,s.jsx)(t.p,{children:"You can connect your existing FieldPulse account to automatically send leads from chat and form widgets."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"connect-your-fieldpulse-account-to-xapp-ai",children:"Connect your FieldPulse Account to XAPP AI"}),"\n",(0,s.jsx)(t.h3,{id:"step-1-request-api-token",children:"Step 1. Request API Token"}),"\n",(0,s.jsx)(t.p,{children:"An API token is unique to your account and allows us to send leads to your FieldPulse account."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"You must request an API token from FieldPulse either through chat or by phone."})}),"\n",(0,s.jsx)(t.h3,{id:"step-2-setup-integration",children:"Step 2. Setup Integration"}),"\n",(0,s.jsx)(t.p,{children:'In Studio, navigate to the "Integrations" tab.'}),"\n",(0,s.jsx)("div",{className:"centered-image-container",children:(0,s.jsx)("img",{src:"/img/integrations/studio-integrations.png",alt:"Integrations"})}),"\n",(0,s.jsx)(t.p,{children:'Select "FieldPulse" and paste your API key in the text field and click "Connect".'}),"\n",(0,s.jsx)("div",{className:"centered-image-container",children:(0,s.jsx)("img",{src:"/img/integrations/fieldpulse/fieldpulse-setup-api-key.png",alt:"FieldPulse API Key"})}),"\n",(0,s.jsx)(t.h3,{id:"step-3-verify",children:"Step 3. Verify"}),"\n",(0,s.jsx)(t.p,{children:"After the integration is setup, a status light will appear next to the integration. If it is green, then the API key is working."}),"\n",(0,s.jsx)("div",{className:"centered-image-container",children:(0,s.jsx)("img",{src:"/img/integrations/fieldpulse/fieldpulse-status-ok.png",alt:"FieldPulse API Key"})}),"\n",(0,s.jsx)(t.p,{children:"Next, you should verify a lead is sent to FieldPulse. Either from chat or form, complete a lead and confirm it is in FieldPulse."}),"\n",(0,s.jsx)(t.h2,{id:"how-it-works",children:"How it Works"}),"\n",(0,s.jsx)(t.p,{children:"Depending on the channel (chat vs form) and the type of information gathered, either just a customer lead will be created or a customer lead and pending job."}),"\n",(0,s.jsx)(t.h3,{id:"customer-lead",children:"Customer Lead"}),"\n",(0,s.jsx)(t.p,{children:'If only contact information and message is gathered (which is more typical from chat), only a customer lead will be created. You will find it in the "Customers" section.'}),"\n",(0,s.jsx)("div",{className:"centered-image-container",children:(0,s.jsx)("img",{src:"/img/integrations/fieldpulse/fieldpulse-customer-lead.png",alt:"FieldPulse API Key"})}),"\n",(0,s.jsx)(t.p,{children:'You will also see additional information under the "Customer History" section.'}),"\n",(0,s.jsx)("div",{className:"centered-image-container",children:(0,s.jsx)("img",{src:"/img/integrations/fieldpulse/fieldpulse-history-notes.png",alt:"FieldPulse API Key"})}),"\n",(0,s.jsx)(t.h3,{id:"job-creation",children:"Job Creation"}),"\n",(0,s.jsx)(t.p,{children:"If the customer lead also specifies they need some type of service or visit, a job will be created for the customer with a description of the desired job in the title."}),"\n",(0,s.jsx)(t.p,{children:"It will also have a preferred time that will need to be confirmed with the customer."}),"\n",(0,s.jsx)("div",{className:"centered-image-container",children:(0,s.jsx)("img",{src:"/img/integrations/fieldpulse/fieldpulse-job-creation.png",alt:"FieldPulse API Key"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>l});var n=i(6540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);