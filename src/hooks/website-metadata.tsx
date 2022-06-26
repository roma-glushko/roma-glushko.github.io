import { graphql, useStaticQuery } from "gatsby"

interface WebsiteMetadata {
  siteUrl: string
  title: string
  description: string
  author: string
  keywords: string[]
}

const useWebsiteMetadata = (): WebsiteMetadata => {
  const metadata = useStaticQuery(
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

  return metadata.site.siteMetadata
}

export { useWebsiteMetadata }
