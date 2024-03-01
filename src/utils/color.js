/**
 * @description: 生成随机颜色值
 * @return {*}
 */
export const createRandomRGB = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return `rgb(${r}, ${g}, ${b})`
}
