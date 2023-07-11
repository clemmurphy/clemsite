import localFont from 'next/font/local'

export const orbiterFont = localFont({
  src: './TASAOrbiterVF.woff2',
  display: 'swap',
  variable: '--font-orbiter',
})

export const explorerFont = localFont({
  src: './TASAExplorerVF.woff2',
  display: 'swap',
  variable: '--font-explorer',
})
