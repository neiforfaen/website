'use client'

import { cn } from '@nff/design-system/lib/utils'
import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import type * as React from 'react'
import type { ButtonHTMLAttributes } from 'react'

const themes = [
  { label: 'Light', value: 'light', icon: SunIcon },
  { label: 'Dark', value: 'dark', icon: MoonIcon },
  { label: 'System', value: 'system', icon: DesktopIcon },
] as const

interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never
  color?: string
}

type IconButtonProps = {
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
  label: string
  onClick: () => void
  classNames?: string
  isThemeActive?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const IconButton = ({
  Icon,
  label,
  onClick,
  classNames,
  ...props
}: IconButtonProps) => (
  <button
    className={cn(
      classNames,
      'flex items-center justify-center rounded-md p-2'
    )}
    onClick={onClick}
    {...props}
  >
    <Icon />
    <span className="sr-only">{`${label} Theme Toggle`}</span>
  </button>
)

export const ThemeSwitcher = () => {
  const { setTheme, theme: activeTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex h-[39px] w-[117px] flex-row items-center justify-center gap-2 rounded-md bg-secondary p-1" />
    )
  }

  return (
    <div className="flex flex-row items-center justify-center gap-1 rounded-md bg-secondary/70 p-1">
      {themes.map(({ label, value, icon }) => (
        <IconButton
          key={value}
          Icon={icon}
          label={label}
          onClick={() => setTheme(value)}
          classNames={
            activeTheme === value
              ? 'bg-background dark:bg-background/50 text-primary'
              : 'bg-secondary/35 text-primary transition-all duration-300 ease-in-out hover:bg-primary/10 opacity-50'
          }
        />
      ))}
    </div>
  )
}
