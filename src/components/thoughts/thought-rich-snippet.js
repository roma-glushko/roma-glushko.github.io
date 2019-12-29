import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const ThoughtRichSnippet = ({title, datePublished, content, wordCount, keywords}) => {
  const { personImage } = useStaticQuery(
    graphql`
      query {
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
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    image: personImage.childImageSharp.fluid.src,
    headline: title,
    dateCreated: datePublished,
    dateModified: datePublished,
    datePublished,
    inLanguage: "en-US",
    isFamilyFriendly: "true",
    author: {
			"@type": "Person",
			"name": "Roman Glushko",
    },
    publisher: {
			"@type": "Person",
			"name": "Roman Glushko",
    },
    mainEntityOfPage: "true",
		keywords: keywords,
		genre:["opinion","thoughts", "life expirience"],
		articleSection: "Thoughts",
    articleBody: content,
    wordcount: wordCount
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaJSONLD)}
      </script>
    </Helmet>
  )
}

export default ThoughtRichSnippet
