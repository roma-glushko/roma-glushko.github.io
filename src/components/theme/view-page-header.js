import React from 'react'
import { Link } from "gatsby"
import Logo from "../theme/logo"

import "./view-page-header.css"

// todo: refactor name of the component. This header is placed not only on the view pages but on the listings

const ViewPageHeader = ({ spaceTitle, spaceLink  }) => {
  return (
    <div className="view-page-header">
        <div className="view-page-header-wrapper">
          <div className="logo-wrapper">
              <div className="logo">
                  <Logo />
              </div>
              <div className="name"><Link to="/blog/">Roman <br /> Glushko</Link></div>
          </div>
          <h1 className="blog-title"><Link to={spaceLink}>{spaceTitle}</Link></h1>
        </div>
    </div>
  )
}

export default ViewPageHeader