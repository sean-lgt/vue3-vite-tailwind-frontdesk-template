import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_REQUEST_URL,
  timeout: 5000,
  headers: {
    icode: import.meta.env.VITE_REQUEST_CODE
  }
})

/**
 * @description: 定义响应拦截器
 * @return {*}
 */
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      // TODO: 业务错误处理
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    console.log('🚀【出现错误】', error)
    // TODO: 请求错误处理 此时HTTP状态不在 2xx 内
    return Promise.reject(error)
  }
)

export default service
