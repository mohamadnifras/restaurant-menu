import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACK_END_URL,
    withCredentials: true,
})

export default axiosInstance