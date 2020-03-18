// location对象
// window对象的属性/document对象的属性--引用的是同一个对象
window.location === document.location // true

//2.1 查询字符串参数

function getQueryStringArgs () {
  let qs = (location.search.length > 0 ? location.search.substring(1) : ''),

  args = {},

  items = qs.length ? qs.split('&') : []

  item = null,

  name = null,

  value = null,

  len = items.length

  for (let i = 0;i < len;i++) {
    item = items[i].split('=')
    name = decodeURIComponent(item[0])
    value = decodeURIComponent(item[1])

    name = item[0]
    value = item[1]

    if (name.length) {
      args[name] = value
    }
  }

  return args
}

decodeURIComponent() // 特殊字符解析

//2.2 位置操作
location.assign('https://www.baidu.com')

window.location = 'https://www.baidu.com'
location.href = 'https://www.baidu.com'

location.hash = '#1'
location.search = "?q=javascript"
location.hostname = 'www.baidu.com'
location.port = '8080'
location.pathname = 'mydir'

// 生成一条新纪录

// 不会生成新记录
location.replace('https://www.baidu.com')

// reload
location.reload() // 从浏览器缓存中加载
location.reload(true) // 强制从服务器加载