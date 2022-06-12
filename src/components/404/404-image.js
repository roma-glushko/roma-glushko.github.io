import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


const NotFoundImage = () => {
  const {placeholderImage} = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "404/not-found-image.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 300)
        }
      }
    }
  `)

  return (
    <GatsbyImage
      className="not-found-img"
      image={placeholderImage.childImageSharp.gatsbyImageData}
      alt={`Not Found Space`}
    />
  )
}

export default NotFoundImage
