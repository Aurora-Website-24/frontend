import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { Autoplay, Navigation, FreeMode, Pagination } from 'swiper/modules';

import Insta from './Instagram_icon.png'
import Face from './Facebook_Logo_2023.png'


function Partner_Title () {
    return (
        <h1 className="h-[109px] text-center [text-shadow:0px_4px_25.1px_#ffffff80] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[69.9px] tracking-[6.99px] leading-[108.8px] whitespace-nowrap">
          &lt;/partners&gt;
        </h1>
    )
};

const Carousel = () => {
  const images = [Insta, Face, Insta, Face, Face, Insta, Face];
  
  return(
  <div className="flex justify-center items-center">
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    }}
    freeMode={true}
    navigation={true}
    loop={true}     
    modules={[Navigation, FreeMode]}
    className="mySwiper"
  >
    {images.map((image, index) => (
      <SwiperSlide key={index} className="p-4">
        <img 
          src={image} 
          className={`m-auto object-contain `}
          alt={`Slide ${index}`}
        />
      </SwiperSlide>
    ))}
  </Swiper>
  </div>
  )
};



function Partners(){
    return (
      <div className="text-white">
        <Partner_Title />
        <Carousel />
      </div>
    )
}

export default Partners