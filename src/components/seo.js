/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({
  description,
  keywords,
  lang,
  meta = [],
  title,
  isUniqueTitle,
  className,
  imagePath,
  pagePath,
  ogType,
}) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
            keywords
          }
        }
      }
    `
  )

  meta = meta || []

  const type = ogType || "website"
  const metaDescription = description || siteMetadata.description
  const metaKeywords = keywords || siteMetadata.keywords
  const titleTemplate = isUniqueTitle
    ? `${title}`
    : `${title} by ${siteMetadata.title}`

  if (imagePath) {
    meta.push({
      name: `image`,
      property: `og:image`,
      content: `${siteMetadata.siteUrl}${imagePath}`,
    })
  }

  meta = meta.concat([
    {
      name: `description`,
      property: `og:description`,
      content: metaDescription,
    },
    {
      name: `keywords`,
      content: metaKeywords,
    },
    {
      name: `author`,
      content: siteMetadata.author,
    },
    {
      property: `og:title`,
      content: title,
    },

    {
      property: `og:type`,
      content: type,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ])

  if (pagePath) {
    meta.push({
      property: `og:url`,
      content: `${siteMetadata.siteUrl}${pagePath}`,
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
        class: className,
      }}
      title={title}
      titleTemplate={titleTemplate}
      meta={meta}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
