import React from 'react'
import { SEO as SEOBits } from '@reveality/bits'
import { useSiteMetadata } from '../hooks'
import { PageContext } from '../types'

export default function SEO({
  title,
  langCode,
}: {
  title: string
  langCode: PageContext['langCode']
}) {
  const siteMetadata = useSiteMetadata()
  return (
    <SEOBits
      title={`${title} ${siteMetadata?.title}`}
      description={siteMetadata?.description ?? undefined}
      image={siteMetadata?.image ?? undefined}
      url={siteMetadata?.url ?? undefined}
      author={siteMetadata?.author ?? undefined}
      langCode={langCode}
      useRobotoFont
      favicon={siteMetadata?.favicon ?? undefined}
      siteName={siteMetadata?.siteName ?? undefined}
    />
  )
}
