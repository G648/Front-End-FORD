//IMC
//1.Pegar os valores 
//2.Calcular o IMC
//3.Gerar a classificação do IMC
//4.Organizar as informações
//5.Salvar os dados na lista 
//6.Ler a lista com os dados
//7.Renderizar o conteúdo no HTML (tabela)
//8.Botão de limpar os registros

function calcularImc(event) {
    event.preventDefault()

    let dadosUsuario = pegarValores();

    let imc = calcular(dadosUsuario.altura, dadosUsuario.peso);

    let classificacaoImc = classificarImc(imc);

    let usuarioAtt = organizarDados(dadosUsuario, imc, classificacaoImc);

    cadastrarUsuario(usuarioAtt);

    window.location.reload();
}

function pegarValores() {
    let nome = document.getElementById("nome").value.trim();
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    let dadosUsuario = {
        nome: nome,
        altura: altura,
        peso: peso
    }

    return dadosUsuario;
}

function calcular(altura, peso) {
    let imc = peso / (altura * altura);

    return imc;
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return "Abaixo do Normal"

    } else if (imc < 25) {
        return "Normal"

    } else if (imc < 30) {
        return "Sobrepeso"

    } else {
        return "Obesidade"
    }
}

function organizarDados(dadosUsuario, valorImc, classificacaoImc) {
    let dataHoraAtual = Intl.DateTimeFormat('pt-BR', { timeStyle: 'long', dateStyle: 'short' }).format(Date.now());
    let dadosUsuarioAtt = {
        ...dadosUsuario,
        imc: valorImc.toFixed(2),
        classificacao: classificacaoImc,
        dataCadastro: dataHoraAtual
    }

    console.log(dadosUsuarioAtt);

    return dadosUsuarioAtt;
}

function cadastrarUsuario(usuario) {
    let listaUsuarios = [];

    // if (localStorage.getItem("usuariosCadastrados") == true) padrao do if
    if (localStorage.getItem("usuariosCadastrados")) {
        listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"))
    }

    listaUsuarios.push(usuario)

    localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuarios))
}

function carregarUsuarios() {
    let listaUsuarios = [];

    if (localStorage.getItem("usuariosCadastrados")) {
        listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));
    }

    if (listaUsuarios.length == 0) {
        let tabela = document.getElementById("corpo-tabela");

        tabela.innerHTML = `<tr class="linha-mensagem">
            <td colspan="6">Nenhum usuário cadastrado !</td>
        </tr>`
    } else {
        montarTabela(listaUsuarios);
    }
}

window.addEventListener('DOMContentLoaded', () => carregarUsuarios());

function montarTabela(listaDeCadastrados) {
    let tabela = document.getElementById("corpo-tabela");

    let template = '';

    listaDeCadastrados.forEach(pessoa => {
        template += `<tr>
            <td data-cell="nome">${pessoa.nome}</td>
            <td data-cell="altura">${pessoa.altura}</td>
            <td data-cell="peso">${pessoa.peso}</td>
            <td data-cell="valor do IMC">${pessoa.imc}</td>
            <td data-cell="classificação do IMC">${pessoa.classificacao}</td>
            <td data-cell="data de cadastro">${pessoa.dataCadastro}</td>
        </tr>`
    });

    tabela.innerHTML = template;
}

function deletarRegistros() {
    localStorage.removeItem("usuariosCadastrados")
    window.location.reload();
}