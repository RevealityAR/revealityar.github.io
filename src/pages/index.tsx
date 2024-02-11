import { graphql, PageProps, HeadProps, useStaticQuery } from 'gatsby'
import Hero from '../bits/Rev/Hero/Hero'
import Partners from '../bits/Rev/Partners/Partners'
import { punchlineCSS, mainViewCSS } from '../styles'
import TheApp from '../bits/Rev/TheApp/TheApp'
import PostGrid from '../bits/Rev/PostGridFlat/PostGridFlat'
import { StringList } from '../bits/types'
import { useTheme } from '@mui/material'
import AdvancedUsers from '../bits/Rev/AdvancedUsers/AdvancedUsers'
import { SEO, AboutUs } from '../components'
import { PageContext } from '../types'

// const moreProjectsCSS = (theme: Theme): CSSObject => {
//   return {
//     fontSize: '1.5rem',
//     display: 'grid',
//     justifySelf: 'center',
//     justifyItems: 'center',

//     a: {
//       textAlign: 'center',
//       margin: '1rem',
//       marginTop: '4rem',
//       ...themedACSS(theme.palette.primary.main),
//     },
//   }
// }

const strings: StringList = {
  madeWith: {
    ['en']: 'Made with Reveality',
    ['fr']: 'Fait avec Reveality',
  },
}
export default function Index({
  data,
  pageContext: { langCode },
  location,
}: PageProps<Queries.IndexQueryQuery, PageContext>) {
  const theme = useTheme()
  const posts = data.allMdx.edges
  // const LOCAL = indexPageStrings[langCode];
  const postsInMyLang = posts.filter(
    (post) => post.node.frontmatter.language === langCode
  )

  return (
    <>
      <Hero langCode={langCode} />

      <div css={mainViewCSS}>
        <h2 css={punchlineCSS(theme)}> {strings['madeWith'][langCode]}</h2>
        <PostGrid posts={postsInMyLang} langCode={langCode} />
      </div>
      <TheApp langCode={langCode} />

      <AboutUs />
      <Partners langCode={langCode} />

      <AdvancedUsers langCode={langCode} />
    </>
  )
}

export function Head({
  pageContext: { langCode },
}: HeadProps<Queries.IndexQueryQuery, PageContext>) {
  return <SEO title="Home" langCode={langCode} />
}

export const portfolioPostsQuery = graphql`
  query IndexQuery {
    allMdx(
      sort: { frontmatter: { priority: ASC } }
      filter: { frontmatter: { category: { eq: "portfolio" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            category
            subtitle
            language
            tags
            image {
              colors {
                ...GatsbyImageColors
              }
              childImageSharp {
                gatsbyImageData(height: 500, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`
