import './styles.css'
import { DesignSystemProvider } from '@nff/design-system'
import { fonts } from '@nff/design-system/lib/fonts'
import { cn } from '@nff/design-system/lib/utils'
import type { ReactNode } from 'react'
import { Header } from './components/header'

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
      <body>
        <DesignSystemProvider>
          <Header />
          {children}
        </DesignSystemProvider>
      </body>
    </html>
  )
}

export default RootLayout
