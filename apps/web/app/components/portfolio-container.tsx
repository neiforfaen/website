import type { ReactNode } from 'react'

export const PortfolioContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto my-0 mt-[70px] animate-[fadeBlur_2.5s_ease-in-out_forwards] xl:my-0 xl:w-[1200px] 2xl:w-[1400px]">
      {children}
    </div>
  )
}
