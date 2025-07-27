import axios from "axios";

export async function getNews() {
    try {
        const response = await axios.get('http://localhost:3000/articles')
        return response        
        
    } catch (error) {
        console.log(error.message);
        
    }
}

