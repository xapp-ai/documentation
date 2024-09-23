"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[4013],{3548:function(e,t,n){n.d(t,{n4:function(){return c},Ne:function(){return P},ci:function(){return _},CS:function(){return f},wj:function(){return l},nO:function(){return u},iZ:function(){return b},cH:function(){return y}});var a=n(7294),s=n(902),r=n(5102),i=n(5893);function l(){var e;const t=(0,r.Z)(),n=null==t||null==(e=t.data)?void 0:e.blogMetadata;if(!n)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return n}const o=a.createContext(null);function c(e){let{children:t,content:n,isBlogPostPage:s=!1}=e;const r=function(e){let{content:t,isBlogPostPage:n}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:s});return(0,i.jsx)(o.Provider,{value:r,children:t})}function u(){const e=(0,a.useContext)(o);if(null===e)throw new s.i6("BlogPostProvider");return e}var d=n(4996),m=n(2263);const g=e=>new Date(e).toISOString();function h(e){const t=e.map(j);return{author:1===t.length?t[0]:t}}function p(e,t,n){return e?{image:x({imageUrl:t(e,{absolute:!0}),caption:"title image for the blog post: "+n})}:{}}function f(e){const{siteConfig:t}=(0,m.Z)(),{withBaseUrl:n}=(0,d.Cg)(),{metadata:{blogDescription:a,blogTitle:s,permalink:r}}=e,i=""+t.url+r;return{"@context":"https://schema.org","@type":"Blog","@id":i,mainEntityOfPage:i,headline:s,description:a,blogPost:e.items.map((e=>function(e,t,n){var a,s;const{assets:r,frontMatter:i,metadata:l}=e,{date:o,title:c,description:u,lastUpdatedAt:d}=l,m=null!=(a=r.image)?a:i.image,f=null!=(s=i.keywords)?s:[],b=""+t.url+l.permalink,j=d?g(d):void 0;return{"@type":"BlogPosting","@id":b,mainEntityOfPage:b,url:b,headline:c,name:c,description:u,datePublished:o,...j?{dateModified:j}:{},...h(l.authors),...p(m,n,c),...f?{keywords:f}:{}}}(e.content,t,n)))}}function b(){var e,t;const n=l(),{assets:a,metadata:s}=u(),{siteConfig:r}=(0,m.Z)(),{withBaseUrl:i}=(0,d.Cg)(),{date:o,title:c,description:f,frontMatter:b,lastUpdatedAt:j}=s,x=null!=(e=a.image)?e:b.image,v=null!=(t=b.keywords)?t:[],N=j?g(j):void 0,C=""+r.url+s.permalink;return{"@context":"https://schema.org","@type":"BlogPosting","@id":C,mainEntityOfPage:C,url:C,headline:c,name:c,description:f,datePublished:o,...N?{dateModified:N}:{},...h(s.authors),...p(x,i,c),...v?{keywords:v}:{},isPartOf:{"@type":"Blog","@id":""+r.url+n.blogBasePath,name:n.blogTitle}}}function j(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function x(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}var v=n(6550),N=n(3692),C=n(7392),k=n(8596);function y(e){const{pathname:t}=(0,v.TH)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,k.Mg)(e.permalink,t))}(e,t)))),[e,t])}function _(e){const t=(0,C.vM)(e,(e=>""+new Date(e.date).getFullYear())),n=Object.entries(t);return n.reverse(),n}function P(e){let{items:t,ulClassName:n,liClassName:a,linkClassName:s,linkActiveClassName:r}=e;return(0,i.jsx)("ul",{className:n,children:t.map((e=>(0,i.jsx)("li",{className:a,children:(0,i.jsx)(N.Z,{isNavLink:!0,to:e.permalink,className:s,activeClassName:r,children:e.title})},e.permalink)))})}},1059:function(e,t,n){n.d(t,{Z:function(){return L}});var a=n(7294),s=n(6905),r=n(9410),i=n(7524),l=n(5999),o=n(3548),c=n(6668),u=n(2503),d=n(5893);function m(e){let{year:t,yearGroupHeadingClassName:n,children:a}=e;return(0,d.jsxs)("div",{role:"group",children:[(0,d.jsx)(u.Z,{as:"h3",className:n,children:t}),a]})}function g(e){let{items:t,yearGroupHeadingClassName:n,ListComponent:a}=e;if((0,c.L)().blog.sidebar.groupByYear){const e=(0,o.ci)(t);return(0,d.jsx)(d.Fragment,{children:e.map((e=>{let[t,s]=e;return(0,d.jsx)(m,{year:t,yearGroupHeadingClassName:n,children:(0,d.jsx)(a,{items:s})},t)}))})}return(0,d.jsx)(a,{items:t})}var h=(0,a.memo)(g),p="sidebar_re4s",f="sidebarItemTitle_pO2u",b="sidebarItemList_Yudw",j="sidebarItem__DBe",x="sidebarItemLink_mo7H",v="sidebarItemLinkActive_I1ZP",N="yearGroupHeading_rMGB";const C=e=>{let{items:t}=e;return(0,d.jsx)(o.Ne,{items:t,ulClassName:(0,s.Z)(b,"clean-list"),liClassName:j,linkClassName:x,linkActiveClassName:v})};function k(e){let{sidebar:t}=e;const n=(0,o.cH)(t.items);return(0,d.jsx)("aside",{className:"col col--3",children:(0,d.jsxs)("nav",{className:(0,s.Z)(p,"thin-scrollbar"),"aria-label":(0,l.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,d.jsx)("div",{className:(0,s.Z)(f,"margin-bottom--md"),children:t.title}),(0,d.jsx)(h,{items:n,ListComponent:C,yearGroupHeadingClassName:N})]})})}var y=(0,a.memo)(k),_=n(3102),P={yearGroupHeading:"yearGroupHeading_QT03"};const Z=e=>{let{items:t}=e;return(0,d.jsx)(o.Ne,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function w(e){let{sidebar:t}=e;const n=(0,o.cH)(t.items);return(0,d.jsx)(h,{items:n,ListComponent:Z,yearGroupHeadingClassName:P.yearGroupHeading})}function B(e){return(0,d.jsx)(_.Zo,{component:w,props:e})}var H=(0,a.memo)(B);function M(e){let{sidebar:t}=e;const n=(0,i.i)();return null!=t&&t.items.length?"mobile"===n?(0,d.jsx)(H,{sidebar:t}):(0,d.jsx)(y,{sidebar:t}):null}function L(e){const{sidebar:t,toc:n,children:a,...i}=e,l=t&&t.items.length>0;return(0,d.jsx)(r.Z,{...i,children:(0,d.jsx)("div",{className:"container margin-vert--lg",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)(M,{sidebar:t}),(0,d.jsx)("main",{className:(0,s.Z)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:a}),n&&(0,d.jsx)("div",{className:"col col--2",children:n})]})})})}},1223:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});n(7294);var a=n(6905),s=n(5999);const r=()=>(0,s.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var i=n(8264),l=n(5281),o=n(1059),c=n(3008),u=n(2503),d={tag:"tag_Nnez"},m=n(5893);function g(e){let{letterEntry:t}=e;return(0,m.jsxs)("article",{children:[(0,m.jsx)(u.Z,{as:"h2",id:t.letter,children:t.letter}),(0,m.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,m.jsx)("li",{className:d.tag,children:(0,m.jsx)(c.Z,{...e})},e.permalink)))}),(0,m.jsx)("hr",{})]})}function h(e){let{tags:t}=e;const n=function(e){const t={};return Object.values(e).forEach((e=>{const n=function(e){return e[0].toUpperCase()}(e.label);null!=t[n]||(t[n]=[]),t[n].push(e)})),Object.entries(t).sort(((e,t)=>{let[n]=e,[a]=t;return n.localeCompare(a)})).map((e=>{let[t,n]=e;return{letter:t,tags:n.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,m.jsx)("section",{className:"margin-vert--lg",children:n.map((e=>(0,m.jsx)(g,{letterEntry:e},e.letter)))})}var p=n(197);function f(e){let{tags:t,sidebar:n}=e;const s=r();return(0,m.jsxs)(i.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogTagsListPage),children:[(0,m.jsx)(i.d,{title:s}),(0,m.jsx)(p.Z,{tag:"blog_tags_list"}),(0,m.jsxs)(o.Z,{sidebar:n,children:[(0,m.jsx)(u.Z,{as:"h1",children:s}),(0,m.jsx)(h,{tags:t})]})]})}},3008:function(e,t,n){n.d(t,{Z:function(){return l}});n(7294);var a=n(6905),s=n(3692),r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"},i=n(5893);function l(e){let{permalink:t,label:n,count:l,description:o}=e;return(0,i.jsxs)(s.Z,{href:t,title:o,className:(0,a.Z)(r.tag,l?r.tagWithCount:r.tagRegular),children:[n,l&&(0,i.jsx)("span",{children:l})]})}}}]);