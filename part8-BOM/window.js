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