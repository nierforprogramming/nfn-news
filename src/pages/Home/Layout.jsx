import React, { useContext } from "react";
import Navbar from "../../component/Navbar";
import Footer from "./Footer";
import { NewsContext } from "../../context/NewsContext";

const Layout = ({ children }) => {
  const { apiError } = useContext(NewsContext);
  return (
    <>
      <Navbar />
      {apiError ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh] bg-red-50 text-red-700 p-10 text-center">
          <h1 className="text-3xl font-bold mb-4">⚠️ API Limit Reached</h1>
          <p className="text-lg">{apiError}</p>
          <p className="mt-2 text-gray-600">Please try again later.</p>
        </div>
      ) : (
        children
      )}
      <Footer />
    </>
  );
};

export default Layout;
