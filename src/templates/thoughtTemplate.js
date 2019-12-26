import React from "react"
import { graphql, Link } from "gatsby"
import ThoughtAuthor from "../components/thoughts/thought-author"
import Thought from "../components/thoughts/thought"
import ThoughtNavigation from "../components/thoughts/thought-navigation"
import Layout from "../components/theme/layout"
import SEO from "../components/seo"

import "../components/thoughts/thought-view.css"

export default function Template({
  data: {markdownRemark: {frontmatter: {title, date}, html, timeToRead}},
  pageContext: { prevThought, nextThought }
}) {
  return (
    <Layout>
      <SEO title = {title + " • Thoughts"} className="thought-view-page" />
        <div className="thoughts-title">
          <Link to="/thoughts">Thoughts</Link>
        </div>
        <Thought title={title} timeToRead={timeToRead} publishedDate={date} contentHtml={html} />
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