import React, { Component } from "react"
import Layout from "../components/theme/layout"
import SEO from "../components/seo"
import HeroBlock from "../components/nn-design/hero-header"
import Footer from "../components/theme/footer"

import "./nn-design.css"

class NNDesignListPage extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Catalog of Neural Network Architectures"
          pagePath="/deep-design/"
          className="blog-list-page"
          description="Learn Neural Network Architectures by examples"
          keywords={["deep networks", "neural networks"]}
        />
        <div className="nn-design-wrapper">
          <aside className="nn-design-sidebar">
            <HeroBlock />
          </aside>
          <main></main>
          <div className="clearfix" />
        </div>
        <Footer />
      </Layout>
    )
  }
}

export default NNDesignListPage
