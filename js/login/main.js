'use strict'

import { getUsuarioLogin } from "./api.js"

const goPaginaProduto = async () => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let result = await getUsuarioLogin(email, password)

    if (result.status == 200) {
        if (result.usuario[0].id_status_usuario == 1) {
            //console.log(result.usuario[0]);
        } else if (result.usuario[0].id_status_usuario == 2) {
            //console.log(result.usuario[0]);
        } else if (result.usuario[0].id_status_usuario == 3) {
            console.log(result.usuario[0]);
        } else {
            console.log('error de usuario');
        }
        //window.location.href = "https://projeto-lion-school-2023-front.vercel.app"
    } else if (result.status == 400 || result.status == 404) {
        let abrirModal = document.getElementById('modal__adicionar')

        abrirModal.classList.add('open-modal')
        document.querySelector('.modal__adicionar--close').addEventListener('click', () => {
            abrirModal.classList.remove('open-modal')
        })
    } else {
        console.log('error, usuario invalido');
    }
}



document.getElementById('btn-enviar').addEventListener('click', goPaginaProduto)
