import React from "react"
import { graphql, Link } from "gatsby"
import ThoughtAuthor from "../components/thoughts/thought-author"
import ThoughtNavigation from "../components/thoughts/thought-navigation"
import ThemeSwitcher from "../components/theme/theme-switcher"
import Layout from "../components/theme/layout"
import SEO from "../components/seo"

import "../components/thoughts/thought-view.css"
import "../components/thoughts/thought-content.css"

export default function Template({
  data: {markdownRemark: {frontmatter, html, timeToRead}},
  pageContext: { prevThought, nextThought }
}) {
  return (
    <Layout>
      <SEO title = {frontmatter.title + " • Thoughts"} className="thought-view-page" />
        <div className="thoughts-title">
          <Link to="/thoughts">Thoughts</Link>
        </div>
        <article className="thought-wrapper">
          <h1>{frontmatter.title}</h1>
          <div className="thought-details">
            <time className="thought-createdat">{frontmatter.date}</time>
            <span> • </span>
            <span className="thought-time2read">{timeToRead} min read</span>
            <div className="theme-switcher">
              <ThemeSwitcher />
            </div>
          </div>
          <div className="thought-divider" />
          <div
              className="thought-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
        </article>
        <aside className="thought-sidebar">
          <ThoughtAuthor />
          <ThoughtNavigation prev={prevThought} next={nextThought} />
        </aside>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMM D, YYYY")
        path
        title
      }
    }
  }
`