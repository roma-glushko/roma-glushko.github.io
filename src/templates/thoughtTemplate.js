import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data: {markdownRemark: {frontmatter, html}}, // this prop will be injected by the GraphQL query below.
}) {
  
  return (
    <div className="thought-container">
      <div className="thought-details">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="thought-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`