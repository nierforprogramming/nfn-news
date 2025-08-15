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
    const { data } = await axios.get(
      `https://api.thenewsapi.com/v1/news/top?api_token=${
        import.meta.env.VITE_THE_NEWS_API_KEY
      }&locale=us&limit=3`
    );

    if (data?.data?.length) {
      return data?.data;
    }

    // const { data } = await axios.get("http://localhost:3000/data");
    // if (data.length) {
    //   return data;
    // }
    else {
      return {
        error: true,
        status: 204,
        message: "No news available for this category.",
      };
    }

    // Simulating Error

    // const simulatedError = {
    //   response: {
    //     status: 429,
    //     data: {
    //       message: "API limit reached. Please upgrade your plan.",
    //     },
    //   },
    // };
    // throw simulatedError;
  } catch (error) {
    const status = error?.response?.status;

    let message = "An unexpected error occurred.";

    if (status === 401) {
      message = "Unauthorized access. Check your API key.";
    } else if (status === 403) {
      message = "Access forbidden. You might not have permission.";
    } else if (status === 404) {
      message = "Requested resource not found.";
    } else if (status === 402) {
      message = "API limit reached. Please wait for a day.";
    } else if (status >= 500) {
      message = "Server error. Please try again later.";
    }

    return {
      error: true,
      status: status || 500,
      message,
    };
  }
}

// Latest News
export async function getLatestNews() {
  try {
    const { data } = await axios.get(
      `https://api.thenewsapi.com/v1/news/all?api_token=${
        import.meta.env.VITE_THE_NEWS_API_KEY
      }&language=en&limit=3`
    );
    if (data?.data?.length) {
      console.log(data);

      return data?.data;
    }

    // const { data } = await axios.get("http://localhost:3001/data");

    // if (data.length) {
    //   return data;

    // }
    else {
      return {
        error: true,
        status: 204,
        message: "No news available for this category.",
      };
    }
  } catch (error) {
    const status = error?.response?.status;

    let message = "An unexpected error occurred.";

    if (status === 401) {
      message = "Unauthorized access. Check your API key.";
    } else if (status === 403) {
      message = "Access forbidden. You might not have permission.";
    } else if (status === 404) {
      message = "Requested resource not found.";
    } else if (status === 402) {
      message = "API limit reached. Please wait for a day.";
    } else if (status >= 500) {
      message = "Server error. Please try again later.";
    }

    return {
      error: true,
      status: status || 500,
      message,
    };
  }
}

// Category based News
export async function getCategoryNews(category) {
  try {
    // API call
    const { data } = await axios.get(
      `https://api.thenewsapi.com/v1/news/all?api_token=${
        import.meta.env.VITE_THE_NEWS_API_KEY
      }&categories=${category}&language=en&limit=3`
    );

    // Mock API for development/testing
    // const { data } = await axios.get("http://localhost:3002/data");

    if (data?.data?.length) {
      return data.data;
    } else {
      return {
        error: true,
        status: 204,
        message: "No news available for this category.",
      };
    }
  } catch (error) {
    const status = error?.response?.status;

    let message = "An unexpected error occurred.";

    if (status === 401) {
      message = "Unauthorized access. Check your API key.";
    } else if (status === 403) {
      message = "Access forbidden. You might not have permission.";
    } else if (status === 404) {
      message = "Requested resource not found.";
    } else if (status === 402) {
      message = "API limit reached. Please wait for a day.";
    } else if (status >= 500) {
      message = "Server error. Please try again later.";
    }

    return {
      error: true,
      status: status || 500,
      message,
    };
  }
}
