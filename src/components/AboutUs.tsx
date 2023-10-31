import {
  AboutUs as AboutUsBits,
  Punchline,
  PunchlineParagraph,
  ContactInfo,
  StringList,
} from '@reveality/bits'
import { useTranslation, Trans } from 'react-i18next'
import { useSiteMetadata } from '../hooks'
import { PageContext } from '../types'

import { CSSObject } from '@emotion/react'

const boldCSS: CSSObject = {
  color: '#2771cc',
}

export default function AboutUs() {
  const { t } = useTranslation()
  const siteMetadata = useSiteMetadata()
  return (
    <AboutUsBits>
      <>
        <Punchline>{t('aboutUs.punchline')}</Punchline>
        <PunchlineParagraph>{t('aboutUs.subline')}</PunchlineParagraph>
        <PunchlineParagraph>
          <Trans
            i18nKey="aboutUs.features"
            components={{ bold: <strong css={boldCSS} /> }}
          />
        </PunchlineParagraph>

        <ContactInfo contactEmail={siteMetadata?.author ?? ''}>
          {t('aboutUs.contactUs')}
        </ContactInfo>
      </>
    </AboutUsBits>
  )
}
