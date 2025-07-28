import axios from "axios";

export async function getNews() {
    try {
        // const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`)
        // return response
         const response = await axios.get('http://localhost:3000/data')
        return response       
        
    } catch (error) {
        console.log(error.message);
        
    }
}

export async function getLatestNews() {
    try {
        // const response = await axios.get(`https://newsapi.org/v2/everything?q=latest+news&apiKey=${import.meta.env.VITE_API_KEY}`)
        const response = await axios.get('http://localhost:3002/data')
        return response        
        
    } catch (error) {
        console.log(error.message);
        
    }
}

export async function getCategoricalNews(category) {
    try {
        // const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`)
        // return response 
         const response = await axios.get('http://localhost:3001/data')
        return response         
        
    } catch (error) {
        console.log(error.message);
        
    }
}

