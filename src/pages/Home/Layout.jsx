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
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-red-700 p-10 text-center">
          <h1 className="text-3xl font-bold mb-4">
            ⚠️
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
        children
      )}

      <Footer />
    </>
  );
};

export default Layout;
