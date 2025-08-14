import React, { useContext } from "react";
import NewsCard from "../../component/NewsCard";
import { NewsContext } from "../../context/NewsContext";
import { getCategoryNews } from "../../utilities/api";
import { useLazyLoad } from "../../hooks/useLazyLoadNews";
import NewsCardSkeleton from "../../component/NewsCardSkeleton";

const TechnologyNews = () => {
  const { categoryNews, setCategoryNews } = useContext(NewsContext);
  const { sectionRef, hasLoaded } = useLazyLoad(async () => {
    const data = await getCategoryNews("tech");
    setCategoryNews(data);
  });

  return (
    <div ref={sectionRef} className="ln-container min-h-screen py-10">
      <div className="ln-wrapper">
        <div className="section-heading text-center mt-15 mb-15">
          <h1 className="text-4xl font-bold">Technology News</h1>
        </div>

        <div className="latest-news grid grid-cols-1 lg:grid-cols-3 gap-10">
          {categoryNews.length > 0 ? (
            categoryNews.map((singleNews) => (
              <NewsCard key={singleNews.title} News={singleNews} />
            ))
          ) : hasLoaded ? (
            <NewsCardSkeleton />
          ) : (
            [...Array(6)].map((_, index) => <NewsCardSkeleton key={index} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnologyNews;
