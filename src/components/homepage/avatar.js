import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


const Avatar = () => {
  const { placeholderImage } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "homepage/photo3.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 300)
        }
      }
    }
  `)

  return (
    <GatsbyImage
      className="logo-img"
      image={placeholderImage.childImageSharp.gatsbyImageData}
      alt={`Roman Glushko - Machine Learning and Software Engineer, Life Explorer`}
    />
  )
}

export default Avatar
