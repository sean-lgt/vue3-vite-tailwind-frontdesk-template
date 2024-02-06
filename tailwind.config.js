/** @type {import('tailwindcss').Config} */
export default {
  // 应用到 index 文件 src目录下的文件
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      // 指定字体大小
      fontSize: {
        xs: ['0.25rem', '0.35rem'],
        sm: ['0.35rem', '0.45rem'],
        base: ['0.42rem', '0.52rem'],
        lg: ['0.55rem', '0.65rem'],
        xl: ['0.65rem', '0.75rem']
      }
    }
  },
  plugins: []
}
