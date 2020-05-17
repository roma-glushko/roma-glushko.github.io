import React from "react"
import Helmet from "react-helmet"

const ThoughtRichSnippet = ({title, datePublished, cover, content, wordCount, keywords}) => {

  const schemaJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    image: cover.childImageSharp.fluid.src,
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
