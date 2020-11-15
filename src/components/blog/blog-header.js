import React from 'react'
import { Link } from "gatsby"
import Logo from "../theme/logo"

import "./blog-header.css"

const BlogHeader = () => {
  return (
    <div className="blog-header-wrapper">
        <div className="logo-wrapper">
            <div className="logo">
                <Logo />
            </div>
            <div className="name"><Link to="/">Roman <br /> Glushko</Link></div>
        </div>
        <h1 className="blog-title"><Link to="/blog/">Blog</Link></h1>
    </div>
  )
}

export default BlogHeader