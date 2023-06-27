'use strict'

import { getUsuarioLogin } from "./api.js"

const goPaginaProduto = async () => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let result = await getUsuarioLogin(email, password)

    if (result.status == 200) {
        console.log(result);
        if (result.usuarios[0].id_status_usuario == 1) { //ADM
            
            localStorage.setItem('id', result.usuarios[0].id)
            localStorage.setItem('email', result.usuarios[0].email)
            localStorage.setItem('senha', result.usuarios[0].senha)
            localStorage.setItem('nivel', result.usuarios[0].nivel)
            window.location.href = "./adm.html"

        } else if (result.usuario[0].id_status_usuario == 2) { //LOJISTA
            //console.log(result.usuario[0]);
        } else if (result.usuario[0].id_status_usuario == 3) { // CLIENTE
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
