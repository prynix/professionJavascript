let person = new Object()
person.name = 'Nicholas'
person.age = 29
person.job = 'Software Engineer'

person.sayName = function () {
  alert(this.name)
}

let person = {
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName: function () {
    alert(this.name)
  }
}

// 数据属性：包含一个数据值的位置。在这个位置可以读取和写入值。
// 属性类型
/**
 * [[Configurable]]: 表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性。默认为true
 * [[Enumerable]]: 表示能否通过for-in循环返回属性。默认为true
 * [[Writable]]: 表示能否修改属性的值
 * [[Value]]: 包含这个属性的数据值，默认值为undefined
*/

// Object.defineProperty()
// 接收三个参数：属性所在的对象、属性的名字和一个描述符对象(属性必须为四个中的一个或多个值)
Object.defineProperty(person, "name", {
  writable: false,
  value: 'Nicholas'
})
console.log(person.name) // 'Nicholas'
person.name = 'lilei'
console.log(person.name) // 'Nicholas'

"use strict"
Object.defineProperty(person, "name", {
  writable: false,
  value: 'Nicholas'
})
console.log(person.name) // Nicholas
person.name = 'lilei' // 抛出error
console.log(person.name)

// configurable设置为false后，一旦属性定义为不可配置的就不能再把它变回可配置了，就会受到限制
Object.defineProperty(person, "name", {
  configurable: false,
  value: 'Nicholas'
})

// 抛出error
Object.defineProperty(person, "name", {
  configurable: true,
})

// 注：在调用Object.defineProperty()方法时，如果不指定，Configurable、Enumerable、Writable默认为false

// 访问器属性：不包含数据值；它们包含一对儿getter和setter函数(两个函数都非必需)，在读取访问器属性时，会调用getter函数，这个函数负责返回有效的值；在写入访问器属性时，会调用setter函数并传入新值，这个函数负责决定如何处理函数
/**
 * 4个特性：
 * [[Configurable]]:...同上
 * [[Enumerable]]:...同上
 * [[Get]]:在读取属性时调用的函数。默认值为undefined
 * [[Set]]:在写入属性时调用的函数。默认值为undefined
 */

// 注：访问器属性不能直接定义，必须使用Object.defineProperty()来定义。
// 使用访问器属性的常见方式，即设置一个属性的值会导致其他属性发生变化

let book = {
  _year: 2020,
  edition: 1
}
Object.defineProperty(book, "year", {
  get: function () {
    return this._year
  },
  set: function (newValue) {
    this._year = newValue
    this.edition++
  }
})

book.year // 2020
book.year = 2021 // book: {_year: 2021, edition: 2}

// 在严格模式下，尝试写入只指定了getter函数的属性抛出错误；类似地，只指定setter函数的属性也不能读，否则在非严格模式下会返回undefined，在严格模式下会抛出错误。

"use strict";
let book = {
  _year: 2020,
  edition: 1
}
Object.defineProperty(book, "year", {
  get: function () {
    return this._year
  }
})

book.year = 2021 // 抛出错误

"use strict";
let book = {
  _year: 2020,
  edition: 1
}
Object.defineProperty(book, "year", {
  set: function (newValue) {
    this._year = newValue
    this.edition++
  }
})

book.year // 非严格模式下 undefined

// 定义多个属性
// Object.defineProperties()
let book = { }
Object.defineProperties(book, {
  _year: {
    writable: true,
    value: 2020
  },
  edition: {
    writable: true,
    value: 1
  },
  year: {
    get: function () {
      return this._year
    },
    set: function (newValue) {
      this._year = newValue
      this.edition++
    }
  }
})

// output: book: {_year: 2020, edition: 1}
book.year = 2021
// output: book: {_year: 2021, edition: 2}

// 读取属性的特性
// 可以取得给定属性的描述符

let descriptor = Object.getOwnPropertyDescriptor(book, '_year')
console.log(descriptor.value) // 2021
console.log(descriptor.configurable) // false

let descriptor = Object.getOwnPropertyDescriptor(book, 'year')
console.log(descriptor.value) // undefined
console.log(typeof descriptor.get) // function