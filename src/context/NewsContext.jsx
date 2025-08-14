import { createContext, useEffect, useState } from "react";
import { getLatestNews, getTopNews } from "../utilities/api";

const NewsContext = createContext();

function NewsContextProvider(props) {
  const [news, setNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [categoryNews, setCategoryNews] = useState({
    business: [],
    entertainment: [],
    general: [],
    health: [],
    science: [],
    sports: [],
    technology: [],
  });
  const [apiError, setApiError] = useState(null);

  // Trending News
  useEffect(() => {
    async function _getTopNews() {
      const data = await getTopNews();
      if (data.length) {
        setNews(data);
      }
    }
    _getTopNews();
  }, []);

  // Latest News
  // useEffect(() => {
  //   async function _getLatestNews() {
  //     const data = await getLatestNews();
  //     if (data.length) {
  //       setLatestNews(data);
  //     }
  //   }
  //   _getLatestNews();
  // }, []);

  const value = {
    news,
    setNews,
    latestNews,
    setLatestNews,
    categoryNews,
    setCategoryNews,
    apiError,
    setApiError,
  };
  return (
    <NewsContext.Provider value={value}>{props.children}</NewsContext.Provider>
  );
}

export { NewsContext, NewsContextProvider };
