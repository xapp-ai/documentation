"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[7659],{1397:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"studio/autocomplete-suggestions","title":"Autocomplete Suggestions","description":"Autocomplete suggestions provide helpful hints at what your user can type on certain channels such as the chat and search.","source":"@site/docs/studio/autocomplete-suggestions.md","sourceDirName":"studio","slug":"/studio/autocomplete-suggestions","permalink":"/docs/studio/autocomplete-suggestions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Autocomplete Suggestions"},"sidebar":"docs","previous":{"title":"BETA - Opportunity Alerts","permalink":"/docs/studio/opportunity-alerts"},"next":{"title":"Single Tenancy","permalink":"/docs/studio/single-tenancy"}}');var o=s(4848),i=s(8453);const r={title:"Autocomplete Suggestions"},a=void 0,c={},l=[{value:"How they work",id:"how-they-work",level:2},{value:"Weighting &amp; Conflicts",id:"weighting--conflicts",level:3},{value:"Instant Answers",id:"instant-answers",level:2}];function h(e){const t={h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Autocomplete suggestions provide helpful hints at what your user can type on certain channels such as the chat and search."}),"\n",(0,o.jsx)(t.h2,{id:"how-they-work",children:"How they work"}),"\n",(0,o.jsx)(t.p,{children:"The autocomplete suggestions are powered by three sources:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Model"})," - All of the sample utterances from your intents and values from your entities are used to provide suggestions."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"FAQs"})," - The questions for you defined FAQs are surfaced as well and have the ability to provide instant answers."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Historical"})," - Based on past usage, queries that have been marked as correct will appear in the"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Autocomplete Suggestions",src:s(4135).A+"",width:"508",height:"710"})}),"\n",(0,o.jsx)(t.h3,{id:"weighting--conflicts",children:"Weighting & Conflicts"}),"\n",(0,o.jsx)(t.p,{children:"To accurately surface the most appropriate suggestion and help avoid conflicts between the different sources, we weight the sources in the following priority order:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Historical"})," - Previous user queries that have been reviewed have the highest priority"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"FAQs"})," - The curated list of questions for the FAQs has a slight preference over model based suggestions"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Model"})," - The interaction model is typically the largest source and most broad"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"instant-answers",children:"Instant Answers"}),"\n",(0,o.jsx)(t.p,{children:"For relevant FAQs that are surfaced in the suggestions, the answer will appear when the user hovers on the FAQ as if they were about to click on it."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Autocomplete Suggestions",src:s(7823).A+"",width:"508",height:"710"})}),"\n",(0,o.jsx)(t.p,{children:"This can save the user a click or they can click through to get additional information associated with the answer such as the web source for clicking through."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},4135:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/autocomplete-suggestions-full-5e9a2e9b631c2934c796be375369ee95.gif"},7823:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/autocomplete-suggestions-77b395a61af5c1a91b058ea1b89c2ca6.gif"},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(6540);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);