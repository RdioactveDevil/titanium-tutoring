'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const path = usePathname()

  const close = () => setMenuOpen(false)
  const active = (href: string) => path === href ? 'active' : ''

  return (
    <>
      <nav>
        <div className="nav-inner">
          <Link href="/" className="nav-brand" onClick={close}>
            <img src="/logo-icon.png" alt="Titanium Tutoring" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
            <span className="nav-brand-name">Titanium Tutoring</span>
          </Link>
          <ul className="nav-links">
            <li><Link href="/programs" className={active('/programs')}>Programs</Link></li>
            <li><Link href="/about" className={active('/about')}>About</Link></li>
            <li><Link href="/results" className={active('/results')}>Results</Link></li>
            <li><Link href="/contact" className={`nav-cta ${active('/contact')}`}>Book a Trial</Link></li>
          </ul>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <Link href="/programs" className={active('/programs')} onClick={close}>Programs</Link>
        <Link href="/about" className={active('/about')} onClick={close}>About</Link>
        <Link href="/results" className={active('/results')} onClick={close}>Results</Link>
        <Link href="/contact" className={active('/contact')} onClick={close}>Book a Trial</Link>
      </div>
    </>
  )
}
