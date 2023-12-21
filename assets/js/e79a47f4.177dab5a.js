"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[955],{9835:function(e,s,n){n.r(s),n.d(s,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return r},toc:function(){return c}});var t=n(5893),i=n(1151);const a={title:"Responses",sidebar_title:"Responses"},o=void 0,r={id:"content/responses",title:"Responses",description:"What are responses?",source:"@site/docs/content/responses.md",sourceDirName:"content",slug:"/content/responses",permalink:"/docs/content/responses",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Responses",sidebar_title:"Responses"},sidebar:"docs",previous:{title:"Handler",permalink:"/docs/content/handlers"},next:{title:"Response Groups",permalink:"/docs/content/response-groups"}},l={},c=[{value:"What are responses?",id:"what-are-responses",level:2},{value:"Display Text",id:"display-text",level:2},{value:"SSML",id:"ssml",level:2},{value:"Common SSML Tags",id:"common-ssml-tags",level:3},{value:"Audio",id:"audio",level:4},{value:"Break",id:"break",level:4},{value:"Emphasis",id:"emphasis",level:4},{value:"Phoneme",id:"phoneme",level:4},{value:"SSML External Resources",id:"ssml-external-resources",level:3},{value:"Suggestion Chips",id:"suggestion-chips",level:2},{value:"Suggested Inputs",id:"suggested-inputs",level:3},{value:"Suggested Websites",id:"suggested-websites",level:3},{value:"Templated Responses",id:"templated-responses",level:2},{value:"Slot Values",id:"slot-values",level:3},{value:"Session Values",id:"session-values",level:3},{value:"Path Values",id:"path-values",level:3},{value:"Macros",id:"macros",level:3},{value:"Default Macros",id:"default-macros",level:4},{value:"capitalize()",id:"capitalize",level:4},{value:"truncate()",id:"truncate",level:4},{value:"slotValueToSpeech()",id:"slotvaluetospeech",level:4}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"what-are-responses",children:"What are responses?"}),"\n",(0,t.jsx)(s.p,{children:"Responses are what the assistant will say for voice and text based channels that can have conditions attached to them for when they are used.  Each response has a display text field, SSML which are used for text based channels and"}),"\n",(0,t.jsx)(s.h2,{id:"display-text",children:"Display Text"}),"\n",(0,t.jsx)(s.p,{children:"The display text is used on text based channels like the chat widget, social messaging platforms, and SMS.  There is a limitation of 640 characters and limited markdown support."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Supported Markdown & Characters"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Format"}),(0,t.jsx)(s.th,{children:"Looks Like"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Italic"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.em,{children:"text"})}),(0,t.jsx)(s.td,{children:"_text_"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Bold"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"text"})}),(0,t.jsxs)(s.td,{children:["*",(0,t.jsx)(s.em,{children:"text*"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Hyperlink"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://xapp.ai",children:"text"})}),(0,t.jsxs)(s.td,{children:["[text](",(0,t.jsx)(s.a,{href:"https://xapp.ai",children:"https://xapp.ai"}),")"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"New Line"}),(0,t.jsxs)(s.td,{children:["text",(0,t.jsx)("br",{}),"text"]}),(0,t.jsx)(s.td,{children:"text\\ntext"})]})]})]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"Depending on the platform and channel, some markdown and other special characters will be removed."})}),"\n",(0,t.jsx)(s.h2,{id:"ssml",children:"SSML"}),"\n",(0,t.jsx)(s.p,{children:"Speech synthesis markup language (SSML) is a standard recommended by the World Wide Web Consortium's Voice Browser Working Group. It is XML based markup that allows you to change the pronunciation of text and can even allow you to embed audio files. It is used on voice channels like telephony and smart speakers in combination with text to speech engines to fine tune the synthetic voice."}),"\n",(0,t.jsx)(s.admonition,{type:"important",children:(0,t.jsxs)(s.p,{children:["When leveraging SSML features, first check if your TTS engine supports it ",(0,t.jsx)(s.a,{href:"http://ssml.guru",children:"here"})]})}),"\n",(0,t.jsx)(s.h3,{id:"common-ssml-tags",children:"Common SSML Tags"}),"\n",(0,t.jsx)(s.h4,{id:"audio",children:"Audio"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:'<audio src="https://assets.xapp.media/prod/my-audio-file.mp3" />\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"<audio>"})," tag will play back the audio content from the source URL."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/content/encoding-with-ffmpeg",children:"Encoding (audio) with FFMPEG"})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://developer.amazon.com/en-US/docs/alexa/custom-skills/ask-soundlibrary.html",children:"Alexa Skill Kit Sound Library"})," - Sound library only for Alexa"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://aws.amazon.com/polly/",children:"Amazon Polly Text to Speech"})," - Text to speech can be helpful to add alternative machine generated voices"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"break",children:"Break"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:'<break time="3s"/>\n<break time="500ms" />\n<break time="300ms" />\n'})}),"\n",(0,t.jsx)(s.p,{children:"Adds a break within the speech."}),"\n",(0,t.jsx)(s.h4,{id:"emphasis",children:"Emphasis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:'<emphasis level="strong">really like</emphasis>\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Provides an emphasis on the word surrounded by the ",(0,t.jsx)(s.code,{children:"<emphasis>"})," tags with possible level values being: ",(0,t.jsx)(s.code,{children:"strong"}),", ",(0,t.jsx)(s.code,{children:"moderate"}),", ",(0,t.jsx)(s.code,{children:"reduced"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"phoneme",children:"Phoneme"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:' You say, <phoneme alphabet="ipa" ph="p\u026a\u02c8k\u0251\u02d0n">pecan</phoneme>.\n I say, <phoneme alphabet="ipa" ph="\u02c8pi.k\xe6n">pecan</phoneme>.\n'})}),"\n",(0,t.jsx)(s.p,{children:"Phonemes are used to tune the pronunciation of words. These can be rather tricky and take practice. It is recommended to use your TTS engine's provided SSML tester to quickly modify and hear how it changes."}),"\n",(0,t.jsx)(s.h3,{id:"ssml-external-resources",children:"SSML External Resources"}),"\n",(0,t.jsx)(s.p,{children:"SSML has many more tags and features, all of which can be found in the links below."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"http://ssml.guru",children:"SSML Support in Voice Platforms"})," - Check for feature support"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://developer.amazon.com/en-US/docs/alexa/custom-skills/speech-synthesis-markup-language-ssml-reference.html",children:"Speech Synthesis Markup Language Reference"})," - Reference for Amazon Alexa"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-synthesis-markup",children:"Improve synthesis with Speech Synthesis Markup Language (SSML)"})," - Reference for Azure Text-to-speech"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://developers.google.com/assistant/conversational/ssml",children:"Conversational Actions - SSML"})," - SSML support for the Google Assistant."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"suggestion-chips",children:"Suggestion Chips"}),"\n",(0,t.jsx)(s.p,{children:"Suggestions chips are displayed on supported channels with displays and are not necessarily text input exclusive."}),"\n",(0,t.jsx)(s.h3,{id:"suggested-inputs",children:"Suggested Inputs"}),"\n",(0,t.jsx)(s.p,{children:"Suggested inputs are treated the same way as if the user typed or said the content of the suggested input."}),"\n",(0,t.jsx)(s.h3,{id:"suggested-websites",children:"Suggested Websites"}),"\n",(0,t.jsx)(s.p,{children:"Clicking these opens websites and on some channels will take the user out of the flow while on others it is still open."}),"\n",(0,t.jsx)(s.h2,{id:"templated-responses",children:"Templated Responses"}),"\n",(0,t.jsxs)(s.p,{children:["For responses that contain dynamic information, templated responses allow you to set placeholders for data that will then be compiled (injected) at runtime.  The same notation used for defining slots in sample utterances is also used here ",(0,t.jsx)(s.code,{children:"${variable}"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"slot-values",children:"Slot Values"}),"\n",(0,t.jsx)(s.p,{children:"To access the slot value, either on the current request or from a previous request within the same session, you can simply use the name of the slot:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Ship the product on ${ship_date}\n"})}),"\n",(0,t.jsx)(s.p,{children:"This will automatically format the slot value and format it correctly for either SSML or the display text.  Compiling the above example with a slot value of 2024-08-14, the display text will be:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Ship the product on August 14, 2024\n"})}),"\n",(0,t.jsx)(s.p,{children:"and the SSML"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'<speak>Ship the product on <say-as interpret-as="date" format="ymd">2024-08-14</say-as></speak>\n'})}),"\n",(0,t.jsx)(s.h3,{id:"session-values",children:"Session Values"}),"\n",(0,t.jsx)(s.p,{children:"Values found on the session storage will also be injected however since the type of the values is not known, like is it a date or date range, they will not be compiled differently for display text or SSML."}),"\n",(0,t.jsx)(s.p,{children:"You may keep track of someone's quiz score on the session:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:'context.session.set("score", 7)\n'})}),"\n",(0,t.jsx)(s.p,{children:"which you can then access that value with the following template:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Your current score is ${score}.\n"})}),"\n",(0,t.jsx)(s.h3,{id:"path-values",children:"Path Values"}),"\n",(0,t.jsxs)(s.p,{children:["Leveraging ",(0,t.jsx)(s.a,{href:"https://goessner.net/articles/JsonPath/",children:"JSONPath"})," syntax, you can also access all values of the request or context object.  For example, if we didn't have the slot value access as outlined above, you can get the same value with the path notation:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Ship the product on ${$.request.slots.ship_date.value}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Since this is more complicated, it typically isn't used.  It can be the most helpful when you want to access values on the user's ",(0,t.jsx)(s.a,{href:"/docs/development/storage",children:"permanent storage"}),".  For example:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Your favorite fruit is ${$.context.storaqe.favorite_fruit}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"macros",children:"Macros"}),"\n",(0,t.jsxs)(s.p,{children:["Values stored either in slots or on the session storage may not be perfect and in some cases you may want to format them.  For example, if you ask for someones name and they type it in ",(0,t.jsx)(s.code,{children:"john"}),", the name will be stored as such.  Since names are proper nouns and are capitalized, it may be distracting to use proper casing everywhere else except for when you repeat their name back.  Macros can help with this.  There are three available macros by default but it is also possible to inject your own custom macros."]}),"\n",(0,t.jsx)(s.h4,{id:"default-macros",children:"Default Macros"}),"\n",(0,t.jsx)(s.h4,{id:"capitalize",children:"capitalize()"}),"\n",(0,t.jsx)(s.p,{children:"If you ask a user for their name and they provide it back lowercased, you may want to always capitalize it."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Thank you, ${capitalize('${first_name}')}.\n"})}),"\n",(0,t.jsx)(s.h4,{id:"truncate",children:"truncate()"}),"\n",(0,t.jsxs)(s.p,{children:["If you want to truncate a snippet of text to a certain length, you can leverage the ",(0,t.jsx)(s.code,{children:"truncate"})," which also has some awareness of the word breaks and will attempt to truncate to the closest word without splitting one."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Here is what I found... ${truncate('${excerpt}', 200)}\n"})}),"\n",(0,t.jsx)(s.h4,{id:"slotvaluetospeech",children:"slotValueToSpeech()"}),"\n",(0,t.jsx)(s.p,{children:"This is the same method leveraged by the slot value templating.  This can be used if you know the value on the session store is one of the possible slot type values."}),"\n",(0,t.jsx)(s.p,{children:"For example, you have a list of strings:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:'context.storage.set("colors", ["red", "blue", "green"])\n'})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"The main colors are ${slotValueToSpeech('${colors}')}\n"})}),"\n",(0,t.jsx)(s.p,{children:"will compile to:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"The main colors are red, blue and green\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"important",children:(0,t.jsxs)(s.p,{children:["For lists, only ",(0,t.jsx)(s.code,{children:"and"})," is supported when concatenating the values, not ",(0,t.jsx)(s.code,{children:"or"})]})})]})}function d(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:function(e,s,n){n.d(s,{Z:function(){return r},a:function(){return o}});var t=n(7294);const i={},a=t.createContext(i);function o(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);