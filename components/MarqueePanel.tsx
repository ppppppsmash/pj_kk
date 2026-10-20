import Image from 'next/image'

import { Marquee } from '@/components/ui/marquee'
import { products } from '@/lib/products'

/** Decorative strip of product imagery under the hero. Purely visual, hidden from AT. */
export function MarqueePanel() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden py-4 [touch-action:pan-y] sm:py-10"
    >
      <Marquee pauseOnHover className="[--duration:40s] [--gap:1rem] p-0 sm:[--gap:1.5rem]">
        {products.map((product) => (
          <figure
            key={product.id}
            className="relative aspect-[16/10] w-[200px] overflow-hidden rounded-2xl bg-gray sm:w-[280px] sm:rounded-3xl"
          >
            <Image src={product.imgThumb} alt="" fill sizes="280px" className="object-cover" />
          </figure>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white" />
    </div>
  )
}
