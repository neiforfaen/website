import './styles.css'
import { DesignSystemProvider } from '@nff/design-system'
import { NoiseCanvas } from '@nff/design-system/components/noise-canvas'
import { fonts } from '@nff/design-system/lib/fonts'
import { cn } from '@nff/design-system/lib/utils'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { ReactNode } from 'react'
import { Footer } from './components/footer'
import { PortfolioContainer } from './components/portfolio-container'

type RootLayoutProperties = {
  readonly children: ReactNode
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
