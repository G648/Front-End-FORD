//funções executamm um papel central aqui na nossa linguagem JavaScrip
//é uma das opções mais importantes de se definir ao criar sistemas em JavaScript

//função: trecho(bloco) de código que pode ser utilizado em todo nosso programa 
//pode aceitar e receber vários valores, ou até mesmo várias instruções

//devemos colocar bons nomes de funções na hora de declarar elas

//função + nome função + parâmetro função
//função sem retorno
function imprimirSomas(a, b) {
    console.log(a + b );
}

imprimirSomas(50, 19)


//função com retorno 
function soma(a, b =0) {
    return a + b
}

console.log(soma(4, 10));

//armazenando funções dentro de uma variável (anonima = sem nome (mesma escrita, porém sem o nome da função!))
const imprimirSoma = function (a, bla) { 
    console.log(a + b);
}

imprimirSoma(20, 45);

//utiulizando o arrow function (forma reduzida de se declarar uma função) 

const somariz = (a, b ) => { //isso se faz referencia a uma função
    return a + b 
}

console.log(somariz(5, 5));