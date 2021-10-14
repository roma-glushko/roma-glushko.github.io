
import React from "react";
import { Link } from "gatsby"

import "./main-navigation.css"

const MainNavigation = ({ space }) => {
  return (
    <nav className="main-navigation">
      <ul>
        {space !== 'homepage' &&
          <li><Link rel="home" to="/" title="Go Home">Home</Link></li>
        }
        <li><Link to="/blog/" title="Go to my Technical Blog">Blog</Link></li>
        <li><Link to="/lab/" title="Go to my Lab">Lab</Link></li>
        <li><Link to="/thoughts/" title="Go to my Thoughts">Thoughts</Link></li>
        <li><Link to="/cv/machine-learning-engineer/" title="Review My CVs">CV</Link></li>
      </ul>
    </nav>
  )
}

export default MainNavigation;