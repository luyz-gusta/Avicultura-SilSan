'use strict'

const cadastrarLojista = () => {
    const nome = document.getElementById('inputNome').value
    const telefone = document.getElementById('inputTelefone').value
    const dataNascimento = document.getElementById('inputData').value
    const email = document.getElementById('inputEmail').value
    const senha = document.getElementById('inputSenha').value
    const confirmacaoSenha = document.getElementById('inputConfirmeSenha').value

    if (
        nome == null || nome == '' ||
        telefone == null || telefone == '' ||
        dataNascimento == null || dataNascimento == '' ||
        email == null || email== '' ||
        senha == null || senha == '' ||
        confirmacaoSenha == null || confirmacaoSenha == ''
    ){
        alert('Require Fields')
    }else if(senha != confirmacaoSenha) {
        alert('confirmacao de senha diferente da senha')
    }else if(telefone.lenth > 12) {
        alert('telefone digitado incorretamente')
    }else{
        
    }
}

document.getElementById('btn-enviar').addEventListener('click', cadastrarLojista)