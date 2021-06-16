import axios from 'axios'

const counterRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API_ENDPOINT}`
})

export const getCounterRequset = () => counterRequest.get('/GetAllCounter/')
