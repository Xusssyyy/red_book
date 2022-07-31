// import axios from 'axios'

// export const Getlist = () => 
//     axios.get('https://www.fastmock.site/mock/33e7fec4e60b54344eaa2c59a55b379d/red_book/red_book/list')

// export const Getfood = () => 
//     axios.get('https://www.fastmock.site/mock/33e7fec4e60b54344eaa2c59a55b379d/red_book/red_book/food')

// export const Getshop = () => 
//     axios.get('https://www.fastmock.site/mock/33e7fec4e60b54344eaa2c59a55b379d/red_book/red_book/shop')

// export const Getsport = () =>
//     axios.get("https://www.fastmock.site/mock/33e7fec4e60b54344eaa2c59a55b379d/red_book/red_book/sport")

import { axiosInstance } from "./config";
export const getListRequest = () => axiosInstance.get('/list')  
export const getFoodRequest = () => axiosInstance.get('/food')  
export const getShopRequest = () => axiosInstance.get('/shop')  
export const getSportRequest = () => axiosInstance.get('/sport')  
export const getSearchRequest = () => axiosInstance.get('/search')  
