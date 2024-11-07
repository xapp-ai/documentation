"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[3249],{3858:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(6540);var s=n(4164),i=n(1213),a=n(7559),r=n(4096),o=n(8027),l=n(1240),c=n(1312),d=n(9022),u=n(4848);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.A,{...n,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,u.jsx)(d.A,{...t,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function h(){const{assets:e,metadata:t}=(0,r.e7)(),{title:n,description:s,date:a,tags:o,authors:l,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(i.be,{title:c.title_meta??n,description:s,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:a}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var g=n(5260);function f(){const e=(0,r.J_)();return(0,u.jsx)(g.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=n(7763),v=n(1689);function p(e){let{sidebar:t,children:n}=e;const{metadata:s,toc:i}=(0,r.e7)(),{nextItem:a,prevItem:c,frontMatter:d}=s,{hide_table_of_contents:h,toc_min_heading_level:g,toc_max_heading_level:f}=d;return(0,u.jsxs)(o.A,{sidebar:t,toc:!h&&i.length>0?(0,u.jsx)(x.A,{toc:i,minHeadingLevel:g,maxHeadingLevel:f}):void 0,children:[(0,u.jsx)(v.A,{metadata:s}),(0,u.jsx)(l.A,{children:n}),(a||c)&&(0,u.jsx)(m,{nextItem:a,prevItem:c})]})}function j(e){const t=e.content;return(0,u.jsx)(r.in,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(i.e3,{className:(0,s.A)(a.G.wrapper.blogPages,a.G.page.blogPostPage),children:[(0,u.jsx)(h,{}),(0,u.jsx)(f,{}),(0,u.jsx)(p,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},2234:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var s=n(4164),i=n(4084),a=n(7559),r=n(7293),o=n(4848);function l(e){let{className:t}=e;return(0,o.jsx)(r.A,{type:"caution",title:(0,o.jsx)(i.Rc,{}),className:(0,s.A)(t,a.G.common.unlistedBanner),children:(0,o.jsx)(i.Uh,{})})}function c(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.AE,{}),(0,o.jsx)(l,{...e})]})}},1689:(e,t,n)=>{n.d(t,{A:()=>d});n(6540);var s=n(4164),i=n(4084),a=n(7559),r=n(7293),o=n(4848);function l(e){let{className:t}=e;return(0,o.jsx)(r.A,{type:"caution",title:(0,o.jsx)(i.Yh,{}),className:(0,s.A)(t,a.G.common.draftBanner),children:(0,o.jsx)(i.TT,{})})}var c=n(2234);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,o.jsxs)(o.Fragment,{children:[(n||s.unlisted)&&(0,o.jsx)(c.A,{}),s.draft&&(0,o.jsx)(l,{})]})}},7763:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var s=n(4164),i=n(5195);const a={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=n(4848);const o="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,s.A)(a.tableOfContents,"thin-scrollbar",t),children:(0,r.jsx)(i.A,{...n,linkClassName:o,linkActiveClassName:l})})}},5195:(e,t,n)=>{n.d(t,{A:()=>f});var s=n(6540),i=n(6342);function a(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):s.push(i)})),s}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>o(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:i,minHeadingLevel:a,maxHeadingLevel:r}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let i=t;i<=n;i+=1)s.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:r}),c=l(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(8774),m=n(4848);function h(e){let{toc:t,className:n,linkClassName:s,isChild:i}=e;return t.length?(0,m.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const g=s.memo(h);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const f=(0,i.p)(),x=c??f.tableOfContents.minHeadingLevel,v=u??f.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,s.useMemo)((()=>r({toc:a(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:x,maxHeadingLevel:v});return d((0,s.useMemo)((()=>{if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:x,maxHeadingLevel:v}}),[o,l,x,v])),(0,m.jsx)(g,{toc:p,className:n,linkClassName:o,...h})}},4084:(e,t,n)=>{n.d(t,{AE:()=>l,Rc:()=>r,TT:()=>d,Uh:()=>o,Yh:()=>c});n(6540);var s=n(1312),i=n(5260),a=n(4848);function r(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,a.jsx)(i.A,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},6334:(e,t,n)=>{n.d(t,{A:()=>r});var s=n(6540),i=n(1432),a=n(4848);function r(e){const[t,n]=(0,s.useState)(""),[r,o]=(0,s.useState)(""),[l,c]=(0,s.useState)("");(0,s.useEffect)((()=>{console.log("getting keys");const e=new URLSearchParams(window.location.search);console.log(e),n(e.get("key")||""),o(e.get("formKey")||""),c(e.get("searchKey")||"")}),[]);const d=/YOUR_(CHAT|FORM|SEARCH)_KEY/g,u="string"==typeof e.children&&d.test(e.children)?e.children.match(d)[0]:"",m=!!u;let h;switch(u){case"YOUR_CHAT_KEY":h=t;break;case"YOUR_FORM_KEY":h=r;break;case"YOUR_SEARCH_KEY":h=l;break;default:h=""}const g="string"==typeof e.children&&h?e.children.replace(u,h):e.children;let f;return m&&h?f="Note! This snippet is customized for your widget. No modification needed.":m&&!h&&(f=`Note! Please replace "${u}" with your actual widget key.`),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{...e,children:g}),f?(0,a.jsx)("p",{style:{marginTop:"1rem",textAlign:"center",fontWeight:"bold",fontSize:"small"},children:f}):(0,a.jsx)(a.Fragment,{})]})}},8424:(e,t,n)=>{n.d(t,{A:()=>g});var s=n(1278),i=n(6540);const a="browserFrame_cnZP",r="browserCircle_XvYD",o="red_Z2sz",l="yellow_aTLp",c="green_T2Fv";var d=n(4848);const u=e=>{let{children:t}=e;return(0,d.jsxs)("div",{className:a,children:[(0,d.jsx)("div",{className:`${r} ${o}`}),(0,d.jsx)("div",{className:`${r} ${l}`}),(0,d.jsx)("div",{className:`${r} ${c}`}),t]})};var m=n(6334);const h=()=>{const[e,t]=(0,i.useState)(""),[n,s]=(0,i.useState)(""),[a,r]=(0,i.useState)("");return(0,i.useEffect)((()=>{console.log("getting keys");const e=new URLSearchParams(window.location.search);console.log(e),t(e.get("key")||""),s(e.get("formKey")||""),r(e.get("searchKey")||"")}),[]),(0,d.jsxs)(d.Fragment,{children:[e&&(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Chat Widget Key"}),(0,d.jsx)(m.A,{children:`${e}`})]}),n&&(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Scheduling/Form Widget Key"}),(0,d.jsx)(m.A,{children:`${n}`})]}),a&&(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Search Widget Key"}),(0,d.jsx)(m.A,{children:`${a}`})]})]})},g={...s.A,BrowserFrame:u,KeyDisplay:h}}}]);