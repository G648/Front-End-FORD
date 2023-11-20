//Mostrar aqui a diferença entre as variáveis Let, Var e Const

var a = 3
let b = 4

//mostrar que não podemos usar o let duas vezes no mesmo escopo de declaração
var a = 30
// let b = 40

//ao invés, vamos utilizar o seguinte...
b = 40

console.log(a, b);