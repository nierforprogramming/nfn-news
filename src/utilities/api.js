import axios from "axios";

const categories = [
  "technology",
  "sports",
  "health",
  "business",
  "entertainment",
  "general",
  "science",
  "technology",
];

// API 2nd https://www.thenewsapi.com/documentation
export async function getTopNews() {
  try {
    // const { data } = await axios.get(
    //   `https://api.thenewsapi.com/v1/news/top?api_token=${
    //     import.meta.env.VITE_THE_NEWS_API_KEY
    //   }&locale=us&limit=3`
    // );

    // if (data?.data?.length) {
    //   return data?.data;
    // }

    const { data } = await axios.get("http://localhost:3000/data");

    if (data.length) {
      return data;
    }
  } catch (error) {
    return {
      error: true,
      message:
        error.response?.data?.message ||
        "API limit reached or something went wrong",
    };
  }
}

// Latest News
export async function getLatestNews() {
  try {
    // const { data } = await axios.get(
    //   `https://api.thenewsapi.com/v1/news/all?api_token=${
    //     import.meta.env.VITE_THE_NEWS_API_KEY
    //   }&language=en&limit=3`
    // );
    // if (data?.data?.length) {
    //   return data?.data;
    // }

    const { data } = await axios.get("http://localhost:3001/data");

    if (data.length) {
      return data;
    }
  } catch (error) {
    return {
      error: true,
      message:
        error.response?.data?.message ||
        "API limit reached or something went wrong",
    };
  }
}

// Category based News
export async function getCategoryNews(category) {
  try {
    // const { data } = await axios.get(
    //   `https://api.thenewsapi.com/v1/news/all?api_token=${
    //     import.meta.env.VITE_THE_NEWS_API_KEY
    //   }&categories=${category}&language=en&limit=3`
    // );
    // if (data?.data?.length) {
    //   return data?.data;
    // }

    const { data } = await axios.get("http://localhost:3002/data");

    if (data.length) {
      return data;
    }
  } catch (error) {
    return {
      error: true,
      message:
        error.response?.data?.message ||
        "API limit reached or something went wrong",
    };
  }
}
