import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"


const ArticleRichSnippet = ({ genre, articleSection, title, path, datePublished, dateModified, cover, content, wordCount, keywords }) => {
  const { site: { siteMetadata: {siteUrl} } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )

  const schemaJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    image: getSrc(cover.childImageSharp.gatsbyImageData),
    headline: title,
    dateCreated: datePublished,
    datePublished,
    dateModified: dateModified,
    inLanguage: "en-US",
    isFamilyFriendly: "true",
    author: {
      "@type": "Person",
      "name": "Roman Glushko",
    },
    publisher: {
      "@type": "Organization",
      "name": "Roman Glushko's Website",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}${path}`
    },
    keywords: keywords,
    genre,
    articleSection,
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

export default ArticleRichSnippet
