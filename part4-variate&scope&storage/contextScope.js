// 按不同类型值分类：基本数据类型和引用数据类型

// 只能给引用类型添加属性
let person = { name: "lilei" }
person.age = 18

let name = "lilei"
name.age = 18
console.log(name.age) // undefined

// 复制变量
// 基本类型-互不影响
let num1 = 1, num2 = num1;
num2 = 2;
console.log(num1) // 1
console.log(num2) // 2

// 引用类型-相互影响
let obj1 = new Object(), obj2 = obj1;
obj1.name = "lilei";
console.log(obj2.name) // "lilei"

// 传递参数-按值传递
// 基本数据类型-互不影响
let count = 10;
function sum(count) { 
  count = 20;
  return count
}
sum(count) // 20
count // 10

// 函数内部重写obj时变量引用的是局部变量，函数执行完毕后立即销毁
let obj = { name: "lilei" }
function changeName(obj) {
  obj.name = "hanmeimei"
  return obj
}
console.log(obj) // {name: "lilei"}
changeName(obj)  // {name: "hanmeimei"}
console.log(obj) // {name: "hanmeimei"} // 全局作用域obj指向同一指针

// 举例子
let obj = { }
function changeName(obj) {
  obj.name = "hanmeimei"
  obj = new Object()
  obj.name = "lilei"
  return obj
}

console.log(obj) // {}
changeName(obj) // {name: "lilei"}
console.log(obj)  // {name: "hanmeimei"}

// 检测类型
const num = 1;
const flag = true;
const name = "lilei";
const a = undefined;
const n = null;

console.log(typeof num); // number
console.log(typeof flag); // boolean
console.log(typeof name); // string
console.log(typeof a); // undefined
console.log(typeof n); // object
console.log(typeof /^(\d+(,\s?\d+)*)$/) // 'function' or 'object'  [[call]]

// 引用类型 instanceof
const person = { name: 'lilei'}
console.log(person instanceof Object) // true
console.log(person instanceof Array) // false
console.log(/^(\d+(,\s?\d+)*)$/ instanceof RegExp) // true
console.log(1 instanceof Object) // 任何基础类型instanceof 都返回false

function type() {}
console.log(type instanceof Function) // true

console.log(/^(\d+(,\s?\d+)*)$/ instanceof Function) // false

// 执行环境及作用域

/**
 * 作用域链-向上搜索作用域链(向下搜索搜索不到)
 *
 * 与块作用域的不同：
 * 1.将变量添加到当前的执行环境中；
 * 2.for循环执行完毕后变量依旧会存在于循环外部的执行环境中
 *
 */
if (true) {
  const color = "blue"
}

console.log(color) // "blue"

for (var i = 0; i < 10; i++) {
  //..
}
console.log(i) // let声明局部变量i，此处取不到ie

// 初始化变量前，一定要先声明，避免异常错误(严格模式抛出异常)

// 向上搜索作用域链（一层层向上查找，搜索到就会自动停止）
var color = 'red'
function getColor() {
  var color = 'blue'
  console.log(color) // 'blue'
}
getColor()

// 垃圾收集：标记清除&引用计数  关键在于采用的是哪种策略

/*
* 标记清除：将所有变量打上标记，“去掉”环境变量中使用的和变量引用的标记，加上准备删除变量的标记，垃圾回收器将标记的变量清除。
* 引用计数：变量被引用次数进行计数，计数为0时清除计数。会引发内存泄漏。
*/
// 循环引用：将变量设置为null（BOM/DOM并不是原生Javascript对象，采用循环引用）
const element = document.getElementById('id')
const obj = new Object()
element.obj = obj
obj.element = element

// 管理内存-将值设置为null释放引用，解除内存
// 全局变量需要在不实用是手动解除引用，解除值的引用不意味着自动回收改制所占用的内存。解除引用的真正作用是让值脱离运行环境，在垃圾回收器下次运行时进行回收
const gloabePerson = createPerson('lilei')
