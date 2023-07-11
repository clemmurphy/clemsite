import { explorerFont, orbiterFont } from './layout'
import Blob from 'components/atoms/blob'

export default function Home() {
  return (
    <main>
      <div className={orbiterFont.variable}>
        <h1>Clement Murphy</h1>
      </div>
      <div className={explorerFont.variable}>
        <p>Product Manager</p>
      </div>
      <div style={{ display: 'flex', gap: '4px' }}>
        <Blob style={{ backgroundColor: 'var(--color-pink)' }} />
        <Blob style={{ backgroundColor: 'var(--color-yellow)' }} />
        <Blob style={{ backgroundColor: 'var(--color-blue)' }} />
        <Blob style={{ backgroundColor: 'var(--color-green)' }} />
      </div>
    </main>
  )
}
