(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2/xp":function(e,t,a){},"9YVv":function(e,t,a){},F4Rv:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBBP/aAAwDAQACEAMQAAABtmSLU1KeLAa+iHm//8QAHBABAAICAwEAAAAAAAAAAAAAAQACAxIEISNB/9oACAEBAAEFAkuCLNbTNl1lczWHZd9vnHfL/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECMRD/2gAIAQMBAT8BS5OFaf/EABYRAAMAAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPwGo/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAEQESES/9oACAEBAAY/ArMuOU9NLQxx/8QAHBABAAICAwEAAAAAAAAAAAAAAQARIVExYXGR/9oACAEBAAE/IXCVlFftHewg5k+Rq7IcxhphiNu2Lii09n//2gAMAwEAAgADAAAAEKAPfP/EABoRAAICAwAAAAAAAAAAAAAAAAABETEhQfD/2gAIAQMBAT8Qa0OVgt7Ref/EABcRAQEBAQAAAAAAAAAAAAAAAAAxARH/2gAIAQIBAT8Q2uNqH//EAB4QAQACAgEFAAAAAAAAAAAAAAEAESExUUFhcYGh/9oACAEBAAE/EKIFxuEXF2cBIp2+ZREzlLBC1DYAUnrr3irELKYzK1D7GCYEbhQw0tz/2Q==","aspectRatio":1,"src":"/static/7d8b62b999b9a2fb28b8ab360138da37/e75b5/photo3.jpg","srcSet":"/static/7d8b62b999b9a2fb28b8ab360138da37/b13df/photo3.jpg 40w,\\n/static/7d8b62b999b9a2fb28b8ab360138da37/4e333/photo3.jpg 80w,\\n/static/7d8b62b999b9a2fb28b8ab360138da37/e75b5/photo3.jpg 160w,\\n/static/7d8b62b999b9a2fb28b8ab360138da37/40426/photo3.jpg 240w,\\n/static/7d8b62b999b9a2fb28b8ab360138da37/c01e2/photo3.jpg 320w,\\n/static/7d8b62b999b9a2fb28b8ab360138da37/b1563/photo3.jpg 3677w","sizes":"(max-width: 160px) 100vw, 160px"}}}}}')},HXVv:function(e,t,a){},N8DM:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0;var A=n(a("QL1J"));t.ThemeToggler=A.default},QL1J:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var A=n(a("PJYZ")),r=n(a("VbXa")),l=n(a("lSNA")),c=n(a("q1tI")),o=n(a("17x9")),i=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return t=e.call.apply(e,[this].concat(n))||this,(0,l.default)((0,A.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},a.toggleTheme=function(e){window.__setPreferredTheme(e)},a.render=function(){return c.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(c.default.Component);i.propTypes={children:o.default.func.isRequired};var s=i;t.default=s},c4Ru:function(e,t,a){"use strict";var n=a("F4Rv"),A=a("q1tI"),r=a.n(A),l=a("9eSz"),c=a.n(l);t.a=function(){var e=n.data;return r.a.createElement(c.a,{className:"logo-img",fluid:e.placeholderImage.childImageSharp.fluid})}},drBq:function(e,t,a){},kNgo:function(e,t,a){"use strict";var n=a("q1tI"),A=a.n(n),r=a("Kac3");a("y5K6");t.a=function(){return A.a.createElement("footer",null,A.a.createElement("div",{className:"footer-wrapper"},A.a.createElement(r.a,{iconSize:"2x"}),A.a.createElement("div",{className:"copyright"},"Roman Glushko © 1996 - ",(new Date).getFullYear())))}},kdpB:function(e,t,a){"use strict";var n=a("q1tI"),A=a.n(n),r=a("Wbzz"),l=a("c4Ru");a("2/xp");t.a=function(e){var t=e.spaceTitle,a=e.spaceLink,n=e.isListing,c=void 0!==n&&n;return A.a.createElement("div",{className:"view-page-header"},A.a.createElement("div",{className:"view-page-header-wrapper"},A.a.createElement("div",{className:"logo-wrapper"},A.a.createElement("div",{className:"logo"},A.a.createElement(l.a,null)),A.a.createElement("div",{className:"name"},A.a.createElement(r.Link,{to:"/blog/",title:"back to blog"},"Roman ",A.a.createElement("br",null)," Glushko"))),c&&A.a.createElement("h1",{className:"blog-title"},A.a.createElement(r.Link,{to:a,title:"back to the homepage"},t)),!c&&A.a.createElement("h2",{className:"blog-title"},A.a.createElement(r.Link,{to:a,title:"back to the homepage"},t))))}},mKGn:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),A=a.n(n),r=a("N8DM");a("drBq");var l=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleClick=function(e){var t=a.state,n=t.checked,A=t.toggleTheme,r=!n;a.setState({checked:r}),A(r?"dark":"light")},a.render=function(){return A.a.createElement(r.ThemeToggler,null,(function(e){var t=e.theme,n=e.toggleTheme;a.setState({checked:"dark"===t,toggleTheme:n});var r="theme-switcher-toggler"+(a.state.checked?" theme-switcher-toggler--checked":"");return A.a.createElement("div",{className:r,onClick:a.handleClick},A.a.createElement("div",{className:"theme-switcher-track"}),A.a.createElement("div",{className:"theme-switcher-thumb"}),A.a.createElement("input",{className:"theme-switcher-input",type:"checkbox",checked:"dark"===t,readOnly:!0,"aria-label":"Switch between Dark and Light mode"}))}))},a.state={checked:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n}(n.PureComponent)},vx99:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return p}));var n=a("q1tI"),A=a.n(n),r=a("qjZT"),l=a("vrFN"),c=a("kdpB"),o=a("9GK7"),i=a("Wbzz"),s=a("9eSz"),m=a.n(s),d=(a("9YVv"),function(e){var t=e.title,a=e.url,n=e.timeToRead,r=e.publishedHumanDate,l=e.publishedFullDate,c=e.excerpt,o=e.cover,s=e.keywords;return A.a.createElement("article",{className:"blog-item"},A.a.createElement(i.Link,{to:a},A.a.createElement("div",{className:"cover-filter"},A.a.createElement(m.a,{className:"cover",fluid:o.childImageSharp.fluid}))),A.a.createElement("h2",null,A.a.createElement(i.Link,{to:a},t)),A.a.createElement("div",{className:"blog-details"},A.a.createElement("time",{className:"blog-created-at",dateTime:l},r),A.a.createElement("span",null," • "),A.a.createElement("span",{className:"blog-time2read"},n," min read")),A.a.createElement("p",{className:"blog-digest"},c),A.a.createElement("ul",{className:"blog-tags"},s.map((function(e){return A.a.createElement("li",{key:a+e},e)}))))}),u=a("mKGn"),h=a("kNgo");a("HXVv");var g=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data,t=e.socialImage,a=e.allMarkdownRemark.edges;return A.a.createElement(r.a,null,A.a.createElement(l.a,{title:"Blog",pagePath:"/blog/",className:"blog-list-page",description:"Technical blog about machine learning, data science, math and software engineering",imagePath:t.publicURL,keywords:["technical blog","machine learning blog","math","engineering","data science","roman glushko blog","roma glushko blog"],meta:[]}),A.a.createElement("div",{className:"blog-listing-wrapper"},A.a.createElement("aside",{className:"blog-sidebar"},A.a.createElement("div",{className:"blog-header"},A.a.createElement(c.a,{spaceTitle:"Blog",spaceLink:"/blog/",isListing:!0}),A.a.createElement(o.a,{space:"blog"})),A.a.createElement("div",{className:"blog-intro"},"Technical blog about machine learning, data science, math and software engineering."),A.a.createElement("div",{className:"misc"},A.a.createElement("div",{className:"theme-switcher"},A.a.createElement(u.a,null)))),A.a.createElement("main",{className:"blog-list blog-grid "+(a.length?"":"no-posts")},!a.length&&A.a.createElement("div",{className:"no-posts-placeholder"},"Great posts will be here as soon as my muse comes back to me 💫 ",A.a.createElement("br",null),"Come back soon 👋"),a.map((function(e){var t=e.node;return A.a.createElement(d,{key:t.id,title:t.frontmatter.title,url:t.frontmatter.path,timeToRead:t.timeToRead,publishedHumanDate:t.frontmatter.humanDate,publishedFullDate:t.frontmatter.fullDate,excerpt:t.frontmatter.excerpt,cover:t.frontmatter.cover,keywords:t.frontmatter.keywords})}))),A.a.createElement("div",{className:"clearfix"})),A.a.createElement(h.a,null))},n}(n.Component),p=(t.default=g,"926174837")},y5K6:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-blog-js-aa47c72541fba77c96e1.js.map