// 能力检测：识别浏览器的能力

// 基本模式
if (object.propertyInQuestion) {
  // 使用 object.propertyInQuestion
}

function getElement (id) {
  if (document.getElementById) {
    return document.getElementById(id)
  } else if (document.all) {
    return document.all(id)
  } else {
    throw new Error('no way')
  }
}

getElement ('test') // null

/**
 * 两个重要概念：
 * 1 先检测达成目的的最常用的特性
 * 2 必须测试实际要用到的特性
 */

 //1.1 更可靠的能力检测

 let xhr = new ActiveXObject('Microsoft.XMLHttp')

 function isHostMethod(object, property) {
   let t = typeof object[property]
   return t == 'function' || (!!(t == object && object[property]) || t == 'unknown')
 }

 isHostMethod(xhr, 'open') // true
 isHostMethod(xhr, 'foo') // false
 isHostMethod(document, 'getElementById') // true

 //1.2 能力检测，不是浏览器检测

 // 根据浏览器不同将能力组合起来是更可取的方式

 // 确定浏览是否支持Netscape风格插件
 let hasNSPlugins = !!(navigator.plugins && navigator.plugins.length) // true

 // 确定DOM1
 let hasDOM1 = !!(document.getElementById && document.createElement && document.getElementsByTagName) // true

 // 应该将能力检测作为确定下一步解决方案的依据，而不是用它来判断用户使用的是什么浏览器
