import DownloadIcon from '@mui/icons-material/Download'
import { Button } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import LayoutRoot from '../bits/Rev/LayoutRoot/LayoutRoot'
import { mixPage } from '../locales/strings'

export default function mixDownloader({ pageContext: { langCode }, location }) {
  const [videoUrl, setVideoUrl] = useState<string>()

  const handleClick = useCallback(() => {
    if (videoUrl !== undefined) {
      fetch(videoUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob)

          const link = document.createElement('a')
          link.href = url
          link.target = '_blank'
          link.download = 'my_mix.mp4'
          link.click()

          window.URL.revokeObjectURL(url)
        })
        .catch(console.warn)
    }
  }, [videoUrl])

  useEffect(() => {
    setVideoUrl(undefined)
    const search = new URLSearchParams(location.search)
    const video = search.get('video')
    const token = search.get('token')
    if (video !== null && token !== null) {
      const url = `https://firebasestorage.googleapis.com/v0/b/reveality-prod.appspot.com/o/moment_videos%2F${video}.mp4?alt=media&token=${token}` // prod
      // const url = `https://firebasestorage.googleapis.com/v0/b/reveality-test.appspot.com/o/moment_videos%2F${video}.mp4?alt=media&token=${token}`; // test
      fetch(url, { method: 'HEAD' })
        .then((response) => {
          if (response.ok) {
            setVideoUrl(url)
          }
        })
        .catch(console.warn)
    }
  }, [location.search])

  return (
    <LayoutRoot
      language={langCode}
      location={location}
      skipLanguageAutoRedirect
    >
      <div
        style={{
          marginTop: '10rem',
          height: 'calc(100% - 10rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        {videoUrl ? (
          <>
            <h1 style={{ margin: 0, padding: 0 }}>{mixPage.myMix[langCode]}</h1>
            <video controls autoPlay loop style={{ maxHeight: '70%' }}>
              <source src={videoUrl} type="video/mp4" />
            </video>
            <Button
              variant="contained"
              size="large"
              endIcon={<DownloadIcon fontSize="large" />}
              onClick={handleClick}
            >
              {mixPage.download[langCode]}
            </Button>
          </>
        ) : (
          <h1 style={{ margin: 0, padding: 0 }}>
            {mixPage.notFound[langCode]}
          </h1>
        )}
      </div>
    </LayoutRoot>
  )
}
