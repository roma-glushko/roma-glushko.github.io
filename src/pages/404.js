import React from "react"

import Layout from "../components/theme/layout"
import SEO from "../components/seo"
import NotFoundImage from "../components/404/404-image"
import MainNavigation from "../components/theme/main-navigation"
import ThemeSwitcher from "../components/theme/theme-switcher"

import "../components/404/404.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" className="not-found-page" meta={{
      name: `robots`,
      content: `noindex,nofollow`,
    }} />
    <div className="container">
      <main className="row not-found-wrapper">
        <NotFoundImage />
        <div className="not-found-content">
          <h1>Not Found</h1>
          <MainNavigation space="404" />
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <ThemeSwitcher />
        </div>
      </main>
    </div>
  </Layout>
)

export default NotFoundPage