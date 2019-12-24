import React, { Component } from 'react';
import { graphql, Link } from "gatsby"
import Layout from "../components/theme/layout"
import SEO from "../components/seo"
import Logo from "../components/thoughts/logo"
import ThemeSwitcher from "../components/theme/theme-switcher"

import "../components/thoughts/thoughts.css"

class ThoughtListPage extends Component {
  render() {
    const { data: { allMarkdownRemark: { edges } }} = this.props

    return (
      <Layout>
        <SEO title = "Thoughts" className="thoughts-list-page" />
        <div className="thoughts-wrapper">
          <h1 className="thoughts-title">Thoughts</h1>
          <aside className="thought-sidebar">
            <div className="thought-author-wrapper">
              <div className="logo">
                <div className="avatar">
                    <Logo />
                </div>
              </div>
              <div className="name">Roman Glushko</div>
              <p className="thoughtbook-descr">Unpopular and totally wrong thoughts. <br/> Yeah, I know it. And that's <span>fine</span>.</p>
            </div>
            <div className="navigation">
                <a href="/">← Take Me Home</a>
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