import React, { useContext, useEffect, useState } from "react";
import NewsCard from "../../component/NewsCard";
import { NewsContext } from "../../context/NewsContext";
import { useLazyLoad } from "../../hooks/useLazyLoadNews";
import { getLatestNews } from "../../utilities/api";
import NewsCardSkeleton from "../../component/NewsCardSkeleton";

const LatestNews = () => {
  const category = "latest news";
  const { latestNews, setLatestNews } = useContext(NewsContext);
  const { sectionRef, hasLoaded } = useLazyLoad(async () => {
    const data = await getLatestNews();
    setLatestNews(data);
    return data;
  });

  return (
    <div ref={sectionRef} className="ln-container">
      <div className="ln-wrapper">
        <div className="section-heading text-center mt-15 mb-15">
          <h1 className="text-4xl font-bold">Latest News</h1>
        </div>
        <div className="latest-news grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
          {latestNews.length > 0 ? (
            latestNews.map((singleNews) => (
              <NewsCard
                key={singleNews.title}
                News={singleNews}
                category={category}
              />
            ))
          ) : hasLoaded ? (
            <NewsCardSkeleton />
          ) : (
            [...Array(6)].map((_, index) => (
              <NewsCardSkeleton key={index} category={category} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
