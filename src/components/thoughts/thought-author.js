import React from "react";
import Logo from "./logo"

import "./thought-author.css"

const ThoughtAuthor = () => {
  return (
    <div className="thought-author-wrapper">
        <div className="logo">
            <div className="avatar">
                <Logo />
            </div>
        </div>
        <div className="name">Roman Glushko</div>
        <p className="thought-section-descr">Unpopular and totally wrong thoughts. <br/> Yeah, I know it. And that's <span>fine</span>.</p>
    </div>
  );
};

export default ThoughtAuthor;