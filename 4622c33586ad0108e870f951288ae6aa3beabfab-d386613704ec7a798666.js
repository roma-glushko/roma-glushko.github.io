(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+UcT":function(e,t,n){"use strict";var r=n("mlL4"),i=n("q1tI"),o=n.n(i),a=n("IP2g"),c=n("JSNL"),u=n("a/oV"),s=n("fRy2"),l=n("jFzU"),f=n("Qw0t"),p=n("9lTW"),d=n.n(p);n("rzGZ"),n("Dq+y"),n("8npG"),n("PZd/"),n("OeI1"),n("AqHK");function h(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}n("JHok"),n("Ggvi"),n("E5k/"),n("sc67"),n("m210"),n("4DPX"),n("6kNP"),n("pS08"),n("LagC");var y,g=n("TSYQ"),m=n.n(g),b=(y=function(e,t){return(y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}y(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),w=function(){return(w=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},v=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function c(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))},k=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},E=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},S=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},j=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function x(e,t,n){var r=t.height,i=t.width,o=O(t,["height","width"]),a=w({height:r,width:i,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},o),c=window.open(e,"",Object.keys(a).map((function(e){return e+"="+a[e]})).join(", "));if(n)var u=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(u),n(c))}catch(e){console.error(e)}}),1e3);return c}var P=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,i=n.windowHeight,o=void 0===i?400:i,a=n.windowPosition,c=void 0===a?"windowCenter":a,u=n.windowWidth,s=void 0===u?550:u;x(e,w({height:o,width:s},"windowCenter"===c?S(s,o):j(s,o)),r)},t.handleClick=function(e){return v(t,void 0,void 0,(function(){var t,n,r,i,o,a,c,u,s,l;return k(this,(function(f){switch(f.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,i=t.networkLink,o=t.onClick,a=t.url,c=t.openShareDialogOnClick,u=t.opts,s=i(a,u),r?[2]:(e.preventDefault(),n?(l=n(),E(l)?[4,l]:[3,2]):[3,2]);case 1:f.sent(),f.label=2;case 2:return c&&this.openShareDialog(s),o&&o(e,s),[2]}}))}))},t}return b(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,i=e.disabledStyle,a=e.forwardedRef,c=(e.networkLink,e.networkName),u=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,l=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,O(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=m()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),p=w(w(u?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),r&&i);return o.a.createElement("button",w({},l,{"aria-label":l["aria-label"]||c,className:f,onClick:this.handleClick,ref:a,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(i.Component),C=function(){return(C=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};var q=function(e,t,n,r){function a(i,a){var c=n(i),u=C({},i);return Object.keys(c).forEach((function(e){delete u[e]})),o.a.createElement(P,C({},r,u,{forwardedRef:a,networkName:e,networkLink:t,opts:n(i)}))}return a.displayName="ShareButton-"+e,Object(i.forwardRef)(a)};var D=q("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return d()(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+h({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400});n("MIFh");var A=q("twitter",(function(e,t){var n=t.title,r=t.via,i=t.hashtags,o=void 0===i?[]:i,a=t.related,c=void 0===a?[]:a;return d()(e,"twitter.url"),d()(Array.isArray(o),"twitter.hashtags is not an array"),d()(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+h({url:e,text:n,via:r,hashtags:o.length>0?o.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400});var R=q("linkedin",(function(e,t){var n=t.title,r=t.summary,i=t.source;return d()(e,"linkedin.url"),"https://linkedin.com/shareArticle"+h({url:e,mini:"true",title:n,summary:r,source:i})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600});var N=q("reddit",(function(e,t){var n=t.title;return d()(e,"reddit.url"),"https://www.reddit.com/submit"+h({url:e,title:n})}),(function(e){return{title:e.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"});var T=q("pocket",(function(e,t){var n=t.title;return d()(e,"pocket.url"),"https://getpocket.com/save"+h({url:e,title:n})}),(function(e){return{title:e.title}}),{windowWidth:500,windowHeight:500}),z=n("Kfvu"),M=(n("jlLl"),function(e){var t=e.title,n=e.path,i=e.keywords,p=""+r.data.site.siteMetadata.siteUrl+n;return o.a.createElement("div",{className:"social-share-wrapper"},o.a.createElement("h3",null,"Share Your Love"),o.a.createElement(D,{beforeOnClick:function(){return Object(z.trackCustomEvent)({category:"social",action:"share",label:"facebook"})},url:p,keywords:i,className:"social-share-item facebook","aria-label":"Share Via Facebook",title:"Share Via Facebook"},o.a.createElement(a.a,{icon:l.faFacebook})),o.a.createElement(A,{beforeOnClick:function(){return Object(z.trackCustomEvent)({category:"social",action:"share",label:"twitter"})},url:p,className:"social-share-item twitter",title:t,keywords:i,"aria-label":"Share Via Twitter"},o.a.createElement(a.a,{icon:u.faTwitter})),o.a.createElement(R,{beforeOnClick:function(){return Object(z.trackCustomEvent)({category:"social",action:"share",label:"linkedin"})},url:p,className:"social-share-item linkedin","aria-label":"Share Via LinkedIn",keywords:i,title:"Share Via LinkedIn"},o.a.createElement(a.a,{icon:s.faLinkedinIn})),o.a.createElement(N,{beforeOnClick:function(){return Object(z.trackCustomEvent)({category:"social",action:"share",label:"reddit"})},url:p,className:"social-share-item reddit",title:t,keywords:i,"aria-label":"Share Via Reddit"},o.a.createElement(a.a,{icon:c.faReddit})),o.a.createElement(T,{beforeOnClick:function(){return Object(z.trackCustomEvent)({category:"social",action:"share",label:"pocket",value:p})},url:p,className:"social-share-item pocket",title:t,keywords:i,"aria-label":"Add to Pocket"},o.a.createElement(a.a,{icon:f.faGetPocket})))});M.defaultProps={tags:[]};t.a=M},"1gqn":function(e,t,n){n("n0hJ"),e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},"5LGW":function(e,t,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("PZd/");var r=n("Bs6h"),i=n("q1tI"),o=n.n(i),a=n("TJpk"),c=n.n(a);t.a=function(e){var t=e.crumbs,n=void 0===t?[]:t,i=r.data.site.siteMetadata.siteUrl,a=[{"@type":"ListItem",position:1,name:"Home",item:i+"/"}];n.forEach((function(e,t){var n=Object.entries(e)[0],r=n[0],o=n[1];a.push({"@type":"ListItem",position:t+2,name:o,item:""+i+r})}));var u={"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:a};return o.a.createElement(c.a,null,o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(u)))}},"9lTW":function(e,t,n){"use strict";(function(t){n("rzGZ"),n("Dq+y"),n("Ggvi"),n("zGcK"),n("CtJk"),n("zZTu"),n("5irr"),n("sc67"),n("Ll4R"),n("t+I+"),n("q8oJ"),n("C9fy"),n("8npG"),n("pJf4");var r=n("MgzW");function i(e,t){if(e===t)return 0;for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0}function o(e){return t.Buffer&&"function"==typeof t.Buffer.isBuffer?t.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var a=n("MCLT"),c=Object.prototype.hasOwnProperty,u=Array.prototype.slice,s="foo"===function(){}.name;function l(e){return Object.prototype.toString.call(e)}function f(e){return!o(e)&&("function"==typeof t.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var p=e.exports=b,d=/\s*function\s+([^\(\s]*)\s*/;function h(e){if(a.isFunction(e)){if(s)return e.name;var t=e.toString().match(d);return t&&t[1]}}function y(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function g(e){if(s||!a.isFunction(e))return a.inspect(e);var t=h(e);return"[Function"+(t?": "+t:"")+"]"}function m(e,t,n,r,i){throw new p.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:i})}function b(e,t){e||m(e,!0,t,"==",p.ok)}function w(e,t,n,r){if(e===t)return!0;if(o(e)&&o(t))return 0===i(e,t);if(a.isDate(e)&&a.isDate(t))return e.getTime()===t.getTime();if(a.isRegExp(e)&&a.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(f(e)&&f(t)&&l(e)===l(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===i(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(o(e)!==o(t))return!1;var c=(r=r||{actual:[],expected:[]}).actual.indexOf(e);return-1!==c&&c===r.expected.indexOf(t)||(r.actual.push(e),r.expected.push(t),function(e,t,n,r){if(null==e||null==t)return!1;if(a.isPrimitive(e)||a.isPrimitive(t))return e===t;if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var i=v(e),o=v(t);if(i&&!o||!i&&o)return!1;if(i)return e=u.call(e),t=u.call(t),w(e,t,n);var c,s,l=E(e),f=E(t);if(l.length!==f.length)return!1;for(l.sort(),f.sort(),s=l.length-1;s>=0;s--)if(l[s]!==f[s])return!1;for(s=l.length-1;s>=0;s--)if(c=l[s],!w(e[c],t[c],n,r))return!1;return!0}(e,t,n,r))}return n?e===t:e==t}function v(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function k(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(n){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function O(e,t,n,r){var i;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),i=function(e){var t;try{e()}catch(n){t=n}return t}(t),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),e&&!i&&m(i,n,"Missing expected exception"+r);var o="string"==typeof r,c=!e&&i&&!n;if((!e&&a.isError(i)&&o&&k(i,n)||c)&&m(i,n,"Got unwanted exception"+r),e&&i&&n&&!k(i,n)||!e&&i)throw i}p.AssertionError=function(e){var t;this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=y(g((t=this).actual),128)+" "+t.operator+" "+y(g(t.expected),128),this.generatedMessage=!0);var n=e.stackStartFunction||m;if(Error.captureStackTrace)Error.captureStackTrace(this,n);else{var r=new Error;if(r.stack){var i=r.stack,o=h(n),a=i.indexOf("\n"+o);if(a>=0){var c=i.indexOf("\n",a+1);i=i.substring(c+1)}this.stack=i}}},a.inherits(p.AssertionError,Error),p.fail=m,p.ok=b,p.equal=function(e,t,n){e!=t&&m(e,t,n,"==",p.equal)},p.notEqual=function(e,t,n){e==t&&m(e,t,n,"!=",p.notEqual)},p.deepEqual=function(e,t,n){w(e,t,!1)||m(e,t,n,"deepEqual",p.deepEqual)},p.deepStrictEqual=function(e,t,n){w(e,t,!0)||m(e,t,n,"deepStrictEqual",p.deepStrictEqual)},p.notDeepEqual=function(e,t,n){w(e,t,!1)&&m(e,t,n,"notDeepEqual",p.notDeepEqual)},p.notDeepStrictEqual=function e(t,n,r){w(t,n,!0)&&m(t,n,r,"notDeepStrictEqual",e)},p.strictEqual=function(e,t,n){e!==t&&m(e,t,n,"===",p.strictEqual)},p.notStrictEqual=function(e,t,n){e===t&&m(e,t,n,"!==",p.notStrictEqual)},p.throws=function(e,t,n){O(!0,e,t,n)},p.doesNotThrow=function(e,t,n){O(!1,e,t,n)},p.ifError=function(e){if(e)throw e},p.strict=r((function e(t,n){t||m(t,!0,n,"==",e)}),p,{equal:p.strictEqual,deepEqual:p.deepStrictEqual,notEqual:p.notStrictEqual,notDeepEqual:p.notDeepStrictEqual}),p.strict.strict=p.strict;var E=Object.keys||function(e){var t=[];for(var n in e)c.call(e,n)&&t.push(n);return t}}).call(this,n("yLpj"))},Bs6h:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteUrl":"https://www.romaglushko.com"}}}}')},JSNL:function(e,t,n){"use strict";n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var r=[],i="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z";t.definition={prefix:"fab",iconName:"reddit",icon:[512,512,r,"f1a1",i]},t.faReddit=t.definition,t.prefix="fab",t.iconName="reddit",t.width=512,t.height=512,t.ligatures=r,t.unicode="f1a1",t.svgPathData=i},KKCa:function(e,t,n){n("pS08"),"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},MCLT:function(e,t,n){(function(e){n("+ar0"),n("LagC"),n("6kNP"),n("R48M"),n("m210"),n("4DPX"),n("MIFh"),n("U6Bt"),n("HQhv"),n("Ll4R"),n("AqHK"),n("q8oJ"),n("C9fy"),n("pJf4"),n("sc67"),n("JHok"),n("klQ5"),n("YBKJ"),n("sC2a"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("xtjI");var r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},i=/%[sdj%]/g;t.format=function(e){if(!m(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,o=r.length,a=String(e).replace(i,(function(e){if("%%"===e)return"%";if(n>=o)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return e}})),u=r[n];n<o;u=r[++n])y(u)||!v(u)?a+=" "+u:a+=" "+c(u);return a},t.deprecate=function(n,r){if(void 0!==e&&!0===e.noDeprecation)return n;if(void 0===e)return function(){return t.deprecate(n,r).apply(this,arguments)};var i=!1;return function(){if(!i){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),i=!0}return n.apply(this,arguments)}};var o,a={};function c(e,n){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&t._extend(r,n),b(r.showHidden)&&(r.showHidden=!1),b(r.depth)&&(r.depth=2),b(r.colors)&&(r.colors=!1),b(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),l(r,e,r.depth)}function u(e,t){var n=c.styles[t];return n?"["+c.colors[n][0]+"m"+e+"["+c.colors[n][1]+"m":e}function s(e,t){return e}function l(e,n,r){if(e.customInspect&&n&&E(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,e);return m(i)||(i=l(e,i,r)),i}var o=function(e,t){if(b(t))return e.stylize("undefined","undefined");if(m(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(g(t))return e.stylize(""+t,"number");if(h(t))return e.stylize(""+t,"boolean");if(y(t))return e.stylize("null","null")}(e,n);if(o)return o;var a=Object.keys(n),c=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(n)),O(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return f(n);if(0===a.length){if(E(n)){var u=n.name?": "+n.name:"";return e.stylize("[Function"+u+"]","special")}if(w(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(k(n))return e.stylize(Date.prototype.toString.call(n),"date");if(O(n))return f(n)}var s,v="",S=!1,j=["{","}"];(d(n)&&(S=!0,j=["[","]"]),E(n))&&(v=" [Function"+(n.name?": "+n.name:"")+"]");return w(n)&&(v=" "+RegExp.prototype.toString.call(n)),k(n)&&(v=" "+Date.prototype.toUTCString.call(n)),O(n)&&(v=" "+f(n)),0!==a.length||S&&0!=n.length?r<0?w(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),s=S?function(e,t,n,r,i){for(var o=[],a=0,c=t.length;a<c;++a)C(t,String(a))?o.push(p(e,t,n,r,String(a),!0)):o.push("");return i.forEach((function(i){i.match(/^\d+$/)||o.push(p(e,t,n,r,i,!0))})),o}(e,n,r,c,a):a.map((function(t){return p(e,n,r,c,t,S)})),e.seen.pop(),function(e,t,n){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(s,v,j)):j[0]+v+j[1]}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,r,i,o){var a,c,u;if((u=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?c=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(c=e.stylize("[Setter]","special")),C(r,i)||(a="["+i+"]"),c||(e.seen.indexOf(u.value)<0?(c=y(n)?l(e,u.value,null):l(e,u.value,n-1)).indexOf("\n")>-1&&(c=o?c.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+c.split("\n").map((function(e){return"   "+e})).join("\n")):c=e.stylize("[Circular]","special")),b(a)){if(o&&i.match(/^\d+$/))return c;(a=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+c}function d(e){return Array.isArray(e)}function h(e){return"boolean"==typeof e}function y(e){return null===e}function g(e){return"number"==typeof e}function m(e){return"string"==typeof e}function b(e){return void 0===e}function w(e){return v(e)&&"[object RegExp]"===S(e)}function v(e){return"object"==typeof e&&null!==e}function k(e){return v(e)&&"[object Date]"===S(e)}function O(e){return v(e)&&("[object Error]"===S(e)||e instanceof Error)}function E(e){return"function"==typeof e}function S(e){return Object.prototype.toString.call(e)}function j(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(b(o)&&(o={}.NODE_DEBUG||""),n=n.toUpperCase(),!a[n])if(new RegExp("\\b"+n+"\\b","i").test(o)){var r=e.pid;a[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e)}}else a[n]=function(){};return a[n]},t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=d,t.isBoolean=h,t.isNull=y,t.isNullOrUndefined=function(e){return null==e},t.isNumber=g,t.isString=m,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=b,t.isRegExp=w,t.isObject=v,t.isDate=k,t.isError=O,t.isFunction=E,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n("1gqn");var x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function P(){var e=new Date,t=[j(e.getHours()),j(e.getMinutes()),j(e.getSeconds())].join(":");return[e.getDate(),x[e.getMonth()],t].join(" ")}function C(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",P(),t.format.apply(t,arguments))},t.inherits=n("KKCa"),t._extend=function(e,t){if(!t||!v(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var q="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function D(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(q&&e[q]){var t;if("function"!=typeof(t=e[q]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,q,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise((function(e,r){t=e,n=r})),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push((function(e,r){e?n(e):t(r)}));try{e.apply(this,i)}catch(a){n(a)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),q&&Object.defineProperty(t,q,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},t.promisify.custom=q,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var i=n.pop();if("function"!=typeof i)throw new TypeError("The last argument must be of type Function");var o=this,a=function(){return i.apply(o,arguments)};t.apply(this,n).then((function(t){e.nextTick(a,null,t)}),(function(t){e.nextTick(D,t,a)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,r(t)),n}}).call(this,n("8oxB"))},"PZd/":function(e,t,n){var r=n("P8UN"),i=n("ys0W")(!0);r(r.S,"Object",{entries:function(e){return i(e)}})},Qw0t:function(e,t,n){"use strict";n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var r=[],i="M407.6 64h-367C18.5 64 0 82.5 0 104.6v135.2C0 364.5 99.7 464 224.2 464c124 0 223.8-99.5 223.8-224.2V104.6c0-22.4-17.7-40.6-40.4-40.6zm-162 268.5c-12.4 11.8-31.4 11.1-42.4 0C89.5 223.6 88.3 227.4 88.3 209.3c0-16.9 13.8-30.7 30.7-30.7 17 0 16.1 3.8 105.2 89.3 90.6-86.9 88.6-89.3 105.5-89.3 16.9 0 30.7 13.8 30.7 30.7 0 17.8-2.9 15.7-114.8 123.2z";t.definition={prefix:"fab",iconName:"get-pocket",icon:[448,512,r,"f265",i]},t.faGetPocket=t.definition,t.prefix="fab",t.iconName="get-pocket",t.width=448,t.height=512,t.ligatures=r,t.unicode="f265",t.svgPathData=i},TSYQ:function(e,t,n){var r;n("MIFh"),function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var a=i.apply(null,r);a&&e.push(a)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},drBq:function(e,t,n){},eUty:function(e,t,n){"use strict";n("YbXK"),n("cFtU");var r=n("q1tI"),i=n.n(r),o=n("Kfvu");var a=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).trackReadingStart=function(e){if((e=e[0]).isIntersecting&&!(e.intersectionRatio<=0)){var t=n.state,r=t.isReadingStarted,i=t.intializedAt,a=t.contentType;if(!r){var c=(new Date).getTime(),u=Math.round((c-i)/1e3);Object(o.trackCustomEvent)({category:"content",action:"startReading",label:a,value:u}),n.setState({isReadingStarted:!0,readingStartedAt:c})}}},n.trackReadingEnd=function(e){if((e=e[0]).isIntersecting&&!(e.intersectionRatio<=0)){var t=n.state,r=t.isReadingEnded,i=t.readingStartedAt,a=t.contentType;if(!r){var c=(new Date).getTime();n.setState({isReadingEnded:!0,readingEndedAt:c});var u=Math.round((c-i)/1e3);window.requestAnimationFrame((function(){Object(o.trackCustomEvent)({category:"content",action:"endReading",label:a,value:u})}))}}},n.trackReading=function(e){var t=n.state,r=t.isReadingStarted,i=t.isReadingEnded,a=t.readingStartedAt,c=t.contentType;if(r&&!i){var u=[];e.forEach((function(e){!e.isIntersecting||e.intersectionRatio<=0||u.push(e.target.getAttribute("id"))})),0!==u.length&&window.requestAnimationFrame((function(){var e=(new Date).getTime(),t=Math.round((e-a)/1e3);Object(o.trackCustomEvent)({category:"content",action:"reading",label:c,value:t})}))}},n.render=function(){return i.a.createElement("span",null)},n.state={contentType:t.contentType,intializedAt:(new Date).getTime(),isReadingStarted:!1,readingStartedAt:void 0,isReadingEnded:!1,readingEndedAt:void 0},n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.componentDidMount=function(){var e=this;if("undefined"!=typeof window){var t=document.getElementById("intro"),n=document.getElementById("content-end"),r=Array.from(document.querySelectorAll(".content h2[id]")),i=Array.from(document.querySelectorAll(".content h3[id]")),o=r.concat(i);this.readingStartObserver=new IntersectionObserver(this.trackReadingStart.bind(this)),this.readingEndObserver=new IntersectionObserver(this.trackReadingEnd.bind(this)),this.readingObserver=new IntersectionObserver(this.trackReading.bind(this)),o.forEach((function(t){e.readingObserver.observe(t)})),this.readingStartObserver.observe(t),this.readingEndObserver.observe(n)}},r}(i.a.Component);t.a=a},jFzU:function(e,t,n){"use strict";n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var r=[],i="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z";t.definition={prefix:"fab",iconName:"facebook",icon:[512,512,r,"f09a",i]},t.faFacebook=t.definition,t.prefix="fab",t.iconName="facebook",t.width=512,t.height=512,t.ligatures=r,t.unicode="f09a",t.svgPathData=i},jlLl:function(e,t,n){},mKGn:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI"),i=n.n(r),o=n("N8DM");n("drBq");var a=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).handleClick=function(e){var t=n.state,r=t.checked,i=t.toggleTheme,o=!r;n.setState({checked:o}),i(o?"dark":"light")},n.render=function(){return i.a.createElement(o.ThemeToggler,null,(function(e){var t=e.theme,r=e.toggleTheme;n.setState({checked:"dark"===t,toggleTheme:r});var o="theme-switcher-toggler"+(n.state.checked?" theme-switcher-toggler--checked":"");return i.a.createElement("div",{className:o,onClick:n.handleClick},i.a.createElement("div",{className:"theme-switcher-track"}),i.a.createElement("div",{className:"theme-switcher-thumb"}),i.a.createElement("input",{className:"theme-switcher-input",type:"checkbox",checked:"dark"===t,readOnly:!0,"aria-label":"Switch between Dark and Light mode"}))}))},n.state={checked:!1},n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r}(r.PureComponent)},mlL4:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteUrl":"https://www.romaglushko.com"}}}}')},qfRy:function(e,t,n){"use strict";var r=n("vl8L"),i=n("q1tI"),o=n.n(i),a=n("TJpk"),c=n.n(a);t.a=function(e){var t=e.genre,n=e.articleSection,i=e.title,a=e.path,u=e.datePublished,s=e.dateModified,l=e.cover,f=e.content,p=e.wordCount,d=e.keywords,h=r.data.site.siteMetadata.siteUrl,y={"@context":"http://schema.org","@type":"BlogPosting",image:l.childImageSharp.fluid.src,headline:i,dateCreated:u,datePublished:u,dateModified:s,inLanguage:"en-US",isFamilyFriendly:"true",author:{"@type":"Person",name:"Roman Glushko"},publisher:{"@type":"Organization",name:"Roman Glushko's Website"},mainEntityOfPage:{"@type":"WebPage","@id":""+h+a},keywords:d,genre:t,articleSection:n,articleBody:f,wordcount:p};return o.a.createElement(c.a,null,o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(y)))}},"t+I+":function(e,t,n){var r=n("P8UN");r(r.G+r.W+r.F*!n("Jegl").ABV,{DataView:n("voZr").DataView})},vl8L:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteUrl":"https://www.romaglushko.com"}}}}')},vttR:function(e,t,n){},ys0W:function(e,t,n){var r=n("QPJK"),i=n("2mBY"),o=n("5SQf"),a=n("BnbX").f;e.exports=function(e){return function(t){for(var n,c=o(t),u=i(c),s=u.length,l=0,f=[];s>l;)n=u[l++],r&&!a.call(c,n)||f.push(e?[n,c[n]]:c[n]);return f}}},zZTu:function(e,t,n){n("Sc3u")("Float64",8,(function(e){return function(t,n,r){return e(this,t,n,r)}}))}}]);
//# sourceMappingURL=4622c33586ad0108e870f951288ae6aa3beabfab-d386613704ec7a798666.js.map