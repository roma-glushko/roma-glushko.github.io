(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2Va0":function(e,t,a){"use strict";var A=a("q1tI"),n=a.n(A),r=a("vhEF"),c=a("9eSz"),l=a.n(c),o=function(){var e=r.data;return n.a.createElement(l.a,{className:"logo-img",fluid:e.placeholderImage.childImageSharp.fluid})};a("dDC3"),t.a=function(){return n.a.createElement("div",{className:"thought-author-wrapper"},n.a.createElement("div",{className:"logo"},n.a.createElement("div",{className:"avatar"},n.a.createElement(o,null))),n.a.createElement("div",{className:"name"},"• Roman Glushko •"),n.a.createElement("p",{className:"thought-section-descr"},"Unpopular and totally wrong thoughts. ",n.a.createElement("br",null)," Yeah, I know it. And that's ",n.a.createElement("span",null,"fine"),"."))}},QJnG:function(e,t,a){"use strict";a.r(t);var A=a("q1tI"),n=a.n(A),r=a("Wbzz"),c=a("2Va0"),l=a("mKGn"),o=(a("LmpK"),a("VR8z"),function(e){var t=e.title,a=e.timeToRead,A=e.publishedDate,r=e.contentHtml;return n.a.createElement("article",{className:"thought-wrapper"},n.a.createElement("header",null,n.a.createElement("h1",null,t),n.a.createElement("div",{className:"thought-details"},n.a.createElement("time",{className:"thought-createdat"},A),n.a.createElement("span",null," • "),n.a.createElement("span",{className:"thought-time2read"},a," min read"),n.a.createElement("div",{className:"theme-switcher"},n.a.createElement(l.a,null)))),n.a.createElement("div",{className:"thought-divider"}),n.a.createElement("div",{className:"thought-content",dangerouslySetInnerHTML:{__html:r}}))}),i=(a("tPXa"),function(e){var t=e.next,a=(t=void 0===t?{}:t).frontmatter,A=(a=void 0===a?{}:a).title,c=a.path,l=e.prev,o=(l=void 0===l?{}:l).frontmatter,i=(o=void 0===o?{}:o).title,s=o.path;return n.a.createElement("div",{className:"thought-navigation-wrapper"},n.a.createElement("nav",{className:"thought-navigation"},n.a.createElement("div",{className:"nav-links"},c&&n.a.createElement(r.Link,{rel:"next",className:"next-thought",to:c},A," →"),s&&n.a.createElement(r.Link,{rel:"prev",className:"prev-thought",to:s},"← ",i),n.a.createElement(r.Link,{className:"all-thoughts",to:"/thoughts"},"All Thoughts"))))}),s=a("qjZT"),d=a("vrFN"),h=(a("UFI+"),a("su/s")),m=a("TJpk"),E=a.n(m),u=function(e){var t=e.title,a=e.datePublished,A=e.content,r=e.wordCount,c=e.keywords,l={"@context":"http://schema.org","@type":"BlogPosting",image:h.data.personImage.childImageSharp.fluid.src,headline:t,dateCreated:a,dateModified:a,datePublished:a,inLanguage:"en-US",isFamilyFriendly:"true",author:{"@type":"Person",name:"Roman Glushko"},publisher:{"@type":"Person",name:"Roman Glushko"},mainEntityOfPage:"true",keywords:c,genre:["opinion","thoughts","life expirience"],articleSection:"Thoughts",articleBody:A,wordcount:r};return n.a.createElement(E.a,null,n.a.createElement("script",{type:"application/ld+json"},JSON.stringify(l)))};function p(e){var t=e.data.markdownRemark,a=t.frontmatter,A=a.title,l=a.date,h=a.keywords,m=t.html,E=t.rawMarkdownBody,p=t.timeToRead,g=t.excerpt,N=t.wordCount.words,v=e.pageContext,w=v.prevThought,Q=v.nextThought;return n.a.createElement(s.a,null,n.a.createElement(d.a,{title:A+" - Thoughts",className:"thought-view-page",description:g}),n.a.createElement("div",{className:"thoughts-title"},n.a.createElement(r.Link,{to:"/thoughts"},"Thoughts")),n.a.createElement("main",null,n.a.createElement(o,{title:A,timeToRead:p,publishedDate:l,contentHtml:m})),n.a.createElement("aside",{className:"thought-sidebar"},n.a.createElement(c.a,null),n.a.createElement(i,{prev:w,next:Q})),n.a.createElement(u,{title:A,datePublished:l,content:E,wordCount:N,keywords:h}))}a.d(t,"default",(function(){return p})),a.d(t,"pageQuery",(function(){return g}));var g="713486786"},"su/s":function(e){e.exports=JSON.parse('{"data":{"personImage":{"childImageSharp":{"fluid":{"src":"/static/ccedc4381d51b13a188295f49b461811/c83a6/photo.jpg"}}}}}')},vhEF:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUCAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAaXOZhLiOZ8/INtgj//EAB0QAAICAQUAAAAAAAAAAAAAAAECAAMQEiEiMTL/2gAIAQEAAQUCJEFi41S5+YsYBvdu6jr/xAAdEQABAgcAAAAAAAAAAAAAAAAAAgMREiExQULw/9oACAEDAQE/AZaEBzXsCrn/xAAZEQACAwEAAAAAAAAAAAAAAAAAEQECEDH/2gAIAQIBAT8BYyvJz//EAB0QAAEDBQEAAAAAAAAAAAAAAAAQESEBAjEyUXH/2gAIAQEABj8CGx6kymw3C2qf/8QAGhAAAwEBAQEAAAAAAAAAAAAAAAERITFBYf/aAAgBAQABPyFBV4hh3r4hC27aLSHje6RiaHas4NJ0cf/aAAwDAQACAAMAAAAQZPfA/8QAGREBAAIDAAAAAAAAAAAAAAAAAQAREDFx/9oACAEDAQE/EC1sCCuxtn//xAAXEQADAQAAAAAAAAAAAAAAAAABELER/9oACAECAQE/ECepFV//xAAaEAEBAQADAQAAAAAAAAAAAAABEQAhMUFR/9oACAEBAAE/EESAdq6ZPQLHzBnmLg4IvDOdGASqjoYkeOi4MaKEP1M/RRF+xzJvnG//2Q==","aspectRatio":1,"src":"/static/ccedc4381d51b13a188295f49b461811/d278e/photo.jpg","srcSet":"/static/ccedc4381d51b13a188295f49b461811/a911e/photo.jpg 50w,\\n/static/ccedc4381d51b13a188295f49b461811/954df/photo.jpg 100w,\\n/static/ccedc4381d51b13a188295f49b461811/d278e/photo.jpg 200w,\\n/static/ccedc4381d51b13a188295f49b461811/c83a6/photo.jpg 300w,\\n/static/ccedc4381d51b13a188295f49b461811/8539d/photo.jpg 400w,\\n/static/ccedc4381d51b13a188295f49b461811/3d25e/photo.jpg 2048w","sizes":"(max-width: 200px) 100vw, 200px"}}}}}')}}]);
//# sourceMappingURL=component---src-templates-thought-template-js-d8772410cf139dcc6d0f.js.map