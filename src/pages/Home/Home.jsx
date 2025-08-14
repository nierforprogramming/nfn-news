import { useContext, useEffect, useState } from "react";
import TrendingNewsSlider from "./TrendingNewsSlider";
import { NewsContext } from "../../context/NewsContext";

const Home = () => {
  const { news } = useContext(NewsContext);

  return (
    <>
      <div className="home-container mt-32">
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
