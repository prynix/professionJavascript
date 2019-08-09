/* 数据类型 */
var a = null;
var b = undefined;
var c = {};
var d = '';
var e = false;
var f = 1;
var g = function () { };

console.log(typeof a);  // object  null-空的对象引用
console.log(typeof b);  // undefined  未初始化和未声明的变量值为undefined；
console.log(typeof c);  // object
console.log(typeof d);  // string
console.log(typeof e);  // boolean
console.log(typeof f);  // number
console.log(typeof g);  // function

console.log(null == undefined) // true undefined值派生自null

// 定义一个变量将来保存对象，最好的方式将初始值设为null

/* Boolean */
// 转型函数Boolean  (流程控制语句会自动执行Boolean转换)
// string
var a = '';
var b = '12313';

console.log(Boolean(a)); // false
console.log(Boolean(b)); // true

// number
var a = 0;
var b = NaN;
var c = 1212;

console.log(Boolean(a)); // false
console.log(Boolean(b)); // false
console.log(Boolean(c)); // true

// object
var a = null;
var b = { a: 1 };

console.log(Boolean(a)); // false
console.log(Boolean(b)); // true

// underfined
var a = undefined;

console.log(Boolean(a));  // false

/* Number */

// 八进制字面值第一位必须是0，然后是八进制数字序列（0-7）；超出范围前导0被忽略，后面值当十进制解析
var octalNum = 070;

console.log(octalNum); // 56

// 十六进制字面量前两位必须是0x，后跟任何十六进制数字（0-9 及 A-F）,字母大小写均可

var hexNum = 0xA;

console.log(hexNum); // 10

// 保存浮点数值的内存空间是整数值的两倍；浮点数值的最高精度是17位小数；运算时精确度很低；

var sum = Number.MAX_VALUE + Number.MAX_VALUE
console.log(-sum)  // -Infinity
console.log(sum) // Infinity

// isFinite()位于最小和最大数值之间返回true
console.log(isFinite(sum)) // false

Number.MAX_VALUE  // 最大值
Number.MIN_VALUE  // 最小值
Number.NEGATIVE_INFINITY // -Infinity
Number.POSITIVE_INFINITY // Infinity

NaN
/*
 1.任何数值除以0会返回NaN
 2.任何涉及NaN操作都会返回NaN
 3.NaN与任何值都不相等 
 */
console.log(NaN == NaN) // false

isNaN()  // 确定参数"不是数值",不是返回true，是或者可转换为数值的返回false

console.log(isNaN(NaN))  // true
console.log(isNaN('ada'))  // true
console.log(isNaN('10'))  // false 可转换
console.log(isNaN(false))  // false 可转换
console.log(isNaN(10))  // false

// 其他类型转换为数值 Number() parseInt() parseFloat()
/* Number() */
console.log(Number(true)) // 1
console.log(Number(null)) // 0
console.log(Number({})) // NaN
console.log(Number(NaN)) // NaN
console.log(Number(undefined)) // NaN

// 浮点数 十六进制和八进制都会转换成十进制
console.log(Number(111)) // 111
console.log(Number(1.11)) // 1.11
console.log(Number(0001)) // 1
console.log(Number(0xA)) // 10
console.log(Number(070)) // 56

console.log(Number('')) // 0
console.log(Number('00001')) // 1
console.log(Number('0xA')) // 10 十六进制转化为十进制
console.log(Number('070')) // 70 忽略前导0 es3和es5存在分歧
console.log(Number('0')) // 0
console.log(Number('00xA')) // NaN
console.log(Number('aaa')) // NaN

/* parseInt() */
// 字符串处理的增强版
console.log(parseInt(true)) // NaN
console.log(parseInt(null)) // NaN
console.log(parseInt({})) // NaN
console.log(parseInt(NaN)) // NaN
console.log(parseInt(undefined)) // NaN

console.log(parseInt(1)) // 1
console.log(parseInt(1.11)) // 1 忽略小数点
console.log(parseInt(070)) // 56
console.log(parseInt(0xA)) // 10

console.log(parseInt('')) // NaN
console.log(parseInt('1234blue')) // 1234
console.log(parseInt('070')) // 70
console.log(parseInt('0xA')) // 10
console.log(parseInt('1.11')) // 1

console.log(parseInt('070', 8)) // 56
console.log(parseInt('70', 8)) // 56 八进制可以不带前导O
console.log(parseInt('0xA', 16)) // 10
console.log(parseInt('AF', 16)) // 176 十六进制可以不带"0x"

console.log(parseInt('10', 2)) // 2
console.log(parseInt('10', 8)) // 8
console.log(parseInt('10', 10)) // 10
console.log(parseInt('10', 16)) // 16

/* parseFloat() */
console.log(parseFloat(1)) // 1
console.log(parseFloat(1.11)) // 1.11
console.log(parseFloat(070)) // 56
console.log(parseFloat(0xA)) // 10

// 第一个小数点有效 前导0无效
console.log(parseFloat('')) // NaN
console.log(parseFloat('1234blue')) // 1234
console.log(parseFloat('070')) // 70
console.log(parseFloat('0xA')) // 0
console.log(parseFloat('1.11')) // 1.11
console.log(parseFloat('1.11.11')) // 1.11

/* String */
// 转化为字符串 toString()  String()
console.log((123).toString()) // '123'
console.log((true).toString()) // 'true'
console.log((10).toString(2)) // 1010  二进制字符串转化
console.log((10).toString(8)) // 12  八进制字符串转化
console.log((10).toString(10)) // 10 十进制字符串转化 默认
console.log((10).toString(16)) // a 十六进制字符串转化

// null和undefined没有toString方法，需使用String()方法转化
console.log(String(null)) // 'null'
console.log(String(undefined))  // 'undefined'

/* Objext */
/* 
1.constructor
2.hasOwnProperty(propertyName) 检查给定的属性再当前对象实例中
3.isPropertyOf(object) 传入对象是否是当前对象的原型
4.propertyIsEnumerable(propertyName) 检查给定的属性是否可枚举
5.toLocalString() 与执行环境的地区对应
6.toString() 
7.valueOf() 返回对象的字符串、数值或布尔值表示
 */

// toLocalString()、toString()、valueOf() 三者对比 https://www.cnblogs.com/niulina/p/5699031.html
var obj = { a: 1 }
console.log(obj.constructor) // ƒ Object() { [native code] }
console.log(obj.hasOwnProperty("a")) // true

var p = { x: 1 }; // 定义一个原型对象
var o = Object.create(p); // 使用这个原型创建一个对象
p.isPrototypeOf(o); // true：o继承p
Object.prototype.isPrototypeOf(p); // true p继承自Object.prototype
console.log(obj.propertyIsEnumerable("a")) // true

var date = new Date();
console.log(date.toLocaleString()) // 2019/8/1 上午12:13:50
console.log(obj.toLocaleString()) // [object Object]
console.log(obj.toString()) // [object Object]
console.log(obj.valueOf()) // {a: 1}
