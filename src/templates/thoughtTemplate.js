import React from "react"
import { graphql, Link } from "gatsby"
import ThoughtAuthor from "../components/thoughts/thought-author"
import Thought from "../components/thoughts/thought"
import ThoughtNavigation from "../components/thoughts/thought-navigation"
import Layout from "../components/theme/layout"
import SEO from "../components/seo"

import "./thought-view.css"

export default function Template({
  data: {markdownRemark: {frontmatter: {title, date}, html, timeToRead, excerpt}},
  pageContext: { prevThought, nextThought }
}) {
  return (
    <Layout>
      <SEO 
        title = {title + " • Thoughts"} 
        className="thought-view-page"
        description={excerpt}
      />
        <div className="thoughts-title">
          <Link to="/thoughts">Thoughts</Link>
        </div>
        <main>
          <Thought title={title} timeToRead={timeToRead} publishedDate={date} contentHtml={html} />
        </main>
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
      excerpt(pruneLength: 100)
      frontmatter {
        date(formatString: "MMM D, YYYY")
        path
        title
      }
    }
  }
`