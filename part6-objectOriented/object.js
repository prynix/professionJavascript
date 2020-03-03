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

// 属性类型
/**
 * [[Configurable]]: 表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性。默认为true
 * [[Enumerable]]: 表示能否通过for-in循环返回属性。默认为true
 * [[Writable]]: 表示能否修改属性的值
 * [[Value]]: 包含这个属性的数据值，默认值为undefined
*/

// Object.defineProperty()

