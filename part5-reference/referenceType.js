/*
* 对象是某个特定引用类型的实例
* 新对象 = new 构造函数
* 构造函数是函数，目的是为了创建新对象而定义
*/

// 原生引用类

// Object
// 创建的两种方式：new和字面量
let obj = new Object()
let obj = {
  "first name": 'li',
  age: 10
}
obj["first name"] // 'li'
obj.age // 10

// 
let arr = new Array(); // []
let arr = ['1', 1, new Date()]
arr[99] = 1 // lenght:100
let arr = new Array(3); // lenght: 3 / value: undefined
arr[arr.length] // 末尾加值
Array.isArray(arr) // 检测数组 true

arr.toLocaleString() // "1,1,2020/1/6 下午2:36:09"
arr.toString() // "1,1,Mon Jan 06 2020 14:36:09 GMT+0800 (中国标准时间)"
arr.valueOf() // 返回的是数组 ["1", 1, Mon Jan 06 2020 14:36:09 GMT+0800 (中国标准时间)]

arr.join() // 默认为“逗号”分隔 "1,1,Mon Jan 06 2020 14:36:09 GMT+0800 (中国标准时间)"

// 栈（“后进先出”）
arr.push(4) // ["1", 1, Mon Jan 06 2020 14:36:09 GMT+0800 (中国标准时间), 4]
const last = arr.pop() // 4 ["1", 1, Mon Jan 06 2020 14:36:09 GMT+0800 (中国标准时间)]

// 队列（先进先出）
arr.push(4)
const first = arr.shift() // '1' [1, Mon Jan 06 2020 14:36:09 GMT+0800 (中国标准时间), 4]

let arr = []
arr.unshift('1', '2') // ["1", "2"]
arr.unshift('3') // ["3", "1", "2"]
arr.pop() // ["3", "1"]

// 重排序方法
// reverse() 反转
let arr = [1, 5, 3]
arr.reverse() // arr:[3, 5, 1]

// sort() 升序 toString()
let arr1 = [1, 3, 15]
arr1.sort() // [1, 15, 3]

// sort() 比较函数
// sort() 根据返回值大于0、小于0或者等于0影响排序结果
// 升序
function max (val1, val2) {
  if (val1 > val2) {
    return 1
  } else if (val1 < val2) {
    return -1
  } else {
    return 0
  }
}

let arr2 = [1, 3, 15, 4]
arr2.sort(max) // [1, 3, 4, 15]

// 降序
function min (val1, val2) {
  if (val1 > val2) {
    return -1
  } else if (val1 < val2) {
    return 1
  } else {
    return 0
  }
}

let arr2 = [1, 3, 15, 4]
arr2.sort(min) // arr2:[15, 4, 3, 1]

// 操作方法--不改变原数组
// concat()
let arr1 = ['blue', 'black']
let arr2 = arr1.concat('yellow', ['light'], 'red') // arr1:['blue', 'black'] arr2: ["blue", "black", "yellow", "light", "red"]

// slice()
let arr1 = ["blue", "black", "yellow", "light", "red"]
let arr2 = arr1.slice(1) // arr2:["black", "yellow", "light", "red"]

// 不包含结束位置
let arr3 = arr1.slice(1, 4) // arr3:["black", "yellow", "light"]

// 如果是负数
let arr4 = arr1.slice(-1) // 等价于 slice(4) arr4:["red"]  (长度加负数)
let arr7= arr1.slice(-2, -1) // 等价于 slice(3, 4) ["light"]

// 如果结束位置小于起始位置
let arr5 = arr1.slice(6) // [] 返回空数组
let arr6 = arr1.slice(-1, -2) // 等价于 slice(4, 3) []

// splice()
let arr1 = ["blue", "black", "yellow", "light", "red"]
let removed = arr1.splice(0, 2) // arr1:["yellow", "light", "red"] removed:["blue", "black"]

let removed = arr1.splice(2, 0, "green") // arr1:["blue", "black", "green", "yellow", "light", "red"] removed:[]

let removed = arr1.splice(2, 2, "green") // arr1:["blue", "black", "green", "red"] removed:["yellow", "light"]

let add = arr1.splice(-1, 0, "1") // ["blue", "black", "yellow", "light", "red"]

// 位置方法 使用全等（‘===’）
// indexOf() 从数组的开头（位置0）开始向后查找
let arr = [1, 2, 4]
arr.indexOf(4) // 2
arr.indexOf(4, 3) // -1 3为查找起点位置的索引
arr.indexOf(4, 2) // 2

arr.lastIndexOf(4) // 2
arr.lastIndexOf(4, 3) // 2
arr.lastIndexOf(4, 1) // -1

const person = {name: 'lilei'}
const people = [{name: 'lilei'}]
const people1 = [person]

people.indexOf(person) // -1
people1.indexOf(person) // 0

// 迭代-遍历所有选项
// every()/some()/forEach()/map()/filter()
let arr = [1, 2, 4]
let flag = arr.every((item, index, array) => {
  return item > 2
})
// flag: false
let flag = arr.some((item, index, array) => {
  return item > 2
})
// flag: true
arr.forEach((item, index, array) => {
  console.log(item)
})
// forEach 无返回值
let newArr = arr.map((item, index, array) => {
  return item * 2
})
// newArr:[2, 4, 8]
let newArr = arr.filter((item, index, array) => {
  return item > 2
})
// newArr:[4]

