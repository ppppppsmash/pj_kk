import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface Style {
  style?: string
}

/** The wordmark is black in the source SVG; a white-text copy is swapped in for dark mode. */
export function Logo({ style }: Style) {
  return (
    <div className={cn("w-[110px] sm:w-[140px]", style)}>
      <Link href="/" className="block" aria-label="恒佳株式会社 ホーム">
        <Image className="w-full h-auto dark:hidden" src="/images/logo.svg" alt="恒佳株式会社" width={1366} height={768} priority />
        <Image className="hidden w-full h-auto dark:block" src="/images/logo-dark.svg" alt="恒佳株式会社" width={1366} height={768} priority />
      </Link>
    </div>
  )
}
