/*if语句
建议用代码块
condition 自动用Boolean()转换 
*/
if(1){}else{}

/*do=while语句
先执行后判断
 */
let i = 0; 
do {
  i++;
  alert(i); // 1,2,3,4
} while(i < 4); 

/*while
先判断后执行
*/
let i = 0;
while( i<3 ) {
  i++;
  alert(i) // 1,2,3
}

/*for
先判断后执行
*/
for(;;) {
 //无限循环
}

// for循环转换为while
let i = 0;
for(;i < 3;) {
  console.log(i)
  i++
}

/*label
代码中添加标签以使将来使用
通常和for语句配合使用
*/
end:
for (let j=0;j<2;j++) {
  for (let i=0;i<5;i++) {
    // console.log(i) // 0,1,2
    if (i==2){
      break end //添加标签break不仅退出内部循环也会退出外部循环
    }
    console.log(i) // 0，1
  }
}

for (let j=0;j<2;j++) {
  for (let i=0;i<5;i++) {
    // console.log(i) // 0,1,2,0,1,2
    if (i==2){
      break
    }
    console.log(i) // 0,1,0,1
  }
}

end:
for (let j=0;j<2;j++) {
  for (let i=0;i<5;i++) {
    // console.log(i) // 0,1,2,0,1,2
    if (i==2){
      continue end // 强制执行循环--退出内部循环，执行外部循环
    }
    console.log(i) // 0,1,0,1
  }
}

for (let j=0;j<2;j++) {
  for (let i=0;i<5;i++) {
    if (i==2){
      continue
    }
    console.log(i) // 0,1,3,4,0,1,3,4
  }
}

/*with
将代码的作用域设置到一个特定的对象中，简化多次编写同一个对象
严格模式下不允许使用with，否则视为语法错误
*/
with (location) {
  const url = href
  const hostName = hostname
  console.log(url)  // chrome-search://local-ntp/local-ntp.html
  console.log(hostName) // local-ntp
}

/*switch
 多个case叠在一起写
*/
switch (status) {
  case 0:
  case -1:
    console.log(0)
    break
  case 1 || 2:
    console.log('success')
    break
  default:
    console.log('error')
}
