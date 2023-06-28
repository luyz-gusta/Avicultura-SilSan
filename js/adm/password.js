'use strict'

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


const enviarSenha = async () => {
    let inputSenha

}

document.getElementById('exit').addEventListener('click', () => {
    localStorage.setItem('id', '')
    localStorage.setItem('email', '')
    localStorage.setItem('senha', '')
    localStorage.setItem('nivel', '')
})






