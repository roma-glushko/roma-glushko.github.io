import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/theme/layout"
import Seo from "../components/seo"
import ViewPageHeader from "../components/theme/view-page-header"
import MainNavigation from "../components/theme/main-navigation"
import BlogTeaser from "../components/blog/blog-teaser"
import ThemeSwitcher from "../components/theme/theme-switcher"
import BreadcrumbsRichSnippet from "../components/theme/breadcrumbs-rich-snippet"
import Footer from "../components/theme/footer"

import "./blog.css"

class BlogListPage extends Component {
  render() {
    const {
      data: {
        socialImage,
        allMarkdownRemark: { edges },
      },
    } = this.props

    return (
      <Layout>
        <Seo
          title="Blog"
          pagePath="/blog/"
          className="blog-list-page"
          description="Technical blog about machine learning, data science, math and software engineering"
          imagePath={socialImage.publicURL}
          keywords={[
            "technical blog",
            "machine learning blog",
            "math",
            "engineering",
            "data science",
            "roman glushko blog",
            "roma glushko blog",
          ]}
          meta={[]}
        />
        <div className="blog-listing-wrapper">
          <aside className="blog-sidebar">
            <div className="blog-header">
              <ViewPageHeader
                spaceTitle="Blog"
                spaceLink="/blog/"
                isListing={true}
              />
              <MainNavigation space={"blog"} />
            </div>
            <div className="blog-intro">
              Technical notes about machine learning, data science, math and
              software engineering. Recording what I learn everyday.
            </div>
            <div className="misc">
              <div className="theme-switcher">
                <ThemeSwitcher />
              </div>
            </div>
          </aside>
          <main
            className={`blog-list blog-grid ${!edges.length ? "no-posts" : ""}`}
          >
            {!edges.length && (
              <div className="no-posts-placeholder">
                Great posts will be here as soon as my muse comes back to me{" "}
                <span role="img" aria-label="magic will happen soon">
                  💫
                </span>{" "}
                <br />
                Come back soon{" "}
                <span aria-label="bye" role="img">
                  👋
                </span>
              </div>
            )}
            {edges.map(({ node: {id, timeToRead, frontmatter: {title, path, humanDate, fullDate, excerpt, keywords, cover: {childImageSharp: {gatsbyImageData}}}, } }) => (
              <BlogTeaser
                key={id}
                title={title}
                url={path}
                timeToRead={timeToRead}
                publishedHumanDate={humanDate}
                publishedFullDate={fullDate}
                excerpt={excerpt}
                cover={gatsbyImageData}
                keywords={keywords}
              />
            ))}
          </main>
          <div className="clearfix" />
        </div>
        <Footer />
        <BreadcrumbsRichSnippet crumbs={[{ "/blog/": "Blog" }]} />
      </Layout>
    )
  }
}

export default BlogListPage

export const pageQuery = graphql`
  query BlogListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        fileAbsolutePath: { regex: "/(blog)/" }
        frontmatter: { published: { eq: true } }
      }
    ) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            humanDate: date(formatString: "MMM D, YYYY")
            fullDate: date(formatString: "YYYY-MM-DD")
            path
            title
            keywords
            excerpt
            cover {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 620, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
    socialImage: file(
      relativePath: { eq: "blog/roman-glushko-in-the-process-of-work.jpg" }
    ) {
      publicURL
    }
  }
`
