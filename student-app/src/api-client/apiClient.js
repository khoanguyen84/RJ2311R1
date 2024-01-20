import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URI  
})

//lưu token (LocalStorage, Cookie)
// interceptor (đánh chặn)

apiClient.interceptors.request.use((request) => {
    request.headers.Authorization = `Bearer ${'token'}`
    return request
})


apiClient.interceptors.response.use((response) => {
    return response?.data
})

export default apiClient