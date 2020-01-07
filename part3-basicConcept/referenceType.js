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

// Array
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
let arr4 = arr1.slice(-1) // 等价于 slice(4) arr4:["red"]
let arr7= arr1.slice(-2, -1) // 等价于 slice(3, 4) ["light"]

// 如果结束位置小于起始位置
let arr5 = arr1.slice(6) // [] 返回空数组
let arr6 = arr1.slice(-1, -2) // 等价于 slice(4, 3) []

// splice()
let arr1 = ["blue", "black", "yellow", "light", "red"]
let removed = arr1.splice(0, 2) // arr1:["yellow", "light", "red"] removed:["blue", "black"]

let removed = arr1.splice(2, 0, "green") // arr1:["blue", "black", "green", "yellow", "light", "red"] removed:[]

let removed = arr1.splice(2, 2, "green") // arr1:["blue", "black", "green", "red"] removed:["yellow", "light"]

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

// 迭代
// every()/some()/forEach()/map()/filter()
