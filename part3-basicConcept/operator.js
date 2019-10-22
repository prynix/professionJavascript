/* 操作符 */
// 一元操作符
var age = 20;
++age;
console.log(age); // 21

// 等价于
var age = 20;
age = age + 1;
console.log(age); // 21

var height = 20;
--height;
console.log(height); // 19

// 等价于
height = height - 1;
console.log(height); // 19

// 副效应  变量的值在语句被求值以前改变
var width = 20;
var doorWidth = --width + 10;
console.log(doorWidth); // 29

var age = 20;
age++;
console.log(age); // 21

var age = 20;
var LiMingAge = age++ + 10;
var HanAge = age + 10;
console.log(LiMingAge); // 30
console.log(HanAge); // 31
console.log(age); // 21

var age = 20;
age--;
console.log(age); // 19

var age = 20;
var LiMingAge = age-- + 10;
var HanAge = age + 10;
console.log(LiMingAge); // 30
console.log(HanAge); // 29
console.log(age); // 19

// 前置递加减和递后置加减 适用于任何值 整数、字符串、布尔值、浮点数值和对象

var a = '1';
var b = '1a';
var c = 'true';
var d = true;
var e = '1.11';
var f = {
  valueOf: function () {
    return 1;
  }
};  // 若f++为NaN 则在toString后再应用valueOf

a++; // 2
b++; // NaN
c++; // NaN
d++; // 2
e++; // 2.1100000000000003
f++; // 2

/* 一元加和减 */
var a = "01";
var b = "1.1";
var c = "z";
var d = "false";
var e = false;
var f = {
  valueOf: function () {
    return -1;
  }
}

a = +a // 1
b = +b // 1.1
c = +c // NaN
d = +d // NaN
e = +e // 0
f = +f // -1

// -a 类似
f = -f // 1

/* 按位非(NOT) */
// 返回数值的反码 本质：操作数的负值减1
var a = 20;
var b = ~a;
console.log(b) // -21

/* 按位与(AND) */
console.log(0 & 0) // 0
console.log(1 & 0) // 0
console.log(0 & 1) // 0
console.log(1 & 1) // 1
console.log(25 & 25) // 25
console.log(25 & 14) // 8

/* 按位或(OR) */
console.log(0 | 0) // 0
console.log(1 | 0) // 1
console.log(0 | 1) // 1
console.log(1 | 1) // 1
console.log(25 | 3) // 27

/* 左移 */
var a = 2
var b = a << 5 // b=64

// 左移操作会以0来填充空位；左移不会影响操作数的符号位

/* 有符号右移 */
var a = 2
var b = a >> 5 // 0 超出为0

var a = 64
var b = a >> 5 // 2

/* 无符号右移 */
var a = 64
var b = a >>> 5 // 2

var a = -64
var b = a >>> 5 // 134217726

// 正数与有符号右移一致 负数无限大
console.log(!false) // true
console.log(!"blue") // false
console.log(!0) // true
console.log(!NaN) // true
console.log(!"") // true
console.log(!undefined) // true
console.log(!12345) // false

// !! 等价于 Boolean()

/* 逻辑与 */
// 短路操作符！！！
console.log({ a: 1 } && 1) // 1 第一个对象 返回第二个操作数
console.log({ a: 1 } && false) // false
console.log(true && { a: 1 }) // {a: 1} 第一个为true的情况下才会返回第二个对象
console.log(false && { a: 1 }) // false
console.log({ a: 1 } && { b: 1 }) // 两个同为对象  返回第二个对象
console.log(null && true) // 有一个为null 返回null
console.log(undefined && true) // 有一个为undefined  返回undefined
console.log(NaN && true) // 有一个为NaN 返回NaN

/* 逻辑或 */
// 短路操作符！！！
console.log({ a: 1 } || 1) // {a: 1} 第一个是对象 返回第一个操作数
console.log(false || 1) // 1
console.log({ a: 1 } || 1) // {a: 1}
console.log({ a: 1 } || { b: 2 }) // {a: 1}
console.log(null || null) // null
console.log(null || 1) // 1
console.log(undefined || undefined) // undefined
console.log(undefined || 1) // 1
console.log(NaN || NaN) // NaN
console.log(NaN || 1) // 1

// 应用变量赋值避免为null、undefined
var b = null;
var a = b || ''; // ''

/* 乘性操作符 */
/* 乘法
1.乘积超过范围，返回Infinity或-Infinity
2.有一个NaN，则为NaN
3.Infinity与0相乘，结果为NaN
4.Infinity与非0数值相乘，结果为Infinity或-Infinity，取决于有符号操作数的符号
5.Infinity与Infinity相乘，结果为Infinity
6.会自动转换为number类型
*/
console.log(NaN * 1)  // NaN
console.log(Infinity * 0) // NaN
console.log(Infinity * 1) // Infinity
console.log(Infinity * -1)  // -Infinity
console.log(Infinity * Infinity)  // Infinity

/* 除法
1.值超过范围，返回Infinity或-Infinity
2.如果有一个操作数是NaN,则结果是NaN
3.Infinity/Infinity=NaN
4.0/0=NaN
5.非0有限数/0=Infinity或-Infinity，取决于被除数
6.Infinity/非0有限数=Infinity或-Infinity,取决于除数
*/
console.log(NaN / 1) // NaN
console.log(1 / NaN) // NaN
console.log(Infinity / Infinity) // NaN
console.log(0 / 0) // NaN
console.log(1 / 0) // Infinity
console.log(-1 / 0) // -Infinity
console.log(Infinity / 1) // Infinity
console.log(Infinity / -1) // -Infinity

/* 求模 返回除得的余数
1.Infinity%非0有限数=NaN
2.非0有限数%0=NaN
3.Infinity%Infinity=NaN
4.非0有限数%Infinity=非0有限数
5.0%任何数 = 0
*/
console.log(Infinity % 1) // NaN
console.log(1 % 0)  // NaN
console.log(Infinity % Infinity) // NaN
console.log(1 % Infinity) // 1
console.log(0 % Infinity) // 0

/* 加性操作符 */
/* 加法
1.有一个NaN，则为NaN
2.Infinity+Infinity=Infinity
3.-Infinity+-Infinity=-Infinity
4.Infinity+-Infinity=NaN
5.+0+0=+0 -0+-0=-0 +0+-0=+0
6.遇到字符串就变连接符
 */
console.log(Infinity + Infinity) // Infinity
console.log(-Infinity + -Infinity) // -Infinity
console.log(Infinity + -Infinity) // NaN
console.log(+0 + 0) // +0
console.log(-0 + -0) // -0
console.log(+0 + -0) // +0
console.log('121' + null) // '121null'
console.log('121' + 10 + 10) // '1211010'
console.log('121' + (10 + 10)) // '12120'

/* 减法
1.有一个NaN，则为NaN
2.Infinity-Infinity=NaN
3.-Infinity--Infinity=NaN
4.-Infinity-Infinity=-Infinity
5.+0-+0=+0 0+-0=-0 -0--0=+0
6.字符串、布尔、null、undefined  转化结果为NaN，则为NaN
7.有一个为对象，则通过valueof转化，若无valueof则用toString转化
 */
console.log(1 - NaN) // NaN
console.log(Infinity - Infinity) // NaN
console.log(-Infinity - -Infinity) // NaN
console.log(-Infinity - Infinity) // -Infinity
console.log(+0 - +0) // 0
console.log(0 + -0) // -0
console.log(-0 - -0) // +0
console.log(5 - null) // 5 null转化为0
console.log(5 - undefined) // NaN
console.log(5 - true) // 4
console.log(5 - '1') // 4

/* 关系操作符
小于(<)、大于(>)、小于等于(<=)大于等于(>=)
1.如均为字符串，则按字符串对应的编码值比较；
2.如果一个是数值则另一个转化为数值比较
3.任何值与NaN、undefined比较为false
4.有一个为对象，则通过valueof转化，若无valueof则用toString转化
5.布尔值比较先转化为数值再比较
*/
console.log('a' > 'b') // false
console.log(1 > NaN) // false
console.log(5 > null) // true
console.log(false < true) // true
console.log('23' < '3') // false

/*相等操作符
 强制转型
 1.布尔值比较先转化为数值再比较
 2.如果一个是数值则另一个转化为数值比较
 3.有一个为对象，则通过valueof转化，若无valueof则用toString转化
 4.null和undefined是相等的, null和undefined比较前不可转化
 5.有一个为NaN，则为false，NaN == NaN 为false， NaN != NaN 为true
 6.对象指向同一个为true，否则为false
*/
console.log(false == true) // false
console.log(5 > null) // true
console.log(null == undefined) // true
console.log(NaN == NaN) // false
console.log(NaN != NaN) // true
const a = {a: 1}, b = {a: 1};
a == b // false

/*全等不全等操作符
全等:两操作数未经转换后相等
*/
console.log('5' === 5) // false
console.log(null === undefined) // false

/*条件操作符
*/
const a = 10 > 1 ? 10 : 1

/*赋值操作符
*/
let a = a + 1
a += 1

/*逗号操作符
*/
let a = 1, b = 2;
let a = (1, 2, 3, 4) // 赋值时有逗号，取最后一个