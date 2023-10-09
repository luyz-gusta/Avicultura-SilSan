'use strict'

import { getUsuarioLogin } from "./api.js"

const goPaginaProduto = async () => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if (email == '' || email == null || email == undefined || password == '' || password == null || password == undefined) {
        let abrirModal = document.getElementById('modal__require-fields')

        abrirModal.classList.add('open-require-fields')
        document.querySelector('.modal__require-fields--close').addEventListener('click', () => {
            abrirModal.classList.remove('open-require-fields')
        })
    } else {
        let result = await getUsuarioLogin(email, password)

        if (result.status == 200) {

            if (result.usuario[0].id_status_usuario == 1) { //ADM
                localStorage.setItem('id', result.usuario[0].id)
                localStorage.setItem('email', result.usuario[0].email)
                localStorage.setItem('senha', result.usuario[0].senha)
                localStorage.setItem('nivel', result.usuario[0].nivel)
                window.location.href = "./adm.html"
            } else if (result.usuario[0].id_status_usuario == 2) { //LOJISTA
                localStorage.setItem('id', result.usuario[0].id_usuario)
                localStorage.setItem('email', result.usuario[0].email)
                localStorage.setItem('senha', result.usuario[0].senha)
                localStorage.setItem('nivel', result.usuario[0].nivel)
                localStorage.setItem('nome', result.lojista.id_lojista)
                localStorage.setItem('nome', result.lojista.nome)
                localStorage.setItem('telefone', result.lojista.telefone)
                window.location.href = "./lojista.html"
            } else if (result.usuario[0].id_status_usuario == 3) { // CLIENTE
                let abrirModal = document.getElementById('modal__erro-cliente')

                abrirModal.classList.add('open-erro-cliente')
                document.querySelector('.modal__erro-cliente--close').addEventListener('click', () => {
                    abrirModal.classList.remove('open-erro-cliente')
                })
            } else {
                console.log('error de usuario');
            }
            //window.location.href = "https://projeto-lion-school-2023-front.vercel.app"
        } else if (result.status == 400) {
            let abrirModal = document.getElementById('modal__email-incorreto')

            abrirModal.classList.add('open-email-incorreto')
            document.querySelector('.modal__email-incorreto--close').addEventListener('click', () => {
                abrirModal.classList.remove('open-email-incorreto')
            })
        } else if (result.status == 404) {
            let abrirModal = document.getElementById('modal__senha-incorreta')

            abrirModal.classList.add('open-senha-incorreta')
            document.querySelector('.modal__senha-incorreta--close').addEventListener('click', () => {
                abrirModal.classList.remove('open-senha-incorreta')
            })
        } else {
            console.log('error, usuario invalido');
        }
    }
}

document.getElementById('iconPassword').addEventListener('click', () => {
    let icon = document.getElementById('iconPassword')
    let input = document.getElementById('password')

    if(icon.getAttribute('name') == 'eye-outline'){
        icon.setAttribute('name', 'eye-off-outline')
        input.type = 'text'
    }else{
        icon.setAttribute('name', 'eye-outline')
        input.type = 'password'
    }

})

document.getElementById('btn-enviar').addEventListener('click', goPaginaProduto)
