import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Style {
  style?: string
}

export function Logo({ style }: Style ) {
  return (
    <div className={cn(
      "w-[130px] sm:w-[200px]",
      style
    )}>
      <Link href="/">
        <img
          className="w-full rounded-md"
          src="/images/logo.png"
        />
      </Link>
    </div>
  )
}