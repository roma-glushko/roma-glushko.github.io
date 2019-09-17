import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NotFoundImage from "../components/404-image"
import ThemeSwitcher from "../components/theme-switcher"

import "../components/index.css" // todo: need to refactor styles and html structure, index page has parts that should be in the layout
import "../components/404.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" meta={{
          name: `robots`,
          content: `noindex,nofollow`,
        }} />
    <div className="container">
            <div className="row not-found-container">
                <div className="not-found-image-container">
                  <NotFoundImage />
                </div>
                <div className="content">
                    <h1>NOT FOUND</h1>
                    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
                    <div className="theme-switcher">
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </div>
  </Layout>
)

export default NotFoundPage