import Link from 'next/link'

const EFFECTIVE_DATE = '9 May 2026'

export default function PrivacyPolicy() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 64 }}>
        <div className="page-hero-inner">
          <span className="eyebrow">Legal</span>
          <h1 className="section-title" style={{ marginBottom: 12 }}>Privacy Policy</h1>
          <p className="lead">
            Effective {EFFECTIVE_DATE}. This policy explains how Titanium Tutoring collects, uses, and protects your personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).
          </p>
        </div>
      </section>

      <div style={{ background: 'var(--paper)', padding: '72px 5%' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }} className="prose-policy">

          <h2>1. Who we are</h2>
          <p>
            Titanium Tutoring (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is an education services provider based in South Australia and Victoria, Australia. We offer tutoring programs for Years 3–12, VCE, SACE, NAPLAN, selective-entry exams, and medical school admissions coaching.
          </p>
          <p>
            Contact us at any time: <a href="mailto:contact@titaniumtutoring.com">contact@titaniumtutoring.com</a> &middot; <a href="tel:+61456753747">+61 456 753 747</a>
          </p>

          <h2>2. What personal information we collect</h2>
          <p>We collect personal information only when necessary to provide our services or respond to your enquiry. This may include:</p>
          <ul>
            <li>Your name, email address, and phone number (submitted via our contact or enquiry form)</li>
            <li>Information about your child or the student you are enquiring for (year level, subjects, goals)</li>
            <li>Any additional information you choose to include in a free-text message</li>
          </ul>
          <p>We also collect non-personal, aggregate usage data through analytics cookies (see section 6 below). This data does not identify you individually.</p>

          <h2>3. How we collect it</h2>
          <p>We collect personal information directly from you when you:</p>
          <ul>
            <li>Complete and submit our online enquiry or contact form</li>
            <li>Contact us by phone or email</li>
          </ul>
          <p>We do not collect personal information from third parties or through social media platforms.</p>

          <h2>4. Why we collect it and how we use it</h2>
          <p>We use your personal information to:</p>
          <ul>
            <li>Respond to your enquiry and schedule a free strategy call</li>
            <li>Provide and deliver our tutoring programs</li>
            <li>Communicate with you about your child&apos;s progress or upcoming sessions</li>
            <li>Comply with our legal obligations</li>
          </ul>
          <p>We will not use your personal information for any purpose other than those listed above without your consent.</p>

          <h2>5. Disclosure to third parties</h2>
          <p>We share personal information with a small number of trusted service providers who assist in operating our website and services:</p>
          <ul>
            <li>
              <strong>Formspree</strong> — our online contact form is processed by Formspree (formspree.io), a US-based form handling service. Submissions are transmitted securely and stored on Formspree&apos;s servers. Formspree&apos;s privacy policy is available at <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">formspree.io/legal/privacy-policy</a>.
            </li>
            <li>
              <strong>Google Analytics</strong> — if you consent to analytics cookies, we use Google Analytics 4 to collect anonymous, aggregate data about how visitors use our website (pages visited, session duration, general location by country). Google Analytics does not receive your name or contact details. Google&apos;s privacy policy is available at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
            </li>
          </ul>
          <p>We do not sell, rent, or trade your personal information to any other third party.</p>
          <p>We may disclose personal information if required to do so by law or by a court, tribunal, or regulatory body.</p>

          <h2>6. Cookies</h2>
          <p>
            Our website uses two categories of cookies:
          </p>
          <ul>
            <li><strong>Strictly necessary cookies</strong> — essential for the website to function (e.g. security tokens). These are always active and do not require consent.</li>
            <li><strong>Analytics cookies</strong> — set by Google Analytics to help us understand how visitors use the site. These are only placed if you click &ldquo;Accept&rdquo; on our cookie banner.</li>
          </ul>
          <p>
            You can withdraw your consent at any time by clearing your browser cookies and declining on your next visit. You can also opt out of Google Analytics measurement across all websites at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a>.
          </p>

          <h2>7. Data security</h2>
          <p>
            We take reasonable steps to protect your personal information from misuse, interference, loss, unauthorised access, modification, and disclosure. Our website is served over HTTPS. Enquiry form data is transmitted securely to Formspree.
          </p>
          <p>
            No data transmission over the internet is completely secure. While we take every reasonable precaution, we cannot guarantee absolute security.
          </p>

          <h2>8. Data retention</h2>
          <p>
            We retain personal information for as long as is necessary to provide our services or as required by law. If you do not proceed with a tutoring program, enquiry data is held for up to 12 months and then deleted. If you become a client, we retain records for a minimum of 7 years in accordance with Australian financial and tax record-keeping obligations.
          </p>

          <h2>9. Access and correction</h2>
          <p>
            Under the Australian Privacy Principles, you have the right to request access to, and correction of, personal information we hold about you. To make a request, contact us at <a href="mailto:contact@titaniumtutoring.com">contact@titaniumtutoring.com</a>. We will respond within 30 days. We may decline access in limited circumstances permitted by law, and will explain why if we do.
          </p>

          <h2>10. Complaints</h2>
          <p>
            If you believe we have handled your personal information in breach of the Australian Privacy Principles, please contact us first at <a href="mailto:contact@titaniumtutoring.com">contact@titaniumtutoring.com</a>. We will investigate and respond within 30 days.
          </p>
          <p>
            If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">oaic.gov.au</a> or by calling 1300 363 992.
          </p>

          <h2>11. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The &ldquo;Effective&rdquo; date at the top of the page will reflect when changes were last made. Continued use of our website after changes are posted constitutes acceptance of the updated policy.
          </p>

          <div style={{ marginTop: 48, padding: '24px', background: 'var(--paper-raise)', borderRadius: 4, border: '1px solid var(--rule)' }}>
            <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: 8 }}>Questions about this policy?</strong>
            <p style={{ margin: 0, fontSize: 14, color: 'var(--ink-2)' }}>
              Email us at <a href="mailto:contact@titaniumtutoring.com">contact@titaniumtutoring.com</a> or call <a href="tel:+61456753747">+61 456 753 747</a>. Alternatively, <Link href="/contact">use our contact form</Link>.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
