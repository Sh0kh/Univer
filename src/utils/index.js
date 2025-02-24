import axios from "axios";

export const BASE_URL = "https://dropcard.uz";


export const $api = axios.create({
    baseURL: `${BASE_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
})