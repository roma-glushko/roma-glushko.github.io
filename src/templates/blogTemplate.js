import React from "react"
import { graphql } from "gatsby"

import loadable from '@loadable/component'

import ViewPageHeader from "../components/theme/view-page-header"
import MainNavigation from "../components/theme/main-navigation"
import BlogPost from "../components/blog/blog-post"
import BlogNavigation from "../components/blog/blog-navigation"
import Layout from "../components/theme/layout"
import SEO from "../components/seo"
import ShareBlock from '../components/thoughts/share-block'
import ArticleRichSnippet from "../components/thoughts/article-rich-snippet"
import ReadingAnalytics from "../components/blog/reading-analytics"
import BreadcrumbsRichSnippet from "../components/theme/breadcrumbs-rich-snippet"
import Footer from "../components/theme/footer"

import "./blog-view.css"
import MathJax from "../components/blog/mathjax"

const NewsletterForm = loadable(() => import('../components/blog/newsletter-form'));
const BlogComments = loadable(() => import('../components/blog/blog-comments'));

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
        <NewsletterForm />
        <BlogComments />
      </main>
      <aside className="blogpost-sidebar">
        <BlogNavigation prev={prevThought} next={nextThought} />
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
        articleSection={"Technical Blog"}
        genre={["machine learning", "software engineering", "science", "deep learning", "statistics"]}
      />
      <MathJax />
      <ReadingAnalytics contentType={`blog`} />
      <BreadcrumbsRichSnippet crumbs={[{'/blog/': 'Blog'}, {[path]: title}]} />
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