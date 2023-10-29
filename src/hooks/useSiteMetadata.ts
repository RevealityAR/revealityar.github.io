import { useStaticQuery, graphql } from 'gatsby'

export function useSiteMetadata() {
  const { site } = useStaticQuery<Queries.SiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          url
          image
          author
          siteName
          favicon
        }
      }
    }
  `)
  return site?.siteMetadata
}
