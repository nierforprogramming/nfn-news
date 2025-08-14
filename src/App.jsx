import { useContext } from "react";
import "./App.css";
import { NewsContext } from "./context/NewsContext";
import BusinessNews from "./pages/Home/BusinessNews";
import EntertainmentNews from "./pages/Home/EntertainmentNews";
import GeneralNews from "./pages/Home/GeneralNews";
import HealthNews from "./pages/Home/HealthNews";

import Home from "./pages/Home/Home";
import LatestNews from "./pages/Home/LatestNews";
import ScienceNews from "./pages/Home/ScienceNews";
import SportsNews from "./pages/Home/SportsNews";
import TechnologyNews from "./pages/Home/TechnologyNews";

function App() {
  const { apiError } = useContext(NewsContext);
  return (
    <>
      {/* <Navbar /> */}
      <div className="container mx-auto px-32">
        {apiError ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh]  text-red-700 text-center">
            <h1 className="text-3xl font-bold mb-4">
              {apiError.status === 402
                ? "API Limit Reached"
                : apiError.status === 401
                ? "Unauthorized"
                : apiError.status === 403
                ? "Access Denied"
                : apiError.status === 404
                ? "Data Not Found"
                : "Something Went Wrong"}
            </h1>

            <p className="text-lg">{apiError.message}</p>

            <p className="mt-2 text-gray-600">
              Please try again later or refresh the page.
            </p>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  );
}

export default App;
