function foo() {
  console.log(this.a)
}

const obj = {
  a: 1
}

function bar() {
  foo.call(obj)
}

var a = 'test'

bar()

bar.call(window)

function foo(el){
  console.log(el, this.id)
}

const obj = {
  id: 1
}

function foo(p1, p2){
  console.log(p1)
  console.log(p2)
  this.val = p1 + p2
}

var bar = foo.bind(null, 1)
bar
