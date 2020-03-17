// window

//1.1 全局作用域
var age = 29
function sayAge() {
  console.log(this.age)
}

console.log(window.age) // 29
sayAge() // 29
window.sayAge() // 29 

/**
* 定义全局变量与window对象上直接定义属性差别：delete
* 全局变量不能通过delete操作符删除，window对象上直接定义属性可以。
*/
var age = '29'
window.color = 'blue'

delete window.age // false
delete age
delete window.color

// 注：尝试访问未声明的变量会抛出错误，但是通过查询window对象，可以直到某个可能未声明的变量是否存在。

var newValue = oldvalue // error

var newValue = window.oldvalue // undefined

//2.2 窗口关系及框架

// top对象始终指向最高（最外）层的框架，也就是浏览器窗口

// 对于在一个框架中编写的任何代码，window对象指向的都是那个框架的特定实例，而非最高层框架。

// parent对象始终指向当前框架的直接上层框架

// 在没有框架的情况下，parent一定等于top，此时它们都等于window

// ！！！除非最高层窗口是通过window.open()打开的，否则其window对象的name属性不会包含任何值。

// self始终指向window

// top/self/parent等属性都是window的属性

//2.3 窗口位置

let leftPos = window.screenLeft === 'number' ? window.screenLeft : window.screenX
let topPos = window.screenTop === 'number' ? window.screenTop : window.screenY 

// 不适用于框架只适用于window对象
window.moveTo(0, 0) // ?? 新位置
window.moveBy(20, 20) // ?? 水平/垂直距离

//2.4 窗口大小
var pageWidth = window.innerWidth // 可见视口
var pageHeight = window.innerHeight

if (typeof pageWidth != "number") {
  if (document.compatMode == "CSS1Compat") {
    pageWidth = document.documentElement.clientWidth // 布局视口
    pageHeight = document.documentElement.clientHeight
  } else {
    pageWidth = document.body.clientWidth
    pageHeight = document.body.clientHeight
  }
}

pageHeight // 488
pageWidth // 1920

// 不适用于框架只适用于window对象
window.resizeTo(100, 100) // ??
window.resizeBy(100, 100) // ??

//2.5 导航和打开窗口

// 弹出窗口
// window.open() 
/**
 * 四个参数：
 * 要加载的URL
 * 窗口目标 （可以是iframe名称 也可为_self、_parent、_top、_blank）
 * 一个特性字符串
 * 一个表示新页面是否取代浏览器历史记录中当前加载页面的布尔值
 */
window.open('https://www.baidu.com', 'topFrame')

//等同于
// <a href="https://www.baidu.com" target="topFrame"></a>

var leftwin = window.open('https://www.baidu.com', '_blank', 'width=100,height=100,top=10,left=10,resizeable=yes')

leftwin.resizeTo(100, 100) // ??

leftwin.moveTo(100, 100) // ??

leftwin.close() // 仅适用于通过window.open打开的弹出窗口

leftwin.closed // true

leftwin.opener = null // 告诉浏览器新创建的标签页不需要于打开它的标签页通信，可以在独立进程中运行，一旦切断没办法恢复

// 安全限制 -- 弹出窗口

// 弹出窗口屏蔽程序

var blocked = false
try {
  var leftwin = window.open('https://www.baidu.com', '_blank', 'width=100,height=100,top=10,left=10,resizeable=yes')

  if (leftwin == null) { // 浏览器内置屏蔽
    blocked = true
  }

} catch {
  blocked = true
}

//2.6 间歇调用和超时调用

setTimeout("alert('hello')", 1000) // 避免使用

setTimeout(function() {
  alert('hello')
}, 1000)

var timeoutId = setTimeout(function() {
  alert('hello')
}, 1000)

clearTimeout(timeoutId)

setInterval("alert('hello')", 1000) // 避免使用

setInterval(function() {
  alert('hello')
}, 1000)

var num = 0
var max = 2

var intervalId = setInterval(function() {
  incrementNum()
  alert('hello')
}, 1000)

function incrementNum () {
  num++
  if (num === max) {
    clearInterval(intervalId)
    console.log('finish')

    intervalId = null
  }
}

var num = 0
var max = 4

function incrementNum () {
  num++
  if (num <= max) {
    alert('hello')
    setTimeout(incrementNum, 1000) // 通过setTimeout模拟setInterval
  } else {
    console.log('finish')
  }
}

incrementNum()

setInterval // 后一个调用可能会在前一个调用结束前启动，需避免使用

//2.7 系统对话框
// alert/confirm/promote

alert(1)

confirm("ok?")

if (confirm("ok?")) {
  console.log('yes')
} else {
  console.log('no')
}

var result = prompt('name', 'lilei')
if (result !== null) {
  console.log(result)
}