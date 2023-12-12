'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

//cliente temporario
const tempClient={
    nome:"aoba",
    email:"cezarguilherme03@gmail.com",
    celular:"11985033670",
    cidade:"São Paulo"
}    

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [] //realizando uma validação e transformando para array 

function setLocalStorage(dbClient) {
    localStorage.setItem("db_client", JSON.stringify(dbClient)) //o json não aceita objetos, por isso temos que converter o objeto para string
}
// CRUD -> Create, Read, Update, Delete

//função Create
function createClient(client) {
    //precisamos criar um array para conseguirmos adicionar usuários
    const dbClient = getLocalStorage() //criando o array 

    dbClient.push(client)//adicionando os usuários dentro do array

    //enviar dados para o local storage. Chamar a função createClient na console da web
    setLocalStorage(dbClient)
}

//Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)