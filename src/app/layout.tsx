import StyledComponentsRegistry from 'src/app/registry'
import './globals.css'
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
