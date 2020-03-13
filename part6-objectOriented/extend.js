// OO实现继承的两种方式：接口继承/实现继承
/**
 * 接口继承：只继承方法签名
 * 实现继承：继承实际的方法
 */

 // 1原型链

 // 对象的原型对象等于另一个实例
 function SubType () {
    this.type = 'sub'
 }

 SubType.prototype.getType = function () {
   return this.type
 }

 function SubTType () {
    this.name = ''
 }

 SubTType.prototype = new SubType() // 重写原型对象

 SubTType.prototype.setName = function (name) {
    this.name = name
 }

 const type = new SubTType()
 type.setName('2') // name: 2
 type.getType() // 'sub'

 type.constructor === SubType // true

 SubType.prototype.isPrototypeOf(type) // true

 SubTType.prototype.isPrototypeOf(type) // true

 SubTType.prototype.constructor === SubType // true

 // 本质：B的原型对象等于A的实例，即B的原型对象指向A的实例，A的实例指针指向A构造函数的原型对象，即B的原型对象拥有指针指向A构造函数的原型对象

 //1.1 别忘记默认的原型-- Object

 //1.2 确定原型和实例的关系
 // instanceof/isPrototypeOf()
console.log(type instanceof SubType) // true
console.log(type instanceof SubTType) // true
console.log(type instanceof Object) // true

Object.prototype.isPrototypeOf(type) // true
SubType.prototype.isPrototypeOf(type) // true
SubTType.prototype.isPrototypeOf(type) // true

//1.3 谨慎的定义方法
/**
 * 1.给原型添加方法的代码要放在替换原型语句之后
 * 2.不能使用对象字面量创建原型方法
*/

//1.4 原型链的问题
// 引用类型值做属性，原型对象属性共享，改变一个导致都改变

// 2借用构造函数
// 在子类构造函数内部调用超类型构造函数
function SubType () {
  this.type = 'sub'
  this.getType = function () {
    return this.type
  }
}

function SubTType () {
  this.name = ''
  SubType.call(this) // 可方便传参
}

SubTType.prototype.setName = function (name) {
  this.name = name
}

const type = new SubTType()
type.setName('2') // name: "2", type: "sub
type.getType() // 'sub'

// 问题：1.方法在构造函数中定义，无法函数复用 2在超类的原型中定义的方法对子类而言也是不可见的

// 3组合继承
// 使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承
function SubType () {
  this.type = 'sub'
  this.color = ['red', 'blue']
}

SubType.prototype.getType = function () {
  return this.type
}

function SubTType () {
  this.name = ''
  SubType.call(this) // 第二次调用
}

SubTType.prototype = new SubType() // 第一次调用

SubTType.prototype.setName = function (name) {
  this.name = name
}

const type = new SubTType()
type.setName('2') // "2"
type.color.push('yellow') // color: ["red", "blue", "yellow"]
type.getType() // "sub"

const type1 = new SubTType() 
type1.color // ["red", "blue"] 遮蔽性
// 问题：调用两次超类的构造函数

// 4原型式继承
// 思路：借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型
function object(o) { // 对传入的对象做浅复制
  function F() {}
  F.prototype = o
  return new F()
}

let person = {
  name: 'a',
  friends: ['b', 'c']
}

let person1 = object(person)
person1.name = 'aa'
person1.friends.push('d')

let person2 = object(person)
person2.name = 'aaa'
person2.friends // ["b", "c", "d"]

// 引用类型值的属性始终会共享相应的值

// ES5优化 Object.create()
// 参数：一个用作新对象原型的对象和（可选的）一个为新对象定义额外属性的对象
let person = {
  name: 'a',
  friends: ['b', 'c']
}

let person1 = Object.create(person)
person1.name = 'aa'
person1.friends.push('d')

let person2 = Object.create(person)
person2.name = 'aaa'
person2.friends

// 寄生式继承
// 思路：创建一个仅用于封装继承过程的函数，个函数在内部以某种方式来增强对象，最后返回对象
function createPerson (func) {
  let clone = Object.create(func) // 也可为object() 任何返回对象的函数都可
  clone.sayHi = function () {
    console.log('hi')
  }
  return clone
}

let person = {
  name: 'a',
  friends: ['b', 'c']
}

let newPerson = createPerson(person)
newPerson.sayHi() // 'hi'

// 问题：不能函数复用降低效率

// 寄生组合式继承
// 借助构造函数来继承属性，通过原型链混成形式来继承方法

function inheritPrototype (subType, superType) {
  const prototype = Object.create(superType.prototype)
  prototype.constructor = subType
  subType.prototype = prototype
}

function SubType () {
  this.type = 'sub'
  this.color = ['red', 'blue']
}

SubType.prototype.getType = function () {
  return this.type
}

function SubTType () {
  this.name = ''
  SubType.call(this)
}

inheritPrototype(SubTType, SubType)

SubTType.prototype.setName = function (name) {
  this.name = name
}

const type = new SubTType()
type.setName('2') // "2"
type.color.push('yellow') // color: ["red", "blue", "yellow"]
type.getType() // 'sub'
