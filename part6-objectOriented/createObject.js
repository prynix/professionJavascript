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

// 1.把构造函数当作函数
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function () {
    console.log(this.name)
  }
}

let person1 = new Person('Nicholas', 21, 'Software Engineer')
person1.sayName() // "Nicholas"

// 当全局作用域中调用一个函数时，this对象总是指向Global对象
Person('Nicholas', 21, 'Software Engineer')
window.sayName() // "Nicholas"

let o = new Object()
Person.call(o, 'Nicholas', 21, 'Software Engineer')
o.sayName() // "Nicholas"

// 2.构造函数的问题
console.log(person1.sayName === person2.sayName) // false

// 构造函数创建函数，会导致不同的作用域链和标识符解析，但创建Function新实例的机制是相同的
// 如下 定义全局函数可以解决，但缺点是对象要定义很多方法就会定义很多全局函数，自定义的引用类型就无封装性可言，此问题可以通过原型模式来解决

function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = sayName
}

// 全局函数
function sayName () {
  console.log(this.name)
}

let person1 = new Person('Nicholas', 21, 'Software Engineer')
person1.sayName()

// 原型模式

