import { createContext, useState } from "react";

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
