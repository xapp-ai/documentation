"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[2498],{3955:function(e,n,i){i.r(n),i.d(n,{assets:function(){return s},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var t=i(5893),o=i(1151);const a={title:"CLI"},r=void 0,l={id:"development/cli",title:"CLI",description:"The CLI, command line interface, is a helpful tool that allows you to perform some management functions and additional utilities related to your assistant application.  The full source code is available on github.com/xapp-ai/xapp-cli.",source:"@site/docs/development/cli.md",sourceDirName:"development",slug:"/development/cli",permalink:"/docs/development/cli",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"CLI"},sidebar:"docs",previous:{title:"Runtime Environment Variables",permalink:"/docs/development/runtime-environment-variables"},next:{title:"API",permalink:"/docs/development/api"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Authenticating",id:"authenticating",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Information",id:"information",level:2},{value:"Generating Types",id:"generating-types",level:2},{value:"Importing",id:"importing",level:2},{value:"Importing from Dialogflow",id:"importing-from-dialogflow",level:3},{value:"Prerequisites",id:"prerequisites",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The CLI, command line interface, is a helpful tool that allows you to perform some management functions and additional utilities related to your assistant application.  The full source code is available on ",(0,t.jsx)(n.a,{href:"https://github.com/xapp-ai/xapp-cli",children:"github.com/xapp-ai/xapp-cli"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install -g @xapp/cli\n"})}),"\n",(0,t.jsx)(n.p,{children:"Confirm your installation with"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"xapp -V\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Currently only Windows WSL2 and macOS are supported.  The behavior on Windows Shell is unknown."})}),"\n",(0,t.jsx)(n.h2,{id:"authenticating",children:"Authenticating"}),"\n",(0,t.jsx)(n.p,{children:"Before running any command, you will need to first authenticate"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"xapp login\n"})}),"\n",(0,t.jsx)(n.p,{children:"And while not required, you can also logout"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"xapp logout\n"})}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"You can configure the CLI to point to different OC Studio environments."}),"\n",(0,t.jsxs)(n.p,{children:["Recommended approach is to modify the configuration JSON file found at ",(0,t.jsx)(n.code,{children:"~/.xapp/cli_config"})," and then adding different profiles."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, if you want to add a profile called ",(0,t.jsx)(n.code,{children:"stentor"}),", fill in the parameters under `"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "profiles": {\n    "default": {},\n    "stentor": {\n      "basePath": "",\n      "authPath": "",\n      "clientId": "",\n      "path": "auth",\n      "tokenPath": "oauth/token"\n    }\n  },\n  "created": "2021-02-23T22:30:17.345Z",\n  "modified": "2021-11-09T17:17:32.694Z",\n  "currentProfile": "stentor"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Then, to use this profile run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"xapp set -p stentor\n"})}),"\n",(0,t.jsx)(n.p,{children:"To reset back to the default, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"xapp set -p default\n"})}),"\n",(0,t.jsx)(n.h2,{id:"information",children:"Information"}),"\n",(0,t.jsx)(n.p,{children:"You can query general descriptive information about an application by application ID."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"xapp info {{appId}}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"generating-types",children:"Generating Types"}),"\n",(0,t.jsx)(n.p,{children:"When developing, it can be helpful to have access to the intents requests and their possible slot values.  You can use the CLI to generate a TypeScript file with all the requests that are specific to your interaction model."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'xapp types -h "/*! Copyright (c) 2022, XAPP AI */" -f requests.ts -m 50 ./src/models  {{appId}}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The above command will generate a file named ",(0,t.jsx)(n.code,{children:"requests.ts"})," at the ",(0,t.jsx)(n.code,{children:"./src/models"})," directory with a header at the top to prevent any lint errors.  The ",(0,t.jsx)(n.code,{children:"-m 50"})," states to generate a type based on an entities values up to a max of 50 values, otherwise it will set the type as ",(0,t.jsx)(n.code,{children:"string"}),".  Optional fields are ",(0,t.jsx)(n.code,{children:"-h"}),", ",(0,t.jsx)(n.code,{children:"-f"}),", and ",(0,t.jsx)(n.code,{children:"-m"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"importing",children:"Importing"}),"\n",(0,t.jsx)(n.h3,{id:"importing-from-dialogflow",children:"Importing from Dialogflow"}),"\n",(0,t.jsx)(n.p,{children:"You can import an existing project from Dialogflow ES."}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Studio Organization"}),"\n",(0,t.jsx)(n.li,{children:"GCP Service Account with Dialogflow Admin permissions credentials JSON file"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"xapp import -p d -c {path-to-JSON-credentials-file} -o {orgId-for-import}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Some Dialogflow features are not supported and will not be imported."})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return r}});var t=i(7294);const o={},a=t.createContext(o);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);