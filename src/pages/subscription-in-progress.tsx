import React from 'react'
import { subscriptionInProgressPage } from '../locales/strings'
import LayoutRoot from '../bits/Rev/LayoutRoot/LayoutRoot'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

export default function NotFoundPage({
  data,
  pageContext: { langCode },
  location,
}) {
  const LOCAL = subscriptionInProgressPage[langCode]
  return (
    <LayoutRoot
      language={langCode}
      location={location}
      skipLanguageAutoRedirect={true}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '10rem',
        }}
      >
        <MarkEmailReadIcon fontSize='large'/>
        <h1>{LOCAL.title}</h1>
        <p>{LOCAL.subtext}</p>
      </div>
    </LayoutRoot>
  )
}
