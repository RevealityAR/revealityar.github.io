import { NavbarConfig, FooterConfig } from './bits/types'

export const navbarConfig: NavbarConfig = {
  name: 'Reveality',
  links: {
    en: {
      links: [
        { path: '/', name: 'WORK' },
        { path: '/about', name: 'ABOUT' },
      ],
    },

    fr: {
      links: [
        { path: '/fr', name: 'PROJETS' },
        { path: '/fr/about', name: 'A PROPOS' },
      ],
    },
  },
}

export const footerConfig: FooterConfig = {
  en: {
    links: [
      { path: '/', name: 'HOME' },
      { path: '/education', name: 'EDUCATION' },
      { path: '/privacy', name: 'PRIVACY' },
      { path: '/jobs', name: 'JOBS' },
      { path: '/presskit', name: 'PRESS KIT' },
    ],
  },

  fr: {
    links: [
      { path: '/fr', name: 'ACCUEIL' },
      { path: '/fr/education', name: 'EDUCATION' },
      { path: '/fr/privacy', name: 'PRIVACY' },
      { path: '/fr/jobs', name: 'JOBS' },
      { path: '/presskit', name: 'KIT PRESSE' },
    ],
  },
}
