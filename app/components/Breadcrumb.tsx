import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {items.map((item, i) => (
          <li key={i} className="breadcrumb-item">
            {i > 0 && <span className="breadcrumb-sep" aria-hidden="true">›</span>}
            {item.href ? (
              <Link href={item.href} className="breadcrumb-link">{item.label}</Link>
            ) : (
              <span className="breadcrumb-current" aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
