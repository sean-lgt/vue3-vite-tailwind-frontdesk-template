import request from '@/utils/request.js'

// 获取图片数据列表
export const getPexlesListApi = (data = {}) => {
  return request({
    url: '/pexels/list',
    params: data
  })
}

// 获取搜索提示列表
export const getPexlesSearchHintApi = (data = {}) => {
  return request({
    url: '/pexels/hint',
    params: data
  })
}

// 获取推荐主题
export const getPexlesRecommendThemeApi = (data = {}) => {
  return request({
    url: '/pexels/themes',
    params: data
  })
}
