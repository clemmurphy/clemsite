import Blob from 'components/atoms/blob'
import Image from 'next/image'
import Link from 'next/link'
import { orbiterFont, explorerFont } from 'src/utils/fonts/fonts'

export default function Home() {
  return (
    <main>
      <div className={orbiterFont.variable}>
        <h1>Clement Murphy</h1>
      </div>
      <div className={explorerFont.variable} style={{ padding: '16px 0' }}>
        <h3>Product Manager</h3>
      </div>
      <div style={{ display: 'flex', gap: '4px' }}>
        <Blob style={{ backgroundColor: 'var(--color-pink)' }} />
        <Blob style={{ backgroundColor: 'var(--color-yellow)' }} />
        <Blob style={{ backgroundColor: 'var(--color-blue)' }} />
        <Blob style={{ backgroundColor: 'var(--color-green)' }} />
      </div>
      <div className={explorerFont.variable} style={{ padding: '48px 0 0 0' }}>
        <p>
          Currently working on{' '}
          <Link href={'https://inyourarea.co.uk'} target='_blank'>
            InYourArea
          </Link>
          &nbsp;at&nbsp;
          <Link href={'https://www.reachplc.com/'} target='_blank'>
            Reach plc
          </Link>
        </p>
      </div>
      <div className={explorerFont.variable} style={{ padding: '18px 0' }}>
        <p>
          Previously worked on{' '}
          <Link href={'https://publicnoticeportal.uk'} target='_blank'>
            Public Notice Portal
          </Link>
          ,&nbsp;
          <Link href={'https://www.fnatic.com/'} target='_blank'>
            FNATIC
          </Link>
          ,&nbsp;
          <Link href={'https://www.faceit.com/'} target='_blank'>
            FACEIT
          </Link>
          ,&nbsp;
          <Link href={'https://www.gfinityesports.com/'} target='_blank'>
            Gfinity
          </Link>{' '}
          etc.
        </p>
      </div>
    </main>
  )
}
