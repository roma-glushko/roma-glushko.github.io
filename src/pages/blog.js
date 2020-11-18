import React, { Component } from 'react';
import { graphql } from "gatsby"
import Layout from "../components/theme/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blog/blog-header"
import BlogTeaser from "../components/blog/blog-teaser"
import ThemeSwitcher from "../components/theme/theme-switcher"
import Footer from "../components/theme/footer"

import "./blog.css"

class BlogListPage extends Component {
  render() {
    const { data: { allMarkdownRemark: { edges } }} = this.props

    return (
      <Layout>
        <SEO 
          title = "Blog"
          pagePath="/blog/"
          className="blog-list-page" 
          description="TBU" 
          keywords={[
            'technical blog',
            'machine learning blog',
            'math',
            'engineering',
            'data science',
            'roman glushko blog',
            'roma glushko blog',
          ]}
        />
        <div className="blog-wrapper">
          <aside className="blog-sidebar">
            <BlogHeader />
            <div className="blog-intro">
              Technical blog about machine learning, data science, math and software engineering.
            </div>
            <div className="misc">
              <div className="theme-switcher">
                <ThemeSwitcher />
              </div>
            </div>
          </aside>
          <main className="blog-list blog-grid">
            {edges.map(blogpost => (
              <BlogTeaser 
                key={blogpost.node.id}
                title={blogpost.node.frontmatter.title} 
                url={blogpost.node.frontmatter.path} 
                timeToRead={blogpost.node.timeToRead} 
                publishedHumanDate={blogpost.node.frontmatter.humanDate}
                publishedFullDate={blogpost.node.frontmatter.fullDate}
                excerpt={blogpost.node.excerpt}
                cover={blogpost.node.frontmatter.cover}
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
  query TechListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }, 
      filter: {fileAbsolutePath: {regex: "/(blog)/"  }}
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
  }
`