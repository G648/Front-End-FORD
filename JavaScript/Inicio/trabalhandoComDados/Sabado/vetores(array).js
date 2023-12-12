//é como uma caixa com outras caixas dentro, que podem ser acessadas através do seu 
// índice entre colchetes []. O primeiro índice é sempre o 0 (zero), portanto um vetor de 4 posições terá 
// índice de 0 a 3. Elas se comportam como variáveis em tudo, e preciso utilizar colchetes tanto na 
// declaração como no acesso aos dados.

//array em js é heterogenio, ou seja, podemos colocar qualquer coisa, string, int, etc.
//ainda mais, não possui um tamanho fixo;

//    indice  =   0    1   2    3        4 
const valores = [18.0, 80, 43, 1.8888, "teste"]

//var(array) -> definindo um indice 10 e atribuindo o valor de 967 para o array
valores[10] = 967 // --> incluindo o indice 10 no array

console.log(`
    ${valores[0]}
    ${valores[3].toFixed(1)} //limita as casas decimais em 2 após a virgula
    ${valores[10]}
    ${valores}
    ${valores.length} //extensão do nosso array (numeral)
`);


//**************************** IMPLEMENTAR MÉTODOS DE ARRAY **************************

// MÉTODOS DE ARRAY 1
// 1- push -> utilizado para adicionar itens no array (sempre na última posição!)
    // posições =      0        1       2          3
const pushArray = ['girafa', 'leão', 'coala', 'camaleão']

console.log(pushArray);

//adicionando valores
pushArray.push("caramelo do alex auau")
pushArray.unshift("animal01")

console.log(pushArray);



// 2- pop -> remove o último item do array
const popArray = ['andre', 'leonardo', 'ana', 'beatriz']

console.log(popArray);

//remove o ultimo valor do array
popArray.pop();

popArray.shift()

console.log(popArray);


// 3- delete
const deleteArray = ['banana', 'maca', 'pera', 'uva', 'salada mista']

console.log(deleteArray);

delete deleteArray[1]

console.log(deleteArray);

//splice => substituir valores

//          metodo: índice     quantidade de valor    novo valor
deleteArray.splice(   1      ,      1               , 'melão')

console.log(deleteArray);


// 4- filter -> funções -> somente consegue visualizar os valores, porém não modifica
//                   0   1  2   3   4
const filterArray = [1, 50, 20, 35, 60]

console.log(filterArray);

const arrayFiltrado = filterArray.filter( (findArray) => {
    //bloco de execução

    return findArray > 20
} )

//saída de dados
console.log(arrayFiltrado);


// 5- map -> modifica o array existente -> criar um novo array modificado -> funções
const mapArray = [10, 15, 20, 25, 30, 35]

//inicio modificação array
const arrayModificado = mapArray.map( (mapArrayModificado) => {

    return mapArrayModificado * 2

})

console.log(mapArray);
console.log(arrayModificado);

// 6- foreach -> 
const forArray = ['jubileu', 'eyk', 'jabes', 'ane']

forArray.forEach((listarArray) => {

    console.log(listarArray)
    
})

// 7- sort
//Crie um array de nomes e em seguida organize eles em ordem alfabética
const sortArray = ['janeiro', 'Fevereiro', 'marco', 'abril', 'maio', 'junho']

console.log(sortArray);

sortArray.sort()

console.log(sortArray);

const arraySortNumber = [10, 23205, 542, 871, 1050]
console.log(arraySortNumber);

arraySortNumber.sort()

console.log(arraySortNumber);


// 8- reduce



//*************Exercício ***************/
//crie 2 arrays: nomes e sobrenomes
//crie um terceiro array de nomesCompleto
//ao final, exiba os nomes completos no console com o foreach
//é necessário conter pelo menos 5 nomes
//utilizar arrow functions
//se necessário, utilize outros métodos de array
