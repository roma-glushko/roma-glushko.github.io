import React, {Component} from "react";

// https://www.vincentntang.com/installing-gatsbyjs-blog-comments/
export default class BlogComments extends Component {

  constructor(props){ 
    super(props);
    this.commentBox = React.createRef();
  }
  
  componentDidMount () {
    let scriptEl = document.createElement("script");

    scriptEl.setAttribute("src", "https://utteranc.es/client.js");
    scriptEl.setAttribute("crossorigin", "anonymous");
    scriptEl.setAttribute("async", true);
    scriptEl.setAttribute("label", "discussion💬");
    scriptEl.setAttribute("repo", "roma-glushko/romaglushkocom-discussions");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute( "theme", "github-light");

    this.commentBox.current.appendChild(scriptEl);
  }

  render() {
    return (
      <div ref={this.commentBox} className="comment-box"></div>
    );
  }
}