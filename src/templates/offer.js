import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Offer from "../components/Offer/Offer"

const offerTemplate = props => {
  const { prismicOffer: offer } = props.data
  return (
    <Layout>
      <Helmet
        title={`Giroola - ${offer.data.title.text}`}
        meta={[{ name: "description", content: offer.data.title.text }]}
      />
      <Offer {...offer} image={offer.data.image} />
    </Layout>
  )
}

export default offerTemplate

export const query = graphql`
  query offerTemplate($id: String!) {
    prismicOffer(id: { eq: $id }) {
      data {
        tourlink: link {
          url
        }
        title {
          html
          text
        }
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          alt
          url
        }
        description {
          html
        }
      }
    }
  }
`
