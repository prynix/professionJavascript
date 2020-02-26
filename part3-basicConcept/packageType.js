// String/Boolean/Number
/**
 * 引用类型与基本包装类型的主要区别是对象的生存期:
 * 使用new操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中。
 * 自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁。
 * 即 不能在运行时为基本类型值添加属性和方法
 */

// String
let a = 'test'
let b = a.substring(2) // 'st'

// 等价于
let a = new String('test')
let b = a.substring(2) // 'st'
a = null

let a = 'test'
a.color = '1'
console.log(a.color) // undefined
console.log(typeof a) // string

let a = new String('test')
console.log(typeof a) // object

// Object构造函数也会像工厂方法一样，根据传入值的类型返回相应基本包装类型的实例
let obj = new Object('text')
console.log(obj instanceof String) // true
console.log(obj instanceof Object) // true
console.log(obj instanceof Number) // false

// new调用基本包装类型的构造函数，与直接调用同名的转型函数是不一样的
let value = '25'
let number = Number(value)
console.log(typeof number) // number

let obj = new Number(value)
console.log(typeof obj) // object

// Boolean
// 不建议直接实例化 Boolean
let falseObject = new Boolean(false)
console.log(falseObject&&true) // true

let falseValue = false
console.log(false&&true) // false

console.log(typeof falseObject) // object
console.log(typeof falseValue) // boolean

console.log(falseObject instanceof Boolean) // true
console.log(falseValue instanceof Boolean) // false

// Number
let num = 10
console.log(num.toString()) // 10
console.log(num.toString(2)) // 1010
console.log(num.toString(8)) // 12
console.log(num.toString(10)) // 10
console.log(num.toString(16)) // a

console.log(num.toFixed()) // 10
console.log(num.toFixed(2)) // 10.00

console.log(num.toExponential()) // 1e+1
console.log(num.toExponential(2)) // 1.00e+1

console.log(num.toPrecision(1)) // 1e+1
console.log(num.toPrecision(2)) // 10
console.log(num.toPrecision(3)) // 10.0

// 不建议直接实例化 Number
let numberObject = new Number(10)
let numberValue = 10

console.log(typeof numberObject) // object
console.log(typeof numberValue) // number

console.log(numberObject instanceof Number) // true
console.log(numberValue instanceof Number) // false

// String
let stringValue = 'hello world'
stringValue.charAt(1) // "e"
stringValue.charCodeAt(1) // 101
stringValue[1] // "e" ie7一下不支持

let stringValue = 'hello '
let result = stringValue.concat('world') // "hello world"

// 创建新字符串方法 slice()/substr()/substring()
let stringValue = 'hello world'
stringValue.slice(1) // "ello world"
stringValue.substring(1) // "ello world"
stringValue.substr(1) // "ello world"

stringValue.slice(1, 5) // "ello"
stringValue.substring(1, 5) // "ello"
stringValue.substr(1, 5) // "ello "

// 传负数

// slice 负数和长度相加
stringValue.slice(-3) // "rld"
stringValue.slice(-3, -2) // "r"
stringValue.slice(-3, -4) // ""
// substring 负数归0
stringValue.substring(-3) // "hello world"
stringValue.substring(-3, -2) // ""
stringValue.substring(-3, 2) // "he"
// substr 将负的第一个字符串和长度相加，第二个归0
// substr ie8以下不支持传负值
stringValue.substr(-2) // "ld"
stringValue.substr(-2, -1) // ""
stringValue.substr(-2, 1) // "l"

// indexOf 从该参数指定位置向后搜索
stringValue.indexOf('o', 3) // 4
stringValue.indexOf('o', 6) // 7
stringValue.indexOf('s', 6) // -1

// lastIndexOf 从该参数指定位置向前搜索
stringValue.lastIndexOf('o', 3) // -1
stringValue.lastIndexOf('o', 5) // 4
stringValue.lastIndexOf('o', 7) // 7
stringValue.lastIndexOf('o', 9) // 7

let stringValue = 'testetsetestesttestesttes'
let pos = stringValue.indexOf('e')
let position = []

while(pos > -1){
  position.push(pos)
  pos = stringValue.indexOf('e', pos + 1)
}

console.log(position) // [1, 4, 7, 9, 12, 16, 19, 23]

// trim()
let stringValue = ' hello world ' 
stringValue.trim() // "hello world"

// 大小写转换
let stringValue = 'hello world'
stringValue.toLowerCase() // "hello world"
stringValue.toUpperCase() // "HELLO WORLD"
stringValue.toLocaleLowerCase() // "hello world"
stringValue.toLocaleUpperCase() // "HELLO WORLD"

// 字符串匹配
let stringValue = 'cat, dog, cat'
let pattern =/.at/

let matches = stringValue.match(pattern) // [0: "cat", index: 0...]
matches.index // 0
matches[0] // 'cat'



