import React from 'react'
import Bowser from "bowser";

export default function DownloadPage({
  pageContext: { },
}) {

// Check if runtime (gatsby build tries to run here)
if (typeof window !== 'undefined') {
  // Detect the browser and OS
  const browser = Bowser.getParser(window.navigator.userAgent);
  // Get the platform (OS)
  const osName = browser.getOSName();   // e.g., 'iOS', 'Android', 'Windows', 'macOS'
  if (browser.getOSName() === 'iOS') {
    window.location.href = "https://apps.apple.com/app/reveality/id1619973575";
  } else if (browser.getOSName() === 'Android') {
    window.location.href = "https://play.google.com/store/apps/details?id=io.reveality.app";
  } else {
      window.location.href = "https://reveality.io/";
  }
} else {
  /// Probably build...
}
  return (
<></>
  )
}
