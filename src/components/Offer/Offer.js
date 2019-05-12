import React from "react"
import Img from "gatsby-image"

const Offer = props => (
  <>
    <h1>{props.data.title.text}</h1>
    {props.image.localFile && (
      <Img fluid={props.image.localFile.childImageSharp.fluid} />
    )}
    <p
      className="text-grey-darker text-sm my-4"
      dangerouslySetInnerHTML={{
        __html: props.data.description.html,
      }}
    />
    <div className="text-center my-4">
      <a
        href={props.data.tourlink.url}
        className="inline-block bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded"
      >
        Read more about this tour on giroola.com!
      </a>
    </div>
  </>
)

export default Offer
