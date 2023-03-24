"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[5599],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9543:function(e,t,n){n.d(t,{x:function(){return r}});var a=n(7294);function o(e){return"others"===e?"m 80 0 v 240 h -60 c 40 -40 60 -160 60 -240":"m 0 0 v 240 h 60 c -40 -40 -60 -160 -60 -240"}var r=function(e){return a.createElement("div",{className:"chat-text-bubble "+("mine"===e.owner?"chat-text-bubble--mine":"chat-text-bubble--others")},e.hasTail&&(t=e.owner,a.createElement("svg",{className:"chat-text-bubble__tail",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 80 240"},a.createElement("path",{d:o(t),fill:"currentColor"}))),e.children);var t}},3068:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=n(9543),i=["components"],l={title:"Slots",sidebar_label:"Slots"},u=void 0,c={unversionedId:"model/slots",id:"model/slots",title:"Slots",description:"What is a slot?",source:"@site/docs/model/slots.mdx",sourceDirName:"model",slug:"/model/slots",permalink:"/docs/model/slots",draft:!1,editUrl:"https://github.com/xapp-ai/documentation/edit/main/docs/model/slots.mdx",tags:[],version:"current",frontMatter:{title:"Slots",sidebar_label:"Slots"},sidebar:"docs",previous:{title:"Intents",permalink:"/docs/model/intents"},next:{title:"Entity",permalink:"/docs/model/entities"}},m={},p=[{value:"What is a slot?",id:"what-is-a-slot",level:2},{value:"When to use a slot?",id:"when-to-use-a-slot",level:2},{value:"Adding Slots to an Intent",id:"adding-slots-to-an-intent",level:2},{value:"List Slot Example",id:"list-slot-example",level:3},{value:"Multiple Slots without List Example",id:"multiple-slots-without-list-example",level:3},{value:"Slot Best Practices",id:"slot-best-practices",level:2},{value:"External References",id:"external-references",level:2}],d={toc:p},h="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-a-slot"},"What is a slot?"),(0,r.kt)("p",null,"Think of slots as the data within the utterance of the intent that you want to capture. You have one or many slots per utterance and not all sample utterances need to include all the slots define in the intent."),(0,r.kt)("p",null,"Slots then have an entity (sometimes referred to as a slot type) associated with it. The entity can be either custom lists or some type of structured/semi-structured data like numbers, dates (both relative and absolute) and addresses. NLUs provide both built in lists style entities and the structured style of dates."),(0,r.kt)("h2",{id:"when-to-use-a-slot"},"When to use a slot?"),(0,r.kt)("p",null,"The primary reason for using a slot is when there is information you want to capture from a user to then use within your application. For example when scheduling an appointment you want to include the date you have availability or when you are requesting to listen to a radio station you want to capture the requested station."),(0,r.kt)("p",null,"Beyond information capture, slots can be used to more precisely understand what the user is saying. Capturing negative modifiers and prepositions in slots can help with precision in your model. This additional context can help you provide your user with better responses and can sometimes be the difference between correct and incorrect responses."),(0,r.kt)("p",null,'Additionally, slots can help you greatly increase the amount of possible matches for an intent by turning common carrier phrases into a slot. Carrier phrases don\'t include the important information, like the entity value, but are added to help communicate intent and can vary significantly. For example, for an intent that searches for recipes carrier phrases include: "find", "give me", "search for". Putthing these into a custom list entity and then leveraged as a slot increases your model\'s ability to match to a user\'s utterance and allows you to reuse them in other intents however there is some risk of causing problems with utterance ambiguity in the model.'),(0,r.kt)("p",null,"In summary, when to use slots:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Capture")," Capture data from the user such as dates or entity values"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Increase Precision")," Capture information adjacent to the data to better understand the user's request"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Define More Matches")," Put carrier phrases in a slot to define more matches without more sample utterances")),(0,r.kt)("h2",{id:"adding-slots-to-an-intent"},"Adding Slots to an Intent"),(0,r.kt)("p",null,"In order to add a slot to an intent, you first need to add the slot to the utterance pattern with ",(0,r.kt)("inlineCode",{parentName:"p"},"${slot_name}")," and you then need to associate it with an entity (or slot type). "),(0,r.kt)("p",null,"For naming the slot, we recommend to use lowercase letters only and use underscores instead of spaces.  "),(0,r.kt)("p",null,"When attempting to capture more than one value of the same entity, it feels natural to have two slots with the same name and type however this is not allowed.  Instead either use a list slot type, which captures more than one or postfix the second slot with a number.  "),(0,r.kt)("h3",{id:"list-slot-example"},"List Slot Example"),(0,r.kt)("p",null,"Lists make it easier to capture one to many of a entity.  Ingredients are a great example:"),(0,r.kt)(s.x,{owner:"mine",hasTail:!0,mdxType:"ChatMessageBubble"},"i'm looking for a recipe with strawberries, blueberries, and kiwi"),(0,r.kt)("br",null),(0,r.kt)("p",null,"Can be entered as:"),(0,r.kt)(s.x,{owner:"mine",hasTail:!0,mdxType:"ChatMessageBubble"},"i'm looking for a recipe with ",(0,r.kt)("b",null,"${ingredients}")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"${ingredients}")," is a custom slot with a list of possible ingredients."),(0,r.kt)("h3",{id:"multiple-slots-without-list-example"},"Multiple Slots without List Example"),(0,r.kt)("p",null,"When there is a known number of items of the same entity, you may instead want to just postfix the slot name."),(0,r.kt)(s.x,{owner:"mine",hasTail:!0,mdxType:"ChatMessageBubble"},"play the UVA vs Virginia Tech game"),(0,r.kt)("br",null),(0,r.kt)("p",null,"Can be entered as:"),(0,r.kt)(s.x,{owner:"mine",hasTail:!0,mdxType:"ChatMessageBubble"},"play the ",(0,r.kt)("b",null,"${team}")," vs ",(0,r.kt)("b",null,"${team_two}")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"${team}")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"${team_two}")," both have the same entity value which is a list of teams."),(0,r.kt)("h2",{id:"slot-best-practices"},"Slot Best Practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Naming Convention")," We recommend to use lowercase, underscores instead of spaces, letters only. For example: ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"ingredient_one"),". This tends to work the best across all the currently available NLUs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Same Name Across Intents")," It is highly recommended to keep the same name across intents for a slot that has the same type. This makes it much easier to use multiple intents for a given state (or handler)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Slot Only Intents")," Instead of adding a sample utterance with just the slot value, create a new intent with this single sample to allow for better reuse and higher precision.")),(0,r.kt)("h2",{id:"external-references"},"External References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lex/latest/dg/howitworks-builtins-slots.html"},"Amazon Lex - Built-in Slot Types")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.amazon.com/en-US/docs/alexa/custom-skills/slot-type-reference.html"},"Amazon Alexa - Slot Type Reference")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/dialogflow/es/docs/reference/system-entities"},"Dialogflow ES - System entities reference"))))}f.isMDXComponent=!0}}]);