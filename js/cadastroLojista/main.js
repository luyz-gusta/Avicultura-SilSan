'use strict'

import { createLojistaUsuario } from "./api.js"

function validarEmail(email) {
    // Expressão regular para validar e-mails
    var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
}

function validarNomeUsuario(nomeUsuario) {
    // Expressão regular que permite apenas letras e espaços
    var regex = /^[A-Za-z\s]+$/;

    if (regex.test(nomeUsuario)) {
        return "Nome de usuário válido.";
    } else {
        return "Nome de usuário inválido. Use apenas letras e espaços.";
    }
}


document.getElementById('btn-enviar').addEventListener('click', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('inputNome').value
    const telefone = document.querySelector('#inputTelefone').value
    const email = document.getElementById('inputEmail').value
    const senha = document.getElementById('inputSenha').value
    const confirmacaoSenha = document.getElementById('inputConfirmeSenha').value

    if (
        nome == null || nome == '' ||
        telefone == null || telefone == '' ||
        email == null || email == '' ||
        senha == null || senha == '' ||
        confirmacaoSenha == null || confirmacaoSenha == ''
    ) {
        alert('Require Fields')
    } else if (senha != confirmacaoSenha) {
        alert('confirmacao de senha diferente da senha')
    } else if (senha < 8) {
        alert('senha tem que ter no minimo 8 digitos')
    } else if(!validarEmail(email)){
        alert('Email é inválido')
    }else if(!validarNomeUsuario(nome)){
        alert('Nome é inválido')
    }  else {
        const telefoneMask= telefone.replace(/\D/g, '');

        let dadosLojistaUsuario = {
            email_usuario: email,
            senha_usuario: senha,
            nome_lojista: nome,
            telefone_lojista:telefoneMask
        }

        console.log(dadosLojistaUsuario);

        await createLojistaUsuario(dadosLojistaUsuario)
    }
})

document.getElementById('iconPassword').addEventListener('click', () => {
    let icon = document.getElementById('iconPassword')

    let input = document.getElementById('inputSenha')

    if(icon.getAttribute('name') == 'eye-outline'){
        icon.setAttribute('name', 'eye-off-outline')
        input.type = 'text'
    }else{
        icon.setAttribute('name', 'eye-outline')
        input.type = 'password'
    }
})

document.getElementById('iconPassword').addEventListener('click', () => {
    let icon = document.getElementById('iconPasswordConfirm')

    let input = document.getElementById('inputConfirmeSenha')

    if(icon.getAttribute('name') == 'eye-outline'){
        icon.setAttribute('name', 'eye-off-outline')
        input.type = 'text'
    }else{
        icon.setAttribute('name', 'eye-outline')
        input.type = 'password'
    }
})
