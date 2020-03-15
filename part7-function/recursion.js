// 递归

function factorial(num) {
  if (num <= 1) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}

factorial(5) // 120

// 尾递归：
// 若函数在尾位置调用自身（或是一个尾调用本身的其他函数等等），则称这种情况为尾递归。

// 特点：
// 尾递归在普通尾调用的基础上，多出了2个特征：
// 1. 在尾部调用的是函数自身 (Self-called)；
// 2. 可通过优化，使得计算仅占用常量栈空间 (Stack Space)。

function factorial(num, r) {
  if (num <= 1) {
    return 1 * r
  } else {
    return factorial(num - 1, r * num)
  }
}

factorial(5, 1)

// arguments.callee 一个指向正在执行的函数指针

function factorial(num, r) {
  if (num <= 1) {
    return 1 * r
  } else {
    return arguments.callee(num - 1, r * num)
  }
}

factorial(5, 1) // 120