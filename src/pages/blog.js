import React, { Component } from 'react';
import { graphql } from "gatsby"
import Layout from "../components/theme/layout"
import SEO from "../components/seo"
import ViewPageHeader from "../components/theme/view-page-header"
import MainNavigation from "../components/theme/main-navigation"
import BlogTeaser from "../components/blog/blog-teaser"
import ThemeSwitcher from "../components/theme/theme-switcher"
import Footer from "../components/theme/footer"

import "./blog.css"

class BlogListPage extends Component {
  render() {
    const { data: { socialImage, allMarkdownRemark: { edges } } } = this.props

    return (
      <Layout>
        <SEO
          title="Blog by Roman Glushko"
          pagePath="/blog/"
          className="blog-list-page"
          description="Technical blog about machine learning, data science, math and software engineering"
          imagePath={socialImage.relativePath}
          keywords={[
            'technical blog',
            'machine learning blog',
            'math',
            'engineering',
            'data science',
            'roman glushko blog',
            'roma glushko blog',
          ]}
          meta={[]}
        />
        <div className="blog-listing-wrapper">
          <aside className="blog-sidebar">
            <div className="blog-header">
              <ViewPageHeader spaceTitle="Blog" spaceLink="/blog/" />
              <MainNavigation space={"blog"} />
            </div>
            <div className="blog-intro">
              Technical blog about machine learning, data science, math and software engineering.
            </div>
            <div className="misc">
              <div className="theme-switcher">
                <ThemeSwitcher />
              </div>
            </div>
          </aside>
          <main className={`blog-list blog-grid ${!edges.length ? "no-posts" : ""}`}>
            {!edges.length && (
            <div className="no-posts-placeholder">
              Great posts will be here as soon as my muse comes back to me 💫 <br />
              Come back soon 👋
            </div> )}
            {edges.map(({node}) => (
              <BlogTeaser
                key={node.id}
                title={node.frontmatter.title}
                url={node.frontmatter.path}
                timeToRead={node.timeToRead}
                publishedHumanDate={node.frontmatter.humanDate}
                publishedFullDate={node.frontmatter.fullDate}
                excerpt={node.excerpt}
                cover={node.frontmatter.cover}
                keywords={node.frontmatter.keywords}
              />
            ))}
          </main>
          <div className="clearfix" />
        </div>
        <Footer />
      </Layout>
    )
  }
}

export default BlogListPage

export const pageQuery = graphql`
  query BlogListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }, 
      filter: {
        fileAbsolutePath: {regex: "/(blog)/"}
        frontmatter: { 
          published: {eq: true}
        }
      }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          timeToRead
          frontmatter {
            humanDate: date(formatString: "MMM D, YYYY")
            fullDate: date (formatString: "YYYY-MM-DD") 
            path
            title
            keywords
            cover {
              childImageSharp {
                fluid(maxWidth: 620) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    socialImage: file(relativePath: { eq: "blog/roman-glushko-in-the-process-of-work-min.jpg" }) {
      relativePath
    }
  }
`