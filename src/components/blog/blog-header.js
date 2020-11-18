import React from 'react'
import { Link } from "gatsby"
import Logo from "../theme/logo"
import MainNavigation from "../theme/main-navigation"

import "./blog-header.css"

const BlogHeader = () => {
  return (
    <div className="blog-header">
        <div className="blog-header-wrapper">
          <div className="logo-wrapper">
              <div className="logo">
                  <Logo />
              </div>
              <div className="name"><Link to="/blog/">Roman <br /> Glushko</Link></div>
          </div>
          <h1 className="blog-title"><Link to="/blog/">Blog</Link></h1>
        </div>
        <MainNavigation space={"blog"} />
    </div>
  )
}

export default BlogHeader