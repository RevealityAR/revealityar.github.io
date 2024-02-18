import React, { useState } from 'react'
import { Link, graphql, PageProps, HeadProps, useStaticQuery } from 'gatsby'
import LayoutRoot from '../bits/Rev/LayoutRoot/LayoutRoot'
import Hero from '../bits/Rev/Hero/Hero'
import { indexPageStrings } from '../locales/strings'
import AppStoreBadges from './../bits/Rev/AppStoreBadges/AppStoreBadges'
import Partners from '../bits/Rev/Partners/Partners'
import { PARTNERS_LOGOS, CLIENTS_LOGOS } from '../logos'
import {
  responsiveContainerCSS,
  responsiveContainerInsideCSS,
  joinBetaCallCSS,
  punchlineCSS,
  clientsLogoGridCSS,
  clientLogoCSS,
  imageBackgroundCSS,
  mainViewCSS,
  iframeVideoContainerCSS,
  iframeCSS,
} from '../styles'
import TheApp from '../bits/Rev/TheApp/TheApp'
import PostGrid from '../bits/Rev/PostGridFlat/PostGridFlat'
import { StringList } from '../bits/types'
import { Typography, useTheme } from '@mui/material'
import AdvancedUsers from '../bits/Rev/AdvancedUsers/AdvancedUsers'
import AboutUs from '../bits/Rev/AboutUs/AboutUs'
import { SEO } from '../components'
import { PageContext } from '../types'
import GlassContainer from '../components/glassContainer/glassContainer'
import Bubble from '../components/bubble/Bubble'
import Clients from '../bits/Rev/Partners/Clients'
import { gradientBackground2CSS } from '../globalStyles'
import Portfolio from '../bits/Rev/Portfolio/Portfolio'
import Ateliers from '../bits/Rev/Ateliers/Ateliers'

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
    <LayoutRoot language={langCode} location={{ ...location }}>
      <div id={'hero'}>
        <Hero langCode={langCode} id={'Home'} />
      </div>

      <div id={'theApp'}>
        {' '}
        <TheApp langCode={langCode} id={'theApp'} />
      </div>

      <div id={'portfolio'}>
        <Portfolio posts={postsInMyLang} langCode={langCode} />
      </div>
      <div id={'ateliers'}>{/* <Ateliers/> */}</div>

      <div id={'about'}>
        <AboutUs langCode={langCode} />
        <Clients langCode={langCode} />
        <AdvancedUsers langCode={langCode} />
        <Partners langCode={langCode} />
      </div>
    </LayoutRoot>
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
