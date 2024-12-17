'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

interface SlideProp {
  slides: string[]
}

export const SwiperProduct = ({ slides }: SlideProp) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide>
          <div className="w-full max-w-full h-[120px] sm:h-[160px]">
            <img
              src={slide}
              width="300"
              className="duration-300 object-cover hover:scale-[1.2]"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};