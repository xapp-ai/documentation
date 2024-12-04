"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[3416],{8280:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"channels/channel-chat-widget","title":"Chat Widget - Advanced","description":"The chat widget is a channel provided by OC Studio that you can customize and embed on your website.  It is built to work alongside other text based input channels with built-in components such as cards, vertical lists, horizontal lists and suggestion chips.  Unique to OC Studio, it also has support for autocomplete suggestions.","source":"@site/docs/channels/channel-chat-widget.md","sourceDirName":"channels","slug":"/channels/channel-chat-widget","permalink":"/docs/channels/channel-chat-widget","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Chat Widget - Advanced","sidebar_label":"Chat Widget"},"sidebar":"docs","previous":{"title":"AWS Lex (V2) Channel","permalink":"/docs/channels/aws-lex"},"next":{"title":"Intelligent Search","permalink":"/docs/channels/channel-intelligent-search"}}');var o=t(4848),s=t(8453);const a={title:"Chat Widget - Advanced",sidebar_label:"Chat Widget"},d=void 0,r={},h=[{value:"Connecting to a Backend",id:"connecting-to-a-backend",level:2},{value:"Connecting to existing Lex Channel",id:"connecting-to-existing-lex-channel",level:3},{value:"Installing the Widget",id:"installing-the-widget",level:2},{value:"WordPress Plugin",id:"wordpress-plugin",level:3},{value:"Read More",id:"read-more",level:4},{value:"Script Tag",id:"script-tag",level:3},{value:"See Also",id:"see-also",level:4},{value:"React Library",id:"react-library",level:3},{value:"App Installation",id:"app-installation",level:4},{value:"Authenticated Users",id:"authenticated-users",level:2},{value:"Global Variable on window",id:"global-variable-on-window",level:3},{value:"React Parameter",id:"react-parameter",level:3},{value:"Configuring the Widget within Studio",id:"configuring-the-widget-within-studio",level:2},{value:"Share the Widget",id:"share-the-widget",level:3},{value:"Disabling your Widget",id:"disabling-your-widget",level:3},{value:"Modifying the Z-Index",id:"modifying-the-z-index",level:3},{value:"Read More",id:"read-more-1",level:4},{value:"Behavior of Opening URLs",id:"behavior-of-opening-urls",level:3},{value:"Recommendation - Assisted Navigation",id:"recommendation---assisted-navigation",level:4},{value:"Modifying the Host Application based on Widget Interactions",id:"modifying-the-host-application-based-on-widget-interactions",level:2},{value:"Register the Hook",id:"register-the-hook",level:3},{value:"Data on the Response",id:"data-on-the-response",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"The chat widget is a channel provided by OC Studio that you can customize and embed on your website.  It is built to work alongside other text based input channels with built-in components such as cards, vertical lists, horizontal lists and suggestion chips.  Unique to OC Studio, it also has support for autocomplete suggestions."}),"\n",(0,o.jsx)(n.p,{children:"You can configure nearly every aspect of the widget, including the styles, without needing a developer and is extensible to allow you to add your own custom components."}),"\n",(0,o.jsx)(n.h2,{id:"connecting-to-a-backend",children:"Connecting to a Backend"}),"\n",(0,o.jsx)(n.p,{children:"The chat widget requires a backend for it to communicate with. The widget has two primary modes of communication with a backend, either direct or through a web sockets server. The direct connection is expecting an endpoint that leverages stentor request & response models."}),"\n",(0,o.jsx)(n.h3,{id:"connecting-to-existing-lex-channel",children:"Connecting to existing Lex Channel"}),"\n",(0,o.jsx)(n.p,{children:"If you have an existing Lex Channel with a PostText URL, you can use this as your chat widgets server."}),"\n",(0,o.jsxs)(n.p,{children:["When you copy and paste the URL, you must post-fix the PostText URL with ",(0,o.jsx)(n.code,{children:"/studio"}),' and select "Direct Connection". For example, if you have a PostText URL of:']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"https://kfo7ubarz9t0.execute-api.us-east-1.amazonaws.com/prod\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then you want to append ",(0,o.jsx)(n.code,{children:"/studio"})," like so:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"https://kfo7ubarz9t0.execute-api.us-east-1.amazonaws.com/prod/studio\n"})}),"\n",(0,o.jsx)(n.h2,{id:"installing-the-widget",children:"Installing the Widget"}),"\n",(0,o.jsx)(n.p,{children:"There are three primary ways to install the widget on a website; WordPress plugin (where applicable), a script tag or through our React based library.  The script tag is quick and can typically be done without a developer and the React library will require a developer to integrate it with an existing web application.  With the script tag method, you are limited to the standard chat button component and widget overlayed on your content and the React library allow gives you much more control on how it is displayed."}),"\n",(0,o.jsx)(n.h3,{id:"wordpress-plugin",children:"WordPress Plugin"}),"\n",(0,o.jsx)(n.p,{children:"We provide a WordPress plugin that makes it easy to install the chat widget and intelligent search bar.  If you have a WordPress site, this is our recommended approach."}),"\n",(0,o.jsx)(n.h4,{id:"read-more",children:"Read More"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://wordpress.org/plugins/oc-studio-integration/",children:"OC Studio Integration Plugin"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/channels/wordpress-plugin",children:"How to install the WordPress Plugin"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"script-tag",children:"Script Tag"}),"\n",(0,o.jsx)(n.p,{children:"To install the widget with a script tag, go to your chat widget channel within OC Studio and click the puzzle piece icon in the header. Click on the text to copy it to your clipboard."}),"\n",(0,o.jsx)(n.p,{children:"It will look something like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<script\n  id="xapp-js"\n  src="https://widget.xapp.ai/xapp-chat-widget.js?key=your-unique-key"\n><\/script>\n'})}),"\n",(0,o.jsx)(n.p,{children:"The loaded script is self-contained and does not rely on loading of other elements so it can be placed near the bottom of the page to ensure nothing is blocking on load."}),"\n",(0,o.jsxs)(n.p,{children:["Add the copied snippet just inside the ",(0,o.jsx)(n.code,{children:"</body>"})," tag on the site you want the widget to appear on."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The script itself does not make any blocking network calls and does not depend on any other elements or scripts to load so you can safely place it anywhere. Placing it in right before the ",(0,o.jsx)(n.code,{children:"</body>"})," tag as opposed to within the ",(0,o.jsx)(n.code,{children:"<head>"})," tags provides a slight increase in page load."]})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"The script is hosted on a CDN however when making configuration updates, the first time loading the widget after a save will be slower than all subsequent calls as the cached scripted is invalidated and the cache updated."})}),"\n",(0,o.jsx)(n.h4,{id:"see-also",children:"See Also"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"widget/install-wordpress",children:"Installing the Widget on Wordpress Sites"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"react-library",children:"React Library"}),"\n",(0,o.jsx)(n.p,{children:"It is also possible to embed the widget in a React based web application, this will provide you with a more integrated look and feel however requires you to build and inject your own configuration."}),"\n",(0,o.jsx)(n.h4,{id:"app-installation",children:"App Installation"}),"\n",(0,o.jsx)(n.p,{children:"Add to your project:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm i @xapp/chat-widget redux-thunk redux react-redux --production --save\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'import { Chat as ChatWidget, WidgetEnv } from "@xapp/chat-widget";\nimport "@xapp/chat-widget/dist/index.css";\n\nconst config: WidgetEnv = {\n    connection: {\n        serverUrl: "",\n        type: "direct"\n    },\n};\n\nfunction RenderWidget() {\n    return <ChatWidget config={config} mode={"docked"} />;\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"The config has all the same parameters configured on the chat widget channel page however without the GUI for setting them."}),"\n",(0,o.jsxs)(n.p,{children:["When in ",(0,o.jsx)(n.code,{children:"docked"})," mode the widget will fill the space, height & width, given to it and be responsive to changes in dimensions."]}),"\n",(0,o.jsx)(n.h2,{id:"authenticated-users",children:"Authenticated Users"}),"\n",(0,o.jsx)(n.p,{children:"For applications where the widget is installed behind a login, you can set the user's unique user ID and access token on the widget so it is passed through to the assistant application.  It can then be used to retreive information specific to the authenticated user."}),"\n",(0,o.jsx)(n.p,{children:"The user ID and accessToken will be on every request to your applications runtime."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"\n    /**\n     * Optional ID that will be used for the user.  If not prevent\n     */\n    readonly userId?: string;\n    /**\n     * Optional access token that is passed to the backend and used for authenticated API calls.  This is for logged in users and is passed\n     * through on all requests to the assistant backend.\n     */\n    readonly accessToken?: string;\n    /**\n     * Optional attributes to append to each request.  \n     */\n    readonly attributes?: Record<string, string>;\n"})}),"\n",(0,o.jsx)(n.p,{children:"There are two primary methods to provide this information to the widget, a global variables on the browser's window object or by a React parameter (requires custom installation method)."}),"\n",(0,o.jsx)(n.h3,{id:"global-variable-on-window",children:"Global Variable on window"}),"\n",(0,o.jsxs)(n.p,{children:["You can configure the widget by modifying an object at ",(0,o.jsx)(n.code,{children:'window["xaConfig"]'}),".  The widget will look at this field on bootstraping.  To set the user's ID and access token:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:'window["xaConfig"] = {\n    userId: "123",\n    accessToken: "abc"\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"react-parameter",children:"React Parameter"}),"\n",(0,o.jsx)(n.p,{children:"If you have installed the widget as part of your React application using the React library, you can append the user ID and access token as part of the configuration."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'import { Chat as ChatWidget, WidgetEnv } from "@xapp/chat-widget";\nimport "@xapp/chat-widget/dist/index.css";\n\nconst config: WidgetEnv = {\n    connection: {\n        serverUrl: "",\n        type: "direct"\n    },\n    userId: "abc",\n    accessToken: "123",\n    // Custom attributes that will be be appended on every request\n    attributes: {\n        foo: "bar"\n    }\n};\n\nfunction RenderWidget() {\n    return <ChatWidget config={config} mode={"docked"} />;\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"configuring-the-widget-within-studio",children:"Configuring the Widget within Studio"}),"\n",(0,o.jsx)(n.p,{children:"If you are leveraging the script tag installation, you can configure the chat widget in OC Studio.  Leverage the split column view with the settings on the left and the widget preview on the right to make changes to parts of the widget and see it updated immediately before saving it.  Saving it will then update the configuration and you can preview it live with the preview link in the header."}),"\n",(0,o.jsx)(n.h3,{id:"share-the-widget",children:"Share the Widget"}),"\n",(0,o.jsx)(n.p,{children:"The preview link, found in the header of your chat widget channel configuration page, can be used to share the widget externally without requiring a login."}),"\n",(0,o.jsx)(n.h3,{id:"disabling-your-widget",children:"Disabling your Widget"}),"\n",(0,o.jsx)(n.p,{children:"You can disable the widget from being displayed after installation or when shared through the preview link by clicking the power button in the header of your chat widget channel configuration page."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"disable the widget",src:t(1290).A+"",width:"1319",height:"669"})}),"\n",(0,o.jsx)(n.h3,{id:"modifying-the-z-index",children:"Modifying the Z-Index"}),"\n",(0,o.jsx)(n.p,{children:"The z-index controls the level with which elements on a webpage are displayed.  Elements with higher z-index are displayed on top of elements with a lower z-index when they take up the same spot on the page.  If you open the widget and you see other parts of the website on top of the widget, you may need to adjust the z-index to make sure it is on top of the conflicting components."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"modify the z-index",src:t(9995).A+"",width:"1233",height:"926"})}),"\n",(0,o.jsx)(n.h4,{id:"read-more-1",children:"Read More"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",children:"z-index"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"behavior-of-opening-urls",children:"Behavior of Opening URLs"}),"\n",(0,o.jsx)(n.p,{children:"Hyperlinks will be surfaced from your widget through suggestion chips, list items and within content itself.  You can change the behavior of how they open and even set policies to define how some specific URLs open."}),"\n",(0,o.jsx)(n.h4,{id:"recommendation---assisted-navigation",children:"Recommendation - Assisted Navigation"}),"\n",(0,o.jsx)(n.p,{children:"An assisted navigation configuration will open links the widget is installed on in the same tab and others in a new tab.  This will allow the user to ask the widget questions, get answers and navigate to the answer while also keeping the widget open."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"assisted navigation",src:t(1437).A+"",width:"1019",height:"506"})}),"\n",(0,o.jsx)(n.p,{children:"Set the default to be New tab and then add a new policy that contains your website and its TLD and set the behavior to same window.  Any link that matches the URL regex policy will then open in the same window and all those that don't will open in a new tab."}),"\n",(0,o.jsx)(n.h2,{id:"modifying-the-host-application-based-on-widget-interactions",children:"Modifying the Host Application based on Widget Interactions"}),"\n",(0,o.jsxs)(n.p,{children:["During some interactions with the virtual assistant through the widget you may want to change more than just the ",(0,o.jsx)(n.a,{href:"/",children:"URL"})," and modifying specific elements on the page the user is on.  You can achieve this by passing in a hook to the ",(0,o.jsx)(n.code,{children:"WidgetEnv"})," config that is passed to the widget and then leveraging the custom ",(0,o.jsx)(n.code,{children:"data"})," field on the Response sent to the widget."]}),"\n",(0,o.jsx)(n.h3,{id:"register-the-hook",children:"Register the Hook"}),"\n",(0,o.jsxs)(n.p,{children:["Add the ",(0,o.jsx)(n.code,{children:"hooks"})," object with the ",(0,o.jsx)(n.code,{children:"onResponse"})," function to your ",(0,o.jsx)(n.code,{children:"WidgetEnv"})," config."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'import { Chat as ChatWidget, WidgetEnv } from "@xapp/chat-widget";\nimport "@xapp/chat-widget/dist/index.css";\n// This is important\nimport { Response } from "stentor-models";\n\nconst config: WidgetEnv = {\n    connection: {\n        serverUrl: "",\n        type: "direct"\n    },\n    hooks: {\n        onResponse: (response: Response) => {\n            console.log(\'Hook.onResponse\');\n            console.log(response);\n            console.log(response.data);\n        }\n    }\n};\n\nfunction RenderWidget() {\n    return <ChatWidget config={config} mode={"docked"} />;\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"data-on-the-response",children:"Data on the Response"}),"\n",(0,o.jsxs)(n.p,{children:["Within your custom handler, for responses that you want to then pass information to the widget's host application, you can set any metadata on the response using the ",(0,o.jsx)(n.code,{children:".data"})," field.  The widget will still display the output and display items, the entire response will be sent to the ",(0,o.jsx)(n.code,{children:"onResponse"})," hook and you can then parse the data field."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:'const response = getResponse(this, request, context);\n\nresponse.data = {\n    ["key"]: "123abc",\n    ["type"]: "custom request"\n};\n\ncontext.response.respond(response);\n'})}),"\n",(0,o.jsx)(n.p,{children:"You can define your own messaging protocol and append the metadata to the data field."})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},9995:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/widget-change-z-index-55215750fbff749c02687ab9495f16ce.gif"},1437:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/widget-url-behavior-assisted-navigation-44a93ab2e456c62abdc14c8b56c2ee5b.png"},1290:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/disable-the-widget-4657bda0add26c95da8d01109886953d.gif"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var i=t(6540);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);