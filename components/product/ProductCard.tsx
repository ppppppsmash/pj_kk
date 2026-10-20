import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import type { Product } from '@/lib/products'

export function ProductCard({ product, sizes }: { product: Product; sizes: string }) {
  return (
    <Link
      href={product.link}
      className="group block h-full rounded-[28px] transition-transform duration-200 ease-out-strong active:scale-[0.98]"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-gray">
        <Image
          src={product.imgThumb}
          alt=""
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 ease-out-strong group-hover:scale-[1.04]"
        />
      </div>
      <div className="px-2 pt-4">
        <span className="inline-block rounded-full bg-gray px-3 py-1 text-xs font-medium tracking-wider text-neutral-600">
          {product.category}
        </span>
        <h3 className="mt-3 flex items-start justify-between gap-3 text-[15px] font-bold leading-snug text-neutral-900 sm:text-base">
          <span className="line-clamp-2">{product.title}</span>
          <ArrowRight
            className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400 transition-[transform,color] duration-200 ease-out-strong group-hover:translate-x-0.5 group-hover:text-kouka"
            aria-hidden="true"
          />
        </h3>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-neutral-500">{product.description}</p>
      </div>
    </Link>
  )
}
