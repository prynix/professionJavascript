/* 数据类型 */
var a = null;
var b = undefined;
var c = {};
var d = '';
var e = false;
var f = 1;
var g = function (){};

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
var b = {a: 1};

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



