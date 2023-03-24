"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[8773],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4154:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],p={title:"API"},c=void 0,l={unversionedId:"development/api",id:"development/api",title:"API",description:"OC Studio provides two primary APIs:",source:"@site/docs/development/api.md",sourceDirName:"development",slug:"/development/api",permalink:"/docs/development/api",draft:!1,editUrl:"https://github.com/xapp-ai/documentation/edit/main/docs/development/api.md",tags:[],version:"current",frontMatter:{title:"API"},sidebar:"docs",previous:{title:"CLI",permalink:"/docs/development/cli"},next:{title:"Crawler CLI",permalink:"/docs/development/arachne-cli"}},s={},u=[{value:"GraphQL",id:"graphql",level:2},{value:"CMS",id:"cms",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OC Studio provides two primary APIs:"),(0,a.kt)("h2",{id:"graphql"},"GraphQL"),(0,a.kt)("p",null,"This API is primarily used by Studio's web application and CLI.  You can access the graphical user interface at /graphql.  There you will find documentation and a method to run commands.  This is a ",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," based API which, through a single endpoint, allows queries and mutations through a query language.  You can access Studio's GraphQL UI ",(0,a.kt)("a",{parentName:"p",href:"https://studio.xapp.ai/graphql"},"here"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/development/api/graphql"},"Read More"))),(0,a.kt)("h2",{id:"cms"},"CMS"),(0,a.kt)("p",null,"This API is used by the application's runtime environment to query content and also post events.  It provides end points for handler, entity, search, suggestions, and FAQ content.  "),(0,a.kt)("p",null,"It also has a more limited version of the GraphQL API that allows you to CRUD entities, intents, handlers for a specific  It is meant for machine to machine communication and leverages a long-lived access token, which you can generate in Studio.  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/development/api/cms"},"Read More"))))}f.isMDXComponent=!0}}]);