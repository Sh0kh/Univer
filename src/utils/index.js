import axios from "axios";


export const $api = axios.create({
    baseURL: 'https://api.darxon-res.uz/api',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
})