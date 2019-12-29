import React, { Component } from 'react';
import { graphql, Link } from "gatsby"
import Layout from "../components/theme/layout"
import SEO from "../components/seo"
import ThoughtAuthor from "../components/thoughts/thought-author"
import ThemeSwitcher from "../components/theme/theme-switcher"
import ThoughtTeaser from '../components/thoughts/thought-teaser'

import "./thoughts.css"

class ThoughtListPage extends Component {
  render() {
    const { data: { allMarkdownRemark: { edges } }} = this.props

    return (
      <Layout>
        <SEO 
          title = "Thoughts" 
          className="thoughts-list-page" 
          description="Unpopular and totally wrong thoughts. Yeah, I know it. And that's fine." 
        />
        <div className="thoughts-wrapper">
          <h1 className="thoughts-title">Thoughts</h1>
          <aside className="thought-sidebar">
            <ThoughtAuthor />
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
                publishedDate={thought.node.frontmatter.date} 
                excerpt={thought.node.excerpt} 
              />
            ))}
          </main>
          <div className="clearfix" />
        </div>
      </Layout>
    )
  }
}

export default ThoughtListPage

export const pageQuery = graphql`
  query ThoughtListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          timeToRead
          frontmatter {
            date(formatString: "MMM D, YYYY")
            path
            title
          }
        }
      }
    }
  }
`