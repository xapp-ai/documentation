"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[92],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return h}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||p;return t?a.createElement(h,o(o({ref:n},s),{},{components:t})):a.createElement(h,o({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<p;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4655:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=t(7462),r=t(3366),p=(t(7294),t(3905)),o=["components"],i={title:"GraphQL API"},l=void 0,u={unversionedId:"development/api/graphql",id:"development/api/graphql",title:"GraphQL API",description:"The GraphQL API powers our web application, Studio, and our CLI.  Management of all the resources for an assistant application are done through GraphQL.",source:"@site/docs/development/api/graphql.md",sourceDirName:"development/api",slug:"/development/api/graphql",permalink:"/docs/development/api/graphql",draft:!1,editUrl:"https://github.com/xapp-ai/documentation/edit/main/docs/development/api/graphql.md",tags:[],version:"current",frontMatter:{title:"GraphQL API"}},s={},c=[{value:"GraphQL",id:"graphql",level:2},{value:"API Documentation",id:"api-documentation",level:2},{value:"Helpful Queries",id:"helpful-queries",level:2},{value:"App Events",id:"app-events",level:3},{value:"App Errors",id:"app-errors",level:3},{value:"Exporting an App",id:"exporting-an-app",level:3},{value:"Importing an App",id:"importing-an-app",level:3}],d={toc:c},m="wrapper";function h(e){var n=e.components,t=(0,r.Z)(e,o);return(0,p.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The GraphQL API powers our web application, Studio, and our ",(0,p.kt)("a",{parentName:"p",href:"/docs/development/cli"},"CLI"),".  Management of all the resources for an assistant application are done through GraphQL."),(0,p.kt)("h2",{id:"graphql"},"GraphQL"),(0,p.kt)("p",null,"The API can be found at ",(0,p.kt)("a",{parentName:"p",href:"https://api.xapp.ai/graphql"},"https://api.xapp.ai/graphql")),(0,p.kt)("p",null,"Authentication requires adding a header with token:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'{\n    headers: {\n        "Content-Type": "application/json",\n        "x-xapp-usertoken": token\n    }\n}\n')),(0,p.kt)("p",null,"If you want to programmatically access the API, you can reuse the token used by the ",(0,p.kt)("a",{parentName:"p",href:"/docs/development/cli"},"CLI"),"'s configuration found at ",(0,p.kt)("inlineCode",{parentName:"p"},"~/.xapp/cli_config")),(0,p.kt)("admonition",{type:"important"},(0,p.kt)("p",{parentName:"admonition"},"We currently don't have a way to generate long living machine to machine tokens.  If you want want, please contact your customer support representative.")),(0,p.kt)("h2",{id:"api-documentation"},"API Documentation"),(0,p.kt)("p",null,"We provide a GraphiQL based UI within Studio at ",(0,p.kt)("a",{parentName:"p",href:"https://studio.xapp.ai/graphql"},"https://studio.xapp.ai/graphql"),".  Here you can build and test queries as well as access the documentation."),(0,p.kt)("h2",{id:"helpful-queries"},"Helpful Queries"),(0,p.kt)("h3",{id:"app-events"},"App Events"),(0,p.kt)("p",null,"All app events can be access through the API and various filters can be applied to get exactly what you want.  Here is a starter query:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"query events($appId:ID!){\n  app(appId:$appId) {\n    events {\n      total\n      events {\n        userId\n        rawQuery\n      }\n    }\n  }\n}\n")),(0,p.kt)("p",null,"And necessary query variables:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appId":""\n}\n\n')),(0,p.kt)("h3",{id:"app-errors"},"App Errors"),(0,p.kt)("p",null,"Stentor has built-in error handling that will capture errors and send them to Studio.  To query them use:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},'query errors($appId:ID!){\n  app(appId:$appId) {\n    events(byType:["ERROR"]) {\n      total\n      events {\n        eventTime\n        sessionId\n        userId\n        channel\n        platform\n        errorCode\n        errorMessage\n        payload\n      }\n    }\n  }\n}\n')),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appId":""\n}\n')),(0,p.kt)("p",null,"The above query will give you the 10 most recent errors.  The ",(0,p.kt)("inlineCode",{parentName:"p"},"errorMessage")," contains the error message and the payload is a JSON string that also contains the error message and the stack trace."),(0,p.kt)("h3",{id:"exporting-an-app"},"Exporting an App"),(0,p.kt)("p",null,"You can programmatically export your application with the following mutation:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation exportApp($appId:ID!, $organizationId:ID!){\n  app(organizationId:$organizationId) {\n    update(appId:$appId) {\n      exportApp {\n        url\n      }\n    }\n  }\n}\n")),(0,p.kt)("p",null,"And query variables:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "organizationId":"",\n  "appId":""\n}\n')),(0,p.kt)("p",null,"The result will contain a URL that has the content of your requested application in JSON format.  This URL is only available temporarily."),(0,p.kt)("h3",{id:"importing-an-app"},"Importing an App"),(0,p.kt)("p",null,"Using the export format from the above app export mutation, you can then import it to an existing organization."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation importApp($organizationId: ID!, $appUrl: URL!) {\n  app(organizationId: $organizationId) {\n    importApp(url: $appUrl) {\n       appId\n      organizationId\n      name\n    }\n  }\n}\n")),(0,p.kt)("p",null,"Variables"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appUrl": "https://...",\n  "organizationId": ""\n}\n')))}h.isMDXComponent=!0}}]);