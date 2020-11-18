import React from "react"
import { graphql, Link } from "gatsby"
import BlogHeader from "../components/blog/blog-header"
import BlogPost from "../components/blog/blog-post"
import ThoughtNavigation from "../components/thoughts/thought-navigation"
import Layout from "../components/theme/layout"
import SEO from "../components/seo"
import ShareBlock from '../components/thoughts/share-block'
import ThoughtRichSnippet from "../components/thoughts/thought-rich-snippet"

import "./blog-view.css"

export default function Template({data, pageContext: { prevThought, nextThought }}) {
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
      wordCount: {words}
    }
	} = data

  return (
    <Layout>
      <SEO 
        title = {title + " - Blog"} 
        className="blogpost-view-page"
        pagePath={path}
        imagePath={cover.childImageSharp.fluid.src}
        ogType="article"
        description={excerpt}
        keywords={keywords}
      />
        <div className="blogpost-header">
          <BlogHeader />
        </div>
        <main>
          <BlogPost title={title} timeToRead={timeToRead} publishedHumanDate={humanDate} publishedFullDate={fullDate} cover={cover} contentHtml={html} />
          <ShareBlock title={title} path={path} tags={keywords} />
        </main>
        <aside className="blogpost-sidebar">
          <ThoughtNavigation prev={prevThought} next={nextThought} />
        </aside>
        <ThoughtRichSnippet 
          title={title}
          datePublished={fullDate}
          content={rawMarkdownBody}
          wordCount={words}
          keywords={keywords}
          cover={cover}
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