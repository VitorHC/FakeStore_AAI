import axios from "axios";

export const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_PRODUCT_API,
    timeout: 5000
})
