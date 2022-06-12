import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


const Logo = () => {
  // TODO: parametrize and unify this component with Avatar one
  const { placeholderImage } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "homepage/photo3.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 150)
        }
      }
    }
  `)

  return (
    <GatsbyImage
      className="logo-img"
      image={placeholderImage.childImageSharp.gatsbyImageData}
      alt={`Roman Glushko`}
    />
  )
}

export default Logo
