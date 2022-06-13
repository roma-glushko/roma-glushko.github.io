import * as React from "react"
import Helmet from "react-helmet"
import { usePersonMetadata } from "../../hooks/person-metadata";



const PersonRichSnippet = (): JSX.Element => {
  const metadata = usePersonMetadata()

  const schemaJSONLD = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: metadata.name,
    alternateName: metadata.alternateName,
    image: metadata.image,
    gender: metadata.gender,
    sameAs: metadata.sameAs,
    jobTitle: metadata.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: metadata.worksFor.name,
      sameAs: metadata.worksFor.sameAs,
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaJSONLD)}</script>
    </Helmet>
  )
}

export default PersonRichSnippet
