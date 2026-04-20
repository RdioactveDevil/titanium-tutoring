import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            <img src="/logo-icon.png" alt="Titanium Tutoring" onError={undefined} />
            <div className="footer-brand-text">
              <span className="footer-brand-name">Titanium Tutoring</span>
              <span className="footer-brand-motto">Per Aspera Ad Astra</span>
            </div>
          </div>
          <p className="footer-desc">Tutoring for VCE, SACE, selective-entry, scholarships, NAPLAN and medical-school admissions. Based in Adelaide and Melbourne; online Australia-wide.</p>
          <div className="footer-social">
            <a href="https://www.facebook.com/titanium.tutoring" target="_blank" rel="noopener noreferrer" aria-label="Titanium Tutoring on Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/titanium-tutoring-au/" target="_blank" rel="noopener noreferrer" aria-label="Titanium Tutoring on LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <span className="footer-col-title">Programs</span>
          <Link href="/programs">VCE (Victoria)</Link>
          <Link href="/programs">SACE (South Australia)</Link>
          <Link href="/programs">Select-Entry &amp; Scholarships</Link>
          <Link href="/programs">NAPLAN Preparation</Link>
          <Link href="/programs">Medical School Admissions</Link>
        </div>
        <div className="footer-col">
          <span className="footer-col-title">Company</span>
          <Link href="/about">About</Link>
          <Link href="/results">Testimonials</Link>
          <Link href="/results">In the News</Link>
          <Link href="/contact">Get in Touch</Link>
        </div>
        <div className="footer-col">
          <span className="footer-col-title">Contact</span>
          <p>+61 456 753 747</p>
          <p>admin@titaniumtutoring.com</p>
          <p>South Australia &middot; Victoria</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2025 Titanium Tutoring. All rights reserved.</span>
        <span>Privacy &middot; Terms</span>
      </div>
    </footer>
  )
}
