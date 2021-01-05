import React, { Component } from 'react';
import { graphql } from "gatsby"
import Layout from "../components/theme/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blog/blog-header"
import HeroBlock from "../components/nn-design/hero-header"
import Footer from "../components/theme/footer"

import "./nn-design.css"

class NNDesignListPage extends Component {
  render() {
    const { data: { allMarkdownRemark: { edges } } } = this.props

    return (
      <Layout>
        <SEO
          title="Catalog of Neural Network Architectures"
          pagePath="/deep-design/"
          className="blog-list-page"
          description="Learn Neural Network Architectures by examples"
          keywords={[
            'deep networks',
            'neural networks',
          ]}
        />
        <div className="nn-design-wrapper">
          <aside className="nn-design-sidebar">
            <HeroBlock />
          </aside>
          <main>
            
          </main>
          <div className="clearfix" />
        </div>
        <Footer />
      </Layout>
    )
  }
}

export default NNDesignListPage

export const pageQuery = graphql`
  query DeepDesignListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }, 
      filter: {fileAbsolutePath: {regex: "/(blog)/"  }}
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          timeToRead
          frontmatter {
            humanDate: date(formatString: "MMM D, YYYY")
            fullDate: date (formatString: "YYYY-MM-DD") 
            path
            title
            cover {
              childImageSharp {
                fluid(maxWidth: 620) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`