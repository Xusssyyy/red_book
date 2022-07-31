// 配置请求对象
import axios from 'axios'
export const baseUrl = "https://www.fastmock.site/mock/33e7fec4e60b54344eaa2c59a55b379d/red_book/red_book";
const axiosInstance = axios.create({
    baseURL: baseUrl
})
axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
      console.log(err, '网络错误~~')
    }
  )
export { axiosInstance }