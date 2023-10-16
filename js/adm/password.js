'use strict'

import { getUsuario, updateUsuario} from "./api.js"

const email = localStorage.getItem('email')
const nameUser = email.split('@adm.com')

const idUsuario = localStorage.getItem('id')
const dadosUsuario = await getUsuario(idUsuario)

const showPasswordOld = () => {
    let icon = document.getElementById('icon-old')
    let input = document.getElementById('input-password-old')
    if (input.type == "password") {
        input.setAttribute("type", "text")
        icon.classList.remove('fa-eye')
        icon.classList.add('fa-eye-slash')
    } else {
        input.setAttribute("type", "password")
        icon.classList.add('fa-eye')
        icon.classList.remove('fa-eye-slash')
    }
}
document.getElementById('icon-old').addEventListener('click', showPasswordOld)

const showPasswordNew = () => {
    let icon = document.getElementById('icon-new')
    let input = document.getElementById('input-password-new')
    if (input.type == "password") {
        input.setAttribute("type", "text")
        icon.classList.remove('fa-eye')
        icon.classList.add('fa-eye-slash')
    } else {
        input.setAttribute("type", "password")
        icon.classList.add('fa-eye')
        icon.classList.remove('fa-eye-slash')
    }
}
document.getElementById('icon-new').addEventListener('click', showPasswordNew)

const showPasswordConfirmation = () => {
    let icon = document.getElementById('icon-confirmation')
    let input = document.getElementById('input-password-confirmation')
    if (input.type == "password") {
        input.setAttribute("type", "text")
        icon.classList.remove('fa-eye')
        icon.classList.add('fa-eye-slash')
    } else {
        input.setAttribute("type", "password")
        icon.classList.add('fa-eye')
        icon.classList.remove('fa-eye-slash')
    }
}
document.getElementById('icon-confirmation').addEventListener('click', showPasswordConfirmation)

document.getElementById('exit').addEventListener('click', () => {
    localStorage.setItem('id', '')
    localStorage.setItem('email', '')
    localStorage.setItem('senha', '')
    localStorage.setItem('nivel', '')
})


const enviarSenha = async () => {
    let inputSenhaAntiga = document.getElementById('input-password-old')
    let inputSenhaNova = document.getElementById('input-password-new')
    let inputSenhaConfirmacao = document.getElementById('input-password-confirmation')

    if (
        inputSenhaAntiga.value == '' || inputSenhaAntiga.value == null || inputSenhaAntiga.value == undefined ||
        inputSenhaNova.value == '' || inputSenhaNova.value == null || inputSenhaNova.value == undefined ||
        inputSenhaConfirmacao.value == '' || inputSenhaConfirmacao == null || inputSenhaConfirmacao.value == undefined
    ) {
        let abrirModal = document.getElementById('modal__require-fields')

        abrirModal.classList.add('open-require-fields')
        document.querySelector('.modal__require-fields--close').addEventListener('click', () => {
            abrirModal.classList.remove('open-require-fields')
        })
    } else {
        if (inputSenhaAntiga.value == dadosUsuario.usuarios[0].senha) {
            if (inputSenhaNova.value == inputSenhaConfirmacao.value) {
                let jsonUpdate = {
                    email: dadosUsuario.usuarios[0].email,
                    senha: inputSenhaNova.value,
                    id_status_usuario: 1
                }

                let updateAdm = await updateUsuario(jsonUpdate, idUsuario)
            } else {
                let abrirModal = document.getElementById('modal__confirmation-password')

                abrirModal.classList.add('open-confirmation-password')
                document.querySelector('.modal__confirmation-password--close').addEventListener('click', () => {
                    abrirModal.classList.remove('open-confirmation-password')
                })
            }
        } else {
            let abrirModal = document.getElementById('modal__password-incorrect')

            abrirModal.classList.add('open-password-incorrect')
            document.querySelector('.modal__password-incorrect--close').addEventListener('click', () => {
                abrirModal.classList.remove('open-password-incorrect')
            })
        }
    }
}

document.getElementById('enviar').addEventListener('click', enviarSenha)

const card = () => {
    const nomeUsuario = document.getElementById('spanUser')
    nomeUsuario.textContent = nameUser[0]
}
card()




