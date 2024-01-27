//função pesquisarCep ainda não foi criada
//focusout -> quando sair do focus do input

//criando a função para limpar form
function limparForm() {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

//criando função preencher form
const preencherForm = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

//avaliando se o CEP contem apenas números
function eNumero(numero) {
    return /^[0-9]+$/.test(numero); //regularExpressions
}

//avaliando de o CEP tem o comprimento de 8 caracteres e se também contém apenas números
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//inicio da função para se conectar com a API do ViaCEP
//alterar para função
const pesquisarCep = async () => {
    //chamando a função
    limparForm();

    const cep = document.getElementById('cep').value
    //estamos utilizando a url do viaCEP, substituimos o valor pela url que o usuário vai digitar no campo cep
    const url = `https://viacep.com.br/ws/${cep}/json/`

    if (cepValido(cep)) {

        //precisamos ter o retorno do viaCEP (JSON ) que ele vai retornar pra gente, através do fetch
        //ele vai retornar uma promessa (algo que pode acontecer ou não), por isso ele é assincrono
        //ele vai mandar o dado do retorno no console log
        //fetch(url).then(response => response.json()); //utilizamos o json para retornar a resposta da api(viacep)

        const dados = await fetch(url) //await => aguardar os dados
        const endereco = await dados.json() //vamos utilizar os dados que estão sendo guardados no dados e exibir na tela

        console.log(endereco);

        // retorna um booleano indicando se o objeto possui a propriedade especificada
        endereco.hasOwnProperty('erro') ? document.getElementById('endereco').value = 'CEP não encontrado!' : preencherForm(endereco);

    } else {
        document.getElementById('endereco').value = 'CEP incorreto!'
    }

}

document.getElementById('cep')
    .addEventListener('focusout', pesquisarCep)
