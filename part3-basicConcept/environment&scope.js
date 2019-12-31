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


