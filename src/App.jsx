import "./App.css";
import Navbar from "./component/Navbar";

import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-32">
        <section id="home">
          <Home />
        </section>
      </div>
    </>
  );
}

export default App;
