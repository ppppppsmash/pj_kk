import type { ElementType } from 'react'

import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  en: string
  ja?: string
  as?: ElementType
  size?: 'md' | 'lg'
  light?: boolean
  className?: string
}

const sizes = {
  md: { en: 'text-[34px] sm:text-[56px]', ja: 'text-sm sm:text-base' },
  lg: { en: 'text-[40px] sm:text-[88px]', ja: 'text-base sm:text-2xl' },
}

/** English headline in TTNorms with the brand square, Japanese subtitle underneath. */
export function SectionHeading({ en, ja, as: Tag = 'h2', size = 'md', light, className }: SectionHeadingProps) {
  return (
    <Tag className={cn('font-normsEn leading-[0.95] tracking-tight', light ? 'text-white' : 'text-neutral-900', sizes[size].en, className)}>
      {en}
      <span className="ml-2 align-middle text-[0.3em] text-kouka" aria-hidden="true">■</span>
      {ja && (
        <span className={cn('mt-2 block font-sans font-medium tracking-wider', light ? 'text-white/80' : 'text-neutral-500', sizes[size].ja)}>
          {ja}
        </span>
      )}
    </Tag>
  )
}
