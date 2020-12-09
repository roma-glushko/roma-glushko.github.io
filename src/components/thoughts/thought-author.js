import React from "react";
import Logo from "../theme/logo"

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
      <p className="thought-section-descr">My thoughts, pieces of advice and life experience <br />that will help you to <strong>overcome</strong> your life struggles</p>
    </div>
  );
};

export default ThoughtAuthor;