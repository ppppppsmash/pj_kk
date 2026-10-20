'use client'

import { useState } from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import type { ProductDetail } from '@/lib/products'

interface ProductGalleryProps {
  items: ProductDetail[]
  title: string
  className?: string
}

/** Main image with thumbnail tabs. Images crossfade; the caption fades up with each change. */
export function ProductGallery({ items, title, className }: ProductGalleryProps) {
  const [active, setActive] = useState(0)
  const current = items[active]

  return (
    <div className={className}>
      <div className="relative aspect-square overflow-hidden rounded-[28px] bg-gray sm:rounded-[36px]">
        {items.map((item, i) => (
          <Image
            key={item.product_detail_img}
            src={item.product_detail_img}
            alt={i === active ? `${title} 画像${i + 1}` : ''}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority={i === 0}
            aria-hidden={i !== active}
            className={cn(
              'object-cover transition-opacity duration-200 ease-out-strong',
              i === active ? 'opacity-100' : 'opacity-0'
            )}
          />
        ))}
      </div>

      <p key={active} className="fade-up-in mt-5 min-h-[4.5em] text-sm leading-[1.9] text-neutral-600" aria-live="polite">
        {current.product_detail_feature}
      </p>

      {items.length > 1 && (
        <div role="tablist" aria-label="商品画像" className="mt-4 flex gap-3">
          {items.map((item, i) => (
            <button
              key={item.product_detail_img}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`画像${i + 1}を表示`}
              onClick={() => setActive(i)}
              className={cn(
                'relative h-16 w-16 overflow-hidden rounded-2xl bg-gray ring-2 ring-offset-2 ring-offset-white',
                'transition-[transform,box-shadow] duration-150 ease-out-strong active:scale-[0.95]',
                i === active ? 'ring-kouka' : 'ring-transparent hover:ring-neutral-300'
              )}
            >
              <Image src={item.product_detail_img} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
