(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0lih":function(e,t,a){},"5LGW":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("PZd/");var n=a("Bs6h"),l=a("q1tI"),r=a.n(l),i=a("TJpk"),c=a.n(i);t.a=function(e){var t=e.crumbs,a=void 0===t?[]:t,l=n.data.site.siteMetadata.siteUrl,i=[{"@type":"ListItem",position:1,name:"Home",item:l+"/"}];a.forEach((function(e,t){var a=Object.entries(e)[0],n=a[0],r=a[1];i.push({"@type":"ListItem",position:t+2,name:r,item:""+l+n})}));var o={"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:i};return r.a.createElement(c.a,null,r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(o)))}},Bs6h:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteUrl":"https://www.romaglushko.com"}}}}')},F4Rv:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBBP/aAAwDAQACEAMQAAABtmSLU1KeLAa+iHm//8QAHBABAAICAwEAAAAAAAAAAAAAAQACAxIEISNB/9oACAEBAAEFAkuCLNbTNl1lczWHZd9vnHfL/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECMRD/2gAIAQMBAT8BS5OFaf/EABYRAAMAAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPwGo/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAEQESES/9oACAEBAAY/ArMuOU9NLQxx/8QAHBABAAICAwEAAAAAAAAAAAAAAQARIVExYXGR/9oACAEBAAE/IXCVlFftHewg5k+Rq7IcxhphiNu2Lii09n//2gAMAwEAAgADAAAAEKAPfP/EABoRAAICAwAAAAAAAAAAAAAAAAABETEhQfD/2gAIAQMBAT8Qa0OVgt7Ref/EABcRAQEBAQAAAAAAAAAAAAAAAAAxARH/2gAIAQIBAT8Q2uNqH//EAB4QAQACAgEFAAAAAAAAAAAAAAEAESExUUFhcYGh/9oACAEBAAE/EKIFxuEXF2cBIp2+ZREzlLBC1DYAUnrr3irELKYzK1D7GCYEbhQw0tz/2Q==","aspectRatio":1,"src":"/static/7d8b62b999b9a2fb28b8ab360138da37/e75b5/photo3.jpg","srcSet":"/static/7d8b62b999b9a2fb28b8ab360138da37/b13df/photo3.jpg 40w,\\n/static/7d8b62b999b9a2fb28b8ab360138da37/4e333/photo3.jpg 80w,\\n/static/7d8b62b999b9a2fb28b8ab360138da37/e75b5/photo3.jpg 160w,\\n/static/7d8b62b999b9a2fb28b8ab360138da37/40426/photo3.jpg 240w,\\n/static/7d8b62b999b9a2fb28b8ab360138da37/c01e2/photo3.jpg 320w,\\n/static/7d8b62b999b9a2fb28b8ab360138da37/b1563/photo3.jpg 3677w","sizes":"(max-width: 160px) 100vw, 160px"}}}}}')},Mzcm:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("c4Ru");a("Qs9M");t.a=function(e){var t=e.position;return l.a.createElement("div",{className:"cv-header-wrapper"},l.a.createElement("div",{className:"logo"},l.a.createElement("div",{itemprop:"image",className:"avatar"},l.a.createElement(r.a,null))),l.a.createElement("hgroup",null,l.a.createElement("h1",{itemprop:"name",className:"cv-name"},"Roman ",l.a.createElement("strong",null,"Glushko")),l.a.createElement("h2",{itemprop:"jobTitle",className:"cv-position"},t)))}},N8DM:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0;var l=n(a("QL1J"));t.ThemeToggler=l.default},"PZd/":function(e,t,a){var n=a("P8UN"),l=a("ys0W")(!0);n(n.S,"Object",{entries:function(e){return l(e)}})},QL1J:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var l=n(a("PJYZ")),r=n(a("VbXa")),i=n(a("lSNA")),c=n(a("q1tI")),o=n(a("17x9")),m=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return t=e.call.apply(e,[this].concat(n))||this,(0,i.default)((0,l.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},a.toggleTheme=function(e){window.__setPreferredTheme(e)},a.render=function(){return c.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(c.default.Component);m.propTypes={children:o.default.func.isRequired};var s=m;t.default=s},Qs9M:function(e,t,a){},c4Ru:function(e,t,a){"use strict";var n=a("F4Rv"),l=a("q1tI"),r=a.n(l),i=a("9eSz"),c=a.n(i);t.a=function(){var e=n.data;return r.a.createElement(c.a,{className:"logo-img",fluid:e.placeholderImage.childImageSharp.fluid})}},drBq:function(e,t,a){},hTu6:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("qjZT"),i=a("vrFN"),c=a("9GK7"),o=a("Mzcm"),m=a("mKGn"),s=a("Kac3"),p=a("5LGW"),g=a("Kfvu");a("0lih");t.default=function(){var e;return l.a.createElement(r.a,null,l.a.createElement(i.a,{isUniqueTitle:!0,title:"Roman Glushko's Machine Learning Engineer CV",className:"cv-view-page",pagePath:"/cv/machine-learning-engineer",ogType:"website",description:"Roman Glushko's Machine Learning Engineer CV",keywords:["machine learning engineer","magento machine learning","cv","machine learning cv","machine learning resume"]}),l.a.createElement("main",{itemscope:!0,itemtype:"http://schema.org/Person",className:"cv cv-machine-learning-engineer"},l.a.createElement("div",{className:"pdf-badge",onClick:function(){Object(g.trackCustomEvent)({category:"cv",action:"download",label:"machine-learning"}),window.print()},title:"Download CV as a PDF file"},l.a.createElement("a",null,"pdf")),l.a.createElement("header",null,l.a.createElement("div",{className:"theme-switcher"},l.a.createElement(m.a,null)),l.a.createElement(c.a,{space:"cv"}),l.a.createElement(o.a,{position:"Machine Learning Engineer"}),l.a.createElement(s.a,null)),l.a.createElement("div",{className:"cv-content"},l.a.createElement("div",{className:"cv-content-column additional-column"},l.a.createElement("section",{itemscope:!0,itemtype:"http://schema.org/ItemList"},l.a.createElement("dl",null,l.a.createElement("dt",null,l.a.createElement("h2",{className:"notop-margin"},l.a.createElement("span",{itemprop:"name"},"Profile"))),l.a.createElement("ul",null,l.a.createElement("li",{itemprop:"itemListElement"},"Aspiring ",l.a.createElement("strong",null,"problem solver")," & ML engineer"),l.a.createElement("li",{itemprop:"itemListElement"},l.a.createElement("strong",null,"5+ years")," of experience in ",l.a.createElement("strong",null,"software engineering")," and eCommerce development"),l.a.createElement("li",{itemprop:"itemListElement"},l.a.createElement("strong",null,"3+ years")," of experience in ",l.a.createElement("strong",null,"technical management")),l.a.createElement("li",{itemprop:"itemListElement"},"Expertise in a broad variety of technical and business topics"),l.a.createElement("li",{itemprop:"itemListElement"},"Constant, quick & curious learner"),l.a.createElement("li",{itemprop:"itemListElement"},"Positive attitudes")))),l.a.createElement("section",{itemtype:"http://schema.org/ItemList"},l.a.createElement("dl",null,l.a.createElement("dt",null,l.a.createElement("h2",null,l.a.createElement("span",{itemprop:"name"},"Skills"))),l.a.createElement("ul",null,l.a.createElement("li",{itemprop:"itemListElement"},"Experience: tabular data processing, image processing, classification, regression, time series forecasting, image object detection, data analysis"),l.a.createElement("li",{itemprop:"itemListElement"},"Languages: ",l.a.createElement("strong",null,"Python"),", Golang, PHP, WebDev Stack (JS & HTML5 & CSS3)"),l.a.createElement("li",{itemprop:"itemListElement"},"ML/DL Frameworks: PyTorch, Keras, Scikit-Learn"),l.a.createElement("li",{itemprop:"itemListElement"},"Visualization: Seaborn, Plotly")))),l.a.createElement("section",null,l.a.createElement("h2",null,l.a.createElement("span",null,"Education")),l.a.createElement("ul",null,l.a.createElement("li",{itemscope:!0,itemtype:"http://schema.org/EducationalOrganization"},l.a.createElement("strong",null,"Machine Learning Nanodegree"),", 2020-Present (8 months)"),l.a.createElement("li",{itemscope:!0,itemtype:"http://schema.org/EducationalOrganization"},l.a.createElement("strong",null,"M.S. Computer Engineering"),l.a.createElement("br",null)," ",l.a.createElement("span",{itemprop:"name"},"Khmelnytskyi National University"),", Ukraine, 2018")))),l.a.createElement("div",{className:"cv-content-column main-column"},l.a.createElement("section",{className:"projects"},l.a.createElement("h2",{className:"notop-margin"},l.a.createElement("span",null,"Projects")),l.a.createElement("ul",null,l.a.createElement("li",{className:"project"},l.a.createElement("h3",null,"Wireframe Scanner"),l.a.createElement("div",{className:"project-description"},l.a.createElement("a",{href:"https://www.commerceframe.com/",target:"blank"},"CommerceFrame"),", my side project about swift eCommerce wireframing, needs a functionality to import wireframes that were drawn on a piece of paper or a whiteboard. The project includes problem framing, collecting and labeling dataset."),l.a.createElement("ul",{className:"project-details"},l.a.createElement("li",null,l.a.createElement("strong",null,"Experience"),": Problem Framing, Data Collection, Data Labeling, Image Data, Python, PyTorch, Object Detection"))),l.a.createElement("li",{className:"project"},l.a.createElement("h3",null,"[Kaggle] Shopee - Price Match Guarantee"),l.a.createElement("div",{className:"project-description"},"The Shopee marketplace has a price match guarantee program. They needed a model that could automate process of finding marketplace lots with similar product offerings and prices, despite marketing strategy, product titles and images which merchants might use.",l.a.createElement("br",null),l.a.createElement("br",null),"Got to Top 45% of submitters on Kaggle. Got ",l.a.createElement("a",{href:"https://www.kaggle.com/c/shopee-product-matching/discussion/236496",target:"blank"},"gold and silver medals")," for providing deep insights on the domain and problem goal."),l.a.createElement("ul",{className:"project-details"},l.a.createElement("li",null,l.a.createElement("strong",null,"Experience"),": eCommerce, Tabular & Image Data, Python, Keras, Data Processing, embeddings"),l.a.createElement("li",null,"Links: ",l.a.createElement("a",{href:"https://www.kaggle.com/c/shopee-product-matching",target:"blank"},"Competition")))),l.a.createElement("li",{className:"project"},l.a.createElement("h3",null,"[Kaggle] HPA - Single Cell Classification"),l.a.createElement("div",{className:"project-description"},"Human Protein Atlas organization was interested in finding patterns of protein distribution inside of the single cell. This should helped to understand role of different proteins in disease development, medical treatment impact, etc.",l.a.createElement("br",null),"Based on 150Gb of 4-layers human cells images, it was needed to segments each cell and predict in which organelle of the cell the protein of interest were located. Provided dataset contained only inaccurate image-level labels (not directly connected to particular cells).",l.a.createElement("br",null),l.a.createElement("br",null),"Got to Top 15% of submitters on Kaggle."),l.a.createElement("ul",{className:"project-details"},l.a.createElement("li",null,l.a.createElement("strong",null,"Experience"),": Biology, Image Medical Data, Weakly-Supervised Learning, Data Analysis, Data Processing, Instance Segmentation, Multi-Label Classification"),l.a.createElement("li",null,"Links: ",l.a.createElement("a",{href:"https://www.kaggle.com/c/hpa-single-cell-image-classification",target:"blank"},"Competition"))))),l.a.createElement("div",{className:"other-projects"},l.a.createElement("input",{type:"checkbox",id:"other-projects-collapse"}),l.a.createElement("label",{for:"other-projects-collapse"},l.a.createElement("a",null,"..click to show/hide other projects")),l.a.createElement("ul",{className:"other-projects-list"},l.a.createElement("li",{className:"project"},l.a.createElement("h3",null,"Mall Customer Segmentation"),l.a.createElement("div",{className:"project-description"},"Analyzed dataset of mall customers and segment them according to their spending patterns.",l.a.createElement("br",null),l.a.createElement("br",null),"Got ",l.a.createElement("a",{href:"https://www.kaggle.com/glushko/mall-customer-segmentation",target:"blank"},"a silver medal on Kaggle")," for the analysis."),l.a.createElement("ul",{className:"project-details"},l.a.createElement("li",null,l.a.createElement("strong",null,"Experience"),": Clustering, Tabular Data, Data Analysis, Python, Scikit-Learn, Plotly, Seaborn"),l.a.createElement("li",null,"Links: ",l.a.createElement("a",{href:"https://www.kaggle.com/glushko/mall-customer-segmentation",target:"blank"},"Modeling")," • ",l.a.createElement("a",{href:"https://github.com/roma-glushko/kaggle-mall-customer-segmentation",target:"blank"},"Github")))),l.a.createElement("li",{className:"project"},l.a.createElement("h3",null,"Digit Recognizer"),l.a.createElement("div",{className:"project-description"},"Built a classifier to predict handwritten digits.",l.a.createElement("br",null),l.a.createElement("br",null),"Got to Top 5% of submitters on Kaggle."),l.a.createElement("ul",{className:"project-details"},l.a.createElement("li",null,l.a.createElement("strong",null,"Experience"),": Classification, Image Data, Python, Keras, Scikit-Learn, CNN"),l.a.createElement("li",null,"Links: ",l.a.createElement("a",{href:"https://www.kaggle.com/glushko/digit-recognizer-0-99657-3-approaches-tpu",target:"blank"},"Modeling")," • ",l.a.createElement("a",{href:"https://github.com/roma-glushko/kaggle-digit-recognizer",target:"blank"},"Github")))),l.a.createElement("li",{className:"project"},l.a.createElement("h3",null,"Wine Quality"),l.a.createElement("div",{className:"project-description"},"Automated wine quality analysis based on results of physicochemical tests."),l.a.createElement("ul",{className:"project-details"},l.a.createElement("li",null,l.a.createElement("strong",null,"Experience"),": Classification, Tabular Data, Data Analysis, Python, Scikit-Learn"),l.a.createElement("li",null,"Links: ",l.a.createElement("a",{href:"https://www.kaggle.com/glushko/wine-quality-domain-driven-eda-part-i",target:"blank"},"Data Analysis")," • ",l.a.createElement("a",{href:"https://www.kaggle.com/glushko/wine-quality-modelling-part-ii",target:"blank"},"Modeling")," • ",l.a.createElement("a",{href:"https://github.com/roma-glushko/kaggle-wine-quality",target:"blank"},"Github")))),l.a.createElement("li",{className:"project"},l.a.createElement("h3",null,"Ames House Pricing"),l.a.createElement("div",{className:"project-description"},"Modeled house prices based on Ames Housing Dataset.",l.a.createElement("br",null)," ",l.a.createElement("br",null),"Got to Top 4% of submitters on Kaggle."),l.a.createElement("ul",{className:"project-details"},l.a.createElement("li",null,l.a.createElement("strong",null,"Experience"),": Regression, Tabular Data, Real Estate, Data Analysis, Python, Scikit-Learn, XGBoost"),l.a.createElement("li",null,"Links: ",l.a.createElement("a",{href:"https://www.kaggle.com/glushko/house-prices-domain-driven-eda-part-i",target:"blank"},"Data Analysis")," • ",l.a.createElement("a",{href:"https://www.kaggle.com/glushko/house-prices-regression-modelling-part-ii",target:"blank"},"Modeling")," • ",l.a.createElement("a",{href:"https://github.com/roma-glushko/kaggle-house-prices",target:"blank"},"Github")))))),l.a.createElement("span",{className:"other-projects-link"},"Other projects can be found on ",l.a.createElement("a",{target:"_blank",rel:"noopener",href:"https://github.com/roma-glushko?tab=repositories&q=machine-learning"},"GitHub")," and ",l.a.createElement("a",{target:"_blank",rel:"noopener",href:"https://www.kaggle.com/glushko/code"},"Kaggle"))),l.a.createElement("section",{className:"jobs"},l.a.createElement("h2",null,l.a.createElement("span",null,"Work Experience")),l.a.createElement("ul",null,l.a.createElement("li",{itemscope:!0,itemtype:"http://schema.org/Organization",className:"job"},l.a.createElement("strong",{itemprop:"jobTitle"},"Tech Lead / Software Developer"),", ",l.a.createElement("span",{itemprop:"name"},"Atwix"),"; Ukraine — 2017-2020 (3.5 years)",l.a.createElement("br",null),l.a.createElement("strong",null,"Skills"),": Problem Solving, eCommerce, Marketing, Leadership, System Design, Problem Framing"),l.a.createElement("li",{itemscope:!0,itemtype:"http://schema.org/Organization",className:"job"},l.a.createElement("strong",{itemprop:"jobTitle"},"eCommerce Magento Software Developer"),", ",l.a.createElement("span",{itemprop:"name"},"Atwix"),"; Ukraine — 2015-2017 (2 years)",l.a.createElement("br",null),l.a.createElement("strong",null,"Skills"),": Linux, Git, PHP, MySQL, Elasticsearch, Redis"))),l.a.createElement("section",{itemscope:!0,itemtype:"http://schema.org/ItemList",className:"leadership"},l.a.createElement("dl",null,l.a.createElement("dt",null,l.a.createElement("h2",null,l.a.createElement("span",{itemprop:"name"},"Communication & Leadership"))),l.a.createElement("ul",null,l.a.createElement("li",{itemprop:"itemListElement"},l.a.createElement("strong",null,"Technical Leadership")," of Software Engineering Team (3.5 years) ",l.a.createElement("br",null),"Led cross-functional teams of different sizes (5-15 people incl. SEs, QA, PM, DevOps). Organized and optimized team processes. ",l.a.createElement("br",null)," Took part in presentations and frequent calls with clients, project groomings, and delivered internal technical workshops. Advocated software engineer's needs behind C-level management."),l.a.createElement("li",{itemprop:"itemListElement"},"Organized technical and business ",l.a.createElement("a",{target:"_blank",rel:"noopener",href:"https://www.atwix.com/magento/atwix-magenews-jun-2020/"},"newsletter")," (led for 2 years) ",l.a.createElement("br",null)),l.a.createElement("li",{itemprop:"itemListElement"},"Write ",l.a.createElement("a",{target:"_blank",rel:"noopener",href:"https://www.romaglushko.com/blog/"},"technical blog posts")," and ",l.a.createElement("a",{target:"_blank",rel:"noopener",href:"https://www.romaglushko.com/thoughts/"},"thoughts about management"))))),l.a.createElement("section",{itemscope:!0,itemtype:"http://schema.org/ItemList"},l.a.createElement("dl",null,l.a.createElement("dt",null,l.a.createElement("h2",null,l.a.createElement("span",{itemprop:"name"},"Hobby & Interests"))),l.a.createElement("ul",null,l.a.createElement("li",{itemprop:"itemListElement"},"Scooter driving"),l.a.createElement("li",{itemprop:"itemListElement"},"Self-improvement"),l.a.createElement("li",{itemprop:"itemListElement"},"Reading"),l.a.createElement("li",{itemprop:"itemListElement"},l.a.createElement("a",((e={rel:"me",target:"_blank"}).rel="noopener",e.href="https://www.romaglushko.com/",e),"Blogging")),l.a.createElement("li",{itemprop:"itemListElement"},l.a.createElement("a",{target:"_blank",href:"https://github.com/roma-glushko"},"Open Source")),l.a.createElement("li",{itemprop:"itemListElement"},"Judaism"))))))),l.a.createElement(p.a,{crumbs:[{"/cv/machine-learning-engineer/":"Machine Learning Engineer CV"}]}))}},mKGn:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),l=a.n(n),r=a("N8DM");a("drBq");var i=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleClick=function(e){var t=a.state,n=t.checked,l=t.toggleTheme,r=!n;a.setState({checked:r}),l(r?"dark":"light")},a.render=function(){return l.a.createElement(r.ThemeToggler,null,(function(e){var t=e.theme,n=e.toggleTheme;a.setState({checked:"dark"===t,toggleTheme:n});var r="theme-switcher-toggler"+(a.state.checked?" theme-switcher-toggler--checked":"");return l.a.createElement("div",{className:r,onClick:a.handleClick},l.a.createElement("div",{className:"theme-switcher-track"}),l.a.createElement("div",{className:"theme-switcher-thumb"}),l.a.createElement("input",{className:"theme-switcher-input",type:"checkbox",checked:"dark"===t,readOnly:!0,"aria-label":"Switch between Dark and Light mode"}))}))},a.state={checked:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n}(n.PureComponent)},ys0W:function(e,t,a){var n=a("QPJK"),l=a("2mBY"),r=a("5SQf"),i=a("BnbX").f;e.exports=function(e){return function(t){for(var a,c=r(t),o=l(c),m=o.length,s=0,p=[];m>s;)a=o[s++],n&&!i.call(c,a)||p.push(e?[a,c[a]]:c[a]);return p}}}}]);
//# sourceMappingURL=component---src-pages-cv-machine-learning-engineer-js-117302a64a6d2fab8736.js.map