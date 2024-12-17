'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface SlideProp {
  slides: string[];
}

export const SwiperProduct = ({ slides }: SlideProp) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Swiper
      loop={true}
      navigation={true}
      thumbs={{ swiper: thumbsSwiper }}
      modules={[FreeMode, Navigation, Thumbs]}
      className="swiperProduct"
    >
      {slides.map((slide, index) => (
        <SwiperSlide className="w-[400px]">
          <div>
            <img
              src={slide}
              width="400"
              className=""
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};