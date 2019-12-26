/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const thoughtGenerator = require(`./src/generators/thought-generator`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  await thoughtGenerator({ actions, graphql, reporter })
}