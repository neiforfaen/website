import type { ThemeProviderProps } from 'next-themes'
import { Toaster } from './components/ui/sonner'
import { TooltipProvider } from './components/ui/tooltip'
import { ReactLenis } from './lib/utils'
import { ThemeProvider } from './providers/theme'

type DesignSystemProviderProperties = ThemeProviderProps & {}

export const DesignSystemProvider = ({
  children,
  ...properties
}: DesignSystemProviderProperties) => (
  <ThemeProvider {...properties}>
    <TooltipProvider>
      <ReactLenis
        options={{
          duration: 2.2,
          gestureOrientation: 'vertical',
          orientation: 'vertical',
        }}
        root
      >
        {children}
      </ReactLenis>
    </TooltipProvider>
    <Toaster />
  </ThemeProvider>
)
