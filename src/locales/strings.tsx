import React from 'react'
import { LangCode } from './../bits/types'

type ReactString = string | JSX.Element
type TitleToString = Record<string, ReactString>
type TitleToStringArray = Record<string, ReactString[]>
type MultilangString = Record<LangCode, TitleToString>
type MultilangStringArray = Record<LangCode, TitleToStringArray>

export const StringEnFr = (
  key: string,
  en: ReactString,
  fr: ReactString
): MultilangString => {
  return {
    ['en']: {
      [key]: en,
    },

    ['fr']: {
      [key]: fr,
    },
  }
}

export const stringEnFrArray = (
  key: string,
  en: ReactString[],
  fr: ReactString[]
): MultilangStringArray => {
  return {
    ['en']: {
      [key]: en,
    },

    ['fr']: {
      [key]: fr,
    },
  }
}

export const languageFilter = (
  languageKey: LangCode,
  arrayOfStrings: MultilangString[]
) => {
  return {
    [languageKey]: arrayOfStrings
      .map((element) => {
        return element[languageKey]
      })
      .reduce((acc, x) => {
        for (let key in x) acc[key] = x[key]
        return acc
      }, {}),
  }
}

export const stringBuilderEnFr = (arrayOfStrings: MultilangString[]) => {
  const en = languageFilter('en', arrayOfStrings)
  const fr = languageFilter('fr', arrayOfStrings)
  return { ...en, ...fr }
}

export const indexPageStrings = stringBuilderEnFr([
  StringEnFr('imaginationLimit', 'Give it a try!', `A toi d'essayer !`),
  StringEnFr('howdoesitwork', 'How does it work?', 'Comment ça marche ?'),
  StringEnFr('shoot', 'Shoot', 'Filme'),
  StringEnFr('weProcess', 'The App detects you', `L'app te reconnait`),
  StringEnFr('reproject', 'Create mixes!', 'Fais des mix !'),
  StringEnFr('title', 'REVEALITY', 'REVEALITY'),
  StringEnFr(
    'punchline',
    'Become a creator in Mixed Reality',
    `Deviens créateur de Réalité Mixte`
  ),
  StringEnFr(
    'descriptionPunchline',
    <>
      Film the world around you and play with it.
      <br /> Create content in live, in the real world!
    </>,
    <>
      Filme le monde autour de toi et joue avec.
      <br />
      Tu peux créer en direct, dans le monde réel !
    </>
  ),
  StringEnFr(
    'getApp',
    'Download the app on iPhone and Android',
    `Téléchargez l'appli sur iPhone et Android`
  ),
  StringEnFr('The App', 'The App', "L'appli"),
  StringEnFr(
    'To create in AR, you need...',
    'To create in MR, you need...',
    'Pour créer en MR il faut...'
  ),
  StringEnFr(
    'a volumetric studio',
    'a volumetric studio',
    'un studio volumétrique'
  ),
  StringEnFr('a 3D expert', 'a 3D expert', 'un expert 3D'),
  StringEnFr(
    'a software engineer',
    'a software engineer',
    'un ingénieur informatique'
  ),
  StringEnFr('10 millions', '10 millions', '10 millions'),
  StringEnFr(
    'Shoot. Project. Share. Make your first holograms in minutes. Fast and easy.',
    'Shoot. Project. Share. Make your first holograms in minutes. Fast and easy.',
    'Filmer. Projeter. Partager. Créez votre premier hologramme en quelques minutes. Simple, rapide.'
  ),
  StringEnFr('Try it out!', 'Try it out!', 'Essayez !'),
  StringEnFr('yourPhone', 'a phone.', 'un smartphone.'),

  StringEnFr('Join the beta', 'Join beta', 'Rejoindre la beta'),
  StringEnFr('joinStudio', 'Keep me in touch', 'Tenez moi au courant'),

  StringEnFr(
    'Augmented Reality Humans',
    'Augmented Reality Humans',
    'Des humains en Réalité Augmentée'
  ),
  StringEnFr(
    'ArHumanText',
    <>
      Capture people directly like you would for a video. <br />
      Create strong, meaningful Mixed Reality content using the best 3D
      environment ever created: <strong>the real world</strong>. <br /> The
      possibilities are endless!
    </>,
    <>
      Filmez des personnes, comme pour une video. <br />
      Créez du contenu Mixed Reality plein de sens en utilisant le meilleur
      environnement 3D jamais créé: <strong>le monde réel.</strong>
      <br /> Les possibilités sont infinies !
    </>
  ),

  StringEnFr('narrative', 'narrative', 'narration'),
  StringEnFr('fiction', 'fiction', 'fiction'),
  StringEnFr('museum guides', 'museum guides', 'guides de musées'),
  StringEnFr('music clips', 'music clips', 'clips de musique'),
  StringEnFr('short films', 'short films', 'court métrages'),
  StringEnFr('dance', 'dance', 'danse'),
  StringEnFr('theater', 'theater', 'théâtre'),
  StringEnFr("travelers' guides", "travelers' guides", 'guides de voyage'),
  StringEnFr('skate videos', 'skate videos', 'videos de skate'),
  StringEnFr('yourIdea', '<insert your idea here>', '<insérez votre idée ici>'),
  StringEnFr('comingSoon', 'Coming soon', 'Bientôt disponible'),
  StringEnFr(
    'HolomakerStudioSubtitle',
    'Become an Holomaker',
    'Devenez un Holomaker'
  ),

  StringEnFr('Shoot', 'Shoot', 'Filmez'),
  StringEnFr(
    'shootSub',
    'enriched captures of the world with your phone.',
    'des captures enrichies du monde réel depuis votre téléphone.'
  ),
  StringEnFr('Edit', 'Edit', 'Editez'),
  StringEnFr(
    'editSub',
    ' your holograms and the real world behind it to tell Mixed Reality stories',
    ' vos hologrammes et le monde réel derrière lui pour raconter des histoires en Réalité Mixte'
  ),

  StringEnFr(
    'Create interactions',
    'Create interactions',
    'Créez des interactions'
  ),
  StringEnFr(
    'interSub',
    'between your holograms, the real world and people around them!',
    'entre vos hologrammes, le monde réel, et le public qui les entoure !'
  ),
  StringEnFr('Share', 'Share', 'Partagez'),
  StringEnFr('comingSoon', 'Coming soon', 'Bientôt disponible'),
  StringEnFr(
    'shareSub',
    'inside the Holomaker app',
    "dans l'application Holomaker"
  ),

  StringEnFr(
    'Join the waitlist',
    'Join the waitlist',
    "Rejoindre la liste d'attente"
  ),

  StringEnFr('About Us', 'About Us', 'A propos de nous'),
  StringEnFr(
    'aboutSub',
    <>
      We're a team of cinematographers, engineers, and artists.
      <br />
      We believe AR holograms have the potential to be an incredible new media.
      <br />
      We're building the tools so <strong>you</strong> can prove it.
    </>,

    <>
      Nous sommes une équipe de cinéastes, ingénieurs et artistes.
      <br /> Nous pensons que la Réalité Augmentée peut devenir un nouveau média
      fabuleux.
      <br />
      Nous construisons les outils pour que <strong>vous</strong> puissiez le
      prouver.
    </>
  ),
])

