"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[6103],{9209:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});t(7294);var i=t(6905),r=t(8264),s=t(5281),a=t(3548),o=t(1059),l=t(6189),c=t(5999),d=t(2244),u=t(5893);function m(e){const{nextItem:n,prevItem:t}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.Z,{...t,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),n&&(0,u.jsx)(d.Z,{...n,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function h(){var e;const{assets:n,metadata:t}=(0,a.nO)(),{title:i,description:s,date:o,tags:l,authors:c,frontMatter:d}=t,{keywords:m}=d,h=null!=(e=n.image)?e:d.image;return(0,u.jsxs)(r.d,{title:i,description:s,keywords:m,image:h,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:o}),c.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var f=t(5742);function g(){const e=(0,a.iZ)();return(0,u.jsx)(f.Z,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=t(9407),v=t(7662);function p(e){let{sidebar:n,children:t}=e;const{metadata:i,toc:r}=(0,a.nO)(),{nextItem:s,prevItem:c,frontMatter:d}=i,{hide_table_of_contents:h,toc_min_heading_level:f,toc_max_heading_level:g}=d;return(0,u.jsxs)(o.Z,{sidebar:n,toc:!h&&r.length>0?(0,u.jsx)(x.Z,{toc:r,minHeadingLevel:f,maxHeadingLevel:g}):void 0,children:[(0,u.jsx)(v.Z,{metadata:i}),(0,u.jsx)(l.Z,{children:t}),(s||c)&&(0,u.jsx)(m,{nextItem:s,prevItem:c})]})}function j(e){const n=e.content;return(0,u.jsx)(a.n4,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(r.FG,{className:(0,i.Z)(s.k.wrapper.blogPages,s.k.page.blogPostPage),children:[(0,u.jsx)(h,{}),(0,u.jsx)(g,{}),(0,u.jsx)(p,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},3230:function(e,n,t){t.d(n,{Z:function(){return c}});t(7294);var i=t(6905),r=t(4061),s=t(5281),a=t(9047),o=t(5893);function l(e){let{className:n}=e;return(0,o.jsx)(a.Z,{type:"caution",title:(0,o.jsx)(r.cI,{}),className:(0,i.Z)(n,s.k.common.unlistedBanner),children:(0,o.jsx)(r.eU,{})})}function c(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.T$,{}),(0,o.jsx)(l,{...e})]})}},7662:function(e,n,t){t.d(n,{Z:function(){return d}});t(7294);var i=t(6905),r=t(4061),s=t(5281),a=t(9047),o=t(5893);function l(e){let{className:n}=e;return(0,o.jsx)(a.Z,{type:"caution",title:(0,o.jsx)(r.ht,{}),className:(0,i.Z)(n,s.k.common.draftBanner),children:(0,o.jsx)(r.xo,{})})}var c=t(3230);function d(e){let{metadata:n}=e;const{unlisted:t,frontMatter:i}=n;return(0,o.jsxs)(o.Fragment,{children:[(t||i.unlisted)&&(0,o.jsx)(c.Z,{}),i.draft&&(0,o.jsx)(l,{})]})}},9407:function(e,n,t){t.d(n,{Z:function(){return c}});t(7294);var i=t(6905),r=t(3743),s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},a=t(5893);const o="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,a.jsx)("div",{className:(0,i.Z)(s.tableOfContents,"thin-scrollbar",n),children:(0,a.jsx)(r.Z,{...t,linkClassName:o,linkActiveClassName:l})})}},3743:function(e,n,t){t.d(n,{Z:function(){return g}});var i=t(7294),r=t(6668);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...r}=e;t>=0?n[t].children.push(r):i.push(r)})),i}function a(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=a({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function l(e,n){var t;let{anchorTopOffset:i}=n;const r=e.find((e=>o(e).top>=i));if(r){var s;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(r))?r:null!=(s=e[e.indexOf(r)-1])?s:null}return null!=(t=e[e.length-1])?t:null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.L)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:r,minHeadingLevel:s,maxHeadingLevel:a}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let r=n;r<=t;r+=1)i.push("h"+r+".anchor");return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:a}),c=l(o,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}var u=t(3692),m=t(5893);function h(e){let{toc:n,className:t,linkClassName:i,isChild:r}=e;return n.length?(0,m.jsx)("ul",{className:r?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:"#"+e.id,className:null!=i?i:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}var f=i.memo(h);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const g=(0,r.L)(),x=null!=c?c:g.tableOfContents.minHeadingLevel,v=null!=u?u:g.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,i.useMemo)((()=>a({toc:s(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}({toc:n,minHeadingLevel:x,maxHeadingLevel:v});return d((0,i.useMemo)((()=>{if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:x,maxHeadingLevel:v}}),[o,l,x,v])),(0,m.jsx)(f,{toc:p,className:t,linkClassName:o,...h})}},4061:function(e,n,t){t.d(n,{T$:function(){return l},cI:function(){return a},eU:function(){return o},ht:function(){return c},xo:function(){return d}});t(7294);var i=t(5999),r=t(5742),s=t(5893);function a(){return(0,s.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,s.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,s.jsx)(r.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,s.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},3945:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(7294),r=t(9286),s=t(5893);function a(e){const[n,t]=(0,i.useState)(""),[a,o]=(0,i.useState)(""),[l,c]=(0,i.useState)("");(0,i.useEffect)((()=>{console.log("getting keys");const e=new URLSearchParams(window.location.search);console.log(e),t(e.get("key")||""),o(e.get("formKey")||""),c(e.get("searchKey")||"")}),[]);const d=/YOUR_(CHAT|FORM|SEARCH)_KEY/g,u="string"==typeof e.children&&d.test(e.children)?e.children.match(d)[0]:"",m=!!u;let h;switch(u){case"YOUR_CHAT_KEY":h=n;break;case"YOUR_FORM_KEY":h=a;break;case"YOUR_SEARCH_KEY":h=l;break;default:h=""}const f="string"==typeof e.children&&h?e.children.replace(u,h):e.children;let g;return m&&h?g="Note! This snippet is customized for your widget. No modification needed.":m&&!h&&(g='Note! Please replace "'+u+'" with your actual widget key.'),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{...e,children:f}),g?(0,s.jsx)("p",{style:{marginTop:"1rem",textAlign:"center",fontWeight:"bold",fontSize:"small"},children:g}):(0,s.jsx)(s.Fragment,{})]})}},2326:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(7811),r=t(7294),s="browserFrame_cnZP",a="browserCircle_XvYD",o="red_Z2sz",l="yellow_aTLp",c="green_T2Fv",d=t(5893);var u=e=>{let{children:n}=e;return(0,d.jsxs)("div",{className:s,children:[(0,d.jsx)("div",{className:a+" "+o}),(0,d.jsx)("div",{className:a+" "+l}),(0,d.jsx)("div",{className:a+" "+c}),n]})},m=t(3945);var h=()=>{const[e,n]=(0,r.useState)(""),[t,i]=(0,r.useState)(""),[s,a]=(0,r.useState)("");return(0,r.useEffect)((()=>{console.log("getting keys");const e=new URLSearchParams(window.location.search);console.log(e),n(e.get("key")||""),i(e.get("formKey")||""),a(e.get("searchKey")||"")}),[]),(0,d.jsxs)(d.Fragment,{children:[e&&(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Chat Widget Key"}),(0,d.jsx)(m.Z,{children:""+e})]}),t&&(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Scheduling/Form Widget Key"}),(0,d.jsx)(m.Z,{children:""+t})]}),s&&(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Search Widget Key"}),(0,d.jsx)(m.Z,{children:""+s})]})]})},f={...i.Z,BrowserFrame:u,KeyDisplay:h}}}]);