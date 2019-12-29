
import React from "react";
import { Link } from "gatsby"

import "./main-navigation.css"

const MainNavigation = () => {
  return (
    <nav className="main-navigation">
      <ul>
          <li><Link to="/thoughts">• Thoughts •</Link></li>
      </ul>
    </nav>
  );
};

export default MainNavigation;