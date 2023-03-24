"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[4044],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4908:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"Conditions",sidebar_title:"Conditions"},l=void 0,p={unversionedId:"dialog-manager/conditions",id:"dialog-manager/conditions",title:"Conditions",description:"What are conditions?",source:"@site/docs/dialog-manager/conditions.md",sourceDirName:"dialog-manager",slug:"/dialog-manager/conditions",permalink:"/docs/dialog-manager/conditions",draft:!1,editUrl:"https://github.com/xapp-ai/documentation/edit/main/docs/dialog-manager/conditions.md",tags:[],version:"current",frontMatter:{title:"Conditions",sidebar_title:"Conditions"},sidebar:"docs",previous:{title:"Dialog Manager",permalink:"/docs/dialog-manager/overview"},next:{title:"Intents",permalink:"/docs/model/intents"}},u={},c=[{value:"What are conditions?",id:"what-are-conditions",level:2},{value:"Common Examples",id:"common-examples",level:2},{value:"Disabling a Response",id:"disabling-a-response",level:3},{value:"Slot Filling",id:"slot-filling",level:3},{value:"New vs Returning User",id:"new-vs-returning-user",level:3},{value:"Restricted Content",id:"restricted-content",level:3},{value:"Notation",id:"notation",level:2},{value:"Required condition and one of two possibilities",id:"required-condition-and-one-of-two-possibilities",level:3},{value:"Provided Macros",id:"provided-macros",level:2},{value:"What are conditional macros?",id:"what-are-conditional-macros",level:3},{value:"Slots",id:"slots",level:3},{value:"Active Within",id:"active-within",level:3},{value:"Fits Schedule",id:"fits-schedule",level:3},{value:"System",id:"system",level:3},{value:"Request Specific",id:"request-specific",level:3},{value:"Request Type",id:"request-type",level:3},{value:"Request IDs",id:"request-ids",level:3},{value:"Accessing the Request &amp; Context Directly",id:"accessing-the-request--context-directly",level:2},{value:"Syntax &amp; Evaluation",id:"syntax--evaluation",level:2},{value:"On the object model",id:"on-the-object-model",level:2}],d={toc:c},m="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-are-conditions"},"What are conditions?"),(0,r.kt)("p",null,"Conditions are logical statements that allow you to control the dialog manager by telling it when to play certain content or when to apply a particular redirect or forward. For example, you can define unique greetings depending on the time of day or if the user is new vs returning."),(0,r.kt)("h2",{id:"common-examples"},"Common Examples"),(0,r.kt)("h3",{id:"disabling-a-response"},"Disabling a Response"),(0,r.kt)("p",null,"You can completely disable a response by settting the condition to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"false;\n")),(0,r.kt)("h3",{id:"slot-filling"},"Slot Filling"),(0,r.kt)("p",null,"You want to provide a specific response a particular slot is not provided to then prompt for the slot value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'slotDoesNotExist("required_slot_name");\n')),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"The name must match the name of the slot exactly, it is case sensitive.")),(0,r.kt)("h3",{id:"new-vs-returning-user"},"New vs Returning User"),(0,r.kt)("p",null,"You want to provide a specific welcome message, by using a segment, depending on when the user was last seen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'activeWithin(2, "months");\n')),(0,r.kt)("p",null,"This treats all users, if they have been active within two months as returning users. User's not seen within two months or ever, can be given a new user response."),(0,r.kt)("h3",{id:"restricted-content"},"Restricted Content"),(0,r.kt)("p",null,"You want redirect a user to another handler depending on if they have linked their account (logged in) or not."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"!hasLinkedAccount();\n")),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"In the above example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," is the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT"},"logical not operater")," which negates the value (i.e. turns false to true and true to false). If the user does not have a linked account the ",(0,r.kt)("inlineCode",{parentName:"p"},"hasLinkedAccount()")," macros will return ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", which when you add ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," it then returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,r.kt)("h2",{id:"notation"},"Notation"),(0,r.kt)("p",null,"The statements respect JavaScript logical operators such as ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"&&"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"||"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," as well as comparison operators ",(0,r.kt)("inlineCode",{parentName:"p"},"==="),", ",(0,r.kt)("inlineCode",{parentName:"p"},"!=="),", ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<=")," and ",(0,r.kt)("inlineCode",{parentName:"p"},">="),". You can also apply order of operations with ",(0,r.kt)("inlineCode",{parentName:"p"},"()")," around a statement."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Valid Conditional Statements")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"true; // return true\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"true && false; // returns false\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"false || 3 === 3; // returns true\n")),(0,r.kt)("p",null,"Some common macros are also provided to make common tasks like slot comparisons or date comparisons easier. For more information see ",(0,r.kt)("a",{parentName:"p",href:"#provided-macros"},"Provided Macros")),(0,r.kt)("h3",{id:"required-condition-and-one-of-two-possibilities"},"Required condition and one of two possibilities"),(0,r.kt)("p",null,"You may need to set one required condition with two other possibilities. All logical JavaScript operators are supported so the pattern is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"REQUIRED && (OPTION_1 || OPTION_2);\n")),(0,r.kt)("p",null,"To then translate this to an actual use case, you have scheduled content that can be accessed through two possible slot values, like a sporting event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'fitsSchedule("2019-09-11T18:40", "YYYY-MM-DDTmm:ss", 210, "minutes") && ( slotEquals("team", "one") || slotEquals("team", "two")\n')),(0,r.kt)("h2",{id:"provided-macros"},"Provided Macros"),(0,r.kt)("h3",{id:"what-are-conditional-macros"},"What are conditional macros?"),(0,r.kt)("p",null,"Conditional macros are predefined functions that perform a specific task. The functions they perform can be complicated to repeatedly construct so they make it easier to build and less error prone."),(0,r.kt)("h3",{id:"slots"},"Slots"),(0,r.kt)("p",null,"You can check if a slot exists:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"hasSlot(name: string);\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"slotExists(name: string);\n")),(0,r.kt)("p",null,"Where name is the name of the slot and both will return true if the slot exists and does not equal an empty string."),(0,r.kt)("p",null,"You can check is a slots value equals a particular value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"slotEquals(name: string, value: string);\n")),(0,r.kt)("p",null,'For example, you are expecting slot named "university" to equal "University of Virginia"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'slotEquals("university", "University of Virginia");\n')),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"The value you enter ",(0,r.kt)("strong",{parentName:"p"},"must")," but the primary entity value, not a synonym.")),(0,r.kt)("h3",{id:"active-within"},"Active Within"),(0,r.kt)("p",null,"The user has been active within the provided amount. This can be used to provide a response to a user that has used the application before but are coming back after some time and need a refresher."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"activeWithin(amount: number, format: DurationFormat)\n")),(0,r.kt)("p",null,"For example, the user is active within the last five days."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'activeWithin(5, "days");\n')),(0,r.kt)("p",null,'The available formats are "years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds".'),(0,r.kt)("h3",{id:"fits-schedule"},"Fits Schedule"),(0,r.kt)("p",null,"The current time for the user fits within the provided schedule."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"fitsSchedule(start: string, startFormat: string, durationAmount: number, durationFormat: string, timeZone?: string)\n")),(0,r.kt)("p",null,"For example, for a schedule that starts on September 11, 2019 at midnight and runs for five days."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'fitsSchedule("2019-09-11T00:00", "YYYY-MM-DDTmm:ss", 5, "days");\n')),(0,r.kt)("h3",{id:"system"},"System"),(0,r.kt)("p",null,"To check if the user has linked their account, i.e. logged in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"hasLinkedAccount();\n")),(0,r.kt)("h3",{id:"request-specific"},"Request Specific"),(0,r.kt)("p",null,"To check the platform:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"isPlatform(platform: string)\n")),(0,r.kt)("h3",{id:"request-type"},"Request Type"),(0,r.kt)("p",null,"The following are available to check the type of request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"isIntentRequest();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"isLaunchRequest();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"isInputUnknownRequest();\n")),(0,r.kt)("h3",{id:"request-ids"},"Request IDs"),(0,r.kt)("p",null,"To match based on the ID of the request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"isRequestID(id: string | string[])\n")),(0,r.kt)("p",null,"You can either provide a single string or an array of strings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'isRequestID("LaunchRequest");\n')),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'isRequestID(["FooIntent", "BarIntent"]);\n')),(0,r.kt)("p",null,"which will return true for either of the two IDs provided."),(0,r.kt)("h2",{id:"accessing-the-request--context-directly"},"Accessing the Request & Context Directly"),(0,r.kt)("p",null,"You can add conditional statements beyond what is provided with the macros by accessing the context or request directly.  The request has information about the specific request from the user and the context has information about the user that is both session specific and historical.  Let's look at some examples:"),(0,r.kt)("p",null,"Accessing the session storage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'"${$.context.storage.sessionStore.data.some_boolean_value}" === "true"\n')),(0,r.kt)("p",null,"Accessing information on the request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'"${$.request.rawQuery}".startsWith("no")\n')),(0,r.kt)("h2",{id:"syntax--evaluation"},"Syntax & Evaluation"),(0,r.kt)("p",null,"The syntax is a mix of JavaScript's ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"},"template literals")," and JSONPath.  The outer ",(0,r.kt)("inlineCode",{parentName:"p"},"${}")," is the template literal and the internal ",(0,r.kt)("inlineCode",{parentName:"p"},"$.request.rawQuery")," is ",(0,r.kt)("a",{parentName:"p",href:"https://goessner.net/articles/JsonPath/"},"JSONPath"),"."),(0,r.kt)("p",null,"First the JSONPath is evaluated and then the template literal is evaluated.  For the JSONPath evaluation, an object with the request and context are passed in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request": {...the request },\n    "context": {...the context }\n}\n')),(0,r.kt)("p",null,"The starting ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," means the root element.  Then you can follow through from the root to access the context ",(0,r.kt)("inlineCode",{parentName:"p"},"$.context.")," and on the request ",(0,r.kt)("inlineCode",{parentName:"p"},"$.request.")),(0,r.kt)("h2",{id:"on-the-object-model"},"On the object model"),(0,r.kt)("p",null,"When modifying the object model directly through JSON, the key on paths and responses is ",(0,r.kt)("inlineCode",{parentName:"p"},"conditions"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n"conditions": "\\"${$.request.platform}\\" === \\"dialogflow-telephony\\""\n\n')),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"You will need to escape quotes to keep the JSON valid, see the example above.")))}h.isMDXComponent=!0}}]);