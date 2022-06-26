import * as React from "react"

import Layout from "../components/theme/layout"
import Seo from "../components/seo/seo"
import NotFoundImage from "../components/404/404-image"
import MainNavigation from "../components/main-navigation"
import BreadcrumbsSnippet from "../components/seo/breadcrumbs-snippet"
import ThemeSwitcher from "../components/theme/theme-switcher"

import "../components/404/404.css"
import PokemonInfo from "../components/404/pokeapi"

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
        <PokemonInfo name={"slowpoke"} />
        <NotFoundImage />
        <div className="not-found-content">
          <h1>Not Found</h1>
          <MainNavigation space="404" />
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <ThemeSwitcher />
        </div>
      </main>
      <BreadcrumbsSnippet crumbs={[]} />
    </div>
  </Layout>
)

export default NotFoundPage
