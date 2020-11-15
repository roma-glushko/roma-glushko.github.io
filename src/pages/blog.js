import React, { Component } from 'react';
import { graphql } from "gatsby"
import Layout from "../components/theme/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blog/blog-header"
import BlogTeaser from '../components/blog/blog-teaser'

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
            'roman glushko blog',
          ]}
        />
        <div className="blog-wrapper">
          <aside className="blog-sidebar">
            <BlogHeader />
          </aside>
          <main className="blog-list">
            {edges.map(thought => (
              <BlogTeaser 
                title={thought.node.frontmatter.title} 
                url={thought.node.frontmatter.path} 
                timeToRead={thought.node.timeToRead} 
                publishedHumanDate={thought.node.frontmatter.humanDate}
                publishedFullDate={thought.node.frontmatter.fullDate}
                excerpt={thought.node.excerpt}
                cover={thought.node.frontmatter.cover}
              />
            ))}
          </main>
          <div className="clearfix" />
        </div>
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