import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import placeholderImage from "/placeholder.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Don't forget to import autoplay styles if you plan to use them

function TrendingNewsSlider({ topHeadlines }) {
  return (
    <div className="headline-sliders">
      <Swiper
        pagination
        modules={[Pagination, Navigation, Autoplay]}
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
                <div className="slider-left rounded-lg w-[500px] h-[300px] flex-shrink-0 overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-200"
                    src={
                      topHeadline.urlToImage
                        ? topHeadline.urlToImage
                        : placeholderImage
                    }
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
                    {topHeadline.author ? topHeadline.author : "Unkown"}

                    {topHeadline.author ? (
                      <p className="text-gray-400 font-normal">Author</p>
                    ) : (
                      <p className="text-gray-400 font-normal">
                        Unknown Author
                      </p>
                    )}
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
