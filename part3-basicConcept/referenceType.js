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
