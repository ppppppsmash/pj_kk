'use client'

import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

interface Slide {
  imgSrc: string
  link: string
  title: string
  date: string
}

interface Slides {
  slides: Slide[]
}

export const SwiperNewsWrap = ({ slides }: Slides) => {
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
      // breakpoints={{
      //   // when window width is >= 320px
      //   320: {
      //     slidesPerView: 1,
      //     spaceBetween: 24,
      //   },
      //   // when window width is >= 480px
      //   480: {
      //     slidesPerView: 2,
      //     spaceBetween: 24,
      //   },
      //   // when window width is >= 640px
      //   640: {
      //     slidesPerView: 6,
      //     spaceBetween: 24,
      //   },
      //   1024: {
      //     slidesPerView: 6,
      //     spaceBetween: 32,
      //     slidesPerGroup: 1,
      //   },
      //   1336: {
      //     slidesPerView: 6,
      //     spaceBetween: 32,
      //   },
      // }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide className="!w-[300px] sm:!w-[390px]" key={index}>
          <div className="relative h-full rounded-[40px] sm:rounded-[50px] overflow-hidden shadow-[6px_4px_15px_0_rgba(51,51,51,.19)]">
            <Link href={slide.link} className="block h-full pb-6 bg-white overflow-hidden relative z-10">
              <div className="h-[272px] sm:mb-4 overflow-hidden rounded-tl-[50px] rounded-tr-[50px]">
                <img
                  src={slide.imgSrc}
                  className="w-full h-full object-cover duration-300 hover:scale-[1.2]"
                />
              </div>

              <h3 className="sm:mb-[7px] sm:min-h-[44px] leading-[1.5] px-6">{slide.title}</h3>

              <div className="text-[#BCBCBC] tracking-[.1em] overflow-hidden px-6">
                <span>
                  {slide.date}
                </span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
  )
}