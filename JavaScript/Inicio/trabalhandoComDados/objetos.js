//objeto sempre será uma coleção de chave e valor
//chave = propriedades daquele objeto
//valor = valor que vai ser recebido naquela propriedade

const prod01 ={} //=> inicialização de umm objeto
prod01.nome = "Estante"
prod01.fabricante = "Casas Bahia"

console.log(prod01);

//podemos declarar a chave e valor já dentro do nosso objeto
//temos que declarar a chave e valor como ":" por conta que estamos dentro do objeto

const prod02 = {
     nome : "camiseta polo",
     preco : 250
}

console.log(prod02);

//exemplo de objetos dentro de arrays

const produtos = [
    {produto: 'Camiseta', preco: 129.00},
    {produto: 'Tenis', preco: 350.00},
    {produto: 'Jaqueta de Couro', preco: 700.00},
];

//antes disso, precisammos falar sobre funcoes e arrow functions
let totalVendas = produtos.reduce((vlInicial, P) => {

    return vlInicial + P.preco;

},0)

console.log(`O valor total das vendas é de: ${totalVendas}`);