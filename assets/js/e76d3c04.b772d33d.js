"use strict";(self.webpackChunkoc_studio_docs=self.webpackChunkoc_studio_docs||[]).push([[8909],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),f=o,d=s["".concat(p,".").concat(f)]||s[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6898:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},p="Encoding with FFMPEG",l={unversionedId:"content/encoding-with-ffmpeg",id:"content/encoding-with-ffmpeg",title:"Encoding with FFMPEG",description:"FFMPEG is a command line tool that allows you to encode video & images to different formats.  You can also make GIFs from videos!",source:"@site/docs/content/encoding-with-ffmpeg.md",sourceDirName:"content",slug:"/content/encoding-with-ffmpeg",permalink:"/docs/content/encoding-with-ffmpeg",draft:!1,editUrl:"https://github.com/xapp-ai/documentation/edit/main/docs/content/encoding-with-ffmpeg.md",tags:[],version:"current",frontMatter:{}},u={},s=[{value:"Supported Formats",id:"supported-formats",level:2}],m={toc:s},f="wrapper";function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"encoding-with-ffmpeg"},"Encoding with FFMPEG"),(0,a.kt)("p",null,"FFMPEG is a command line tool that allows you to encode video & images to different formats.  You can also make GIFs from videos!"),(0,a.kt)("p",null,"To install using Homebrew:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install ffmpeg --with-libvpx --with-libvorbis --with-fdk-aac --with-opus \n")),(0,a.kt)("p",null,"Then to encode a video file, pulled from ",(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/Vestride/278e13915894821e1d6f"},"here"),", use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ffmpeg -i input.mov -vcodec h264 -acodec aac -strict -2 output.mp4\n")),(0,a.kt)("p",null,"To change the resolution, ",(0,a.kt)("inlineCode",{parentName:"p"},"scale=640:480")," is the new aspect ratio:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ffmpeg -i video_1920.mp4 -vf scale=640:480 video_640.mp4 -hide_banner\n")),(0,a.kt)("p",null,"Or max supported by Alexa:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ffmpeg -i video_1920.mp4 -vf scale=1280:720 video_640.mp4 -hide_banner\n")),(0,a.kt)("p",null,"To pull the audio off of a video for Alexa devices without screens:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ffmpeg -i video.mp4 -f mp3 -ab 192000 -vn music.mp3\n")),(0,a.kt)("h2",{id:"supported-formats"},"Supported Formats"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Alexa Audio Formats | ",(0,a.kt)("a",{parentName:"p",href:"https://developer.amazon.com/en-US/docs/alexa/custom-skills/audioplayer-interface-reference.html#audio-stream-requirements"},"link"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Alexa Video Formats | ",(0,a.kt)("a",{parentName:"p",href:"https://developer.amazon.com/docs/custom-skills/videoapp-interface-reference.html#supported-video-formats-and-resolutions"},"link")))))}d.isMDXComponent=!0}}]);