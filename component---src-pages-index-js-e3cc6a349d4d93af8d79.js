(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"5AZw":function(e,t,n){},EDuE:function(e,t,n){},IbBL:function(e,t,n){"use strict";n("AqHK"),n("n7j8"),n("LagC"),n("pS08"),n("sc67"),n("E5k/"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var o=n("q1tI"),i=n("gDTn"),s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){for(var a=!0;a;){var r=e,o=t,i=n;a=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,o);if(void 0!==s){if("value"in s)return s.value;var c=s.get;if(void 0===c)return;return c.call(i)}var l=Object.getPrototypeOf(r);if(null===l)return;e=l,t=o,n=i,a=!0,s=l=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e);var n=this.props,a=n.items,r=n.random;this.state={index:r?Math.floor(Math.random()*Math.floor(a.length)):0,output:"",substrLength:0},this.timeouts=[]}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this._animate.bind(this)()}},{key:"componentWillUnmount",value:function(){this.timeouts.map((function(e){return clearTimeout(e)}))}},{key:"_loop",value:function(e,t){var n=setTimeout(e,t);this.timeouts.push(n);this.timeouts.length>100&&(clearTimeout(this.timeouts[0]),this.timeouts.shift())}},{key:"_type",value:function(e,t){var n=this.state.output,a=this.props.typingInterval,r=this._type.bind(this,e,t),o=i(e);this.setState({output:o.slice(0,i(n).length+1).join("")}),n.length<o.length?this._loop(r,a):("function"==typeof this.props.onTypingEnd&&this.props.onTypingEnd(),t())}},{key:"_erase",value:function(e){var t=this.state.output,n=this.props.deletingInterval,a=this._erase.bind(this,e),r=i(t);"function"==typeof this.props.onDeletingStart&&this.props.onDeletingStart(),this.setState({output:r.slice(0,r.length-1).join("")}),0!==r.length?this._loop(a,n):("function"==typeof this.props.onDeletingEnd&&this.props.onDeletingEnd(),e())}},{key:"_overwrite",value:function(e,t){var n=this.state,a=n.output,r=n.substrLength,o=this.props.deletingInterval,s=this._overwrite.bind(this,e,t),c=i(e),l=i(a);this.setState({output:c.slice(0,r).concat(l.slice(r)),substrLength:r+1}),c.length!==r?this._loop(s,o):(this.setState({output:e,substrLength:0}),t())}},{key:"_animate",value:function(){var e=this,t=this.state.index,n=this.props,a=n.items,r=n.pause,o=n.emptyPause,i=n.eraseMode,s=n.random,c=this._type,l=this._erase,u=this._overwrite,A=this._animate.bind(this),m=void 0;m=s?Math.floor(Math.random()*Math.floor(a.length)):t===a.length-1?0:t+1;var p=function(){e.setState({index:m}),e._loop(A,o)};"function"==typeof this.props.onTypingStart&&this.props.onTypingStart(),c.bind(this)(a[t],(function(){"overwrite"===i?e._loop(u.bind(e,a[m],p),r):e._loop(l.bind(e,p),r)}))}},{key:"render",value:function(){var e=this.props,t=e.color,n=e.cursor,r=(e.deletingInterval,e.emptyPause,e.items,e.pause,e.eraseMode,e.typingInterval,e.random,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["color","cursor","deletingInterval","emptyPause","items","pause","eraseMode","typingInterval","random"]));return o.createElement("span",a({style:{color:t}},r),this.state.output,n?o.createElement("span",{className:"react-rotating-text-cursor"},"|"):null)}}]),t}(o.Component);s.defaultProps={color:"inherit",cursor:!0,deletingInterval:50,emptyPause:1e3,eraseMode:"erase",items:["first","second","third","fourth","fifth"],pause:1500,typingInterval:50,random:!1},t.default=s,e.exports=t.default},JVnr:function(e,t,n){},RXBc:function(e,t,n){"use strict";n.r(t);n("zGcK");var a=n("q1tI"),r=n.n(a),o=n("qjZT"),i=n("vrFN"),s=(n("pJf4"),n("kX9s")),c=n("TJpk"),l=n.n(c),u=function(){var e=s.data,t=e.personImage,n=e.site.siteMetadata.personRichSnippet,a=n.name,o=n.alternateName,i=n.gender,c=n.sameAs,u=n.jobTitle,A=n.worksFor,m={"@context":"http://schema.org","@type":"Person",name:a,alternateName:o,image:t.childImageSharp.fluid.src,gender:i,sameAs:c,jobTitle:u,worksFor:{"@type":"Organization",name:A.name,sameAs:A.sameAs}};return r.a.createElement(l.a,null,r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(m)))},A=n("V3V/"),m=n("9eSz"),p=n.n(m),f=function(){var e=A.data;return r.a.createElement(p.a,{className:"logo-img",fluid:e.placeholderImage.childImageSharp.fluid,alt:"Roman Glushko - Magento Developer, eCommerce Specialist and Life Explorer"})},h=n("mKGn"),d=n("IbBL"),g=n.n(d),E=n("Wbzz"),b=(n("5AZw"),function(){return r.a.createElement("nav",{className:"main-navigation"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(E.Link,{to:"/thoughts/",title:"Go to Thoughts"},"• Thoughts •"))))}),v=n("IP2g"),y=n("wHSu"),w=n("8tEE"),j=(n("JVnr"),function(){return r.a.createElement("div",{className:"social"},r.a.createElement("ul",{className:"social-list"},r.a.createElement("li",{className:"social-item"},r.a.createElement("a",{href:"https://twitter.com/roma_glushko",title:"Roman Glushko on Twitter",target:"blank"},r.a.createElement(v.a,{icon:w.e,size:"sm"}))),r.a.createElement("li",{className:"social-item"},r.a.createElement("a",{href:"https://github.com/roma-glushko",title:"Roman Glushko on Github",target:"blank"},r.a.createElement(v.a,{icon:w.b,size:"sm"}))),r.a.createElement("li",{className:"social-item"},r.a.createElement("a",{href:"https://www.linkedin.com/in/glushko-roman",title:"Roman Glushko on LinkedIn",target:"blank"},r.a.createElement(v.a,{icon:w.c,size:"sm"}))),r.a.createElement("li",{className:"social-item"},r.a.createElement("a",{href:"mailto:roman.glushko.m@gmail.com",title:"Roman Glushko's Email"},r.a.createElement(v.a,{icon:y.a,size:"sm"})))))}),k=(n("EDuE"),["Web Developer 🛠","Magento Specialist 🛒","Golang Enthusiast 🐹","Human 🧔","DataScience Noobie 🔬","Passive Traveler 🏕","OpenSource Lover 🤝","Matzah Fan ✡️","5x Magento Certified 🏅","Problem Solver 🧠","Torah Follower 🕎","eCommerce Explorer 💳","SEO Strategist 🔎"].sort((function(){return Math.random()-.5})));t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Roman Glushko - Magento Engineer, E-commerce Specialist and Life Explorer 🧔🛠👨‍💻📚",isUniqueTitle:!0,className:"home-page",pagePath:"/"}),r.a.createElement("main",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column sidebar"},r.a.createElement("div",{className:"logo"},r.a.createElement("div",{className:"avatar"},r.a.createElement(f,null))),r.a.createElement("div",{className:"main"},r.a.createElement("h1",{className:"name"},r.a.createElement("span",{className:"first-name"},"Roman")," ",r.a.createElement("span",{className:"second-name"},"Glushko")),r.a.createElement("div",{className:"title"},r.a.createElement(g.a,{items:k}))),r.a.createElement(b,null),r.a.createElement(j,null),r.a.createElement("div",{className:"theme-switcher"},r.a.createElement(h.a,null))),r.a.createElement("div",{className:"column my-story-content"},r.a.createElement("p",null,"I'm Roman 👋 ",r.a.createElement("a",{href:"https://www.linkedin.com/in/glushko-roman/",target:"blank"},"Magento Engineer and E-commerce Specialist"),"."),r.a.createElement("p",null,"Over four years, I'm helping merchants from around the globe to run their business on ",r.a.createElement("a",{href:"https://magento.com/",target:"blank"},"Magento"),". During this time, I learned how to meet business goals with the platform capabilities. I have passed 5 Magento certifications to expand and prove my knowledge."),r.a.createElement("p",null,"I've been lucky to be part of the ",r.a.createElement("a",{href:"https://www.atwix.com/",target:"blank"},"Atwix family")," 👨‍👩‍👧‍👦 - open-minded people that support and aspire to grow 🌱 I've been leading a team there for more than three years. Management helped me to get - individuals are one and the only possible asset for every business. Also, it brought me a way more ",r.a.createElement(E.Link,{to:"/thoughts/"},"other thoughts"),"✏️"),r.a.createElement("p",null,"Magento shaped my carrier and me a lot. So I wanted to find my way to thanks back. I decided to start ",r.a.createElement("a",{href:"https://www.atwix.com/tag/magenews/",target:"blank"},"Atwix MageNews digest")," 🗞 It's a monthly roundup of the most important news and updates from the Magento community. It's useful for everyone: from developers to merchants 🤝"),r.a.createElement("p",null,"For dessert, innovations and fresh ideas always drive me. That's why I do ",r.a.createElement("a",{href:"https://github.com/roma-glushko?tab=repositories",target:"blank"},"open source projects")," where I solve my everyday challenges. You will find them useful as well.")))),r.a.createElement(u,null))}},"V3V/":function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUCAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAaXOZhLiOZ8/INtgj//EAB0QAAICAQUAAAAAAAAAAAAAAAECAAMQEiEiMTL/2gAIAQEAAQUCJEFi41S5+YsYBvdu6jr/xAAdEQABAgcAAAAAAAAAAAAAAAAAAgMREiExQULw/9oACAEDAQE/AZaEBzXsCrn/xAAZEQACAwEAAAAAAAAAAAAAAAAAEQECEDH/2gAIAQIBAT8BYyvJz//EAB0QAAEDBQEAAAAAAAAAAAAAAAAQESEBAjEyUXH/2gAIAQEABj8CGx6kymw3C2qf/8QAGhAAAwEBAQEAAAAAAAAAAAAAAAERITFBYf/aAAgBAQABPyFBV4hh3r4hC27aLSHje6RiaHas4NJ0cf/aAAwDAQACAAMAAAAQZPfA/8QAGREBAAIDAAAAAAAAAAAAAAAAAQAREDFx/9oACAEDAQE/EC1sCCuxtn//xAAXEQADAQAAAAAAAAAAAAAAAAABELER/9oACAECAQE/ECepFV//xAAaEAEBAQADAQAAAAAAAAAAAAABEQAhMUFR/9oACAEBAAE/EESAdq6ZPQLHzBnmLg4IvDOdGASqjoYkeOi4MaKEP1M/RRF+xzJvnG//2Q==","aspectRatio":1,"src":"/static/ccedc4381d51b13a188295f49b461811/9dc27/photo.jpg","srcSet":"/static/ccedc4381d51b13a188295f49b461811/25b50/photo.jpg 75w,\\n/static/ccedc4381d51b13a188295f49b461811/aabdf/photo.jpg 150w,\\n/static/ccedc4381d51b13a188295f49b461811/9dc27/photo.jpg 300w,\\n/static/ccedc4381d51b13a188295f49b461811/32fd5/photo.jpg 450w,\\n/static/ccedc4381d51b13a188295f49b461811/4fe8c/photo.jpg 600w,\\n/static/ccedc4381d51b13a188295f49b461811/69755/photo.jpg 2048w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},gDTn:function(e,t,n){(function(t){n("MIFh"),n("Ggvi"),n("sC2a"),n("rzGZ"),n("Dq+y"),n("Ll4R"),n("JHok"),n("q8oJ"),n("C9fy"),n("8npG"),n("HQhv"),n("klQ5");var a="[object Map]",r="[object Set]",o=/^\[object .+?Constructor\]$/,i=/^(?:0|[1-9]\d*)$/,s="[\\ud800-\\udfff]",c="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",l="\\ud83c[\\udffb-\\udfff]",u="[^\\ud800-\\udfff]",A="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",p="(?:"+c+"|"+l+")"+"?",f="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+[u,A,m].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),h="(?:"+[u+c+"?",c,A,m,s].join("|")+")",d=RegExp(l+"(?="+l+")|"+h+f,"g"),g=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),E="object"==typeof t&&t&&t.Object===Object&&t,b="object"==typeof self&&self&&self.Object===Object&&self,v=E||b||Function("return this")();function y(e,t){return function(e,t){for(var n=-1,a=e?e.length:0,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r}(t,(function(t){return e[t]}))}function w(e){var t=-1,n=Array(e.size);return e.forEach((function(e,a){n[++t]=[a,e]})),n}function j(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function k(e){return function(e){return g.test(e)}(e)?function(e){return e.match(d)||[]}(e):function(e){return e.split("")}(e)}var S,N,I,M=Function.prototype,O=Object.prototype,x=v["__core-js_shared__"],Q=(S=/[^.]+$/.exec(x&&x.keys&&x.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"",D=M.toString,B=O.hasOwnProperty,R=O.toString,C=RegExp("^"+D.call(B).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),P=v.Symbol,_=P?P.iterator:void 0,T=O.propertyIsEnumerable,G=(N=Object.keys,I=Object,function(e){return N(I(e))}),L=K(v,"DataView"),Y=K(v,"Map"),F=K(v,"Promise"),z=K(v,"Set"),J=K(v,"WeakMap"),V=ne(L),Z=ne(Y),q=ne(F),H=ne(z),U=ne(J);function X(e,t){var n=ae(e)||function(e){return function(e){return se(e)&&re(e)}(e)&&B.call(e,"callee")&&(!T.call(e,"callee")||"[object Arguments]"==R.call(e))}(e)?function(e,t){for(var n=-1,a=Array(e);++n<e;)a[n]=t(n);return a}(e.length,String):[],a=n.length,r=!!a;for(var o in e)!t&&!B.call(e,o)||r&&("length"==o||te(o,a))||n.push(o);return n}function W(e){return!(!ie(e)||function(e){return!!Q&&Q in e}(e))&&(oe(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e)?C:o).test(ne(e))}function $(e){if(n=(t=e)&&t.constructor,a="function"==typeof n&&n.prototype||O,t!==a)return G(e);var t,n,a,r=[];for(var o in Object(e))B.call(e,o)&&"constructor"!=o&&r.push(o);return r}function K(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return W(n)?n:void 0}var ee=function(e){return R.call(e)};function te(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||i.test(e))&&e>-1&&e%1==0&&e<t}function ne(e){if(null!=e){try{return D.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(L&&"[object DataView]"!=ee(new L(new ArrayBuffer(1)))||Y&&ee(new Y)!=a||F&&"[object Promise]"!=ee(F.resolve())||z&&ee(new z)!=r||J&&"[object WeakMap]"!=ee(new J))&&(ee=function(e){var t=R.call(e),n="[object Object]"==t?e.constructor:void 0,o=n?ne(n):void 0;if(o)switch(o){case V:return"[object DataView]";case Z:return a;case q:return"[object Promise]";case H:return r;case U:return"[object WeakMap]"}return t});var ae=Array.isArray;function re(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!oe(e)}function oe(e){var t=ie(e)?R.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}function ie(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function se(e){return!!e&&"object"==typeof e}function ce(e){return e?y(e,function(e){return re(e)?X(e):$(e)}(e)):[]}e.exports=function(e){if(!e)return[];if(re(e))return function(e){return"string"==typeof e||!ae(e)&&se(e)&&"[object String]"==R.call(e)}(e)?k(e):function(e,t){var n=-1,a=e.length;for(t||(t=Array(a));++n<a;)t[n]=e[n];return t}(e);if(_&&e[_])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[_]());var t=ee(e);return(t==a?w:t==r?j:ce)(e)}}).call(this,n("yLpj"))},kX9s:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"personRichSnippet":{"alternateName":"Roman Glushko","gender":"Male","jobTitle":"Tech Lead && Magento Software Developer. Atwix MageNews Editor","name":"Roman Glushko","sameAs":["https://twitter.com/roma_glushko","https://github.com/roma-glushko","https://www.linkedin.com/in/glushko-roman"],"worksFor":{"name":"Atwix s.r.o.","sameAs":["https://www.atwix.com","https://twitter.com/atwixcom"]}}}},"personImage":{"childImageSharp":{"fluid":{"src":"/static/ccedc4381d51b13a188295f49b461811/9dc27/photo.jpg"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-e3cc6a349d4d93af8d79.js.map