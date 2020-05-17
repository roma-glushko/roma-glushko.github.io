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
        <div className="name">• Roman Glushko •</div>
        <p className="thought-section-descr">My thoughts, pieces of advice and life experience <br/>that will help you to overcome your life struggles</p>
    </div>
  );
};

export default ThoughtAuthor;