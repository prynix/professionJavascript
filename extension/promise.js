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

    this._rejectQueues = []
    this._resolveQueues = []

    try {
      func(this._reject.bind(this), this._resolve.bind(this))
    } catch(err) {
      this._reject(err)
    }
  }

  _reject (val) {
    this.status = REJECTED
    setTimeout(() => {
      this._rejectQueues.map(item => {
        item.bind(this)(val)
      })
    })
  }

  _resolve (val) {
    this.status = FULFILLED
    setTimeout(() => {
      this._resolveQueues.map(item => {
        item.bind(this)(val)
      })
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
  resolve(1)
}).then((res)=>{
  console.log(res + 1) // 2
}).then((res)=>{
  console.log(res + 2) // 3
})