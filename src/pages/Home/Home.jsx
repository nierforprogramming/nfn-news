import TrendingNewsSlider from "./TrendingNewsSlider";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-wrapper">
          <div className="section-heading text-center mt-10">
            <h1 className="text-4xl font-bold">Trending News</h1>
          </div>
          <TrendingNewsSlider />
        </div>
      </div>
    </>
  );
};

export default Home;
