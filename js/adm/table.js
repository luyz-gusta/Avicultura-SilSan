'use strict'

import { getTodosLojistas } from "../adm/api.js"

const lojistas = await getTodosLojistas()

const criarTable = (logista) => {

    //Principal
    const tr = document.createElement('tr')

    const td_nome = document.createElement('td')
    td_nome.classList.add('nome')
    td_nome.dataset.title = 'Name'
    td_nome.textContent = logista.nome

    const td_telefone = document.createElement('td')
    td_telefone.classList.add('telefone')
    td_telefone.dataset.title = 'Registro'
    td_telefone.textContent = logista.telefone

    const td_email = document.createElement('td')
    td_email.classList.add('email')
    td_email.dataset.title = 'Registro'
    td_email.textContent = logista.email

    const td_icon_deletar = document.createElement('td')
    td_icon_deletar.classList.add('IconEditar')

    //dentro td_icon_deletar terá:
    const iconDeletar = document.createElement('a')
    iconDeletar.classList.add('fas')
    iconDeletar.classList.add('fa-trash')
    //iconDeletar.href = "#modal__deletar"
    iconDeletar.addEventListener('click', function () {
        localStorage.setItem('id', logista.id)
    })
    

    tr.append(td_nome, td_telefone, td_email, td_icon_deletar)
    //td_icon_editar.append(iconEditar)
    td_icon_deletar.append(iconDeletar)

    return tr
}

const carregarTableLogista = async () => {
    const table = document.querySelector('.tabelaItemsLogistica')
    const tableJSON = lojistas.lojistas.map(criarTable)

    table.replaceChildren(...tableJSON)
}

carregarTableLogista()