"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[8610],{9703:function(e,t,n){n.d(t,{Z:function(){return a}});n(7294);var s=n(5999),i=n(2244),r=n(5893);function a(e){const{metadata:t}=e,{previousPage:n,nextPage:a}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(i.Z,{permalink:n,title:(0,r.jsx)(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),a&&(0,r.jsx)(i.Z,{permalink:a,title:(0,r.jsx)(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9985:function(e,t,n){n.d(t,{Z:function(){return a}});n(7294);var s=n(9460),i=n(3665),r=n(5893);function a(e){let{items:t,component:n=i.Z}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(s.n,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},1714:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});n(7294);var s=n(6905),i=n(5999),r=n(8824),a=n(8264),l=n(5281),o=n(3692),c=n(1460),d=n(9703),g=n(197),u=n(9985),h=n(2212),p=n(2503),m=n(5893);function x(e){const t=function(){const{selectMessage:e}=(0,r.c)();return t=>e(t,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const n=x(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.d,{title:n,description:t.description}),(0,m.jsx)(g.Z,{tag:"blog_tags_posts"})]})}function f(e){let{tag:t,items:n,sidebar:s,listMetadata:r}=e;const a=x(t);return(0,m.jsxs)(c.Z,{sidebar:s,children:[t.unlisted&&(0,m.jsx)(h.Z,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.Z,{as:"h1",children:a}),t.description&&(0,m.jsx)("p",{children:t.description}),(0,m.jsx)(o.Z,{href:t.allTagsPath,children:(0,m.jsx)(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(u.Z,{items:n}),(0,m.jsx)(d.Z,{metadata:r})]})}function b(e){return(0,m.jsxs)(a.FG,{className:(0,s.Z)(l.k.wrapper.blogPages,l.k.page.blogTagPostListPage),children:[(0,m.jsx)(j,{...e}),(0,m.jsx)(f,{...e})]})}},2212:function(e,t,n){n.d(t,{Z:function(){return h}});n(7294);var s=n(6905),i=n(5999),r=n(5742),a=n(5893);function l(){return(0,a.jsx)(i.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,a.jsx)(i.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,a.jsx)(r.Z,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(5281),g=n(9047);function u(e){let{className:t}=e;return(0,a.jsx)(g.Z,{type:"caution",title:(0,a.jsx)(l,{}),className:(0,s.Z)(t,d.k.common.unlistedBanner),children:(0,a.jsx)(o,{})})}function h(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c,{}),(0,a.jsx)(u,{...e})]})}},3945:function(e,t,n){n.d(t,{Z:function(){return a}});var s=n(7294),i=n(9286),r=n(5893);function a(e){const[t,n]=(0,s.useState)(""),[a,l]=(0,s.useState)(""),[o,c]=(0,s.useState)("");(0,s.useEffect)((()=>{console.log("getting keys");const e=new URLSearchParams(window.location.search);console.log(e),n(e.get("key")||""),l(e.get("formKey")||""),c(e.get("searchKey")||"")}),[]);const d=/YOUR_(CHAT|FORM|SEARCH)_KEY/g,g="string"==typeof e.children&&d.test(e.children)?e.children.match(d)[0]:"",u=!!g;let h;switch(g){case"YOUR_CHAT_KEY":h=t;break;case"YOUR_FORM_KEY":h=a;break;case"YOUR_SEARCH_KEY":h=o;break;default:h=""}const p="string"==typeof e.children&&h?e.children.replace(g,h):e.children;let m;return u&&h?m="Note! This snippet is customized for your widget. No modification needed.":u&&!h&&(m='Note! Please replace "'+g+'" with your actual widget key.'),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{...e,children:p}),m?(0,r.jsx)("p",{style:{marginTop:"1rem",textAlign:"center",fontWeight:"bold",fontSize:"small"},children:m}):(0,r.jsx)(r.Fragment,{})]})}},2326:function(e,t,n){n.d(t,{Z:function(){return p}});var s=n(7811),i=n(7294),r="browserFrame_cnZP",a="browserCircle_XvYD",l="red_Z2sz",o="yellow_aTLp",c="green_T2Fv",d=n(5893);var g=e=>{let{children:t}=e;return(0,d.jsxs)("div",{className:r,children:[(0,d.jsx)("div",{className:a+" "+l}),(0,d.jsx)("div",{className:a+" "+o}),(0,d.jsx)("div",{className:a+" "+c}),t]})},u=n(3945);var h=()=>{const[e,t]=(0,i.useState)(""),[n,s]=(0,i.useState)(""),[r,a]=(0,i.useState)("");return(0,i.useEffect)((()=>{console.log("getting keys");const e=new URLSearchParams(window.location.search);console.log(e),t(e.get("key")||""),s(e.get("formKey")||""),a(e.get("searchKey")||"")}),[]),(0,d.jsxs)(d.Fragment,{children:[e&&(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Chat Widget Key"}),(0,d.jsx)(u.Z,{children:""+e})]}),n&&(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Scheduling/Form Widget Key"}),(0,d.jsx)(u.Z,{children:""+n})]}),r&&(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Search Widget Key"}),(0,d.jsx)(u.Z,{children:""+r})]})]})},p={...s.Z,BrowserFrame:g,KeyDisplay:h}}}]);