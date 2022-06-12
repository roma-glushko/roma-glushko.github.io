const path = require(`path`)

const ENV = process.env.GATSBY_ENV || "development"

module.exports = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const postStatuses = ENV === "development" ? [true, false] : [true]

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: {regex: "/(blog)/"  }
          frontmatter: { 
            published: { in: [${postStatuses}] }
          }
        }
        sort: {order: DESC, fields: [frontmatter___date]}
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const blogPosts = result.data.allMarkdownRemark.edges

  blogPosts.forEach(({ node }, index) => {
    prevThought = index === 0 ? undefined : blogPosts[index - 1].node
    nextThought =
      index === blogPosts.length - 1 ? undefined : blogPosts[index + 1].node

    createPage({
      path: node.frontmatter.path,
      component: blogTemplate,
      context: {
        prevThought,
        nextThought,
      },
    })
  })
}
