import axios from 'axios'
export const APiAdd = axios.create({
    baseURL : 'https://newsapi.org/v2/top-headlines'
})