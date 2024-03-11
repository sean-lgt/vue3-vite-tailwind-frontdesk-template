import md5 from 'md5'
import { userLoginApi, userProfileApi } from '@/api/sys.js'
import { message } from '@/libs/index.js'

export default {
  namespaced: true,
  state: () => ({
    // 登录之后的 token
    token: '',
    // 获取用户信息
    userInfo: {}
  }),
  mutations: {
    // 保存token
    setToken(state, payload) {
      state.token = payload
    },
    // 保存用户信息
    setUserInfo(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    // 登录
    async login({ commit, dispatch }, payload) {
      const { password } = payload
      const dataRes = await userLoginApi({
        ...payload,
        password: password ? md5(password) : ''
      })
      // 登录成功，存储token
      commit('setToken', dataRes.token)
      dispatch('profile')
    },
    // 获取登录的用户信息
    async profile({ commit }) {
      const resInfo = await userProfileApi()
      commit('setUserInfo', resInfo)
      message(
        'success',
        `欢迎您 ${
          resInfo.vipLevel
            ? '尊贵的 VIP' + resInfo.vipLevel + ' 用户 ' + resInfo.nickname
            : resInfo.nickname
        } `,
        4000
      )
    },
    // 退出登录
    logout({ commit }) {
      commit('setToken', '')
      commit('setUserInfo', {})
      // 退出登录之后，重新刷新下页面，因为对于前台项目而言，用户是否登录（是否为 VIP）看到的数据可能不同
      location.reload()
    }
  }
}
