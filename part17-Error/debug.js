console.error('it is error')

console.info('info')

console.log('log')

console.warn('warn')

// 将消息记录到当前页面
function log(message) {
  var console = document.getElementById('debuginfo')
  if (console === null) {
    console = document.createElement('div')
    console.id = 'debuginfo',
    console.style.background = '#dedede'
    console.style.border = '1px solid silver'
    console.style.padding = '5px'
    console.style.width = '400px'
    console.style.position = 'absolute'
    console.style.right = '0px'
    console.style.top = '0px'
    document.body.appendChild(console)
  }
  console.innerHTML += "<p>" + message + '</p>'
}

// 常见IE错误
// 1.操作终止 2.无效字符 3.未找到成员 4.未知运行时错误 5.语法错误 6.系统无法找到指定资源
