// 定义Promise的三种状态常量
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

const isFunction = func => func && typeof func === 'function'

class _Promise {
  constructor(func) {
    if (!isFunction(func)) {
      throw new Error('except function')
    }

    this.status = PENDING
    this.value = null
    this.reason = null

    this._rejectQueues = []
    this._resolveQueues = []

    try {
      func(this._reject.bind(this), this._resolve.bind(this))
    } catch(err) {
      this._reject(err)
    }
  }

  _reject (val) {
    setTimeout(() => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = val
        this._rejectQueues.map(item => {
          this.reason = item.bind(this)(this.reason)
          console.log('reason:'+ this.reason)
        })
      }
    })
  }

  _resolve (val) {
    setTimeout(() => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = val
        this._resolveQueues.map(item => {
          this.value = item.bind(this)(this.value)
          console.log('val:'+ this.value)
        })
      }
    })
  }

  then (onfulfilled, onrejected) {
    if (isFunction(onfulfilled) ) {
      this._resolveQueues.push(onfulfilled)
    }

    if (isFunction(onrejected)) {
      this._rejectQueues.push(onrejected)
    }

    return this
  }
}

new _Promise((reject, resolve) => {
  setTimeout(() => {
    resolve(1)
  })
}).then((res)=>{
  console.log('res:' + res)
  console.log(res + 1) // 2
  return res + 1
}).then((res)=>{
  console.log('res:' + res)
  console.log(res + 1) // 3
})

let funcA = function () {
  console.log('A')
}

let funcB = function () {
  console.log('B')
}

function test (func) {
  func(funcA, funcB)
}

test((funcC, funcD) => { // 匿名函数声明
  funcC()
  funcD()
})


test(() => { // 此处声明无传参 参数中的各种调用将毫无意义

})

function testtest (func) {
  func(1, 2)
}

testtest((a, b) => { // 匿名函数声明
  console.log(a + b)
})