"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[5368],{1922:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"development/nlu","title":"NLU","description":"The NLU helps translate a user\'s natural language query to something you can use to develop a custom workflow, specifically to an intent and optional slots.  An NLU is a required component for your virtual assistant.","source":"@site/docs/development/nlu.md","sourceDirName":"development","slug":"/development/nlu","permalink":"/docs/development/nlu","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"NLU"},"sidebar":"docs","previous":{"title":"Channels","permalink":"/docs/development/channels"},"next":{"title":"Knowledgebase Integration","permalink":"/docs/development/knowledgebase"}}');var s=t(4848),l=t(8453);const a={title:"NLU"},r=void 0,i={},h=[{value:"Types of NLU",id:"types-of-nlu",level:3},{value:"Hooking up an NLU",id:"hooking-up-an-nlu",level:3},{value:"NLU to the Channel",id:"nlu-to-the-channel",level:4},{value:"Fulfillment",id:"fulfillment",level:4}];function c(e){const n={a:"a",em:"em",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The NLU helps translate a user's natural language query to something you can use to develop a custom workflow, specifically to an intent and optional slots.  An NLU is a required component for your virtual assistant."}),"\n",(0,s.jsx)(n.h3,{id:"types-of-nlu",children:"Types of NLU"}),"\n",(0,s.jsx)(n.p,{children:"Some platforms such as Alexa have their own built-in NLU and it is nearly impossible to use another NLU with Alexa.  Some NLU, like Lex and Dialogflow, can be used similar to Alexa as a platform where they also come equipped with built-in channels and they can also can be used as a stand-alone NLU.  Last, there are just pure NLUs that don't have platform channels and are purely used for translating natural queries to intents and slots."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Integrated NLU"})," - Part of a platform, unable to be decoupled.  Best example of this is Alexa where the NLU (and text to speech and speech to text) are all integrated together."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NLU with Channels"})," - Can be used just as an NLU but they also have some channels you can use.  Amazon Lex and Google Dialogflow are your best examples and most popular NLUs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pure NLU"})," - Is just an NLU, no channels provided out of the box.  Example: These are typically more bespoke solutions such as ",(0,s.jsx)(n.a,{href:"https://compromise.cool/",children:"compromise"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"hooking-up-an-nlu",children:"Hooking up an NLU"}),"\n",(0,s.jsx)(n.p,{children:"There are two main ways of hooking stentor up to an NLU, major factor is the type of NLU you are using."}),"\n",(0,s.jsx)(n.h4,{id:"nlu-to-the-channel",children:"NLU to the Channel"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Preferred"})}),"\n",(0,s.jsx)(n.p,{children:"For either NLUs with Channels or pure NLUs, you can pass the NLU to the channel directly (where supported) and stentor will handle when to call the NLU."}),"\n",(0,s.jsx)(n.p,{children:"This method is preferred as it gives you greater control over when to call the NLU."}),"\n",(0,s.jsx)(n.h4,{id:"fulfillment",children:"Fulfillment"}),"\n",(0,s.jsxs)(n.p,{children:["For NLUs with channels, like Lex & Dialogflow, you can set fulfillment (either a Lambda or URL) for when a intent is matched.  This method typically restricts you to only the channels they provided ",(0,s.jsx)(n.em,{children:"or"})," you can leverage an API call that also calls their fulfillment and returns the response."]}),"\n",(0,s.jsxs)(n.p,{children:["If this method sounds interesting and you want to leverage more than just the channels the NLU provides you, we recommend taking a look at the ",(0,s.jsx)(n.a,{href:"/docs/development/posttext-lambda",children:"PostText Lambda"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(6540);const s={},l=o.createContext(s);function a(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);