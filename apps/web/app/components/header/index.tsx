'use client'
import { ThemeSwitcher } from '@nff/design-system/components/theme-switcher'

export const Header = () => {
  return (
    <header className="flex w-full flex-row items-center justify-center p-[4.2rem]">
      <ThemeSwitcher />
    </header>
  )
}
