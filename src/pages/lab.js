import React, { Component } from 'react';
import { graphql } from "gatsby"
import Layout from "../components/theme/layout"
import SEO from "../components/seo"
import LabHeader from "../components/lab/lab-header"
import MainNavigation from "../components/theme/main-navigation"
import ExperimentTeaser from "../components/lab/experiment-teaser"
import Footer from "../components/theme/footer"

import "./lab.css"

class LabListPage extends Component {
  render() {
    const { data: { allExperimentsJson: { edges } } } = this.props

    return (
      <Layout>
        <SEO
          title="Lab"
          pagePath="/lab/"
          className="lab-list-page"
          description="Machine Learning Experiments Live"
          keywords={[
            'artificial intelligent',
            'machine learning',
            'deep networks',
            'neural networks',
            'AI demo',
          ]}
        />
        <div className="lab-wrapper">
          <aside className="lab-sidebar">
            <LabHeader />
            <MainNavigation space={"lab"} />
          </aside>
          <main className={`experiment-list experiment-grid ${!edges.length ? "no-experiments" : ""}`}>
            {!edges.length && (
            <div className="no-experiments-placeholder">
              Great posts will be here as soon as my muse comes back to me 💫 <br />
              Come back soon 👋
            </div> )}
            {edges.map(experiment => (
              <ExperimentTeaser
                key={experiment.node.id}
                title={experiment.node.title}
                url={experiment.node.url}
                description={experiment.node.description}
                category={experiment.node.category}
              />
            ))}
          </main>
          <div className="clearfix" />
        </div>
        <Footer />
      </Layout>
    )
  }
}

export default LabListPage

export const pageQuery = graphql`
  query LabListQuery {
    allExperimentsJson {
      edges {
        node {
          id
          title
          url
          description
          category
          publishDate
        }
      }
    }
  }
`