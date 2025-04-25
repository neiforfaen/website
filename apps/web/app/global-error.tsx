'use client'

import { Button } from '@nff/design-system/components/ui/button'
import { fonts } from '@nff/design-system/lib/fonts'

type GlobalErrorProperties = {
  readonly reset: () => void
}

const GlobalError = ({ reset }: GlobalErrorProperties) => {
  return (
    <html lang="en" className={fonts}>
      <body>
        <h1>Oops, something went wrong</h1>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  )
}

export default GlobalError
