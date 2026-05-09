'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'tt-cookie-consent'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <p className="cookie-banner-text">
        We use analytics cookies to understand how visitors use this site.{' '}
        <Link href="/privacy" className="cookie-banner-link">Privacy Policy</Link>
      </p>
      <div className="cookie-banner-actions">
        <button onClick={decline} className="cookie-banner-decline">Decline</button>
        <button onClick={accept} className="cookie-banner-accept">Accept</button>
      </div>
    </div>
  )
}
