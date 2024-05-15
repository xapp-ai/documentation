"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[7716],{8729:function(e,n,i){i.r(n),i.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return l},metadata:function(){return r},toc:function(){return a}});var t=i(5893),s=i(1151);const l={title:"Installation on Joomla",sidebar_label:"Joomla"},o=void 0,r={id:"install/joomla",title:"Installation on Joomla",description:"This guide will walk you through the process of adding the XAPP Chat Widget to your Joomla website. It's important to place the JavaScript snippet right before the closing `` tag in your Joomla template or module to ensure it appears on every page.",source:"@site/help/install/joomla.md",sourceDirName:"install",slug:"/install/joomla",permalink:"/help/install/joomla",draft:!1,unlisted:!1,editUrl:"https://github.com/xapp-ai/documentation/edit/main/help/install/joomla.md",tags:[],version:"current",frontMatter:{title:"Installation on Joomla",sidebar_label:"Joomla"},sidebar:"help",previous:{title:"Drupal",permalink:"/help/install/drupal"},next:{title:"GoDaddy",permalink:"/help/install/godaddy"}},c={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation Steps",id:"installation-steps",level:2},{value:"Option 1: Adding to the Template",id:"option-1-adding-to-the-template",level:3},{value:"Option 2: Using a Custom HTML Module",id:"option-2-using-a-custom-html-module",level:3},{value:"Verifying the Installation",id:"verifying-the-installation",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This guide will walk you through the process of adding the XAPP Chat Widget to your Joomla website. It's important to place the JavaScript snippet right before the closing ",(0,t.jsx)(n.code,{children:"</body>"})," tag in your Joomla template or module to ensure it appears on every page."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Administrative access to your Joomla site."}),"\n",(0,t.jsxs)(n.li,{children:["Your unique ",(0,t.jsx)(n.code,{children:"key"})," for the XAPP Chat Widget."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installation-steps",children:"Installation Steps"}),"\n",(0,t.jsx)(n.h3,{id:"option-1-adding-to-the-template",children:"Option 1: Adding to the Template"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Access the Template Editor"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Log in to your Joomla administrator panel."}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.code,{children:"Extensions"})," > ",(0,t.jsx)(n.code,{children:"Templates"})," > ",(0,t.jsx)(n.code,{children:"Templates"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Click on your current template's name to edit it."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Edit the HTML"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In the template editor, locate the ",(0,t.jsx)(n.code,{children:"index.php"})," file."]}),"\n",(0,t.jsxs)(n.li,{children:["Scroll to the bottom of this file and find the closing ",(0,t.jsx)(n.code,{children:"</body>"})," tag."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Insert the JavaScript Snippets"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Insert the following snippets just before the closing ",(0,t.jsx)(n.code,{children:"</body>"})," tag:"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Chat Snippet"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<script\n  id="xapp-js"\n  src="https://widget.xapp.ai/xapp-chat-widget.js?key=YOUR_CHAT_KEY"\n><\/script>\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Form / Scheduler Snippet"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<script\n  id="xapp-form-js"\n  src="https://form.xapp.ai/xapp-form-widget.js?key=YOUR_FORM_KEY"\n><\/script>\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Search Snippet"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<script\n  id="xapp-search-js"\n  src="https://search.xapp.ai/xapp-search-bar.js?key=YOUR_SEARCH_KEY"\n><\/script>\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.p,{children:["For the ",(0,t.jsx)(n.strong,{children:"search"})," bar, you will also need to setup a button on your website to trigger the search bar pop over, please see these ",(0,t.jsx)(n.a,{href:"/help/channels/intelligent-search#triggering-search-with-a-button-press",children:"instructions"}),"."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Save Changes"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Save"})," or ",(0,t.jsx)(n.code,{children:"Save & Close"})," to apply the changes."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"option-2-using-a-custom-html-module",children:"Option 2: Using a Custom HTML Module"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Create a New Module"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.code,{children:"Extensions"})," > ",(0,t.jsx)(n.code,{children:"Modules"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"New"})," and select ",(0,t.jsx)(n.code,{children:"Custom HTML"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Add the JavaScript Snippet"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In the Custom HTML module, paste the JavaScript snippet:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<script\n  id="xapp-js"\n  src="https://widget.xapp.ai/xapp-chat-widget.js?key=YOUR_UNIQUE_KEY"\n><\/script>\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Replace ",(0,t.jsx)(n.code,{children:"YOUR_UNIQUE_KEY"})," with your provided key."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Configure the Module"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Assign the module to a position that is active on all pages, typically ",(0,t.jsx)(n.code,{children:"debug"})," or a similar position."]}),"\n",(0,t.jsxs)(n.li,{children:["Set the status to ",(0,t.jsx)(n.code,{children:"Published"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Assign to ",(0,t.jsx)(n.code,{children:"All Pages"})," under ",(0,t.jsx)(n.code,{children:"Menu Assignment"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Save and Publish"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Save"})," or ",(0,t.jsx)(n.code,{children:"Save & Close"})," to activate the module."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"verifying-the-installation",children:"Verifying the Installation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Visit your website to confirm the XAPP Chat Widget appears and functions correctly on all pages."}),"\n",(0,t.jsx)(n.li,{children:"If the widget does not appear, check if the unique key is correctly inserted and if the module/template changes are saved."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Widget Not Displaying"}),": Ensure the module is published, assigned to all pages, and the ",(0,t.jsx)(n.code,{children:"key"})," is correct."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Check for Conflicts"}),": Sometimes, other extensions or scripts can conflict with the widget. Check for JavaScript errors in the browser's console."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For further assistance or if you encounter any issues, contact XAPP support."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return o}});var t=i(7294);const s={},l=t.createContext(s);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);