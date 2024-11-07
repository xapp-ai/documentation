"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[1673],{8002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"basics/basics-conversational-ai","title":"Conversational AI","description":"What is Conversational AI?","source":"@site/docs/basics/basics-conversational-ai.md","sourceDirName":"basics","slug":"/basics/basics-conversational-ai","permalink":"/docs/basics/basics-conversational-ai","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Conversational AI","sidebar_label":"Conversational AI"},"sidebar":"docs","previous":{"title":"Getting Started","permalink":"/docs/getting-started"},"next":{"title":"Model","permalink":"/docs/basics/basics-model"}}');var i=n(4848),s=n(8453);const o={title:"Conversational AI",sidebar_label:"Conversational AI"},r=void 0,l={},c=[{value:"What is Conversational AI?",id:"what-is-conversational-ai",level:2},{value:"Technologies",id:"technologies",level:2},{value:"What is the Optimal Conversation Studio?",id:"what-is-the-optimal-conversation-studio",level:2},{value:"Use cases for Conversational AI",id:"use-cases-for-conversational-ai",level:2}];function h(e){const t={h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"what-is-conversational-ai",children:"What is Conversational AI?"}),"\n",(0,i.jsx)(t.p,{children:"Conversational AI is the set of technologies that come together to allow a human to have a conversation with a machine, typically through chat bots or virtual assistants.  Conversational AI implementations can be found across different industries helping with a variety of simple to complex tasks.  To help illustrate what exactly Conversational AI is and the different components, we will use the example of placing a coffee order."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"conversational ai",src:n(6582).A+"",width:"1805",height:"996"})}),"\n",(0,i.jsx)(t.p,{children:"At a high level, the natural language the user says is translated to an intent and entity values are extracted.  The assistant application uses this information then determine if more information is required from the user or if we have everything we need to complete the order."}),"\n",(0,i.jsx)(t.h2,{id:"technologies",children:"Technologies"}),"\n",(0,i.jsx)(t.p,{children:"The primary technologies include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Speech to Text (STT)"})," The most basic speech to text engines take audio and automatically transcribe the speech while more advanced can identify different speakers, determine tone, and can handle lower fidelity audio (like in the case of telephony)."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Natural Language Understanding (NLU)"})," The NLU is what turns the text of a user's query into generalized requests, ofter referred to as intents. It operates off of an interaction model that defines sample utterances for an intent and any optional slots, or variables, that contains information to be extracted from the sample utterances."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Dialog Manager"})," The dialog manager is a system that takes an input, the intent from the NLU, follows a set of instructions for the provided intent and other contextual information, and then provides an output. Common features include slot filling, error/input unknown handling, session and long term state, and topic tracking."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Natural Language Generation (NLG)"})," Within the field of natural language processing (NLP), NLG is one of the most challenging. The most common form is defining rule based systems for taking a set of structured data and converting it to natural language. It is possible to generate natural language based on machine learning models as well but practical applicability within an virtual assistant is still limited."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Text to Speech (TTS)"})," Text to speech is required for voice channels that virtual assistants can communicate on. Beyond just turning text into speech, distributed through an audio file format, more advanced features include support for speech synthesis markup language (SSML) and lexicons (think global pronunciation guides)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"what-is-the-optimal-conversation-studio",children:"What is the Optimal Conversation Studio?"}),"\n",(0,i.jsx)(t.p,{children:"The Optimal Conversation Studio, or OC Studio, is a conversational AI middleware platform for building intelligent virtual assistants. It is a flexible platform that allows you to bring your own conversational AI technologies and brings them all together to allow you to easily build and maintain intelligent virtual assistants (IVA)."}),"\n",(0,i.jsx)(t.p,{children:"OC Studio brings together the content, model, and dialog management together in one application that work together so you can then push your IVA out to different channels such as telephony, smart speaker and chat and continually improve it."}),"\n",(0,i.jsx)(t.h2,{id:"use-cases-for-conversational-ai",children:"Use cases for Conversational AI"}),"\n",(0,i.jsx)(t.p,{children:"The most common manifestation of conversational AI is in an intelligent virtual assistant (IVA). These IVAs can be informational in nature to help with customer support, can help with repetitive tasks like order taking or information gathering, or a combination of the two. Throughout this guide, we will use an example of a virtual barista that can help take coffee orders and is knowledgeable about the products."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},6582:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/conversational-ai-60cc0d15fbdc34593165ec71551f05e9.gif"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(6540);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);