"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[7918],{3230:function(e,n,t){t.d(n,{Z:function(){return c}});t(7294);var s=t(6905),i=t(4061),a=t(5281),o=t(9047),r=t(5893);function l(e){let{className:n}=e;return(0,r.jsx)(o.Z,{type:"caution",title:(0,r.jsx)(i.cI,{}),className:(0,s.Z)(n,a.k.common.unlistedBanner),children:(0,r.jsx)(i.eU,{})})}function c(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.T$,{}),(0,r.jsx)(l,{...e})]})}},7662:function(e,n,t){t.d(n,{Z:function(){return d}});t(7294);var s=t(6905),i=t(4061),a=t(5281),o=t(9047),r=t(5893);function l(e){let{className:n}=e;return(0,r.jsx)(o.Z,{type:"caution",title:(0,r.jsx)(i.ht,{}),className:(0,s.Z)(n,a.k.common.draftBanner),children:(0,r.jsx)(i.xo,{})})}var c=t(3230);function d(e){let{metadata:n}=e;const{unlisted:t,frontMatter:s}=n;return(0,r.jsxs)(r.Fragment,{children:[(t||s.unlisted)&&(0,r.jsx)(c.Z,{}),s.draft&&(0,r.jsx)(l,{})]})}},9152:function(e,n,t){t.r(n),t.d(n,{default:function(){return ie}});var s=t(7294),i=t(8264),a=t(902),o=t(5893);const r=s.createContext(null);function l(e){let{children:n,content:t}=e;const i=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,o.jsx)(r.Provider,{value:i,children:n})}function c(){const e=(0,s.useContext)(r);if(null===e)throw new a.i6("DocProvider");return e}function d(){var e;const{metadata:n,frontMatter:t,assets:s}=c();return(0,o.jsx)(i.d,{title:n.title,description:n.description,keywords:t.keywords,image:null!=(e=s.image)?e:t.image})}var u=t(6905),m=t(7524),h=t(5999),v=t(2244);function f(e){const{previous:n,next:t}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,o.jsx)(v.Z,{...n,subLabel:(0,o.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,o.jsx)(v.Z,{...t,subLabel:(0,o.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function x(){const{metadata:e}=c();return(0,o.jsx)(f,{previous:e.previous,next:e.next})}var b=t(2263),g=t(3692),p=t(143),j=t(5281),C=t(298),L=t(3797);const N={unreleased:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,o.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,o.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,o.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,o.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function _(e){const n=N[e.versionMetadata.banner];return(0,o.jsx)(n,{...e})}function Z(e){let{versionLabel:n,to:t,onClick:s}=e;return(0,o.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,o.jsx)("b",{children:(0,o.jsx)(g.Z,{to:t,onClick:s,children:(0,o.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function k(e){let{className:n,versionMetadata:t}=e;const{siteConfig:{title:s}}=(0,b.Z)(),{pluginId:i}=(0,p.gA)({failfast:!0}),{savePreferredVersionName:a}=(0,C.J)(i),{latestDocSuggestion:r,latestVersionSuggestion:l}=(0,p.Jo)(i),c=null!=r?r:(d=l).docs.find((e=>e.id===d.mainDocId));var d;return(0,o.jsxs)("div",{className:(0,u.Z)(n,j.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,o.jsx)("div",{children:(0,o.jsx)(_,{siteTitle:s,versionMetadata:t})}),(0,o.jsx)("div",{className:"margin-top--md",children:(0,o.jsx)(Z,{versionLabel:l.label,to:c.path,onClick:()=>a(l.name)})})]})}function T(e){let{className:n}=e;const t=(0,L.E)();return t.banner?(0,o.jsx)(k,{className:n,versionMetadata:t}):null}function y(e){let{className:n}=e;const t=(0,L.E)();return t.badge?(0,o.jsx)("span",{className:(0,u.Z)(n,j.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}var H=t(1526),w=t(7265);function M(){const{metadata:e}=c(),{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s,tags:i}=e,a=i.length>0,r=!!(n||t||s);return a||r?(0,o.jsxs)("footer",{className:(0,u.Z)(j.k.docs.docFooter,"docusaurus-mt-lg"),children:[a&&(0,o.jsx)("div",{className:(0,u.Z)("row margin-top--sm",j.k.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(H.Z,{tags:i})})}),r&&(0,o.jsx)(w.Z,{className:(0,u.Z)("margin-top--sm",j.k.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s})]}):null}var E=t(6043),I=t(3743),A={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function B(e){let{collapsed:n,...t}=e;return(0,o.jsx)("button",{type:"button",...t,className:(0,u.Z)("clean-btn",A.tocCollapsibleButton,!n&&A.tocCollapsibleButtonExpanded,t.className),children:(0,o.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}var S={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function O(e){let{toc:n,className:t,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:a,toggleCollapsed:r}=(0,E.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.Z)(S.tocCollapsible,!a&&S.tocCollapsibleExpanded,t),children:[(0,o.jsx)(B,{collapsed:a,onClick:r}),(0,o.jsx)(E.z,{lazy:!0,className:S.tocCollapsibleContent,collapsed:a,children:(0,o.jsx)(I.Z,{toc:n,minHeadingLevel:s,maxHeadingLevel:i})})]})}var R={tocMobile:"tocMobile_ITEo"};function F(){const{toc:e,frontMatter:n}=c();return(0,o.jsx)(O,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.Z)(j.k.docs.docTocMobile,R.tocMobile)})}var U=t(9407);function V(){const{toc:e,frontMatter:n}=c();return(0,o.jsx)(U.Z,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:j.k.docs.docTocDesktop})}var P=t(2503),K=t(5042);function Y(e){let{children:n}=e;const t=function(){const{metadata:e,frontMatter:n,contentTitle:t}=c();return n.hide_title||void 0!==t?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.Z)(j.k.docs.docMarkdown,"markdown"),children:[t&&(0,o.jsx)("header",{children:(0,o.jsx)(P.Z,{as:"h1",children:t})}),(0,o.jsx)(K.Z,{children:n})]})}var D=t(9690),z=t(8596),W=t(4996);function q(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}var G={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function J(){const e=(0,W.ZP)("/");return(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(g.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,o.jsx)(q,{className:G.breadcrumbHomeIcon})})})}var $={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function X(e){let{children:n,href:t,isLast:s}=e;const i="breadcrumbs__link";return s?(0,o.jsx)("span",{className:i,itemProp:"name",children:n}):t?(0,o.jsx)(g.Z,{className:i,href:t,itemProp:"item",children:(0,o.jsx)("span",{itemProp:"name",children:n})}):(0,o.jsx)("span",{className:i,children:n})}function Q(e){let{children:n,active:t,index:s,addMicrodata:i}=e;return(0,o.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,o.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function ee(){const e=(0,D.s1)(),n=(0,z.Ns)();return e?(0,o.jsx)("nav",{className:(0,u.Z)(j.k.docs.docBreadcrumbs,$.breadcrumbsContainer),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,o.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,o.jsx)(J,{}),e.map(((n,t)=>{const s=t===e.length-1,i="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,o.jsx)(Q,{active:s,index:t,addMicrodata:!!i,children:(0,o.jsx)(X,{href:i,isLast:s,children:n.label})},t)}))]})}):null}var ne=t(7662),te={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function se(e){let{children:n}=e;const t=function(){const{frontMatter:e,toc:n}=c(),t=(0,m.i)(),s=e.hide_table_of_contents,i=!s&&n.length>0;return{hidden:s,mobile:i?(0,o.jsx)(F,{}):void 0,desktop:!i||"desktop"!==t&&"ssr"!==t?void 0:(0,o.jsx)(V,{})}}(),{metadata:s}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.Z)("col",!t.hidden&&te.docItemCol),children:[(0,o.jsx)(ne.Z,{metadata:s}),(0,o.jsx)(T,{}),(0,o.jsxs)("div",{className:te.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(ee,{}),(0,o.jsx)(y,{}),t.mobile,(0,o.jsx)(Y,{children:n}),(0,o.jsx)(M,{})]}),(0,o.jsx)(x,{})]})]}),t.desktop&&(0,o.jsx)("div",{className:"col col--3",children:t.desktop})]})}function ie(e){const n="docs-doc-id-"+e.content.metadata.id,t=e.content;return(0,o.jsx)(l,{content:e.content,children:(0,o.jsxs)(i.FG,{className:n,children:[(0,o.jsx)(d,{}),(0,o.jsx)(se,{children:(0,o.jsx)(t,{})})]})})}},9407:function(e,n,t){t.d(n,{Z:function(){return c}});t(7294);var s=t(6905),i=t(3743),a={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},o=t(5893);const r="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,o.jsx)("div",{className:(0,s.Z)(a.tableOfContents,"thin-scrollbar",n),children:(0,o.jsx)(i.Z,{...t,linkClassName:r,linkActiveClassName:l})})}},3743:function(e,n,t){t.d(n,{Z:function(){return f}});var s=t(7294),i=t(6668);function a(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):s.push(i)})),s}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function l(e,n){var t;let{anchorTopOffset:s}=n;const i=e.find((e=>r(e).top>=s));if(i){var a;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null}return null!=(t=e[e.length-1])?t:null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:i,minHeadingLevel:a,maxHeadingLevel:o}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let i=n;i<=t;i+=1)s.push("h"+i+".anchor");return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:o}),c=l(r,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var u=t(3692),m=t(5893);function h(e){let{toc:n,className:t,linkClassName:s,isChild:i}=e;return n.length?(0,m.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:"#"+e.id,className:null!=s?s:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}var v=s.memo(h);function f(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const f=(0,i.L)(),x=null!=c?c:f.tableOfContents.minHeadingLevel,b=null!=u?u:f.tableOfContents.maxHeadingLevel,g=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,s.useMemo)((()=>o({toc:a(n),minHeadingLevel:t,maxHeadingLevel:i})),[n,t,i])}({toc:n,minHeadingLevel:x,maxHeadingLevel:b});return d((0,s.useMemo)((()=>{if(r&&l)return{linkClassName:r,linkActiveClassName:l,minHeadingLevel:x,maxHeadingLevel:b}}),[r,l,x,b])),(0,m.jsx)(v,{toc:g,className:t,linkClassName:r,...h})}},4061:function(e,n,t){t.d(n,{T$:function(){return l},cI:function(){return o},eU:function(){return r},ht:function(){return c},xo:function(){return d}});t(7294);var s=t(5999),i=t(5742),a=t(5893);function o(){return(0,a.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,a.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,a.jsx)(i.Z,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,a.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,a.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},3945:function(e,n,t){t.d(n,{Z:function(){return o}});var s=t(7294),i=t(9286),a=t(5893);function o(e){const[n,t]=(0,s.useState)(""),[o,r]=(0,s.useState)(""),[l,c]=(0,s.useState)("");(0,s.useEffect)((()=>{console.log("getting keys");const e=new URLSearchParams(window.location.search);console.log(e),t(e.get("key")||""),r(e.get("formKey")||""),c(e.get("searchKey")||"")}),[]);const d=/YOUR_(CHAT|FORM|SEARCH)_KEY/g,u="string"==typeof e.children&&d.test(e.children)?e.children.match(d)[0]:"",m=!!u;let h;switch(u){case"YOUR_CHAT_KEY":h=n;break;case"YOUR_FORM_KEY":h=o;break;case"YOUR_SEARCH_KEY":h=l;break;default:h=""}const v="string"==typeof e.children&&h?e.children.replace(u,h):e.children;let f;return m&&h?f="Note! This snippet is customized for your widget. No modification needed.":m&&!h&&(f='Note! Please replace "'+u+'" with your actual widget key.'),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{...e,children:v}),f?(0,a.jsx)("p",{style:{marginTop:"1rem",textAlign:"center",fontWeight:"bold",fontSize:"small"},children:f}):(0,a.jsx)(a.Fragment,{})]})}},2326:function(e,n,t){t.d(n,{Z:function(){return v}});var s=t(7811),i=t(7294),a="browserFrame_cnZP",o="browserCircle_XvYD",r="red_Z2sz",l="yellow_aTLp",c="green_T2Fv",d=t(5893);var u=e=>{let{children:n}=e;return(0,d.jsxs)("div",{className:a,children:[(0,d.jsx)("div",{className:o+" "+r}),(0,d.jsx)("div",{className:o+" "+l}),(0,d.jsx)("div",{className:o+" "+c}),n]})},m=t(3945);var h=()=>{const[e,n]=(0,i.useState)(""),[t,s]=(0,i.useState)(""),[a,o]=(0,i.useState)("");return(0,i.useEffect)((()=>{console.log("getting keys");const e=new URLSearchParams(window.location.search);console.log(e),n(e.get("key")||""),s(e.get("formKey")||""),o(e.get("searchKey")||"")}),[]),(0,d.jsxs)(d.Fragment,{children:[e&&(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Chat Widget Key"}),(0,d.jsx)(m.Z,{children:""+e})]}),t&&(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Scheduling/Form Widget Key"}),(0,d.jsx)(m.Z,{children:""+t})]}),a&&(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Search Widget Key"}),(0,d.jsx)(m.Z,{children:""+a})]})]})},v={...s.Z,BrowserFrame:u,KeyDisplay:h}}}]);