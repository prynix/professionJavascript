// navigator

navigator.appCodeName
// "Mozilla"

navigator.appMinorVersion
// undefined

navigator.appName
// "Netscape"

navigator.appVersion
// "5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"

navigator.buildID
// undefined

navigator.cookieEnabled
// true

// navigator.cpuClass
// undefined

navigator.javaEnabled
// ƒ javaEnabled() { [native code] }

navigator.language
// "zh-CN"

navigator.mimeTypes
// MimeTypeArray {0: MimeType, 1: MimeType, 2: MimeType, 3: MimeType, application/pdf: MimeType, application/x-google-chrome-pdf: MimeType, application/x-nacl: MimeType, application/x-pnacl: MimeType, length: 4}length: 40: MimeType {type: "application/pdf", suffixes: "pdf", description: "", enabledPlugin: Plugin}1: MimeType {type: "application/x-google-chrome-pdf", suffixes: "pdf", description: "Portable Document Format", enabledPlugin: Plugin}2: MimeType {type: "application/x-nacl", suffixes: "", description: "Native Client Executable", enabledPlugin: Plugin}3: MimeType {type: "application/x-pnacl", suffixes: "", description: "Portable Native Client Executable", enabledPlugin: Plugin}application/pdf: MimeType {type: "application/pdf", suffixes: "pdf", description: "", enabledPlugin: Plugin}application/x-google-chrome-pdf: MimeType {type: "application/x-google-chrome-pdf", suffixes: "pdf", description: "Portable Document Format", enabledPlugin: Plugin}application/x-nacl: MimeType {type: "application/x-nacl", suffixes: "", description: "Native Client Executable", enabledPlugin: Plugin}application/x-pnacl: MimeType {type: "application/x-pnacl", suffixes: "", description: "Portable Native Client Executable", enabledPlugin: Plugin}__proto__: MimeTypeArray

navigator.onLine
// true

navigator.opsProfile
// undefined

navigator.oscpu
// undefined

navigator.platform
// "MacIntel"

navigator.plugins
// PluginArray{}

navigator.preference
// undefined

navigator.product
// "Gecko"

navigator.productSub
// "20030107"

navigator.registerProtocolHandler

navigator.userAgent
// "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"

navigator.vendor
// "Google Inc."

navigator.vendorSub
// ""

//3.1 检测插件

plugins

function hasPlugins(name) {
  name = name.toLowerCase()
  for (let i = 0; i < navigator.plugins.length; i++) {
    if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
      return true
    }
  }

  return false
}

hasPlugins('Flash') // false
hasPlugins('Chrome PDF Plugin') // true

// IE new ActiveXObject(COM标识符)

// 针对每个插件分别创建检测函数

//3.2 注册处理程序

navigator.registerProtocolHandler('mailto', 'http://www.baidu.com?cmd=%s', 'Some Mail Client')

navigator.registerContentHandler('application/rss+xml', 'http://www.baidu.com', 'Some Reader')
