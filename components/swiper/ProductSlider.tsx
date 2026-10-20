'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperInstance } from 'swiper'
import { A11y } from 'swiper/modules'
import 'swiper/css'

import { cn } from '@/lib/utils'

interface Slide {
  id: number
  imgThumb: string
  link: string
  title: string
  description: string
}

const navButton = cn(
  'flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 text-neutral-900',
  'transition-[transform,background-color,color,opacity] duration-200 ease-out-strong',
  'hover:bg-neutral-900 hover:text-white active:scale-[0.94]',
  'disabled:pointer-events-none disabled:opacity-30'
)

export const ProductSlider = ({ slides }: { slides: Slide[] }) => {
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
            <Link
              href={slide.link}
              className="group block h-full rounded-[28px] transition-transform duration-200 ease-out-strong active:scale-[0.98]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-gray">
                <Image
                  src={slide.imgThumb}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 80vw"
                  className="object-cover transition-transform duration-500 ease-out-strong group-hover:scale-[1.04]"
                />
              </div>
              <div className="px-2 pt-4">
                <h3 className="line-clamp-2 text-[15px] font-bold leading-snug text-neutral-900 sm:text-base">
                  {slide.title}
                </h3>
                <p className="mt-1 line-clamp-1 text-sm text-neutral-500">{slide.description}</p>
              </div>
            </Link>
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
