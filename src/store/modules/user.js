import md5 from 'md5'
import { userLoginApi } from '@/api/sys.js'

export default {
  namespaced: true,
  state: () => ({
    // 登录之后的 token
    token: ''
  }),
  mutations: {
    // 保存token
    setToken(state, payload) {
      state.token = payload
    }
  },
  actions: {
    // 登录
    async login({ commit }, payload) {
      const { password } = payload
      const dataRes = await userLoginApi({
        ...payload,
        password: password ? md5(password) : ''
      })
      // 登录成功，存储token
      commit('setToken', dataRes.token)
    }
  }
}