export const subscribedPageStrings = stringBuilderEnFr([
  StringEnFr(
    'formProblemFallback',
    `You don't see the form? Click here`,
    `Le formulaire ne s'affiche pas ? Cliquez ici`
  ),
  StringEnFr('seoTitle', 'Subscription Confirmed', 'Inscription confirmée'),
  StringEnFr('divTitle', 'One more step...', `Encore une étape...`),
  StringEnFr(
    'divSubtitle',
    `Don't leave us yet! We need you to fill this form to access the beta`,
    `Ne partez pas ! Veuillez remplir ce formulaire pour votre accès beta`
  ),
  StringEnFr('goBackHome', 'Go back Home', `Retour Accueil`),
])

export const notFoundPage = {
  en: {
    title: `NOT FOUND`,
    subtext: `There is nothing here !`,
  },
  fr: {
    title: `PAGE NON TROUVÉE`,
    subtext: `Il n'y a rien ici !`,
  },
}


export const subscriptionInProgressPage = {
  en: {
    title: `One more step!`,
    subtext: `Please check your emails to validate your newsletter subscription`,
  },
  fr: {
    title: `Encore une petite étape !`,
    subtext: `Merci de vérifier vos emails pour valider votre inscription à la newsletter`,
  },
}

export const subscriptionConfirmedPage = {
  en: {
    title: `Subscription confirmed!`,
    subtext: `You are now subscribed to our newsletter.`,
  },
  fr: {
    title: `Inscription confirmée !`,
    subtext: `Vous êtes désormais inscrit à notre newsletter`,
  },
}