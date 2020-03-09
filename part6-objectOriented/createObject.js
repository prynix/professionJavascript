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
function Person(name, age, job) {
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
function sayName() {
  console.log(this.name)
}

let person1 = new Person('Nicholas', 21, 'Software Engineer')
person1.sayName()

// 3.原型模式
// 使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法
function Person() {
  Person.prototype.name = 'Nicholas';
  Person.prototype.age = 29;
  Person.prototype.job = 'Software Engineer';
  Person.prototype.sayName = function () {
    console.log(this.name)
  }
}

let person1 = new Person()
person1.sayName() // "Nicholas"

let person2 = new Person()
person2.sayName() // "Nicholas"

console.log(person1.sayName === person2.sayName) // true

//1.理解原型对象
/**
 * 1.创建函数时为该函数创建一个prototype属性，prototype指向该函数的原型对象；
 * 2.protptype会自动获得constructor属性，这个属性是一个指向prototype属性所在函数的指针；
 * 3.自定义构造函数其原型对象默认只会取得constructor属性，其他方法都继承自object；
 * 4.当调用构造函数创建一个新实例后，该实例内部将包含一个指针[[Prototype]]，指向构造函数的原型对象；
 *
 * 注:这个连接存在于实例与构造函数的原型对象之间，而不是实例与构造函数之间。
 */

console.log(Person.prototype.constructor === Person) // true

// isPrototypeOf()
console.log(Person.prototype.isPrototypeOf(person1)) // true
console.log(Person.prototype.isPrototypeOf(person2)) // true

// es5新增 Object.getPrototypeOf() 返回[[Prototype]]的值
console.log(Object.getPrototypeOf(person1) === Person.prototype) // true
console.log(Object.getPrototypeOf(person2) === Person.prototype) // true

// 当为对象实例添加一个属性时，这个属性就会屏蔽原型对象中保存的同名属性，delete操作符则可以完全删除实例属性
person1.name = 'Grey'
console.log(person1.name) // "Grey"
console.log(person2.name) // "Nicholas"

delete person1.name
console.log(person1.name) // "Nicholas"

// hasOwnProperty 检测一个属性是否存在于实例中
person1.name = 'Grey'
console.log(person1.hasOwnProperty("name")) // true
console.log(person2.hasOwnProperty("name")) // false

// 原型与in操作符
// 单独使用/在for-in循环中使用

// 单独使用中in操作符会在通过对象能够访问给定属性时返回true，无论该属性存在于实例中还是原型中
console.log("name" in person1) // true
console.log("name" in person2) // true

// 判断是存在于原型中还是实例中
function hasPrototypeProperty(object, name) {
  return !object.hasOwnProperty(name) && (name in object)
}

person1.name = 'Grey'
console.log(hasPrototypeProperty(person1, 'name')) // false
console.log(hasPrototypeProperty(person2, "name")) // true

// for-in返回的是所有能够通过对象访问的，可枚举的属性。其中既包括存在于实例中的属性，也包括存在于原型中的属性
Object.defineProperty(person1, "name", {
  enumerable: false
})
for (let key in person1) {
  console.log(key)
}
// age job sayName

// es5新增 Object.keys()
Object.keys(Person.prototype) //  ["name", "age", "job", "sayName"]
person1.age = 28
Object.keys(person1) // ["age"]

// Object.getOwnPropertyNames() 无论是否可枚举
Object.getOwnPropertyNames(Person.prototype) // ["constructor", "name", "age", "job", "sayName"]

//3.更简单的原型方法
function Person() { }
Person.prototype = {
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName: function () {
    console.log(this.name)
  }
}

// constructor属性不再指向Person
const person1 = new Person()
console.log(person1 instanceof Object) // true
console.log(person1 instanceof Person) // true
console.log(person1.constructor === Object) // true
console.log(person1.constructor === Person) // false


