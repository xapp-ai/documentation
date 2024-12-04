"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[1497],{8601:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"dialog-manager/overview","title":"Dialog Manager","description":"What is a dialog manager?","source":"@site/docs/dialog-manager/overview.mdx","sourceDirName":"dialog-manager","slug":"/dialog-manager/overview","permalink":"/docs/dialog-manager/overview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Dialog Manager"},"sidebar":"docs","previous":{"title":"Content","permalink":"/docs/basics/basics-content"},"next":{"title":"Conditions","permalink":"/docs/dialog-manager/conditions"}}');var i=t(4848),r=t(8453),o=t(3074);const s={title:"Dialog Manager"},l=void 0,h={},d=[{value:"What is a dialog manager?",id:"what-is-a-dialog-manager",level:2},{value:"OC Studio&#39;s Dialog Manager",id:"oc-studios-dialog-manager",level:2},{value:"Runtime",id:"runtime",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const n={a:"a",h2:"h2",img:"img",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"what-is-a-dialog-manager",children:"What is a dialog manager?"}),"\n",(0,i.jsx)(n.p,{children:"A dialog manager is essentially a custom tailored state machine for handling conversations. It takes input from users in the form on an intent and then depending on the current state, defined logic, and historical and current context will then determine the correct response"}),"\n",(0,i.jsx)(n.h2,{id:"oc-studios-dialog-manager",children:"OC Studio's Dialog Manager"}),"\n",(0,i.jsx)(n.p,{children:"OC Studio leverages the open source project stentor for it's runtime that has a dialog manager built-in."}),"\n",(0,i.jsx)(n.p,{children:"The handlers, which define a state for the dialog manger, contain the logic and contain for handling requests and returning responses. The user can be passed around to different handlers through the user of redirects and forwards. Intents and handlers are decoupled meaning they can be used independently from each other with a focus on the ability to reuse intents based on different contexts."}),"\n",(0,i.jsx)(n.h2,{id:"runtime",children:"Runtime"}),"\n",(0,i.jsx)(n.p,{children:"For each incoming request, while taking into account the context, the dialog manager performs the following workflow to determine which handler will receive the request."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"dialog-manager",src:t(4032).A+"",width:"1415",height:"1302"})}),"\n",(0,i.jsx)(n.p,{children:"First, the dialog manager checks the user storage for an existing handler, which will exist for returning users. If it exists it will check to see if the handler can handle the incoming request in some way. If it doesn't exist then it will request the handler from the content management system (CMS). If the CMS does not have a handler defined for the request, it will then request the required global Input Unknown handler to help the user return to a defined flow."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Let's try to simplify this by reviewing a couple of examples and personifying the dialog manager (green) and handler (grey)."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Middle of a flow, like product search"})}),"\n",(0,i.jsx)(o.q,{owner:"mine",hasTail:!0,children:(0,i.jsx)(n.p,{children:"Handler, we have an incoming request, it has product information, can you handle it?"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(o.q,{owner:"others",hasTail:!0,children:(0,i.jsx)(n.p,{children:"Let me check... sure looks like I can handle it."})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(o.q,{owner:"mine",hasTail:!0,children:(0,i.jsx)(n.p,{children:"Ok, here is the request, handle it."})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(o.q,{owner:"others",hasTail:!0,children:(0,i.jsx)(n.p,{children:'Thanks, you should respond with this: "I can help you find that! What\'s your zip code?"'})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(o.q,{owner:"mine",hasTail:!0,children:(0,i.jsx)(n.p,{children:"Will do."})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Middle of a flow, unknown or unexpected input"})}),"\n",(0,i.jsx)(o.q,{owner:"mine",hasTail:!0,children:(0,i.jsx)(n.p,{children:"Handler, we have another incoming request, this looks like a request for a type of drink, can you handle it?"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(o.q,{owner:"others",hasTail:!0,children:(0,i.jsx)(n.p,{children:"I'm the password reset handler, so definately not."})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(o.q,{owner:"mine",hasTail:!0,children:(0,i.jsx)(n.p,{children:"No problem, let me see if there is something in the CMS that can take it.  Hold on a second.\n...\nOk, CMS had no idea.  How about unknown inputs, can you handle that?"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(o.q,{owner:"others",hasTail:!0,children:(0,i.jsxs)(n.p,{children:['I can actually!  Respond with this: "I might not have heard you correctly, what is your email? It should look something like ',(0,i.jsx)(n.a,{href:"mailto:email@domain.com",children:"email@domain.com"}),'"']})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(o.q,{owner:"mine",hasTail:!0,children:(0,i.jsx)(n.p,{children:"Passing it on."})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"In the above, the handler could not handle the incoming request so the dialog manager then attempted to see if the CMS had anything for it.  If it did, the handler would be retrieved and used however in the above case it did not.  The dialog manager then checked the handler again to see if it had a response for an unexpected input, which it did.  It is useful to define specific responses for this situation in a flow to help the user get back on track."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},3074:(e,n,t)=>{t.d(n,{q:()=>r});var a=t(6540);function i(e){return"others"===e?"m 80 0 v 240 h -60 c 40 -40 60 -160 60 -240":"m 0 0 v 240 h 60 c -40 -40 -60 -160 -60 -240"}var r=function(e){return a.createElement("div",{className:"chat-text-bubble "+("mine"===e.owner?"chat-text-bubble--mine":"chat-text-bubble--others")},e.hasTail&&(n=e.owner,a.createElement("svg",{className:"chat-text-bubble__tail",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 80 240"},a.createElement("path",{d:i(n),fill:"currentColor"}))),e.children);var n}},4032:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/dialog-manager-d0a7732ca08e5c81a30a5192c272b7fe.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(6540);const i={},r=a.createContext(i);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);