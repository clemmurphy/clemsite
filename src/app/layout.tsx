import StyledComponentsRegistry from 'src/utils/registry'
import './globals.css'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clement Murphy',
  description: 'Clement Murphy is a Product Manager based in London, UK.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    title: 'Clement Murphy',
    description: 'Clement Murphy is a Product Manager based in London, UK.',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

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
