import React from "react"
import { graphql, Link } from "gatsby"
import ThoughtAuthor from "../components/thoughts/thought-author"
import Thought from "../components/thoughts/thought"
import ThoughtNavigation from "../components/thoughts/thought-navigation"
import Layout from "../components/theme/layout"
import SEO from "../components/seo"

import "./thought-view.css"
import ThoughtRichSnippet from "../components/thoughts/thought-rich-snippet"

export default function Template({
  data: {markdownRemark: {frontmatter: {title, humanDate, fullDate, keywords}, html, rawMarkdownBody, timeToRead, excerpt, wordCount: {words}}},
  pageContext: { prevThought, nextThought }
}) {
  return (
    <Layout>
      <SEO 
        title = {title + " - Thoughts"} 
        className="thought-view-page"
        description={excerpt}
        keywords={keywords}
      />
        <div className="thoughts-title">
          <Link to="/thoughts">Thoughts</Link>
        </div>
        <main>
          <Thought title={title} timeToRead={timeToRead} publishedHumanDate={humanDate} publishedFullDate={fullDate} contentHtml={html} />
        </main>
        <aside className="thought-sidebar">
          <ThoughtAuthor />
          <ThoughtNavigation prev={prevThought} next={nextThought} />
        </aside>
        <ThoughtRichSnippet 
          title={title}
          datePublished={fullDate}
          content={rawMarkdownBody}
          wordCount={words}
          keywords={keywords}
        />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      excerpt
      rawMarkdownBody
      wordCount {
        words
      }
      frontmatter {
        humanDate: date(formatString: "MMM D, YYYY")
        fullDate: date (formatString: "YYYY-MM-D") 
        title
        keywords
      }
    }
  }
`