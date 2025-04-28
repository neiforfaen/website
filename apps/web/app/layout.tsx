import './styles.css'
import { DesignSystemProvider } from '@nff/design-system'
import { NoiseCanvas } from '@nff/design-system/components/noise-canvas'
import { fonts } from '@nff/design-system/lib/fonts'
import { cn } from '@nff/design-system/lib/utils'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Footer } from './components/footer'
import { PortfolioContainer } from './components/portfolio-container'

type RootLayoutProperties = {
  readonly children: ReactNode
}

export const metadata: Metadata = {
  title: '🥷🏼 kaiden.',
  description: 'Junior Frontend Engineer from England, based in Berlin.',
  openGraph: {
    title: '🥷🏼 kaiden.',
    description: 'Junior Frontend Engineer from England, based in Berlin.',
    url: 'https://kaiden.sh',
    siteName: 'kaiden.sh',
    locale: 'en_US',
    type: 'website',
  },
  authors: [{ name: 'Kaiden Riley', url: 'https://kaiden.sh' }],
  creator: 'Kaiden Riley',
  keywords: [
    'Kaiden Riley',
    'Frontend Engineer',
    'Junior Frontend Engineer',
    'Portfolio',
  ],
  robots: {
    index: true,
    follow: true,
  },
}

const RootLayout = ({ children }: RootLayoutProperties) => {
  return (
    <html
      lang="en"
      className={cn(fonts, 'scroll-smooth')}
      suppressHydrationWarning
    >
      <body style={{ cursor: 'crosshair' }}>
        <NoiseCanvas />
        <DesignSystemProvider>
          <PortfolioContainer>
            {children}
            <Footer />
          </PortfolioContainer>
        </DesignSystemProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout
