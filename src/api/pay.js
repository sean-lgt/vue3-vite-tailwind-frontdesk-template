import request from '@/utils/request.js'

// 获取图片数据列表
export const getVipPayListApi = (data = {}) => {
  return request({
    url: '/user/vip/pay/list',
    params: data
  })
}
