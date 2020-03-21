// 用户代理检测

// 电子欺骗

// 识别呈现引擎

var client = function() {
  var engine = {
    ie: 0,
    gecko: 0,
    webkit: 0,
    khtml: 0,
    opera: 0,
    ver: null
  }

  return {
    engine: engine
  }
}