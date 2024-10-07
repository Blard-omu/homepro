import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import TestimonialCard from '../cards/TestimonialCard';

export default function Testimonial({data}) {
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className=" max-w-[375px] h-[220px] bg-inherit"
    >
      {data && data.map((slide, i) => (
        <SwiperSlide key={i}>
          <TestimonialCard {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

