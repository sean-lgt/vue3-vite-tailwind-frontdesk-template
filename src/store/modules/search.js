/**
 * search 模块数据
 */
export default {
  // 独立作用域
  namespaced: true,
  state() {
    return {
      // 搜索历史列表
      historys: []
    }
  },
  mutations: {
    // 新增
    addHistory(state, payload) {
      const isFindIndex = state.historys.findIndex((item) => item === payload)
      // 剔除旧数据 不可出现重复
      if (isFindIndex !== -1) {
        state.historys.splice(isFindIndex, 1)
      }
      // 新增记录
      state.historys.unshift(payload)
    },
    // 单个删除
    deleteHistory(state, payload) {
      state.historys.splice(payload, 1)
    },
    // 删除所有
    deleteAllHistory(state, payload) {
      state.historys = []
    }
  },
  actions: {}
}
