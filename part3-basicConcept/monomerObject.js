// Object/Array/String
// Global
encodeURI()
encodeURIComponent()
decodeURI()
decodeURIComponent()

eval()

// window
var color = "red"
function getColor() {
  console.log(color)
}

window.color // "red"
window.getColor() // "red"

// 获取Global
var Global = function () {
  return this
}

// Math
let max = Math.max(3, 15, 20) // 20
let min = Math.min(3, 15, 20) // 3

let values = [3, 6, 9, 10]
let max = Math.max.apply(Math, values) // 10

let num = 25.9
console.log(Math.ceil(num)) // 26
console.log(Math.floor(num)) // 25
console.log(Math.round(num)) // 26

// 大于等于0小于1
// 1~10
console.log(Math.floor(Math.random()*10 + 1))
