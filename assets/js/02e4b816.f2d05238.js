"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[7970],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(m,o(o({ref:e},p),{},{components:n})):a.createElement(m,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8197:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Tags",sidebar_title:"Tags"},s=void 0,c={unversionedId:"content/tags",id:"content/tags",title:"Tags",description:"What are tags?",source:"@site/docs/content/tags.md",sourceDirName:"content",slug:"/content/tags",permalink:"/docs/content/tags",draft:!1,editUrl:"https://github.com/xapp-ai/documentation/edit/main/docs/content/tags.md",tags:[],version:"current",frontMatter:{title:"Tags",sidebar_title:"Tags"},sidebar:"docs",previous:{title:"Response Groups",permalink:"/docs/content/response-groups"},next:{title:"Crawler",permalink:"/docs/content/crawler"}},p={},u=[{value:"What are tags?",id:"what-are-tags",level:2},{value:"What can tags help track?",id:"what-can-tags-help-track",level:2},{value:"Built-In Tags",id:"built-in-tags",level:2},{value:"Tag Based Analytics",id:"tag-based-analytics",level:2}],d={toc:u},g="wrapper";function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)(g,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-are-tags"},"What are tags?"),(0,i.kt)("p",null,"Tags can be added to specific responses so you can more easily track usage."),(0,i.kt)("p",null,"You can create unique tags and then apply them to different responses across different handlers within an application."),(0,i.kt)("h2",{id:"what-can-tags-help-track"},"What can tags help track?"),(0,i.kt)("p",null,"Tags are helpful in tracking goal completion responses or certain content types like failure messages or input unknowns."),(0,i.kt)("h2",{id:"built-in-tags"},"Built-In Tags"),(0,i.kt)("p",null,"Studio has built-in tags that, when used, will populate charts and graphs within Studio analytics."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Built-in"),(0,i.kt)("th",{parentName:"tr",align:null},"Sample Values"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"KB_TOP_ANSWER"),(0,i.kt)("td",{parentName:"tr",align:null},"An answer that has high confidence and quality.  These are typically found within a larger body of text.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"KB_TOP_FAQ"),(0,i.kt)("td",{parentName:"tr",align:null},"An answer that is high confidence and base on a self-contained FAQ.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"KB_SUGGESTED_ANSWER"),(0,i.kt)("td",{parentName:"tr",align:null},"An answer with relatively high confidence but might not be correct.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"KB_LIST_OF_RESULTS"),(0,i.kt)("td",{parentName:"tr",align:null},"A response that is a list of results that may contain the answer.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"KB_NO_ANSWER"),(0,i.kt)("td",{parentName:"tr",align:null},"A response that does not contain the answer, typically due to lack of content or confidence.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WELCOME_NEW_USER"),(0,i.kt)("td",{parentName:"tr",align:null},"Response for brand new user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WELCOME_RETURNING_USER"),(0,i.kt)("td",{parentName:"tr",align:null},"Response for a returning user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LeadGenerationStart"),(0,i.kt)("td",{parentName:"tr",align:null},"Start of capturing a information about a prospective lead")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LeadGenerationEnd"),(0,i.kt)("td",{parentName:"tr",align:null},"End of a successful lead capture")))),(0,i.kt)("h2",{id:"tag-based-analytics"},"Tag Based Analytics"),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"This is still a beta feature and needs to be enabled on your app's settings page.")),(0,i.kt)("p",null,"Tag based analtics leverage our built-in tags and provide certain graphs and visualizations based on their intended usage. "),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"KB_")," prefixed tags, we provide a display of the distribution on the how each type of answer is returned."))}m.isMDXComponent=!0}}]);