import React from "react"
import { graphql } from "gatsby"

import loadable from "@loadable/component"

import ViewPageHeader from "../components/theme/view-page-header"
import MainNavigation from "../components/theme/main-navigation"
import BlogPost from "../components/blog/blog-post"
import BlogNavigation from "../components/blog/blog-navigation"
import Layout from "../components/theme/layout"
import Seo from "../components/seo"
import ShareBlock from "../components/thoughts/share-block"
import ArticleRichSnippet from "../components/thoughts/article-rich-snippet"
import ReadingAnalytics from "../components/blog/reading-analytics"
import BreadcrumbsSnippet from "../components/theme/breadcrumbs-snippet"
import Footer from "../components/theme/footer"

import MathJax from "../components/blog/mathjax"

import "./blog-view.css"

const NewsletterForm = loadable(() =>
  import("../components/blog/newsletter-form")
)
const BlogComments = loadable(() => import("../components/blog/blog-comments"))

export default function Template({
  data,
  pageContext: { prevThought, nextThought },
}) {
  const {
    markdownRemark: {
      frontmatter: {
        path,
        title,
        humanDate,
        fullDate,
        keywords,
        includeMath,
        cover: {
          childImageSharp: { gatsbyImageData },
        },
        coverCredits,
        excerpt,
      },
      html,
      rawMarkdownBody,
      timeToRead,
      wordCount: { words },
    },
  } = data

  return (
    <Layout>
      <Seo
        title={`${title} - Blog`}
        className="blogpost-view-page"
        pagePath={path}
        imagePath={gatsbyImageData.images.fallback.src}
        ogType="article"
        description={excerpt}
        keywords={keywords}
        meta={[]}
      />
      <div className="blogpost-header">
        <ViewPageHeader spaceTitle="Blog" spaceLink="/blog/" />
        <MainNavigation space={"blog"} />
      </div>
      <main>
        <BlogPost
          title={title}
          timeToRead={timeToRead}
          publishedHumanDate={humanDate}
          publishedFullDate={fullDate}
          keywords={keywords}
          cover={gatsbyImageData}
          coverCredits={coverCredits}
          contentHtml={html}
        />
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
        dateModified={fullDate} // gitLogLatestDate
        content={rawMarkdownBody}
        wordCount={words}
        keywords={keywords}
        cover={gatsbyImageData}
        articleSection={"Technical Blog"}
        genre={[
          "machine learning",
          "software engineering",
          "science",
          "deep learning",
          "statistics",
        ]}
      />
      <ReadingAnalytics contentType={`blog`} />
      <BreadcrumbsSnippet
        crumbs={[{ "/blog/": "Blog" }, { [path]: title }]}
      />
      {includeMath ? <MathJax /> : ""}
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($path: String!) {
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
        fullDate: date(formatString: "YYYY-MM-DD")
        title
        keywords
        includeMath
        excerpt
        cover {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
        coverCredits
      }
    }
  }
`
