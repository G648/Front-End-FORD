const peso01 = 10.0
const peso02 =  Number('2.0') //outra forma de utilizamos a atribuição de valores para as variáveis

console.log(peso01, peso02);
//método para testar se o numero é do tipo inteiro ou não
console.log(Number.isInteger(peso01));


//trabalhando com funções do tipo de dados number

const avaliacao = 9.8
const avaliacao2 = 6.8

const total = avaliacao * peso01 + avaliacao * peso02
const media = total / peso01+peso02

//temos um jeito de limitar as casas decimais depois da vigula, através do comando, TO Fixed
console.log(media.toFixed(1));
console.log(typeof media);