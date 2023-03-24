"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[5725],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),a=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=a(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=a(n),d=o,m=s["".concat(c,".").concat(d)]||s[d]||f[d]||i;return n?r.createElement(m,u(u({ref:t},p),{},{components:n})):r.createElement(m,u({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,u[1]=l;for(var a=2;a<i;a++)u[a]=n[a];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6006:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),u=["components"],l={title:"Helpful Functions"},c=void 0,a={unversionedId:"development/helpful-utilities",id:"development/helpful-utilities",title:"Helpful Functions",description:"Response",source:"@site/docs/development/helpful-utilities.md",sourceDirName:"development",slug:"/development/helpful-utilities",permalink:"/docs/development/helpful-utilities",draft:!1,editUrl:"https://github.com/xapp-ai/documentation/edit/main/docs/development/helpful-utilities.md",tags:[],version:"current",frontMatter:{title:"Helpful Functions"}},p={},s=[{value:"Response",id:"response",level:2},{value:"Request",id:"request",level:2}],f={toc:s},d="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)(d,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("h1",{id:"utils"},"Utils"),(0,i.kt)("p",null,"Stentor also has a rich set of utilities, package ",(0,i.kt)("inlineCode",{parentName:"p"},"stentor-utils"),", that can save time when implementing a customer handler.  Below you can find some helpful functions and their uses."),(0,i.kt)("p",null,"toResponseOutput"),(0,i.kt)("p",null,"concatResponseOutput"))}m.isMDXComponent=!0}}]);