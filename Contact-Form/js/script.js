//Consumir API Via Cep
const urlViaCep = "https://viacep.com.br/ws/"
const urlApiLocal = "http://localhost:3000/contatos"

async function cadastrar(e)
{
    e.preventDefault();
    
    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let ddd = document.getElementById('ddd').value;
    let numero = document.getElementById('numero').value;
    let CEP = document.getElementById('cep').value;
    let complemento = document.getElementById('complemento').value.trim();
    let rua = document.getElementById('rua').value.trim();
    let numeroRua = document.getElementById('numero-rua').value;
    let bairro = document.getElementById('bairro').value.trim();
    let cidade = document.getElementById('cidade').value.trim();
    let estado = document.getElementById('estado').value.trim();
    let texto = document.getElementById('texto').value.trim();

    objCadastro = 
    {
        nome,
        email,
        ddd,
        CEP,
        complemento,
        rua,
        numeroRua,
        bairro,
        numero,
        cidade,
        estado,
        texto    
    }     

    let validacao =    validarCadastro(objCadastro);
    console.log(validacao)
        if (validacao == true) {
            try{
                const promise = await fetch(urlApiLocal, {
                    body: JSON.stringify(objCadastro),
                    method: "post",
                    headers: {"Content-type": "application/json"}
                })
               alert("Cadastro realizado com sucesso!!!")
            }
            catch(e)
            {
                console.log(e.Message);
                console.log("Deu erro")
            }
        }
        else
        {
            alert("Algum dado inválido")
        }
    }

function validarCadastro(objCadastro)
{
 const { nome, email, ddd, CEP, complemento, rua, numeroRua, bairro, numero, cidade, estado, texto } = objCadastro;

 if (nome.length < 3 || email.length < 3 || ddd > 99 || ddd < 0 || CEP.length != 8  || complemento.length < 3 || rua.length < 3 || numeroRua < 0 || bairro.length < 3 || numero < 9  || cidade.length < 3|| estado.length < 2 || texto.length < 3 ) {

    return false;
 }
 else{
    console.log("Deu certo")
    return true;
 }
}
async function buscarEndereco(cep)
{
    try {
        const promise = await fetch(`${urlViaCep}/${cep}/json/`);
        const dados = await promise.json();
        console.log(dados);
        preencherForm(dados);
    
    } catch (error) {
        alert("Dados Inválidos")
        console.log(error)
    }
}

function preencherForm(endereco) {

    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
    document.getElementById('bairro').value = endereco.bairro;

}

