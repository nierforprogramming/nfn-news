import { useContext, useEffect, useState } from "react";
import TrendingNewsSlider from "./TrendingNewsSlider";
import { NewsContext } from "../../context/NewsContext";
import { useLazyLoad } from "../../hooks/useLazyLoadNews";
import { getTopNews } from "../../utilities/api";

const Home = () => {
  const { news, setNews } = useContext(NewsContext);
  const category = "top news";

  const { sectionRef, hasLoaded } = useLazyLoad(async () => {
    const data = await getTopNews();

    if (data?.error) return data; // for returning error global error

    setNews(data); // setting news data
    return data;
  });

  return (
    <>
      <div ref={sectionRef} className="home-container mt-32">
        <div className="home-wrapper">
          <div className="section-heading text-center mt-15 mb-15">
            <h1 className="text-4xl font-bold">Trending News</h1>
          </div>
          <TrendingNewsSlider
            topHeadlines={hasLoaded ? news : []} //passes if news is loaded
            category={category}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
