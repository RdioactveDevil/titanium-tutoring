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
