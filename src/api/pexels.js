import request from '@/utils/request.js'

// 获取图片数据列表
export const getPexlesListApi = (data = {}) => {
  return request({
    url: '/pexels/list',
    params: data
  })
}
