import axios from 'axios'
// 創建 axios實體
const counterRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API_ENDPOINT}`
})

export const getAllCounterRequset = () => counterRequest.get('/GetAllCounter/')
