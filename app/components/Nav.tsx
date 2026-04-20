'use client'
import { useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const programs = [
  { label: 'Primary School', href: '/programs/primary-school' },
  { label: 'Middle School', href: '/programs/middle-school' },
  { label: 'High School', href: '/programs/high-school' },
  { label: 'Medical School Admissions', href: '/programs/medical-school-admissions' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [progOpen, setProgOpen] = useState(false)
  const path = usePathname()
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const close = () => { setMenuOpen(false); setProgOpen(false) }
  const active = (href: string) => path === href ? 'active' : ''
  const activePrograms = path === '/programs' || path.startsWith('/programs/') ? 'active' : ''

  const handleEnter = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current)
    setProgOpen(true)
  }
  const handleLeave = () => {
    leaveTimer.current = setTimeout(() => setProgOpen(false), 120)
  }

  return (
    <>
      <nav>
        <div className="nav-inner">
          <Link href="/" className="nav-brand" onClick={close}>
            <img src="/logo-icon.png" alt="Titanium Tutoring" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
            <span className="nav-brand-name">Titanium Tutoring</span>
          </Link>
          <ul className="nav-links">
            <li><Link href="/" className={active('/')}>Home</Link></li>
            <li>
              <div
                className="nav-dropdown-wrap"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                <Link href="/programs" className={activePrograms} style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                  Programs <span style={{ fontSize: 9, opacity: 0.7 }}>▼</span>
                </Link>
                {progOpen && (
                  <div className="nav-dropdown">
                    {programs.map(p => (
                      <Link key={p.href} href={p.href} className={`nav-dropdown-item${path === p.href ? ' active' : ''}`} onClick={close}>{p.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            </li>
            <li><Link href="/about" className={active('/about')}>About</Link></li>
            <li><Link href="/results" className={active('/results')}>Results</Link></li>
            <li><Link href="/contact" className={`nav-cta ${active('/contact')}`}>Book a Call</Link></li>
          </ul>
          <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(o => !o)} aria-label="Menu" aria-expanded={menuOpen}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <Link href="/" className={active('/')} onClick={close}>Home</Link>
        <Link href="/programs" className={activePrograms} onClick={close}>Programs</Link>
        {programs.map(p => (
          <Link key={p.href} href={p.href} className={`mobile-sub${path === p.href ? ' active' : ''}`} onClick={close}>{p.label}</Link>
        ))}
        <Link href="/about" className={active('/about')} onClick={close}>About</Link>
        <Link href="/results" className={active('/results')} onClick={close}>Results</Link>
        <Link href="/contact" className={`mobile-cta ${active('/contact')}`} onClick={close}>Book a Call</Link>
      </div>
    </>
  )
}
