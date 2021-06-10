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
import BreadcrumbsRichSnippet from "../components/theme/breadcrumbs-rich-snippet"
import ReadingAnalytics from "../components/blog/reading-analytics"
import ArticleRichSnippet from "../components/thoughts/article-rich-snippet"

import "./thought-view.css"


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
        coverCredits,
      },
      html,
      rawMarkdownBody,
      timeToRead,
      excerpt,
      wordCount: { words },
      parent: {
        fields: {
          gitLogLatestDate
        }
      }
    },
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
        <Thought 
          title={title} 
          timeToRead={timeToRead} 
          publishedHumanDate={humanDate} 
          publishedFullDate={fullDate} 
          cover={cover}
          coverCredits={coverCredits}
          contentHtml={html} 
        />
        <ShareBlock title={title} path={path} tags={keywords} />
        <NewsletterForm />
      </main>
      <aside className="thought-sidebar">
        <ThoughtAuthor />
        <ThoughtNavigation prev={prevThought} next={nextThought} />
      </aside>
      <Footer />
      <ArticleRichSnippet
        title={title}
        path={path}
        datePublished={fullDate}
        dateModified={gitLogLatestDate}
        content={rawMarkdownBody}
        wordCount={words}
        keywords={keywords}
        cover={cover}
        articleSection={"Thoughts"}
        genre={["self-improvement", "management", "thoughts", "life experience", "life exploration"]}
      />
      <ReadingAnalytics contentType={`thought`} />
      <BreadcrumbsRichSnippet crumbs={[{'/thoughts/': 'Thoughts'}, {[path]: title}]} />
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
        coverCredits
      }
      parent {
        ... on File {
          fields {
            gitLogLatestDate
          }
        }
      }
    }
  }
`