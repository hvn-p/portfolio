import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { ImageResponse } from 'next/og'
import sharp from 'sharp'
import { wordmark } from './components/wordmark-paths'

export const ogSize = { width: 1200, height: 630 }
export const ogAlt = 'Pierre Hervelin'

const ink = '#edebe6'
const muted = '#a8a59e'
const hairline = 'rgba(237, 235, 230, 0.12)'

const asset = (...parts: string[]) => readFile(path.join(process.cwd(), 'src/assets', ...parts))

// The traced name, as in the hero.
function Name({ width }: { width: number }) {
  const [, , w = 1414, h = 162] = wordmark.viewBox.split(' ').map(Number)
  return (
    <svg width={width} height={(width * h) / w} viewBox={wordmark.viewBox} fill={ink} aria-hidden="true">
      {[...wordmark.first, ...wordmark.last].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}

// A share image in the site's grammar: the near-black ground, warm ink, a title
// and a line, the traced name; for a project, its first screenshot in a frame.
export async function ogImage({
  title,
  line,
  screenshot,
}: {
  title: string
  line: string
  screenshot?: string
}) {
  const [regular, semibold] = await Promise.all([
    asset('og', 'schibsted-grotesk-400.ttf'),
    asset('og', 'schibsted-grotesk-600.ttf'),
  ])
  const shot = screenshot
    ? `data:image/png;base64,${(
        await sharp(await asset(screenshot))
          .resize(1000)
          .png()
          .toBuffer()
      ).toString('base64')}`
    : null

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '56px 64px',
        background: '#0d0d0e',
        color: ink,
        fontFamily: 'Schibsted Grotesk',
      }}
    >
      <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 20 }}>
          <div
            style={{ fontSize: shot ? 88 : 92, fontWeight: 600, lineHeight: 1.02, letterSpacing: '-0.035em' }}
          >
            {title}
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: muted, maxWidth: shot ? 420 : 900 }}>
            {line}
          </div>
        </div>
        {shot && (
          <div
            style={{
              display: 'flex',
              width: 560,
              height: 350,
              borderRadius: 14,
              overflow: 'hidden',
              border: `1px solid ${hairline}`,
            }}
          >
            {/* biome-ignore lint/performance/noImgElement: rendered to a PNG by ImageResponse */}
            <img
              src={shot}
              width={560}
              height={350}
              alt=""
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div style={{ height: 1, background: hairline }} />
        <Name width={shot ? 420 : 1072} />
      </div>
    </div>,
    {
      ...ogSize,
      fonts: [
        { name: 'Schibsted Grotesk', data: regular, weight: 400, style: 'normal' },
        { name: 'Schibsted Grotesk', data: semibold, weight: 600, style: 'normal' },
      ],
    },
  )
}
