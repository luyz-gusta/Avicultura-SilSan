'use strict'

import { getUsuarioLogin } from "./api.js"

const goPaginaProduto = async () => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let result = await getUsuarioLogin(email, password)

    if(result.status == 200){
        console.log(result);
        //window.location.href = "https://projeto-lion-school-2023-front.vercel.app"
    }else{
        console.log('error');
        console.log(result);
    }
}

document.getElementById('btn-enviar').addEventListener('click', goPaginaProduto)
