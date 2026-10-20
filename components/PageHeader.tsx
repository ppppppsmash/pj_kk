import type { ReactNode } from 'react'

import { SectionHeading } from '@/components/SectionHeading'

interface PageHeaderProps {
  en: string
  ja?: string
  lead?: ReactNode
  children?: ReactNode
}

/** Gray page intro used by every sub page: big English title, Japanese subtitle, optional lead copy. */
export function PageHeader({ en, ja, lead, children }: PageHeaderProps) {
  return (
    <div className="bg-gray pt-[72px] sm:pt-[88px]">
      <div className="hero-in mx-auto max-w-[1400px] px-4 pb-20 pt-12 sm:px-6 sm:pb-32 sm:pt-20">
        <SectionHeading as="h1" size="lg" en={en} ja={ja} className="hero-in-item" />
        {lead && (
          <div className="hero-in-item mt-8 max-w-[40em] space-y-4 text-[15px] leading-[1.9] text-neutral-600 sm:mt-12 sm:text-base">
            {lead}
          </div>
        )}
        {children && <div className="hero-in-item mt-10">{children}</div>}
      </div>
    </div>
  )
}
