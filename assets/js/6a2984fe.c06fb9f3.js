"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[1086],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=c(n),f=o,h=l["".concat(p,".").concat(f)]||l[f]||d[f]||s;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[l]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5802:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),i=["components"],a={title:"Response Groups"},p=void 0,c={unversionedId:"content/response-groups",id:"content/response-groups",title:"Response Groups",description:"Within a Handler, responses are grouped by which specific requests they respond to.  Then within the response group you can use conditions to help select which response is most appropriate.",source:"@site/docs/content/response-groups.md",sourceDirName:"content",slug:"/content/response-groups",permalink:"/docs/content/response-groups",draft:!1,editUrl:"https://github.com/xapp-ai/documentation/edit/main/docs/content/response-groups.md",tags:[],version:"current",frontMatter:{title:"Response Groups"},sidebar:"docs",previous:{title:"Responses",permalink:"/docs/content/responses"},next:{title:"Tags",permalink:"/docs/content/tags"}},u={},l=[],d={toc:l},f="wrapper";function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,s.kt)(f,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Within a Handler, responses are grouped by which specific requests they respond to.  Then within the response group you can use ",(0,s.kt)("a",{parentName:"p",href:"/docs/dialog-manager/conditions"},"conditions")," to help select which response is most appropriate.  "),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"handler response groups",src:n(9628).Z,width:"1318",height:"987"})),(0,s.kt)("p",null,"You can see in the above for the second question of a simple conversational quiz that we have two response groups.  They are structured around what the user says and then the possible system responses below it. "),(0,s.kt)("p",null,'The first group is when the user first enters the handler and then depending on if the user answered correctly ("wamapoke"), they will get the correct or incorrect response.'),(0,s.kt)("p",null,"The next group below it is special.  It using a special case key that accepts all requests except ",(0,s.kt)("inlineCode",{parentName:"p"},"CancelIntent"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Peebo")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"StopIntent"),".  This will catch all requests, except the aforementioned, and return the provided response."))}h.isMDXComponent=!0},9628:function(e,t,n){t.Z=n.p+"assets/images/handler-response-groups-0e3a645505ee6b519dc17caa5a43ea21.png"}}]);