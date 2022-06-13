import * as React from "react"

import Layout from "../components/theme/layout"
import Seo from "../components/seo"
import NotFoundImage from "../components/404/404-image"
import MainNavigation from "../components/theme/main-navigation"
import BreadcrumbsRichSnippet from "../components/theme/breadcrumbs-rich-snippet"
import ThemeSwitcher from "../components/theme/theme-switcher"

import "../components/404/404.css"

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <Seo
      title="404: Not Found"
      className="not-found-page"
      meta={[
        {
          name: `robots`,
          content: `noindex,nofollow`,
        },
      ]}
    />
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
      <BreadcrumbsRichSnippet crumbs={[]} />
    </div>
  </Layout>
)

export default NotFoundPage
