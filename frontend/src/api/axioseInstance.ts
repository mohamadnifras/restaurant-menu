import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://restaurant-menu-3adz.onrender.com/api",
    withCredentials: true,
})

export default axiosInstance