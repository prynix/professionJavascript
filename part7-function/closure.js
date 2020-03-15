 // 闭包

 // !!!闭包会引用包含函数的整个活动对象

 // 闭包是指有权访问另一个函数作用域中的变量的函数。

 function createComparisonFunction(propertyName) {
   
   return function(object1, object2) {
      let value1 = object1[propertyName]
      let value2 = object2[propertyName]
      
      if (value1 < value2) {
        return -1
      } else if (value1 > value2) {
        return 1
      } else {
        return 0
      }
   }
 }

 function compare(value1, value2) {
  if (value1 < value2) {
    return -1
  } else if (value1 > value2) {
    return 1
  } else {
    return 0
  }
 }

 // 对compare的执行环境而言，其作用域中包含两个变量对象：本地活动对象和全局变量对象

 // 作用域链本质上是一个指向变量对象的指针，它只引用但不实际包含变量对象。

 // 一般来讲，当函数执行完毕后，局部活动对象就会被销毁，内存中仅保存全局作用域（闭包不会被释放）

 let compare = createComparisonFunction('name')
 let result = compare({name: 'Nicholas'}, {name: 'Grey'})
 
 result = 1

 // createComparisonFunction 执行完毕后其活动对象也不会被销毁，因为匿名函数的作用域链仍然在引用这个活动对象

 // 解除匿名函数的引用（以便释放内存）
 compare = null

 // 直到匿名函数被销毁后，createComparisonFunction的活动对象才会被销毁

 // 注：闭包会携带包含它的函数的作用域，因此它会比其他函数占用更多的内存。 
 
 //2.1 闭包与变量

 function createFunctions() {
   var result = new Array()

   for (var i=0;i<10;i++) {
      result[i] = function() {
        return i
      }
   }

   return result;
 }

 createFunctions()[1]() // 10
 createFunctions()[2]() // 10

// 注：每个函数的作用域链中都保存着createFunctions()函数的活动对象，所以它们引用的都是同一个变量i

function createFunctions() {
  var result = new Array()

  for (var i=0;i<10;i++) {
     result[i] = function(num) {
        return function() {
          return num
        }
     }(i)
  }

  return result;
}

createFunctions()[1]() // 1
createFunctions()[2]() // 2

// 注：由于函数参数是按值传递的，所以就会将变量i的当前值复制给参数num
// 注：将var换成let作用域为局部作用域，作用域链中不再保存createFunctions()函数的活动对象？？

//2.2 关于this对象

// this对象是在运行时基于函数的执行环境绑定的
// 在全局函数中，this等于window，而当函数被作为某个对象的方法调用时，this等于那个对象。

var name = 'The window'
var obj = {
  name: 'My Object',
  getNameFunc: function() {
    return function() {
      return this.name
    }
  }
}

// 非严格模式下
obj.getNameFunc()() // "The window"

var name = 'The window'
var obj = {
  name: 'My Object',
  getNameFunc: function() {
    var _self = this
    return function() {
      return _self.name
    }
  }
}

obj.getNameFunc()() // "My Object"

// 注：this/arguments存在同样的问题

var name = 'The window'
var obj = {
  name: 'My Object',
  getNameFunc: function() {
    return this.name
  }
}

obj.getNameFunc() // "My Object"
(obj.getNameFunc)() // "My Object"
(obj.getNameFunc = obj.getNameFunc)() // "The window"

// ？？ 赋值过程this的值不能得到维持
// ？？ let的深入理解及let与闭包

//2.3 内存泄漏

function assignHandler() {
  var element = document.getElementById("someElement")
  element.onclick = function() {
    console.log(element.id)
  }
}

// 改写为
function assignHandler() {
  var element = document.getElementById("someElement")
  var id = element.id

  element.onclick = function() {
    console.log(id)
  }

  element = null
}

//3 模仿块级作用域

function outputNumbers() {
  for(var i=0;i<3;i++) {
    console.log(i) // 0,1,2
  }
  var i; // 重新声明变量
  console.log(i) // 3
}

// 用作块级作用域的匿名函数语法：
(function() {
  // 块级作用域：在匿名函数中定义的任何变量，都会在执行结束时被销毁。
})()

function outputNumbers() {
  (function() {
    for(var i=0;i<3;i++) {
      console.log(i) // 0,1,2
    }
  })()

  console.log(i) // error
}

// 应用：在全局作用域中被用在函数外部；从而限制向全局作用域中添加过多的变量和函数
// 可以减少闭包占用的内存问题，因为没有指向匿名函数的引用。只要函数执行完毕，就可以立即销毁其作用域链了。

//4 私有变量

// 闭包可以访问私有变量

// 把有权访问私有变量和私有函数的公有方法称为特权方法

// 有两种方法

// 1 在构造函数中定义特权方法

function MyObject() {
  var privateVariable = 10;

  function privateFunction() {
    return false
  }

  this.publicMethod = function() {
    privateVariable++
    return privateFunction()
  }
}

// 利用私有和特权成员，可以隐藏那些不应该被直接修改的数据
function Person(name) {
  this.getName = function() {
    return name
  }

  this.setName = function(value) {
    name = value
  }
}

var person = new Person('lilei')
person.getName() // "lilei"
person.setName('Grey')
person.getName() // "Grey"

//4.1 静态私有变量

(function() {
  var privateVariable = 10;

  function privateFunction() {
    return false
  }

  MyObject = function() {

  }

  MyObject.prototype.publicMethod = function() {
    privateVariable++;
    return privateFunction();
  }
})()

//注：初始化未经声明的变量，总是会创建一个全局变量(严格模式下 给未经声明的变量赋值会导致错误)

(function() {
  var name = ''
  Person = function(value) {
    name = value
  }

  Person.prototype.getName = function() {
    return name
  }

  Person.prototype.setName = function (value) {
    name = value
  }
})()

var person1 = new Person('lilei')
console.log(person1.getName()) // "lilei"
person1.setName('Grey')
console.log(person1.getName()) // "Grey"

var person2 = new Person('mic')
console.log(person1.getName()) // "mic"
console.log(person2.getName()) // "mic"

// 注：每个实例都没有自己的私有变量

//4.2 模块模式

// 模块模式为单例创建私有变量和特权方法
var singleton = {
  name: value,
  method: function () {

  }
}

var singleton = function() {
  var privateVariable = 10

  function privateFunction() {
    return false
  }

  return {
    publicProperty: true,
  
    publicMethod: function() {
      privateVariable++
      return privateFunction()
    }
  }
}()

// 这种模式在需要对单例进行某些初始化，同时又需要维护其私有变量时时非常有用的

// 用单例管理应用程序级信息

var application = function() {
  var components = new Array()

  components.push(new BaseComponent())

  return {
    getComponentCount: function() {
      return components.length
    },

    registerComponent: function(component) {
      if (typeof component == "object") {
        components.push(component)
      }
    }
  }
}()

//4.3 增强的模块模式

//适合哪些单例必须是某种类型的实例，同时还必须添加某些属性和/或方法对其加以增强的情况

var application = function() {
  var components = new Array()

  components.push(new BaseComponent())

  var app = new BaseComponent()

  app.getComponentCount =  function() {
    return components.length
  }
  
  app.registerComponent =  function(component) {
    if (typeof component == "object") {
      components.push(component)
    }
  }

  return app
}()