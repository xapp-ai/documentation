"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[8343],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,f=c["".concat(l,".").concat(g)]||c[g]||u[g]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1842:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={title:"Widget Installation on Wordpress"},l=void 0,p={unversionedId:"channels/widget/install-wordpress",id:"channels/widget/install-wordpress",title:"Widget Installation on Wordpress",description:"For installation of a chat widget on Wordpress, we recommend leveraging a plugin that allows you to add custom HTML snippets in either the head tag or right before the closing `` tag (sometimes referred to as the footer).  These plugins are typically used for installed third-party scripts like Google Tag Manager.",source:"@site/docs/channels/widget/install-wordpress.md",sourceDirName:"channels/widget",slug:"/channels/widget/install-wordpress",permalink:"/docs/channels/widget/install-wordpress",draft:!1,editUrl:"https://github.com/xapp-ai/documentation/edit/main/docs/channels/widget/install-wordpress.md",tags:[],version:"current",frontMatter:{title:"Widget Installation on Wordpress"}},d={},c=[{value:"Finding your Widget&#39;s Code Snippet",id:"finding-your-widgets-code-snippet",level:2},{value:"Installing in Wordpress Plugin",id:"installing-in-wordpress-plugin",level:2}],u={toc:c},g="wrapper";function f(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)(g,(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For installation of a chat widget on Wordpress, we recommend leveraging a plugin that allows you to add custom HTML snippets in either the head tag or right before the closing ",(0,i.kt)("inlineCode",{parentName:"p"},"</body>")," tag (sometimes referred to as the footer).  These plugins are typically used for installed third-party scripts like Google Tag Manager."),(0,i.kt)("p",null,"Potential plugins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wordpress.org/plugins/header-footer/"},"Head, Footer and Post Injections")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wordpress.org/plugins/header-footer-code-manager/"},"Header Footer Code Manager"))),(0,i.kt)("p",null,"With the plugin, you can then copy your installation snippet for you widget to the plugin's settings page."),(0,i.kt)("h2",{id:"finding-your-widgets-code-snippet"},"Finding your Widget's Code Snippet"),(0,i.kt)("p",null,"To find your widget's code snippet, go to the widgets channel page (under Publish --\x3e Channels) and click the puzzle piece icon in the widget's header."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"find installation snippet",src:n(5792).Z,width:"1260",height:"884"})),(0,i.kt)("h2",{id:"installing-in-wordpress-plugin"},"Installing in Wordpress Plugin"),(0,i.kt)("p",null,"Once the plugin is installed, go to it's settings page and paste the snippet to the section "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"install before closing body tag",src:n(2624).Z,width:"1844",height:"998"})),(0,i.kt)("p",null,"The screenshot above is for the ",(0,i.kt)("a",{parentName:"p",href:"https://wordpress.org/plugins/header-footer/"},"Head, Footer and Post Injections")," plugin."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"While the JS the snippet loads is optimized and hosted on a CDN, we recommend placing it at the bottom of the HTML, before the closing ",(0,i.kt)("inlineCode",{parentName:"p"},"</body>")," tag, to prevent it from blocking any other portions of your website.")))}f.isMDXComponent=!0},5792:function(e,t,n){t.Z=n.p+"assets/images/find-code-snippet-459ab14a67bc8d2b87d5ae52a1f9d371.gif"},2624:function(e,t,n){t.Z=n.p+"assets/images/install-wordpress-header-footer-85e0954c6deb261e14721e9dc1730133.png"}}]);