// 字面量或构造函数

// 工厂模式
// 没有解决对象识别的问题
function createPerson(name, age, job) {
  let o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function () {
    console.log(this.name)
  }

  return o
}

let person1 = createPerson('Nicholas', 21, 'Software Engineer')
// {name: "Nicholas", age: 21, job: "Software Engineer", sayName: f ()}
let person2 = createPerson('Greg', 22)
// {name: "Greg", age: 22, job: undefined, sayName: f ()}

// 构造函数模式
// 创建自定义的构造函数
function Person (name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function () {
    console.log(this.name)
  }
}

let person1 = new Person('Nicholas', 21, 'Software Engineer')
// {name: "Nicholas", age: 21, job: "Software Engineer", sayName: f ()}
let person2 = new Person('Greg', 22)
// {name: "Greg", age: 22, job: undefined, sayName: f ()}

// 注：1.构造函数始终都应该以一个大写字母开头；2.创建构造函数的新实例，必须使用new操作符

/**
 * new一个对象的过程：
 * 1.创建一个新对象；
 * 2.将构造函数的作用域赋值给新对象（构造函数的作用域this指向新对象）；
 * 3.执行构造函数中的代码（为新对象增加属性）；
 * 4.返回新对象；
 */

// person1和person2为不同实例，拥有相同的构造函数
console.log(person1.constructor === Person) // true
console.log(person2.constructor === Person) // true
console.log(person1.constructor === person2.constructor) // true

// 创建自定义构造函数以为这将来可以将它的实例标识为一种特定类型

// 检测对象类型instanceof
console.log(person1 instanceof Person) // true
console.log(person1 instanceof Object) // true
console.log(person2 instanceof Person) // true
console.log(person2 instanceof Object) // true

// 以这种方式定义的构造函数定义在Global中，浏览器在windows中

window.Person // f () {...}
