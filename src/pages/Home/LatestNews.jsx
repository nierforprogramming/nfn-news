import React, { useEffect, useState } from "react";
import NewsCard from "../../component/NewsCard";
import { getLatestNews } from "../../utilities/api";

const LatestNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const returnedData = await getLatestNews();
      const data = returnedData.data.articles;
      if (data) {
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        setNews(shuffled.slice(0, 12));
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
          {news.map((News) => {
            return <NewsCard key={News.title} News={News} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
