'use strict'

import { getUsuarioLogin } from "./api.js"

const goPaginaProduto = async () => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if (email == '' || email == null || email == undefined || password == '' || password == null || password == undefined) {
        console.log('error');
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


}



document.getElementById('btn-enviar').addEventListener('click', goPaginaProduto)
