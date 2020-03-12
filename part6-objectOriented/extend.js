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



