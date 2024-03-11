import axios from 'axios'
import store from '@/store'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_REQUEST_URL,
  timeout: 5000,
  headers: {
    icode: import.meta.env.VITE_REQUEST_CODE
  }
})

/**
 * @description: 定义请求拦截器
 * @return {*}
 */
service.interceptors.request.use(
  (config) => {
    // config.headers.icode = '你需要在这里填入你的 icode'
    if (store.getters.token) {
      // 如果token存在 注入token
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config // 必须返回配置
  },
  (error) => {
    return Promise.reject(error)
  }
)

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
