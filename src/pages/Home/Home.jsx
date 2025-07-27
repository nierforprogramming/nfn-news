import { useEffect, useState } from "react";
import { getNews } from "../../utilities/api";
import TrendingNewsSlider from "./TrendingNewsSlider";

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const { data } = await getNews();
      if (data) {
        setNews(data.slice(0, 5));
      }
    }

    fetchNews();
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="home-wrapper">
          <div className="section-heading text-center mt-15 mb-15">
            <h1 className="text-4xl font-bold">Trending News</h1>
          </div>
          <TrendingNewsSlider topHeadlines={news} />
        </div>
      </div>
    </>
  );
};

export default Home;
