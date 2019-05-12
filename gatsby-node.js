/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allPrismicOffer {
          edges {
            node {
              uid
              id
            }
          }
        }
      }
    `).then(result => {
      result.data.allPrismicOffer.edges.forEach(({ node }) => {
        createPage({
          path: node.uid,
          component: path.resolve(`./src/templates/offer.js`),
          context: {
            id: node.id,
          },
        })
      })

      resolve()
    })
  })
}
