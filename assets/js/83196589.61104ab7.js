"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[8024],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4039:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"Verify your AWS Application Deployment"},u=void 0,l={unversionedId:"infrastructure/aws/verify-deployment",id:"infrastructure/aws/verify-deployment",title:"Verify your AWS Application Deployment",description:"Amazon Kendra",source:"@site/docs/infrastructure/aws/verify-deployment.md",sourceDirName:"infrastructure/aws",slug:"/infrastructure/aws/verify-deployment",permalink:"/docs/infrastructure/aws/verify-deployment",draft:!1,editUrl:"https://github.com/xapp-ai/documentation/edit/main/docs/infrastructure/aws/verify-deployment.md",tags:[],version:"current",frontMatter:{title:"Verify your AWS Application Deployment"},sidebar:"aws",previous:{title:"Common Errors in Stack Deployment",permalink:"/docs/infrastructure/aws/common-errors-in-stack-deployment"},next:{title:"IAM Policy for Stack Deployment",permalink:"/docs/infrastructure/aws/iam-policy-for-deployment"}},s={},p=[{value:"Amazon Kendra",id:"amazon-kendra",level:2},{value:"AWS Lambda",id:"aws-lambda",level:2}],d={toc:p},f="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"amazon-kendra"},"Amazon Kendra"),(0,a.kt)("p",null,"A new Kendra index will be created. It will have a data source setup that is pointed at a newly created S3 bucket. You will want to confirm that the data source has synced the documents within the S3 bucket."),(0,a.kt)("p",null,"You can open the Search Console for the new index to test the search."),(0,a.kt)("h2",{id:"aws-lambda"},"AWS Lambda"),(0,a.kt)("p",null,"There will be a new AWS Lambda function on your account."),(0,a.kt)("p",null,"If you want more verbose logging, add the following environment variable to your lambda function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"STENTOR_LOG_LEVEL=debug\n")),(0,a.kt)("p",null,"You can configure the following test payload to ensure the lambda is working correctly. This will test connection with OC Studio and that you have the Lex channel configured properly."),(0,a.kt)("p",null,"Test Payload"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messageVersion": "1.0",\n  "invocationSource": "FulfillmentCodeHook",\n  "userId": "userId",\n  "sessionAttributes": {},\n  "bot": {\n    "name": "Test Bot",\n    "alias": "$LATEST",\n    "version": "$LATEST"\n  },\n  "outputDialogMode": "Text",\n  "currentIntent": {\n    "name": "LaunchRequest",\n    "slots": {},\n    "confirmationStatus": "None"\n  }\n}\n')))}m.isMDXComponent=!0}}]);