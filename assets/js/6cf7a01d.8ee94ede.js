"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[7206],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9822:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],s={title:"Governance"},l=void 0,d={unversionedId:"studio/governance",id:"studio/governance",title:"Governance",description:"OC Studio provides a robust set of features for building, managing and maintaining a conversational virtual assistant.  How your organization leverages Studio and who has access to it largely depends on the type of assistant application you are building and the size of your organization.",source:"@site/docs/studio/governance.md",sourceDirName:"studio",slug:"/studio/governance",permalink:"/docs/studio/governance",draft:!1,editUrl:"https://github.com/xapp-ai/documentation/edit/main/docs/studio/governance.md",tags:[],version:"current",frontMatter:{title:"Governance"},sidebar:"docs",previous:{title:"Organizations, Applications and Members",permalink:"/docs/studio/organizations-applications-members"},next:{title:"Integration",permalink:"/docs/partners/partner-integration"}},p={},c=[{value:"Primary Team Roles and Responsibilities",id:"primary-team-roles-and-responsibilities",level:2},{value:"Administrator",id:"administrator",level:3},{value:"Developer",id:"developer",level:3},{value:"Designer",id:"designer",level:3},{value:"Analyst",id:"analyst",level:3},{value:"Model &amp; Content Modification",id:"model--content-modification",level:2},{value:"Intents",id:"intents",level:3},{value:"Entities",id:"entities",level:3},{value:"Handlers",id:"handlers",level:3}],u={toc:c},m="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)(m,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"OC Studio provides a robust set of features for building, managing and maintaining a conversational virtual assistant.  How your organization leverages Studio and who has access to it largely depends on the type of assistant application you are building and the size of your organization."),(0,r.kt)("h2",{id:"primary-team-roles-and-responsibilities"},"Primary Team Roles and Responsibilities"),(0,r.kt)("p",null,"Below are some standard roles that make up teams which require access to OC Studio.  Depending on project scope and size, some of these roles will overlap."),(0,r.kt)("h3",{id:"administrator"},"Administrator"),(0,r.kt)("p",null,"An account administrator is someone who acts as the main point of contact for the account from the perspective of billing and managing the users. "),(0,r.kt)("h3",{id:"developer"},"Developer"),(0,r.kt)("p",null,"The developer is involved in building any customer workflow, API integrations, or components.  They will be more heavily involved early on and then after launch, only to fix bugs or add new features.  They will need full write access to the entire application as they will need to create new handlers and sometimes make small edits to the interaction model.  If you have separate development and production environment, they will rarely need full write access to the production environment."),(0,r.kt)("h3",{id:"designer"},"Designer"),(0,r.kt)("p",null,"A designer will help with crafting the responses and configuring the styles on the components.  They will be heavily involved early on building the initial responses and then after launch, editing them for clarity.   "),(0,r.kt)("h3",{id:"analyst"},"Analyst"),(0,r.kt)("p",null,"An analyst role will typically help with testing during early phases of an assistant and then post initial launch they will help monitor and optimize the assistant, typically through one of the optimization workflows."),(0,r.kt)("h2",{id:"model--content-modification"},"Model & Content Modification"),(0,r.kt)("p",null,"There are a lot of assets in Studio and it is helpful to also look at who is primarily responsible for editing and adding elements."),(0,r.kt)("h3",{id:"intents"},"Intents"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Creation")," Both designer and developer will collaborate on the creation.  Developers will simple just create intents needed with a few sample utterances to start while the designer can then make them more robust with more samples."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maintenance")," The designer will take over the responsibility of updating the intents, responding to missed utterances and making the set of sample utterances more robust.  Often the analyst can make small edits to the utterances to improve performance post launch."),(0,r.kt)("h3",{id:"entities"},"Entities"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Creation")," Both designer and developer will collaborate on the creation.  Developers will create simple intents as needed with a few sample utterances to start while the designer can then make them more robust with more samples."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maintenance")," The designer will take over the responsibility of updating the intents, responding to missed utterances and making the set of sample utterances more robust."),(0,r.kt)("h3",{id:"handlers"},"Handlers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Creation"),' Both designer and developer will collaborate on the creation, starting with a "happy path".  '),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maintenance"),' Designer will be focused on adding content beyond the "happy path", adding content on how to respond to unexpected or improper input.'))}h.isMDXComponent=!0}}]);