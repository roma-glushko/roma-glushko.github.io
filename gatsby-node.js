/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const thoughtTemplate = path.resolve(`src/templates/thoughtTemplate.js`)
  
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
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

  const thoughts = result.data.allMarkdownRemark.edges

  thoughts.forEach(({ node }, index) => {
    prevThought = index === 0 ? undefined : thoughts[index - 1].node;
    nextThought = index === thoughts.length - 1 ? undefined : thoughts[index + 1].node;

    createPage({
      path: node.frontmatter.path,
      component: thoughtTemplate,
      context: {
        prevThought,
        nextThought,
      },
    })
  })
}