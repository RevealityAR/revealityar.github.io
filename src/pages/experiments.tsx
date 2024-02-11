import React from 'react'
import { notFoundPage } from '../locales/strings'
import LayoutRoot from '../bits/Rev/LayoutRoot/LayoutRoot'
import { circleCSS, backgroundCSS, bokehCSS, glassContainerCSS , contentCSS, sectionCSS} from './experimentsStyles'
export default function ExperimentsPage({
  data,
  pageContext: { langCode },
  location,
}) {
  const LOCAL = notFoundPage[langCode]
  return (
    <LayoutRoot language={langCode} location={location} skipLanguageAutoRedirect={true}>

      <h1>HOOOOO</h1>
<svg 
  css={bokehCSS}
  viewBox="0 0 10 10" 
  xmlns="http://www.w3.org/2000/svg" 

     >
  
  <circle cx="10%" cy="85%" r="75%"  css={circleCSS}/>
  <circle cx="45%" cy="50%" r="15%"  css={circleCSS} />
  <circle cx="85%" cy="35%" r="30%" css={circleCSS} />
  <circle cx="60%" cy="85%" r="20%"  css={circleCSS} />
  {/* <circle cx="45%" cy="50%" r="30%"  css={circleCSS} />
  <circle cx="35%" cy="25%" r="20%"  css={circleCSS} />
  <circle cx="90%" cy="-25%" r="35%" css={circleCSS} />
  <circle cx="-15%" cy="30%" r="30%" css={circleCSS} />
  <circle cx="65%" cy="85%" r="55%"  css={circleCSS} /> */}
  <circle cx="45%" cy="50%" r="20%"  css={circleCSS} />

</svg>

  <div>coucou</div>

    </LayoutRoot>
  )
}
