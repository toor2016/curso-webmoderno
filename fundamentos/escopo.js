let a = 3

global.b = 3
this.c = 456
this.d = false
this.e = 'false'

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variável maluca: sem var e let
abc = 3
console.log(global.abc)