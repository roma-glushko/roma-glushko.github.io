import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/theme/layout"
import SEO from "../components/seo"
import Logo from "../components/thoughts/logo"
import ThemeSwitcher from "../components/theme/theme-switcher"

export default function Template({
  data: {markdownRemark: {frontmatter, html, timeToRead}}, // this prop will be injected by the GraphQL query below.
}) {
  
  return (
    <Layout>
      <SEO title = "Thoughts" className="thoughts-view-page" />
      <div className="thoughts-wrapper">
        <div className="thoughts-title">Thoughts</div>
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
            <a href="/thoughts">← Thoughts</a>
        </div>
        <div className="theme-switcher">
            <ThemeSwitcher />
          </div>
      </aside>
        <article className="thought-wrapper">
          <h1>{frontmatter.title}</h1>
          <div className="thought-details">
            <time className="thought-createdat">{frontmatter.date}</time>
            <span> • </span>
            <span className="thought-time2read">{timeToRead} min read</span>
          </div>
          <div
              className="thought-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
        </article>
      </div>
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