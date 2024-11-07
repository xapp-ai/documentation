"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[3165],{2245:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"development/arachne-cli","title":"Web Crawler CLI","description":"There are some instances where you may need to crawl content from your computer.  The same crawler we use in Studio is also available as a Node.js based CLI.","source":"@site/docs/development/arachne-cli.md","sourceDirName":"development","slug":"/development/arachne-cli","permalink":"/docs/development/arachne-cli","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Web Crawler CLI","sidebar_label":"Crawler CLI"},"sidebar":"docs","previous":{"title":"API","permalink":"/docs/development/api"},"next":{"title":"FAQs","permalink":"/docs/development/development-faqs"}}');var a=s(4848),r=s(8453);const o={title:"Web Crawler CLI",sidebar_label:"Crawler CLI"},l=void 0,i={},c=[{value:"Example Usage",id:"example-usage",level:2},{value:"Common Issues",id:"common-issues",level:2},{value:"Running on WSL2",id:"running-on-wsl2",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"There are some instances where you may need to crawl content from your computer.  The same crawler we use in Studio is also available as a Node.js based CLI."}),"\n",(0,a.jsx)(n.p,{children:"We recommend installing it globally:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install -g @xapp/arachne\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,a.jsx)(n.p,{children:"To crawl a site and save the pages to a local ./temp directory"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"arachne crawl https://documentation.xapp.ai/ -d ./temp\n"})}),"\n",(0,a.jsx)(n.p,{children:"To also save markdown and schema.org FAQs"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"arachne  crawl https://documentation.xapp.ai/ -a -t markdown -d ./temp\n"})}),"\n",(0,a.jsx)(n.p,{children:"With a whitelisted patterns file"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"arachne  crawl http://www.thecoffeefaq.com/ -a -t markdown -d ./temp -w ./temp/whitelist.md\n"})}),"\n",(0,a.jsx)(n.h2,{id:"common-issues",children:"Common Issues"}),"\n",(0,a.jsx)(n.h3,{id:"running-on-wsl2",children:"Running on WSL2"}),"\n",(0,a.jsx)(n.p,{children:"If attempting to run on the Windows Subsystem for Linus (WSL 2) and either the crawler fails to start or provides the following error message:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"Unable to start the crawler.\nTimeoutError: Timed out after 5000 ms while trying to connect to the browser! Only Chrome at revision r982053 is guaranteed to work.\n    at Timeout.onTimeout (/home/mycul/.nvm/versions/node/v12.18.4/lib/node_modules/@xapp/arachne-cli/node_modules/puppeteer/lib/cjs/puppeteer/node/BrowserRunner.js:252:20)\n    at listOnTimeout (internal/timers.js:549:17)\n    at processTimers (internal/timers.js:492:7)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["you may need to take a few extra steps to allow the crawler to find Chrome.  Please see the instructions as outlined ",(0,a.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/issues/1837#issuecomment-689006806",children:"here"}),'.  When you start VcXsrv, select "Multiple Windows",  "Start no client", and "Disable access control".']})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(6540);const a={},r=t.createContext(a);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);