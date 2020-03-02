// 伪数组(ArrayLike)

// 参考：https://segmentfault.com/a/1190000015285969

let arrLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  'length': 4,
  'name': 'lilei'
}

// 伪数组转化成真数组的方法

// 1.call()&apply() 不会保留索引值以外的其他额外属性

// 转化后的数组中 name属性及值丢失
let arr = [].slice.call(arrLike) // ["a", "b", "c", empty]

let arr1 = Array.prototype.slice.apply(arrLike) // ["a", "b", "c", empty]

let arr2 = Array.prototype.slice.call(arrLike) // ["a", "b", "c", empty]

arr1.push(1) // ["a", "b", "c", empty, 1]

Array.isArray(arr) // true
console.log(arr instanceof Array) // true

// 2.for循环

let arr = []

for (let i = 0; i < arrLike.length; i++) {
  arr.push(arrLike[i])
}

// output: arr  ["a", "b", "c"]

// 3.修改原型指向
// 会保留下伪数组中的所有属性，包括不是索引值的属性
arrLike.__proto__ = Array.prototype;
// output: ["a", "b", "c", empty, name: "lilei"]

Array.isArray(arrLike) // false
console.log(arrLike instanceof Array) // true

arrLike.push(1)
// output: arrLike ["a", "b", "c", empty, 1, name: "lilei"]

arrLike.push('d')
// output: arrLike ["a", "b", "c", empty, 1, 1, "d", name: "lilei"]

// 4.Array.from()
let arr = Array.from(arrLike) // ["a", "b", "c", undefined]

Array.isArray(arr) // true
console.log(arr instanceof Array) // true

arr.push(1) // ["a", "b", "c", undefined, 1]
