try {
  window.someNonexistentFunction()
} catch {
  console.log("An error happned!")
}

// "An error happned!"

try {
  window.someNonexistentFunction()
} catch (error) {
  console.log(error.message)
}

// "window.someNonexistentFunction is not a function"

function testFinally() {
  try {
    return 2
  } catch (error) {
    return 1
  } finally {
    return 0
  }
}

testFinally() // 0

// 注：只要代码中包含finally子句，无论是try还是catch语句块中的return语句都将被忽略

// 1.EvalError 在使用eval()函数发出异常时被抛出
new eval()

// 2.RangeError 类型的错误会在数值超出相应范围时而触发
new Array(-20) // Uncaught RangeError: Invalid array length

// 3.ReferenceError 找不到对象的情况下
let obj = x // Uncaught ReferenceError: x is not defined

// 4.SyntaxError 把语法错误的Javascript字符串传如eval()时，其他情况下会导致JavaScript代码立即停止执行
eval("a++b") // Uncaught SyntaxError: Unexpected identifier

// 5.TypeError 在变量中保存着意外的类型时，或者访问不存在的方法时，都会导致这种错误
let o = new 10 // Uncaught TypeError: 10 is not a constructor

// 6.URIError 使用encodeURI/decodeURI URI格式不正确

try {
  someFunction()
} catch (error) {
  if (error instanceof TypeError) {

  } else if (error instanceof ReferenceError) {

  } else {

  }
}

// 抛出错误 throw
throw 12345;

// 错误事件
// window.onerror

let image = new Image()

image.addEventListener("load", function(event){
  console.log("image loaded!")
})

image.addEventListener("error", function(event){
  console.log("image not loaded!")
})

image.src = 'text.gif' // image not loaded!

// 常见的错误类型：1.类型转换错误 2.数据类型错误 3.通信错误

// 区分致命错误和非致命错误

// 把错误通过image记录到服务器


