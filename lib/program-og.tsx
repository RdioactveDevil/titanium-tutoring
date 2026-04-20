import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface ProgramOgProps {
  title: string
  subtitle: string
}

export function programOgImage({ title, subtitle }: ProgramOgProps): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#081e6d',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '8px',
              height: '8px',
              background: '#f3be43',
              transform: 'rotate(45deg)',
            }}
          />
          <span
            style={{
              color: '#f3be43',
              fontSize: '17px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Titanium Tutoring
          </span>
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              color: '#f3be43',
              fontSize: '22px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              fontWeight: 500,
            }}
          >
            {subtitle}
          </div>
          <div
            style={{
              color: '#ffffff',
              fontSize: title.length > 22 ? '62px' : '76px',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ color: 'rgba(250,246,238,0.5)', fontSize: '16px' }}>
              Personalised
            </span>
            <span style={{ color: '#f3be43', fontSize: '16px' }}>·</span>
            <span style={{ color: 'rgba(250,246,238,0.5)', fontSize: '16px' }}>
              Expert
            </span>
            <span style={{ color: '#f3be43', fontSize: '16px' }}>·</span>
            <span style={{ color: 'rgba(250,246,238,0.5)', fontSize: '16px' }}>
              Results-Driven
            </span>
          </div>
          <span style={{ color: 'rgba(250,246,238,0.35)', fontSize: '16px' }}>
            titaniumtutoring.com.au
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
