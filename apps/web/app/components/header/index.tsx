'use client'
import { ThemeSwitcher } from '@nff/design-system/components/theme-switcher'

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-40 w-full bg-background">
      <div className="flex w-full flex-row items-center justify-center gap-3 p-[4.2rem]">
        <ThemeSwitcher />
      </div>
    </header>
  )
}
