import axios from "axios";
import { delay } from "./utils";

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

// const currentsapi = new CurrentsAPI('')

// currentsapi.latestNews({
//     language: 'en',
//     country: 'US'
// }).then( response => {
// })

// export async function getLatestNews() {
//     try {
//         //   const response = await axios.get(`http://localhost:3000/data`)
//         // return response.data.news
//         const response = await axios.get('https://api.currentsapi.services/v1/latest-news?apiKey=${import.meta.env.VITE_API_KEY}')
//         console.log(response.data.news);

//     } catch (error) {
//         console.log(error.message);

//     }
// }

// export async function getNews() {
//     try {
//         const response = await axios.get(`http://localhost:3000/top_news`)
//         console.log(response.data[0].news);

//         // return response
//         const response = await axios.get(` https://api.worldnewsapi.com/top-news?api-key=${import.meta.env.VITE_API_KEY}&source-country=us&language=en`)
//         return response.data.top_news[0].news
//     } catch (error) {
//         console.log(error.message);

//     }
// }

// export async function getLatestNews() {
//     try {
//         await delay(4000)
//         const response = await axios.get(` https://api.worldnewsapi.com/top-news?api-key=${import.meta.env.VITE_API_KEY}&source-country=us&language=en`)
//         return response.data.top_news[0].news

//     } catch (error) {
//         console.log(error.message);

//     }
// }

// export const getCategoricalNews = async (categories) => {
//   for (const category of categories) {
//     const news = await axios.get(`/api/v1/latest-news?apiKey=${import.meta.env.VITE_API_KEY}&${category}`   ) // API call
// console.log(news);
//     await delay(2000); // Wait 2 seconds before next
//   }
// };

//  export const fetchSearchResults = async (params) => {
//     try {
//       const res = await axios.get("https://newsapi.org/v2/everything"
//         , {
//         params
//       });

//    return res

//     const response = await axios.get(` https://api.worldnewsapi.com/top-news?api-key=${import.meta.env.VITE_API_KEY}&source-country=us&language=en`)
//         return response.data.top_news[0].news
//     } catch (err) {
//       console.error(err);
//     }
//   };

// API 2nd https://www.thenewsapi.com/documentation
export async function getTopNews() {
  try {
    const { data } = await axios.get("http://localhost:3000/data");
    if (data.length) {
      return data;
    }
  } catch (error) {
    return error.message;
  }
}

// Latest News
export async function getLatestNews() {
  try {
    const { data } = await axios.get("http://localhost:3001/data");
    if (data.length) {
      return data;
    }
  } catch (error) {
    return error.message;
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
    const { data } = await axios.get("http://localhost:3000/data");
    console.log(data);

    // if (data?.data?.length) {
    //   return data?.data;
    // }
    if (data.length) {
      return data;
    }
  } catch (error) {
    return error.message;
  }
}
