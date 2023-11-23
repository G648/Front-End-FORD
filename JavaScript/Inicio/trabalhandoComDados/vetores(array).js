//é como uma caixa com outras caixas dentro, que podem ser acessadas através do seu 
// índice entre colchetes []. O primeiro índice é sempre o 0 (zero), portanto um vetor de 4 posições terá 
// índice de 0 a 3. Elas se comportam como variáveis em tudo, e preciso utilizar colchetes tanto na 
// declaração como no acesso aos dados.


//array em js é heterogenio, ou seja, podemos colocar qualquer coisa, string, int, etc.
//ainda mais, não possui um tamanho fixo;

//    indice  =   0    1   2    3
const valores = [18.0, 80, 43, 1.8888]

//var(array) -> definindo um indice 10 e atribuindo o valor de 967 para o array
valores[10] = 967 // --> incluindo o indice 10 no array

console.log(`
    ${valores[0]}
    ${valores[3].toFixed(2)} //limita as casas decimais em 2 após a virgula
    ${valores[10]}
    ${valores}
    ${valores.length}
`);

// ************************ INPLEMENTAR MÉDOTOS DE ARRAY **********************

// MÉTODOS DE ARRAY 
// 1- push
const pushArray = ['girafa', "hipopotamo", "camaleão", "tartaruga"] 

console.log(pushArray);

// array.método()
pushArray.push("escorpião") //insere o animal escorpião no final do array

console.log(pushArray);

pushArray.unshift("cachorro") //insere o animal cachorro no inicio do array

console.log(pushArray);


// 2- pop

const popArray = ["andre", "luis", "fernanda", "mariana"]

console.log(popArray)

popArray.pop() //remove o último item do nosso array

popArray.shift() //remove o primeiro item do nosso array

console.log(popArray)


// 3- delete

const frutas = ["banana", "maça", "atemoia", "tomate"]

delete frutas[1]

console.log(frutas);

//array add novos itens no array (indice, quantidade removida, novo item)
frutas.splice(1, 1, "teste")

console.log(frutas);

// 4- filter

//                     0  1   2   3  4   5
const filterNumber = [ 1, 50, 65, 2, 5, 100]

console.log(filterNumber);

const numeroMenor10 = filterNumber.filter( (numerosArray) => {

    //bloco de código - lógica

        // valores
   return numerosArray > 10

} )

console.log(numeroMenor10);

// 5- map
// 6- foreach
// 7- sort
// 8- reduce


//indice começando sempre do 0, valor default do array, se eu mostrar um indice que não existe, o valor retornado vai ser undefined


//crie 2 arrays: nomes e sobrenomes
//crie um terceiro array de NomesCompleto
//ao final, exiba os nomes completos no console com o foreach
//é necessário conter pelo menos 5 nomes
//utilizar arrow functions 

// const nomes = ['Arthur', 'Guilherme', 'Jeremias', 'Eduardo', 'Carlos']
// const sobrenomes = ['Oliveira', 'Cezar', 'josé', 'Costa', 'Roque']

// const nomeCompleto = nomes.map((nome, indice) => {
//     return `${nome} ${sobrenomes[indice]}`;
// })

// nomeCompleto.forEach((nc) => {
//     console.log(nc);
// })






//JSON VALIDATOR - UTILIZAR PARA VERIFICAR OS OBJETOS DENTRO DO SEU ARRAY
