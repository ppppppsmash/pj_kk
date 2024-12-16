'use client'

import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

interface Slide {
  imgThumb: string
  link: string
  title: string
  date: string
  description: string
}

interface Slides {
  slides: Slide[]
}

export const SwiperServiceWrap = ({ slides }: Slides) => {
  return (
    <Swiper
      className="!py-8 !px-1"
      navigation={true}
      modules={[Navigation]}
      loop={true}
      spaceBetween={20}
      pagination={{ clickable: true }}
      slidesPerView={2.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide className="!w-[300px] !h-[200px]" key={index}>
          <div className="relative h-full rounded-[30px] overflow-hidden shadow-[6px_4px_15px_0_rgba(51,51,51,.19)]">
            <Link href={slide.link} className="block h-full pb-6 bg-white overflow-hidden relative z-10">
              <div className="w-full max-w-full h-[120px] sm:h-[160px]">
                <img
                  src={slide.imgThumb}
                  width="300"
                  className="duration-300 object-cover hover:scale-[1.2]"
                />
              </div>

              <h3 className="text-white absolute right-0 bottom-0 bg-[rgba(32,24,1,.5)] pt-2 pl-4 pb-2 w-full">
                <span className="text-[18px] mb-2 block leading-[1.5] font-semibold">{slide.title}</span>
                <span className="text-[12px] block leading-[1.5] truncate">{slide.description}</span>
              </h3>
            </Link>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
  )
}