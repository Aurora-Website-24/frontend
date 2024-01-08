import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './Partners.css'

import { Autoplay, Navigation} from 'swiper/modules';

import Insta from './Instagram_icon.png'
import Face from './Facebook_Logo_2023.png'


function Partner_Title () {
    return (
        <h1 className="h-[109px] text-center [text-shadow:0px_4px_25.1px_#ffffff80] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-3xl md:text-[69.9px] md:tracking-[6.99px] tracking-normal leading-[108.8px] md:leading-8 whitespace-nowrap">
          &lt;/partners&gt;
        </h1>
    )
};

const Carousel = () => {
  const handleSlideChange = (swiper) => {
    console.log("Bro wtf")
    const currentIndex = swiper.activeIndex;
    
    swiper.slides.forEach((slide) => {
      slide.style.transform = 'scale(0.5)';
    });
    if (swiper.slides[currentIndex]) {
      swiper.slides[currentIndex].style.transform = 'scale(1)';
    }

    if (swiper.slides[currentIndex - 2]) {
      swiper.slides[currentIndex - 2].style.transform = 'scale(0.5)';
    }
    if (swiper.slides[currentIndex + 2]) {
      swiper.slides[currentIndex + 2].style.transform = 'scale(0.5)';
    }
    if (swiper.slides[currentIndex + 1]) {
      swiper.slides[currentIndex + 1].style.transform = 'scale(0.75)';
    }
    if (swiper.slides[currentIndex - 1]) {
      swiper.slides[currentIndex - 1].style.transform = 'scale(0.75)';
    }
    if (swiper.slides[currentIndex - 3]) {
      swiper.slides[currentIndex - 3].style.transform = 'scale(0.1)';
    }
    if (swiper.slides[currentIndex + 3]) {
      swiper.slides[currentIndex + 3].style.transform = 'scale(0.1)';
    }
  }

  const images = [Face, Insta, Face, Face, Insta, Face, Insta, Face, Insta, Face];
  return(
  <div className="w-full overflow-hidden">
    <Swiper
      className='mySwiper'
      modules={[Navigation, Autoplay]}
      grabCursor={true}
      centeredSlides={true}
      breakpoints={{
        160: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      onSlideChange={handleSlideChange}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
  >
        <div className="swiper-button-next w-2 h-2 md:w-10 md:h-10 lg:w-12 lg:h-12">
          <svg
            className="w-full h-full text-black fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
        </div>
        <div className="swiper-button-prev w-2 h-2 md:w-10 md:h-10 lg:w-12 lg:h-12">
          <svg
            className="w-full h-full text-black fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
        </div>
    {images.map((image, index) => (
      <SwiperSlide key={index} className="w-full h-auto">
        <img 
          src={image} 
          className={`w-full h-auto m-auto rounded-xl object-cover p-4`}
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
        <div className="p-8">
          <Partner_Title />
        </div>
        <Carousel />
      </div>
    )
}

export default Partners