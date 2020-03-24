// 怪癖检测
// 想要直到浏览器存在什么缺陷

// [[Enumerable]]标记为false的某个原型属性同名，那么该实例属性不会出现在for-in循环当中
var hasDontEnumQuirk = function() {
  var o = { toString : function() {} }
  for (var prop in o) {
    console.log(prop)
    if (prop == "toString") {
      return false
    }
  }
  return true
}()

// 会枚举被隐藏的属性
var hasEnumShadowsQuirk = function() {
  var o = { toString : function() {} }
  var count = 0
  for (var prop in o) {
    if (prop == "toString") {
      count++
    }
  }
  return (count>1)
}()

// 对程序有直接影响的“怪癖”，最好在脚本一开始就执行此类检测