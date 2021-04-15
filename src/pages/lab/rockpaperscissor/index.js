import React from "react"

import Layout from "../../../components/theme/layout"
import SEO from "../../../components/seo"
import ViewPageHeader from "../../../components/theme/view-page-header"
import MainNavigation from "../../../components/theme/main-navigation"
import NNBackground from "../../../components/nn-design/nn-background.js"
import Footer from "../../../components/theme/footer"

import RockPaperScissorGame from '../../../components/lab/rock-paper-scissor-game.js'

import "./index.css"

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
        <header className="experiment-header">
          <ViewPageHeader spaceTitle="Lab" spaceLink="/lab/" />
          <MainNavigation space={"lab"} />
        </header>
        {/** refactor NN background component */}
        <div id="hero-header" className="lab-header">
          <NNBackground />
          <h1 className="title">
            Rock, Paper, Scissor <br />
            <span className="experiment-category">Computer Vision</span>
          </h1>

        </div>
        <main className="rockpaperscissor-wrapper">
          <div className="into">
             
          </div>
          <RockPaperScissorGame />
        </main>
        <Footer />
    </Layout>
)

export default RockPaperScissorPage