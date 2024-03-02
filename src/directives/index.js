/**
 * 全局指令注册
 */
export default {
  async install(app) {
    // https://cn.vitejs.dev/guide/features.html#glob-import
    // import.meta.globEager 为同步导入
    // vite5中import.meta.globEager已经被废弃，改成使用import.meta.glob('*', { eager: true })
    // const directives = import.meta.globEager('./modules/*.js')
    const directives = import.meta.glob('./modules/*.js', { eager: true })
    for (const [key, value] of Object.entries(directives)) {
      // 拼接组件注册的 name
      const arr = key.split('/')
      const directiveName = arr[arr.length - 1].replace('.js', '')
      // 完成注册
      app.directive(directiveName, value.default)
    }
  }
}
