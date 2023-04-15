import axios from 'axios'

export const AxiosPublicInstance = axios.create({
  baseURL: 'http://localhost:1337/api',
})
