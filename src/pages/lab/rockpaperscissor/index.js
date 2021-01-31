import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/theme/layout"
import SEO from "../../../components/seo"
import ViewPageHeader from "../../../components/theme/view-page-header"
import MainNavigation from "../../../components/theme/main-navigation"

const RockPaperScissorPage = () => (
    <Layout>
      <SEO
        title={"Rock, Paper, Scissor - Lab"}
        className="experiment-view-page"
        pagePath='/lab/rockpaperscissor'
        ogType="article"
        description=""
        keywords=""
      />
        <div className="experiment-header">
            <ViewPageHeader />
            <MainNavigation space={"lab"} />
        </div>
        <main className="">
            
        </main>
    </Layout>
)

export default RockPaperScissorPage