"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[8168],{1651:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"content/response-groups","title":"Response Groups","description":"Within a Handler, responses are grouped by which specific requests they respond to.  Then within the response group you can use conditions to help select which response is most appropriate.","source":"@site/docs/content/response-groups.md","sourceDirName":"content","slug":"/content/response-groups","permalink":"/docs/content/response-groups","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Response Groups"},"sidebar":"docs","previous":{"title":"Responses","permalink":"/docs/content/responses"},"next":{"title":"Tags","permalink":"/docs/content/tags"}}');var o=t(4848),r=t(8453);const c={title:"Response Groups"},i=void 0,a={},p=[];function d(e){const s={a:"a",code:"code",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:["Within a Handler, responses are grouped by which specific requests they respond to.  Then within the response group you can use ",(0,o.jsx)(s.a,{href:"/docs/dialog-manager/conditions",children:"conditions"})," to help select which response is most appropriate."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"handler response groups",src:t(1275).A+"",width:"1318",height:"987"})}),"\n",(0,o.jsx)(s.p,{children:"You can see in the above for the second question of a simple conversational quiz that we have two response groups.  They are structured around what the user says and then the possible system responses below it."}),"\n",(0,o.jsx)(s.p,{children:'The first group is when the user first enters the handler and then depending on if the user answered correctly ("wamapoke"), they will get the correct or incorrect response.'}),"\n",(0,o.jsxs)(s.p,{children:["The next group below it is special.  It using a special case key that accepts all requests except ",(0,o.jsx)(s.code,{children:"CancelIntent"}),", ",(0,o.jsx)(s.code,{children:"Peebo"})," and ",(0,o.jsx)(s.code,{children:"StopIntent"}),".  This will catch all requests, except the aforementioned, and return the provided response."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1275:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/handler-response-groups-0e3a645505ee6b519dc17caa5a43ea21.png"},8453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>i});var n=t(6540);const o={},r=n.createContext(o);function c(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);