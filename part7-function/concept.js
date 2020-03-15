// 函数表达式
// 定义函数的两种方式：1函数声明 2函数表达式

function test() {

}

// firefox/chrome/safari/opera
console.log(test.name) // test

// 函数声明提升
sayHello() // 'hello'
function sayHello() {
  console.log("hello")
}

// 函数表达式
sayHi() // error

let sayHi = function() {
  console.log("hi")
}
sayHi() // 'hi'

// 不能用下面的写法
if (condition) {
  function sayHello() {
    console.log("hello")
  }
} else {
  function sayHi() {
    console.log("hi")
  }
}
