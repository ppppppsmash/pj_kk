'use client'

import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperInstance } from 'swiper'
import { A11y } from 'swiper/modules'
import 'swiper/css'

import { cn } from '@/lib/utils'
import type { Product } from '@/lib/products'
import { ProductCard } from '@/components/product/ProductCard'


const navButton = cn(
  'flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 text-neutral-900',
  'transition-[transform,background-color,color,opacity] duration-200 ease-out-strong',
  'hover:bg-neutral-900 hover:text-white active:scale-[0.94]',
  'disabled:pointer-events-none disabled:opacity-30'
)

export const ProductSlider = ({ slides }: { slides: Product[] }) => {
  const swiperRef = useRef<SwiperInstance | null>(null)
  const [edges, setEdges] = useState({ start: true, end: false })

  const syncEdges = (swiper: SwiperInstance) =>
    setEdges({ start: swiper.isBeginning, end: swiper.isEnd })

  return (
    <div className="relative">
      <Swiper
        className="!overflow-visible [touch-action:pan-y]"
        modules={[A11y]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
          syncEdges(swiper)
        }}
        onSlideChange={syncEdges}
        onResize={syncEdges}
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2, spaceBetween: 20 },
          1024: { slidesPerView: 3.2, spaceBetween: 24 },
        }}
        grabCursor
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="!h-auto">
            <ProductCard product={slide} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 80vw" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8 flex items-center gap-3">
        <button
          type="button"
          className={navButton}
          aria-label="前の商品"
          disabled={edges.start}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className={navButton}
          aria-label="次の商品"
          disabled={edges.end}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
