import React, { Component } from 'react';
import { graphql, Link } from "gatsby"
import Layout from "../components/theme/layout"
import SEO from "../components/seo"
import MainNavigation from "../components/theme/main-navigation"
import ThoughtAuthor from "../components/thoughts/thought-author"
import ThemeSwitcher from "../components/theme/theme-switcher"
import ThoughtTeaser from "../components/thoughts/thought-teaser"
import Footer from "../components/theme/footer"

import "./thoughts.css"

class ThoughtListPage extends Component {
  render() {
    const { data: { allMarkdownRemark: { edges } }} = this.props

    return (
      <Layout>
        <SEO 
          title = "Thoughts"
          pagePath="/thoughts/"
          className="thoughts-list-page" 
          description="Thoughts and expirience that will help you to go through this life this life in the very best way" 
          keywords={[
            'thougths',
            'opinion',
            'life explorining',
            'psychology',
            'roman glushko thoughts',
            'roman hlushko thoughts',
            'life',
            'people',
            'management',
          ]}
        />
        <div className="thoughts-wrapper">
          <h1 className="thoughts-title">Thoughts</h1>
          <aside className="thought-sidebar">
            <ThoughtAuthor />
            <MainNavigation />
            <div className="navigation">
                <Link to="/">← Take Me Home</Link>
            </div>
            <div className="theme-switcher">
                <ThemeSwitcher />
              </div>
          </aside>
          <main className="thoughts-list">
            {edges.map(thought => (
              <ThoughtTeaser 
                title={thought.node.frontmatter.title} 
                url={thought.node.frontmatter.path} 
                timeToRead={thought.node.timeToRead} 
                publishedHumanDate={thought.node.frontmatter.humanDate}
                publishedFullDate={thought.node.frontmatter.fullDate}
                excerpt={thought.node.excerpt}
                cover={thought.node.frontmatter.cover}
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

export default ThoughtListPage

export const pageQuery = graphql`
  query ThoughtListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }, 
      filter: {fileAbsolutePath: {regex: "/(thoughts)/"  }}
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
                fluid(maxWidth: 400) {
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