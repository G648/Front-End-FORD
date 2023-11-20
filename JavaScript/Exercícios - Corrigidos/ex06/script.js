let resp = window.document.getElementById('saida')
// Lembre-se que toda variável declarada aqui fora possui escopo global. Veja mais sobre escopo no seu material em PDF, na aula 07.

function acao1() {
    resp.innerHTML += '<p>Clicou no primeiro botão</p>'
}

function acao2() {
    resp.innerHTML += '<p>Clicou no segundo botão</p>'
}

function acao3() {
    resp.innerHTML += '<p>Clicou no terceiro botão</p>'
}

function acao4() {
    resp.innerHTML += '<p>Clicou no quarto botão</p>'
}