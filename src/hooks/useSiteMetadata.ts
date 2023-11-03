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
          authorMail
          siteName
          favicon
          socialLinks {
            twitter
            facebook
            linkedin
            instagram
            vimeo
            youtube
            github
            soundcloud
            tiktok
          }
        }
      }
    }
  `)
  return site?.siteMetadata
}
