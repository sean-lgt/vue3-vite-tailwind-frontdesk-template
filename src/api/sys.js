import request from '@/utils/request.js'

// 检验人类行为验证滑块是否正确
export const checkSilerCaptchaApi = (data = {}) => {
  return request({
    url: '/sys/captcha',
    method: 'POST',
    data: data
  })
}
