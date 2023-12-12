
//falar sobre como podemos guardar dados dentro das variáveis
//mostrar depois como que podemos concatenar as variáveis 
//mostrar também como podemos interpolar as variáveis

let preco = 19.90; //numeral
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto)

console.log(precoComDesconto);

let nome = "caderno" //string
let categoria = "papelaria"

console.log(`produto: ${nome}, com a categoria ${categoria} tem o valor com o desconto de: ${precoComDesconto}`); //interpolação