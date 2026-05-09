import { notFound } from 'next/navigation'
import Link from 'next/link'
import { posts, getPost } from '@/app/data/posts'
import Breadcrumb from '@/app/components/Breadcrumb'

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: { absolute: `${post.title} | Titanium Tutoring` },
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Titanium Tutoring',
      url: 'https://titaniumtutoring.com.au',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Titanium Tutoring',
      url: 'https://titaniumtutoring.com.au',
    },
    url: `https://titaniumtutoring.com.au/blog/${post.slug}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://titaniumtutoring.com.au/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://titaniumtutoring.com.au/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://titaniumtutoring.com.au/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="page-hero">
        <div className="page-hero-inner">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.cat },
          ]} />
          <span className="eyebrow">{post.cat}</span>
          <h1 className="section-title" style={{ maxWidth: 760 }}>{post.title}</h1>
          <p style={{ color: 'var(--gold)', fontSize: 14, marginTop: 12 }}>
            {formatDate(post.date)} &nbsp;·&nbsp; {post.readMins} min read
          </p>
        </div>
      </div>

      <section style={{ padding: '60px 0 80px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
          <p className="lead" style={{ marginBottom: 48 }}>{post.excerpt}</p>

          {post.sections.map((sec, i) => (
            <div key={i} style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 'clamp(17px,1.8vw,21px)', fontWeight: 700, color: 'var(--navy)', marginBottom: 14, lineHeight: 1.35 }}>
                {sec.heading}
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--ink-2)', marginBottom: sec.list ? 16 : 0 }}>
                {sec.body}
              </p>
              {sec.list && (
                <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0 }}>
                  {sec.list.map((item, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10, fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.7 }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {post.relatedPrograms.length > 0 && (
            <div style={{ borderTop: '2px solid var(--border)', paddingTop: 40, marginTop: 56 }}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>Related Programs</p>
              <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginBottom: 40 }}>
                {post.relatedPrograms.map(p => (
                  <Link key={p.href} href={p.href} className="blog-related-card">
                    <span className="blog-related-eyebrow">{p.eyebrow}</span>
                    <span className="blog-related-label">{p.label}</span>
                    <span className="blog-related-desc">{p.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div style={{ borderTop: '2px solid var(--border)', paddingTop: 40, marginTop: 0 }}>
            <p style={{ fontSize: 15, color: 'var(--ink-2)', marginBottom: 20 }}>
              Want help applying these strategies to your own study? Book a free consultation with the Titanium Tutoring team.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-gold">Book a Free Consultation</Link>
              <Link href="/blog" className="btn-navy-sm" style={{ alignSelf: 'center' }}>← Back to Blog</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
