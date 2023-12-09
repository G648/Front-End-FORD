//Objetos dentro de javaScript
//JSON -> JavaScript Object Notation (formato textual != objeto em js)

//const prod1 = {} //criação de um objeto vazio 

const prod1 = {}

prod1.nome = 'poxo x5 pro' //declaramos aqui um novo atributo (nome), podendo até ter um objeto dentro de um objeto
prod1.preco = 490000       //os objetos sempre irão receber uma chave e valor

console.log(prod1);

//outra forma de conseguir declarar objetos

const prod2 = {
    nome : 'polo',
    preco : 79
}

console.log(prod2);

//exemplo de json: Formato textual
'{"nome": "camiseta polo", "preco": 79}'