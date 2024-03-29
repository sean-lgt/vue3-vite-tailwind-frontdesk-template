import request from '@/utils/request.js'

// 检验人类行为验证滑块是否正确
export const checkSilerCaptchaApi = (data = {}) => {
  return request({
    url: '/sys/captcha',
    method: 'POST',
    data: data
  })
}

// 用户登录
export const userLoginApi = (data = {}) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data: data
  })
}

// 获取登录用户个人信息
export const userProfileApi = (data = {}) => {
  return request({
    url: '/user/profile',

    data: data
  })
}

// 注册
export const userRegisterApi = (data = {}) => {
  return request({
    url: '/sys/register',
    method: 'POST',
    data: data
  })
}

// 修改用户信息
export const updateUserInfoApi = (data = {}) => {
  return request({
    url: '/user/update',
    method: 'PUT',
    data: data
  })
}
