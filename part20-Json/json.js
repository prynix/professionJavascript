// 可以表示的三种类型： 

// 1.简单值 字符串/数值/布尔值/null 不支持undefined
// 2.对象 
// 3.数组

// JavaScript字符串与JSON字符串最大区别在于，JSON字符串必须使用双引号

JSON.stringify()

let book = {
  "title": "test",
  toJSON: function() {
    return this.title
  }
}

console.log(JSON.stringify(book)) // ""test""

let book = {
  "title": "test"
}

console.log(JSON.stringify(book)) // "{"title":"test"}"

console.log(JSON.stringify(book, function(key, value){
  switch(key) {
    default:
      return 'switch value'
  } 
})) // ""switch value""

// 顺序：先toJSON 再第二个参数 再序列化 再第三个参数格式化缩进（缩进不超过10个字符）

JSON.parse()