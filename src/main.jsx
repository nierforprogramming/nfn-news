import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import Layout from "./pages/Home/Layout.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsList from "./component/NewsList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/search" element={<NewsList />} />
          <Route path="/" element={<App />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
