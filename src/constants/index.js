// PC端设备宽度
export const PC_DEVICE_WIDTH = 1280

// category 的本地构建数据
export const ALL_CATEGORY_ITEM = {
  id: 'all',
  name: '全部'
}

// category 的初始化数据
export const CATEGORY_INIT_DATA = [
  ALL_CATEGORY_ITEM,
  {
    id: 'web_app_icon',
    name: 'UI/UX',
    col: 1,
    urlname: 'web_app_icon'
  },
  {
    id: 'design',
    name: '平面',
    col: 1,
    urlname: 'design'
  },
  {
    id: 'illustration',
    name: '插画/漫画',
    col: 1,
    urlname: 'illustration'
  },
  {
    id: 'photography',
    name: '摄影',
    col: 2,
    urlname: 'photography'
  },
  {
    id: 'games',
    name: '游戏',
    urlname: 'games'
  },
  {
    id: 'anime',
    name: '动漫',
    urlname: 'anime'
  },
  {
    id: 'industrial_design',
    name: '工业设计',
    col: 2,
    urlname: 'industrial_design'
  },
  {
    id: 'architecture',
    name: '建筑设计',
    urlname: 'architecture'
  },
  {
    id: 'art',
    name: '人文艺术',
    urlname: 'art'
  },
  {
    id: 'home',
    name: '家居/家装',
    col: 1,
    urlname: 'home'
  }
]

// 主题配置
export const THEME_CONFIG = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system'
}

// 瀑布流是否开启图片预加载 如果数据已经有图片宽高返回则不需要预加载
export const IS_OPEN_PICTURE_PRE_READING = false

// 登录方式
export const LOGIN_TYPE = {
  USERNAME: 'username',
  QQ: 'QQ',
  WX: 'WX'
}
