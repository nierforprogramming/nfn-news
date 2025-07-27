import axios from "axios";

export async function getNews() {
    try {
        const response = await axios.get('http://localhost:3000/articles')
        return response        
        
    } catch (error) {
        console.log(error.message);
        
    }
}

export async function getLatestNews() {
    try {
        const response = await axios.get('http://localhost:3002/articles')
        return response        
        
    } catch (error) {
        console.log(error.message);
        
    }
}

export async function getCategoricalNews(category) {
    try {
        const response = await axios.get('http://localhost:3001/articles')
        return response        
        
    } catch (error) {
        console.log(error.message);
        
    }
}

