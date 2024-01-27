import request from '@/utils/request.js'

// 获取分类列表
export const getCategoryApi = () => {
  return request({
    url: '/category'
  })
}
