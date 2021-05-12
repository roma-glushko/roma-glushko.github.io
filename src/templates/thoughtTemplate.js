import React from "react"
import { graphql, Link } from "gatsby"
import ThoughtAuthor from "../components/thoughts/thought-author"
import Thought from "../components/thoughts/thought"
import ThoughtNavigation from "../components/thoughts/thought-navigation"
import Layout from "../components/theme/layout"
import Footer from "../components/theme/footer"
import SEO from "../components/seo"
import NewsletterForm from '../components/blog/newsletter-form'
import ShareBlock from '../components/thoughts/share-block'
import ReadingAnalytics from "../components/blog/reading-analytics"

import "./thought-view.css"
import ThoughtRichSnippet from "../components/thoughts/thought-rich-snippet"

export default function Template({ data, pageContext: { prevThought, nextThought } }) {
  const {
    markdownRemark: {
      frontmatter: {
        path,
        title,
        humanDate,
        fullDate,
        keywords,
        cover
      },
      html,
      rawMarkdownBody,
      timeToRead,
      excerpt,
      wordCount: { words }
    }
  } = data

  return (
    <Layout>
      <SEO
        title={title + " - Thoughts"}
        className="thought-view-page"
        pagePath={path}
        imagePath={cover.childImageSharp.fluid.src}
        ogType="article"
        description={excerpt}
        keywords={keywords}
        meta={[]}
      />
      <div className="thoughts-title">
        <Link to="/thoughts/">Thoughts</Link>
      </div>
      <main>
        <Thought title={title} timeToRead={timeToRead} publishedHumanDate={humanDate} publishedFullDate={fullDate} cover={cover} contentHtml={html} />
        <ShareBlock title={title} path={path} tags={keywords} />
        <NewsletterForm />
      </main>
      <aside className="thought-sidebar">
        <ThoughtAuthor />
        <ThoughtNavigation prev={prevThought} next={nextThought} />
      </aside>
      <Footer />
      <ThoughtRichSnippet
        title={title}
        datePublished={fullDate}
        content={rawMarkdownBody}
        wordCount={words}
        keywords={keywords}
        cover={cover}
      />
      <ReadingAnalytics contentType={`thought`} />
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
        path
        humanDate: date(formatString: "MMM D, YYYY")
        fullDate: date (formatString: "YYYY-MM-DD") 
        title
        keywords
        cover {
          childImageSharp {
            fluid(maxWidth: 3400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`