"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[4013],{1460:function(e,t,s){s.d(t,{Z:function(){return f}});var a=s(7294),i=s(6905),n=s(9410),r=s(7524),l=s(9960),c=s(5999),o=s(6550),d=s(8596);function m(e){const{pathname:t}=(0,o.TH)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.Mg)(e.permalink,t))}(e,t)))),[e,t])}var u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"},g=s(5893);function h(e){let{sidebar:t}=e;const s=m(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,i.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,i.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,i.Z)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var b=s(3102);function p(e){let{sidebar:t}=e;const s=m(t.items);return(0,g.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,g.jsx)(b.Zo,{component:p,props:e})}function x(e){let{sidebar:t}=e;const s=(0,r.i)();return null!=t&&t.items.length?"mobile"===s?(0,g.jsx)(j,{sidebar:t}):(0,g.jsx)(h,{sidebar:t}):null}function f(e){const{sidebar:t,toc:s,children:a,...r}=e,l=t&&t.items.length>0;return(0,g.jsx)(n.Z,{...r,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(x,{sidebar:t}),(0,g.jsx)("main",{className:(0,i.Z)("col",{"col--7":l,"col--9 col--offset-1":!l}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),s&&(0,g.jsx)("div",{className:"col col--2",children:s})]})})})}},1223:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});s(7294);var a=s(6905),i=s(5999);const n=()=>(0,i.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var r=s(1944),l=s(5281),c=s(1460),o=s(3008),d=s(2503),m={tag:"tag_Nnez"},u=s(5893);function g(e){let{letterEntry:t}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(d.Z,{as:"h2",id:t.letter,children:t.letter}),(0,u.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,u.jsx)("li",{className:m.tag,children:(0,u.jsx)(o.Z,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function h(e){let{tags:t}=e;const s=function(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);null!=t[s]||(t[s]=[]),t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,u.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,u.jsx)(g,{letterEntry:e},e.letter)))})}var b=s(197);function p(e){let{tags:t,sidebar:s}=e;const i=n();return(0,u.jsxs)(r.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogTagsListPage),children:[(0,u.jsx)(r.d,{title:i}),(0,u.jsx)(b.Z,{tag:"blog_tags_list"}),(0,u.jsxs)(c.Z,{sidebar:s,children:[(0,u.jsx)(d.Z,{as:"h1",children:i}),(0,u.jsx)(h,{tags:t})]})]})}},3008:function(e,t,s){s.d(t,{Z:function(){return l}});s(7294);var a=s(6905),i=s(9960),n={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"},r=s(5893);function l(e){let{permalink:t,label:s,count:l}=e;return(0,r.jsxs)(i.Z,{href:t,className:(0,a.Z)(n.tag,l?n.tagWithCount:n.tagRegular),children:[s,l&&(0,r.jsx)("span",{children:l})]})}}}]);