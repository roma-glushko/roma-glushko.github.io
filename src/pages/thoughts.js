import React, { Component } from 'react';
import { graphql, Link } from "gatsby"
import Layout from "../components/theme/layout"
import SEO from "../components/seo"
import ThoughtAuthor from "../components/thoughts/thought-author"
import ThemeSwitcher from "../components/theme/theme-switcher"

import "../components/thoughts/thought-list.css"

class ThoughtListPage extends Component {
  render() {
    const { data: { allMarkdownRemark: { edges } }} = this.props

    return (
      <Layout>
        <SEO title = "Thoughts" className="thoughts-list-page" />
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
          <articles className="thoughts-list">
            {edges.map(thought => (
              <article className="thought-item">
                <h2><Link to={thought.node.frontmatter.path}>{thought.node.frontmatter.title}</Link></h2>
                <div className="thought-details">
                  <time className="thought-createdat">{thought.node.frontmatter.date}</time>
                  <span> • </span>
                  <span className="thought-time2read">{thought.node.timeToRead} min read</span>
                </div>
                <p className="thought-digest">{thought.node.excerpt}</p>
              </article>
            ))}
          </articles>
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