// src/components/SearchResults.jsx
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import placeholderImage from "/placeholder.png";
import { fetchSearchResults } from "../utilities/api";

const PAGE_SIZE = 6;
const NewsList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchSearchNews() {
      if (!query) return;
      setLoading(true);

      const params = {
        q: query,
        sortBy: "relevancy",
        apiKey: import.meta.env.VITE_API_KEY,
        pageSize: PAGE_SIZE,
        page: page,
      };

      const returnedData = await fetchSearchResults(params);

      const articles = returnedData.data;
      if (articles) {
        setArticles(articles.articles);
        setTotalResults(articles.totalResults);

        setLoading(false);
      }
    }

    fetchSearchNews();
  }, [query, page]);

  const totalPages = Math.ceil(totalResults / PAGE_SIZE);

  return (
    <div className="news-search-container mt-32">
      <h1 className="text-2xl font-bold text-center pt-18 md:pt-5">
        Search Results for: <span className="italic">{query}</span>
      </h1>
      <div className="ns-wrapper">
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : (
          <>
            <div className="news-cards w-full px-34 lg:px-8 xl:px-34 py-1">
              {articles.map((News, idx) => (
                <a key={News.title} href={News.url} target="_blank">
                  <div className="news-card grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 md:my-14 my-3 overflow-hidden w-full gap-14">
                    <div className="card-left rounded-lg w-full h-[300px] overflow-hidden">
                      <img
                        className="w-full h-full object-cover hover:scale-105 transition-all duration-200"
                        src={
                          News.urlToImage ? News.urlToImage : placeholderImage
                        }
                        alt={News.title}
                      />
                    </div>
                    <div className="card-right flex flex-col gap-2">
                      <div className="news-category flex gap-2">
                        <div className="category font-bold">Published In</div>
                        <div className="news-date text-gray-400">
                          {News.publishedAt.slice(0, 10)}
                        </div>
                      </div>
                      <div className="news-headline text-lg font-bold">
                        {News.title}
                      </div>
                      <div className="news-desc text-gray-400">
                        {News.description}
                      </div>
                      <div className="news-source font-bold">
                        {News.author ? News.author : "Unkown"}

                        {News.author ? (
                          <p className="text-gray-400 font-normal">Author</p>
                        ) : (
                          <p className="text-gray-400 font-normal">
                            Unknown Author
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                className=" hover:bg-[var(--accent-color)] hover:text-white px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                disabled={page === 1}
              >
                Previous
              </button>
              <span className="font-medium">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage((prev) => prev + 1)}
                className="hover:bg-[var(--accent-color)] hover:text-white px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                disabled={page >= totalPages}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default NewsList;
