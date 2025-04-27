'use client'

import { NoiseCanvas } from '@nff/design-system/components/noise-canvas'
import { Button } from '@nff/design-system/components/ui/button'
import { fonts } from '@nff/design-system/lib/fonts'

const GlobalError = () => {
  return (
    <html lang="en" className={fonts}>
      <body className="bg-foreground">
        <NoiseCanvas />
        <div className="flex h-screen w-screen items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-10">
            <h1 className="font-semibold text-4xl text-background">
              Oops, something went wrong!
            </h1>
            <Button size={'lg'} onClick={() => window.location.reload()}>
              Try again
            </Button>
          </div>
        </div>
      </body>
    </html>
  )
}

export default GlobalError
