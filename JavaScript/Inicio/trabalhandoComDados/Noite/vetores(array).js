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
    ${valores.length} //extensão do nosso array (numeral)
`);

// ************************ INPLEMENTAR MÉDOTOS DE ARRAY **********************

// MÉTODOS DE ARRAY 1
// 1- push -> utilizado para adicionar itens no array (sempre na última posição!)
const pushArray = ['girafa', "hipopotamo", "camaleão", "tartaruga"] 

console.log(pushArray);

// array.método()
pushArray.push("escorpião") //insere o animal escorpião no final do array

console.log(pushArray);

pushArray.unshift("cachorro") //insere o animal cachorro no inicio do array

console.log(pushArray);


// 2- pop -> remove o último item do array

const popArray = ["andre", "luis", "fernanda", "mariana"]

console.log(popArray)

popArray.pop() //remove o último item do nosso array

popArray.shift() //remove o primeiro item do nosso array

console.log(popArray)


// 3- delete

const frutas = ["banana", "maça", "atemoia", "tomate"]

// delete frutas[1]

console.log(frutas);

//array add novos itens no array (indice, itens a serem removidos, novo item)
frutas.splice(1, 2, "teste")

console.log(frutas);

// 4- filter -> funções

//                     0  1   2   3  4   5
const filterNumber = [ 1, 50, 65, 2, 5, 100 ]

console.log(filterNumber);

//construção de uma função                 auxiliar -> ficar responsavel por guardar os valores que tem dentro do nosso array
const numeroMenor10 = filterNumber.filter( (qualquerCoisa) => {

    //bloco de código - lógica

        // valores
   return qualquerCoisa > 10

})

console.log(numeroMenor10);

// 5- map -> modifica o array existente -> criar um novo array modificado -> funções

//indice          0  1  2  3  4  5 
const arrayMap = [1, 2, 3, 4, 5, 6]

//modificação do array - map

const arrayModificado = arrayMap.map( (ajudante) => {
    //começar o bloco de código 

    return ajudante * 2

})

console.log(arrayMap);
console.log(arrayModificado);

// 6- foreach -> 

const arrayString = ["carlos", "andre", "julia", "akira"]

arrayString.forEach( (elements) => {

     console.log(elements);

} )

// 7- sort
//Crie um array de nomes e em seguida organize eles em ordem alfabética

const arrayMeses = ["janeiro", "fevereiro", "março", "abril"]

console.log(arrayMeses);

arrayMeses.sort()

console.log(arrayMeses);

//sort com numeros
const numerosArray = [40, 89, 10, 30, 12, 10000]

numerosArray.sort()

console.log(numerosArray);



//indice começando sempre do 0, valor default do array, se eu mostrar um indice que não existe, o valor retornado vai ser undefined



// ***************** Exercício *******************
//crie 2 arrays: nomes e sobrenomes
//crie um terceiro array de NomesCompleto
//ao final, exiba os nomes completos no console com o foreach
//é necessário conter pelo menos 5 nomes
//utilizar arrow functions 
//se necessário, utilize outros métodos de array.


const nome = ["guilherme", "luana", "Charles", "eliane"]
const sobrenomes = ["Amorim", "oliveira", "Darwin", "pimentel"]

const nomesCompleto = nome.map( (nome, indice) => {    

    //iniciar a nossa lógica
    
    return ` ${nome} ${sobrenomes[indice]} ` //interpolação!!!!!!!
} )

//lógica de foreach
nomesCompleto.forEach( (nomeESobrenome) => {

    console.log(nomeESobrenome)

} )


// Guilherme Amorim
// luana oliveira ...










//JSON VALIDATOR - UTILIZAR PARA VERIFICAR OS OBJETOS DENTRO DO SEU ARRAY
