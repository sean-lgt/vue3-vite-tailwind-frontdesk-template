import svgIcons from './svg-icon/index.vue'

export default {
  install(app) {
    // 注册组件
    app.component('m-svg-icon', svgIcons)
  }
}
