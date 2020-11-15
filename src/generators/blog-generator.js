const path = require(`path`)

module.exports = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve(`src/templates/blogTemplate.js`)
    
    const result = await graphql(`
      {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/(blog)/"  }},
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
  
    const blogposts = result.data.allMarkdownRemark.edges
  
    blogposts.forEach(({ node }, index) => {
      prevThought = index === 0 ? undefined : blogposts[index - 1].node;
      nextThought = index === blogposts.length - 1 ? undefined : blogposts[index + 1].node;
  
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