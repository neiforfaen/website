import { CalendarIcon } from 'lucide-react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@nff/design-system/components/ui/avatar'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@nff/design-system/components/ui/hover-card'
import Link from 'next/link'

export const CurrentRoleHoverCard = () => {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger asChild>
        <Link
          href="https://pleo.io"
          target="_blank"
          rel="noreferrer"
          className="p-0 text-foreground"
        >
          Pleo
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80" sideOffset={20}>
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/12394870?s=200&v=4" />
            <AvatarFallback>PLEO</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="font-semibold text-sm">Pleo</h4>
            <p className="text-sm">
              Europes most loved and trusted spend management platform.
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
              <span className="text-muted-foreground text-xs">
                Joined September 2024
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