// 归并方法-遍历所有选项
// reduce():返回值作为下一个值prev
let arr = [1, 2, 4]
let sum = arr.reduce((prev, cur, index, array) => {
  return prev + cur
})
// sum: 7
// reduceRight:从最后一个索引开始
let sum = arr.reduceRight((prev, cur, index, array) => {
  return prev + cur
})
// sum: 7

// Date
const today = new Date()
today.toDateString() // "Thu Jan 16 2020"
today.toTimeString() // "18:55:11 GMT+0800 (中国标准时间)"
today.toLocaleDateString() // "2020/1/16"
today.toLocaleTimeString() // "下午6:55:11"
today.toUTCString() // "Thu, 16 Jan 2020 10:55:11 GMT"
today.toLocaleString() // "2020/1/16 下午6:55:11"

// UTC指没有时区偏差情况下的时间值
today.getTime() // 1579172111511
today.getFullYear() // 2020
today.getUTCFullYear() // 2020
today.setTime(1579172111511) // Thu Jan 16 2020 18:55:11 GMT+0800 (中国标准时间)
today.setFullYear(2012) // Mon Jan 16 2012 18:55:11 GMT+0800 (中国标准时间)
today.setUTCFullYear(2013) // Wed Jan 16 2013 18:55:11 GMT+0800 (中国标准时间)
today.getMonth() // 0 0表示一月
today.setMonth(2) // Sat Mar 16 2013 18:55:11 GMT+0800 (中国标准时间)
today.setUTCMonth(2) // Sat Mar 16 2013 18:55:11 GMT+0800 (中国标准时间)
today.getDate() // 16
today.setDate(20) // Wed Mar 20 2013 18:55:11 GMT+0800 (中国标准时间)
today.setUTCDate(20) // Wed Mar 20 2013 18:55:11 GMT+0800 (中国标准时间)
today.getDay() // 星期三
today.getHours() // 18
today.getMinutes() // 55
today.getSeconds() // 11
today.getMilliseconds() // 511
today.getTimezoneOffset() // 返回本地时间与UTC时间相差的分钟数

// RegExp
/cat/g.test('cataaa') // true
/cat/g.test('ataaa') // false
/cat/g.global // 是否设置了g标志 true g: 应用于全局字符串
/cat/g.ignoreCase // 是否设置了i标志 false i: 不区分大小写
/cat/g.lastIndex // 0 开始搜索下一个匹配项的字符位置，从0开始
/cat/g.multiline // 是否设置了m标志  m：多行模式 到达这行末位后是否查找下一行

// Function
// 函数声明提升
console.log(sum1(1, 2)) // 3
function sum1(a, b) {
  return a + b
}

// 函数表达式
console.log(sum2(1, 2)) // VM224:1 Uncaught TypeError:
var sum2 = function (a, b) {
  return a + b
}

// 作为值的函数
function say(statement) {
  console.log(statement)
}

function liming(func, params) {
 func(params)
}

liming(say, 'hello') // 'hello'

// 从一个函数返回另一个函数
function compare(property) {
  return function(obj1, obj2) {
    const val1 = obj1[property]
    const val2 = obj2[property]

    if (val1 > val2) {
      return 1
    } else if (val1 < val2) {
      return -1
    }
  }
}

compare('age')({age: 10}, {age: 12})

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num*factorial(num - 1)
  }
}

factorial(10) // 3628800

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num*arguments.callee(num - 1) // callee 指向拥有这个arguments对象的函数
  }
}

factorial(10) // 3628800

// this -- 全局作用域中调用的是window
window.color = 'red'
var o = {color: 'blue'}
function sayColor () {
  console.log(this.color)
}

sayColor() // 'red'

o.sayColor = sayColor;
o.sayColor() // 'blue'

// 注：函数的名字仅仅是一个包含指针的变量而已

function outer() {
  inner()
}

function inner() {
  console.log(inner.caller)
  console.log(arguments.callee.caller)
}

outer()

// 函数属性和方法
// 每个函数都包含两个属性length和prototype
// length: 希望接收命名参数的个数
function sayName(name) {
  console.log(name)
}

function sum(num1, num2) {
  console.log(num1 + num2)
}

function sayHi() {
  console.log('hi')
}

sayName.length // 1
sum.length // 2
sayHi.length // 0

// prototype: 保存所有实例方法的真正所在
// prototype不可枚举，for-in无法发现

// 函数包含的方法：apply()和call()
// apply()两个参数: 1在其中运行函数的作用域 2参数数组
function sum (num1, num2) {
  return num1 + num2
}

function callSum1 (num1, num2) {
  return sum.apply(this, [num1, num2])
}

function callSum2 (num1, num2) {
  return sum.apply(this, arguments)
}

callSum1(10, 10) // 20
callSum2(10, 10) // 20

// call 传递的必须逐个列举出来
function sum (num1, num2) {
  return num1 + num2;
}

function callSum(num1, num2) {
  return sum.call(this, num1, num2)
}

callSum(10, 10) // 20

// call/apply扩大函数赖以运行的作用域
// 优点：对象不需要与方法有任何耦合关系
window.color = "red"
let o = { color: "blue" }

function sayColor() {
  console.log(this.color)
}

sayColor() // red
sayColor.call(this); // red
sayColor.call(window); // red
sayColor.call(o) // blue

// bind()
let objectSayColor = sayColor.bind(o)
objectSayColor() // blue