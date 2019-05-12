import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        allPrismicOffer {
          edges {
            node {
              id
              uid
              last_publication_date
              data {
                title {
                  html
                  text
                }
                image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 600) {
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
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" keywords={[`umani`, `application`, `react`]} />
        <h1>Giroola special offers!</h1>

        <p>This is a small test site built to test Gatsby + Prismic</p>

        <p> Here's our latest offers: </p>
        <div className="lg:flex">
          {data.allPrismicOffer.edges.map(offer => (
            <div
              key={offer.node.id}
              className="flex-auto min-w-md rounded leading-normal overflow-hidden shadow-lg my-6 md:mx-4"
            >
              <Img
                className="w-full"
                fluid={offer.node.data.image.localFile.childImageSharp.fluid}
              />
              <div className="px-4 py-4">
                <div className="font-bold text-xl mb-2">
                  <h3>
                    <Link to={offer.node.uid}>
                      {offer.node.data.title.text}
                    </Link>
                  </h3>
                </div>
                <div
                  className="text-grey-darker text-sm"
                  dangerouslySetInnerHTML={{
                    __html: offer.node.data.description.html,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Layout>
    )}
  />
)

export default IndexPage
