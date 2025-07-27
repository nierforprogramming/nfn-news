import "./App.css";
import Navbar from "./component/Navbar";

import Home from "./pages/Home/Home";
import LatestNews from "./pages/Home/LatestNews";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-32">
        <section id="home">
          <Home />
        </section>
        <section id="home">
          <LatestNews id="latest-news" />
        </section>
      </div>
    </>
  );
}

export default App;
