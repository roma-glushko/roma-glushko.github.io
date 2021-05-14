import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const BreadcrumbsRichSnippet = ({crumbs = []}) => {

  const { site: { siteMetadata: { siteUrl } }} = useStaticQuery(
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

  let crumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${siteUrl}/`,
    }
  ]

  crumbs.forEach((crumbItem, idx) => {
    const [[path, title]] = Object.entries(crumbItem)
    
    crumbItems.push({
      "@type": "ListItem",
      "position": idx + 2, // adjustment for the first home item which is in 1 position
      "name": title,
      "item": `${siteUrl}${path}`,
    })
  })

  const schemaJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': crumbItems,
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaJSONLD)}
      </script>
    </Helmet>
  )
}

export default BreadcrumbsRichSnippet
