//é como uma caixa com outras caixas dentro, que podem ser acessadas através do seu 
// índice entre colchetes []. O primeiro índice é sempre o 0 (zero), portanto um vetor de 5 posições terá 
// índice de 0 a 4. Elas se comportam como variáveis em tudo, e preciso utilizar colchetes tanto na 
// declaração como no acesso aos dados.


//array em js é heterogenio, ou seja, podemos colocar qualuqer coisa, string, int, etc.
//ainda mais, não possui um tamanho fixo;

//indice começando sempre do 0, valor default do array, se eu mostrar um indice que não existe, o valor retornado vai ser undefined
const valores = [1.7, 8, 10.90, 54]

console.log(`
    ${valores[0]}
    ${valores[3]}
`);

// //fazer o teste para um array que não existe e mostrar o que acontece, ex:
valores[10] = 80

valores[4] = 100

console.log(valores);
console.log(valores.length); //função para contar quantos elementos temos dentro do array

valores.push(45, false, "olá") //utilizado para incrementar mais dados dentro do nosso array 

console.log(valores);

valores.pop() //utilizado para utilizar o último dado do nosso array

console.log(valores);

//mostrar mais opções de arrays - tais como, filter:
const numero = [1, 2, 200, 10, 7, 12, 15, 8]

console.log(numero);

const nMenor10 = numero.filter((n) =>{
    return n < 10;
})

console.log(nMenor10);

const comentarios = [
    {comentario: "Bla bla bla", exibe: true},
    {comentario: "evento é uma merda", exibe: false},
    {comentario: "evento muito bom!", exibe: true}

];

const comentraiosOk = comentarios.filter((C) => {
    return C.exibe === true;
})

console.log(comentraiosOk);

//utilizando o map
const numeros = [1, 2, 5, 10, 300,]


//map utilizado para retornar um determinado resultado
const arrDobro = numeros.map((n) =>{
    return n * 2;
})

console.log(numeros);
console.log(arrDobro);

//crie 2 arrays: nomes e sobrenomes
//crie um terceiro array de NomesCompleto
//ao final, exiba os nomes completos no console com o foreach
//é necessário conter pelo menos 5 nomes
//utilizae arrow functions como callback functions

const nomes = ['Arthur', 'Guilherme', 'Jeremias', 'Eduardo', 'Carlos']
const sobrenomes = ['Oliveira', 'Cezar', 'josé', 'Costa', 'Roque']

const nomeCompleto = nomes.map((nome, indice) => {
    return `${nome} ${sobrenomes[indice]}`;
})

nomeCompleto.forEach((nc) => {
    console.log(nc);
})



//utilizando o reduce:
// const numeros = [10, 12, 20];

// const somatorio = numeros.reduce((total, n) =>{
//     return total + n;
// }, 0);

// console.log(somatorio);






//JSON VALIDATOR - UTILIZAR PARA VERIFICAR OS OBJETOS DENTRO DO SEU ARRAY
