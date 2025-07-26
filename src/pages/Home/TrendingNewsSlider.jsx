import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

function TrendingNewsSlider() {
  return (
    <div className="headline-sliders">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        autoplay="true"
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="news-slider flex items-center gap-10">
            <div className="slider-left w-120 rounded-2xl">
              <img
                className="w-full h-full object-cover overflow-hidden rounded-2xl"
                src="https://preview.colorlib.com/theme/magdesign/images/post_lg_2.jpg.webp"
                alt=""
              />
            </div>
            <div className="slider-right flex flex-col gap-2">
              <div className="news-category flex gap-2">
                <div className="category font-bold">Business, Travel</div>
                <div className="news-date text-gray-400">July 2, 2022</div>
              </div>
              <div className="news-headline text-4xl font-bold">
                COVID 19 on the move again
              </div>
              <div className="news-desc text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, facere.
              </div>
              <div className="news-source font-bold">BBC News</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TrendingNewsSlider;
