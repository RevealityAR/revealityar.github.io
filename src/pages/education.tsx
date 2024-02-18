import React from 'react'
import { HeadProps } from 'gatsby'
import LayoutRoot from '../bits/Rev/LayoutRoot/LayoutRoot'
import { SEO } from '../components'
import { PageContext } from '../types'
import Education from '../bits/Rev/Education/Education'

export default function Index({ data, pageContext: { langCode }, location }) {
  return (
    <LayoutRoot language={langCode} location={{ ...location }}>
      <Education langCode={langCode} />
    </LayoutRoot>
  )
}

export function Head({
  pageContext: { langCode },
}: HeadProps<Queries.IndexQueryQuery, PageContext>) {
  return <SEO title="Education" langCode={langCode} />
}
