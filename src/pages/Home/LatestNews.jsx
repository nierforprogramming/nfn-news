import React, { useEffect, useState } from "react";
import NewsCard from "../../component/NewsCard";
import { getNews } from "../../utilities/api";

const LatestNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const { data } = await getNews();
      if (data) {
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        setNews(shuffled.slice(0, 6));
      }
    }

    fetchNews();
  }, []);
  return (
    <div className="ln-container">
      <div className="ln-wrapper">
        <div className="section-heading text-center mt-15 mb-15">
          <h1 className="text-4xl font-bold">Latest News</h1>
        </div>
        <div className="latest-news grid grid-cols-1 lg:grid-cols-3 gap-10">
          {news.map((latestNews) => {
            return <NewsCard key={latestNews.id} latestNews={latestNews} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
