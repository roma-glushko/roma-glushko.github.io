import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const PersonRichSnippet = () => {
  const {
    personImage,
    site: {
      siteMetadata: {
        personRichSnippet: {
          name,
          alternateName,
          gender,
          sameAs,
          jobTitle,
          worksFor,
        },
      },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            personRichSnippet {
              alternateName
              gender
              jobTitle
              name
              sameAs
              worksFor {
                name
                sameAs
              }
            }
          }
        }
        personImage: file(relativePath: { eq: "homepage/photo.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              src
            }
          }
        }
      }
    `
  )

  const schemaJSONLD = {
    "@context": "http://schema.org",
    "@type": "Person",
    name,
    alternateName,
    image: personImage.childImageSharp.fluid.src,
    gender,
    sameAs,
    jobTitle,
    worksFor: {
      "@type": "Organization",
      name: worksFor.name,
      sameAs: worksFor.sameAs,
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaJSONLD)}</script>
    </Helmet>
  )
}

export default PersonRichSnippet
