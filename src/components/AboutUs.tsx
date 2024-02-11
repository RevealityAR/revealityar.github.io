import {
  AboutUs as AboutUsBits,
  Punchline,
  PunchlineParagraph,
  ContactInfo,
} from '@reveality/bits'
import { useTranslation, Trans } from 'react-i18next'
import { useSiteMetadata } from '../hooks'

import { useTheme } from '@emotion/react'

export default function AboutUs() {
  const theme = useTheme()
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
            components={{
              bold: <strong css={{ color: theme.palette.primary.main }} />,
            }}
          />
        </PunchlineParagraph>

        <ContactInfo contactEmail={siteMetadata?.authorMail ?? ''}>
          {t('aboutUs.contactUs')}
        </ContactInfo>
      </>
    </AboutUsBits>
  )
}
