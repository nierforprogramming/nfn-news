import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Don't forget to import autoplay styles if you plan to use them

function TrendingNewsSlider({ topHeadlines }) {
  console.log(topHeadlines);

  return (
    <div className="headline-sliders">
      <Swiper
        pagination
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-pagination-color": "var(--accent-color)",
        }}
        className="mySwiper"
      >
        {topHeadlines.map((topHeadline) => {
          return (
            <SwiperSlide key={topHeadline.id}>
              <div className="news-slider flex items-center gap-10 overflow-hidden">
                <div className="slider-left rounded-2xl w-[500px] h-[300px] flex-shrink-0 overflow-hidden">
                  <img
                    className="w-full h-full object-cover overflow-hidden rounded-2xl"
                    src={topHeadline.urlToImage}
                    alt={topHeadline.title}
                  />
                </div>
                <div className="slider-right flex flex-col gap-2">
                  <div className="news-category flex gap-2">
                    <div className="category font-bold">Published In</div>
                    <div className="news-date text-gray-400">
                      {topHeadline.publishedAt.slice(0, 10)}
                    </div>
                  </div>
                  <div className="news-headline text-4xl font-bold">
                    {topHeadline.title}
                  </div>
                  <div className="news-desc text-gray-400">
                    {topHeadline.description}
                  </div>
                  <div className="news-source font-bold">
                    {topHeadline.author}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default TrendingNewsSlider;
