
import React from "react";
import { Link } from "gatsby"

import "./main-navigation.css"

const MainNavigation = () => {
  return (
    <nav className="main-navigation">
      <ul>
          <li><Link to="/blog/" title="Go to Technical blog">Blog</Link></li>
          <li><Link to="/thoughts/" title="Go to Thoughts">Thoughts</Link></li>
      </ul>
    </nav>
  );
};

export default MainNavigation;