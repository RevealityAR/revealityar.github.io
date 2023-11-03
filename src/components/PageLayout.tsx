import { PageLayout as PageLayoutBits } from '@reveality/bits'
import { PropsWithChildren } from 'react'
import RevealityLogo from './RevealityLogo'
import { useTranslation } from 'react-i18next'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import FacebookIcon from '@mui/icons-material/Facebook'
import { useSiteMetadata } from '../hooks'

export default function PageLayout({ children }: PropsWithChildren<{}>) {
  const { i18n, t } = useTranslation()
  const siteMetadata = useSiteMetadata()
  return (
    <PageLayoutBits
      navbar={{
        pages: [{ name: 'EDUCATION', path: '/education' }],
        icon: <RevealityLogo sx={{ fontSize: 50 }} />,
        languageSwitcher: {
          currentLanguage: i18n.language,
          languages: [
            { name: '🇬🇧 EN', langCode: 'en-GB' },
            { name: '🇫🇷 FR', langCode: 'fr-FR' },
          ],
          onChange(langCode) {
            i18n.changeLanguage(langCode)
          },
        },
      }}
      footer={{
        newsletter: {
          mailchimpURL:
            'https://reveality.us5.list-manage.com/subscribe/post?u=8b4e477d425a1fcb90d90a287&amp;id=7331d8e0bb',
          uniqueAntiSpamId: 'b_8b4e477d425a1fcb90d90a287_7331d8e0bb',
          title: t('footer.newsLetter.title'),
          textLabel: t('footer.newsLetter.label'),
        },
        socials: {
          socials: [
            {
              title: 'TikTok',
              url: siteMetadata.socialLinks.tiktok,
              icon: <MusicNoteIcon />,
            },
            {
              title: 'Instagram',
              url: siteMetadata.socialLinks.instagram,
              icon: <InstagramIcon />,
            },
            {
              title: 'Twitter',
              url: siteMetadata.socialLinks.twitter,
              icon: <TwitterIcon />,
            },
            {
              title: 'LinkedIn',
              url: siteMetadata.socialLinks.linkedin,
              icon: <LinkedInIcon />,
            },
            {
              title: 'Facebook',
              url: siteMetadata.socialLinks.facebook,
              icon: <FacebookIcon />,
            },
          ],
          title: t('footer.followUs'),
        },
        contact: { mail: siteMetadata.authorMail, title: t('footer.contact') },
        customLinks: [
          { path: '/', name: 'HOME' },
          { path: '/education', name: 'EDUCATION' },
          { path: '/privacy', name: 'PRIVACY' },
          { path: '/jobs', name: 'JOBS' },
        ],
      }}
    >
      {children}
    </PageLayoutBits>
  )
}
