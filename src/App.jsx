import "./App.css";
import Navbar from "./component/Navbar";
import BusinessNews from "./pages/Home/BusinessNews";
import EntertainmentNews from "./pages/Home/EntertainmentNews";
import Footer from "./pages/Home/Footer";
import GeneralNews from "./pages/Home/GeneralNews";
import HealthNews from "./pages/Home/HealthNews";

import Home from "./pages/Home/Home";
import LatestNews from "./pages/Home/LatestNews";
import ScienceNews from "./pages/Home/ScienceNews";
import SportsNews from "./pages/Home/SportsNews";
import TechnologyNews from "./pages/Home/TechnologyNews";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container mx-auto px-32">
        <section id="home">
          <Home />
        </section>

        <section id="latest-news">
          <LatestNews />
        </section>

        <section id="business-news">
          <BusinessNews />
        </section>

        <section id="entertainment-news">
          <EntertainmentNews />
        </section>

        <section id="general-news">
          <GeneralNews />
        </section>

        <section id="health-news">
          <HealthNews />
        </section>

        <section id="science-news">
          <ScienceNews />
        </section>

        <section id="sports-news">
          <SportsNews />
        </section>

        <section id="technology-news">
          <TechnologyNews />
        </section>
        {/* <section id="footer">
          <Footer />
        </section> */}
      </div>
    </>
  );
}

export default App;
