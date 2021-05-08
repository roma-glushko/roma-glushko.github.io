import React from "react"
import { graphql } from "gatsby"
 
import ViewPageHeader from "../components/theme/view-page-header"
import MainNavigation from "../components/theme/main-navigation"
import BlogPost from "../components/blog/blog-post"
import BlogComments from "../components/blog/blog-comments"
import BlogNavigation from "../components/blog/blog-navigation"
import Layout from "../components/theme/layout"
import SEO from "../components/seo"
import ShareBlock from '../components/thoughts/share-block'
import ThoughtRichSnippet from "../components/thoughts/thought-rich-snippet"
import ReadingAnalytics from "../components/blog/reading-analytics"
import Footer from "../components/theme/footer"

import "./blog-view.css"
import MathJax from "../components/blog/mathjax"

export default function Template({ data, pageContext: { prevThought, nextThought } }) {
  const {
    markdownRemark: {
      frontmatter: {
        path,
        title,
        humanDate,
        fullDate,
        keywords,
        cover,
        excerpt
      },
      html,
      rawMarkdownBody,
      timeToRead,
      wordCount: { words }
    }
  } = data

  return (
    <Layout>
      <SEO
        title={title + " - Blog"}
        className="blogpost-view-page"
        pagePath={path}
        imagePath={cover.childImageSharp.fluid.src}
        ogType="article"
        description={excerpt}
        keywords={keywords}
        meta={[]}
      />
      <div className="blogpost-header">
        <ViewPageHeader />
        <MainNavigation space={"blog"} />
      </div>
      <main>
        <BlogPost title={title} timeToRead={timeToRead} publishedHumanDate={humanDate} publishedFullDate={fullDate} keywords={keywords} cover={cover} contentHtml={html} />
        <ShareBlock title={title} path={path} tags={keywords} />
        <BlogComments />
      </main>
      <aside className="blogpost-sidebar">
        <BlogNavigation prev={prevThought} next={nextThought} />
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
      <MathJax />
      <ReadingAnalytics contentType={`blog`} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
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
        excerpt
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