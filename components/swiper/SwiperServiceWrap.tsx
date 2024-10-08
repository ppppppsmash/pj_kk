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
        <SwiperSlide className="!w-[300px] !h-[360px]" key={index}>
          <div className="relative h-full rounded-[30px] overflow-hidden shadow-[6px_4px_15px_0_rgba(51,51,51,.19)]">
            <Link href={slide.link} className="block h-full pb-6 bg-white overflow-hidden relative z-10">
              <div className="h-full sm:mb-4 overflow-hidden rounded-[50px]">
                <img
                  src={slide.imgThumb}
                  className="w-full h-full object-cover duration-300 hover:scale-[1.2]"
                />
              </div>

              <h3 className="text-white absolute right-0 bottom-0 w-[calc(100%_-30px)] bg-[rgba(32,24,1,.5)] rounded-tl-[20px] p-2">
                <span className="text-[18px] mb-2 block leading-[1.5] font-semibold">{slide.title}</span>
                <span className="text-[12px] block leading-[1]">{slide.title}</span>
              </h3>
            </Link>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
  )
}