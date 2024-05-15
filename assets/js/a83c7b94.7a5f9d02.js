"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[3239],{3370:function(e,n,i){i.r(n),i.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return a},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return h}});var s=i(5893),t=i(1151);const r={title:"Installation on Shopify",sidebar_label:"Shopify"},l=void 0,o={id:"install/shopify",title:"Installation on Shopify",description:"This guide will help you add the XAPP Chat Widget to your Shopify store.",source:"@site/help/install/shopify.md",sourceDirName:"install",slug:"/install/shopify",permalink:"/help/install/shopify",draft:!1,unlisted:!1,editUrl:"https://github.com/xapp-ai/documentation/edit/main/help/install/shopify.md",tags:[],version:"current",frontMatter:{title:"Installation on Shopify",sidebar_label:"Shopify"},sidebar:"help",previous:{title:"Wix",permalink:"/help/install/wix"},next:{title:"Squarespace",permalink:"/help/install/squarespace"}},c={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation Steps",id:"installation-steps",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This guide will help you add the XAPP Chat Widget to your Shopify store."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Access to your Shopify admin panel."}),"\n",(0,s.jsxs)(n.li,{children:["Your unique ",(0,s.jsx)(n.code,{children:"key"})," for the XAPP Chat Widget."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation-steps",children:"Installation Steps"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Edit Your Theme"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In your Shopify admin, go to ",(0,s.jsx)(n.code,{children:"Online Store"})," > ",(0,s.jsx)(n.code,{children:"Themes"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Find your current theme and click ",(0,s.jsx)(n.code,{children:"Actions"})," > ",(0,s.jsx)(n.code,{children:"Edit code"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Modify the Theme.liquid File"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In the theme editor, open the ",(0,s.jsx)(n.code,{children:"theme.liquid"})," file."]}),"\n",(0,s.jsxs)(n.li,{children:["Find the closing ",(0,s.jsx)(n.code,{children:"</body>"})," tag."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Insert the JavaScript Snippets"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add the following snippets just before the closing ",(0,s.jsx)(n.code,{children:"</body>"})," tag:"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Chat Snippet"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script\n  id="xapp-js"\n  src="https://widget.xapp.ai/xapp-chat-widget.js?key=YOUR_CHAT_KEY"\n><\/script>\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Form / Scheduler Snippet"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script\n  id="xapp-form-js"\n  src="https://form.xapp.ai/xapp-form-widget.js?key=YOUR_FORM_KEY"\n><\/script>\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Search Snippet"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script\n  id="xapp-search-js"\n  src="https://search.xapp.ai/xapp-search-bar.js?key=YOUR_SEARCH_KEY"\n><\/script>\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsxs)(n.p,{children:["For the ",(0,s.jsx)(n.strong,{children:"search"})," bar, you will also need to setup a button on your website to trigger the search bar pop over, please see these ",(0,s.jsx)(n.a,{href:"/help/channels/intelligent-search#triggering-search-with-a-button-press",children:"instructions"}),"."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Save the Changes"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Save"})," to apply your changes."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Verify Installation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Preview your store to check if the XAPP Chat Widget is appearing correctly."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Widget Not Displaying"}),": Confirm the snippet's placement and the correct key."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Check for Theme Conflicts"}),": Some themes may have specific settings or scripts that interfere with new widgets."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For further assistance, contact XAPP support."})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return l}});var s=i(7294);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);