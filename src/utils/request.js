import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_REQUEST_URL,
  timeout: 5000,
  headers: {
    icode: import.meta.env.VITE_REQUEST_CODE
  }
})

export default service
