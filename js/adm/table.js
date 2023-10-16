'use strict'

const getTodosLojistas = async () => {
    const url = `https://avicultura-silsa-api.cyclic.app/v1/avicultura-silsan/lojista`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

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
    iconDeletar.classList.add('excluirLojista')
    //iconDeletar.href = "#modal__deletar"
    iconDeletar.addEventListener('click', function () {
        let abrirModalDelete = document.getElementById('modal-deletar')

        abrirModalDelete.classList.add('open-modal')
        let iconOld = document.getElementById('icon-old')
        let iconNew = document.getElementById('icon-new')
        let iconConfirmation = document.getElementById('icon-confirmation')


        if(iconOld.classList[1] == 'fa-eye'){
            iconOld.classList.remove('fa-eye')
        }else{
            iconOld.classList.remove('fa-eye-slash')
        }

        if(iconNew.classList[1] == 'fa-eye'){
            iconNew.classList.remove('fa-eye')
        }else{
            iconNew.classList.remove('fa-eye-slash')
        }

        if(iconConfirmation.classList[1] == 'fa-eye'){
            iconConfirmation.classList.remove('fa-eye')
        }else{
            iconConfirmation.classList.remove('fa-eye-slash')
        }


        let texto = document.querySelector('.text-deletar')
        texto.textContent = `Deseja mesmo desativar o lojista ${logista.nome}?`

        document.querySelector('.modal-deletar__close').addEventListener('click', () => {
            iconOld.classList.add('fa-eye')
            iconNew.classList.add('fa-eye')
            iconConfirmation.classList.add('fa-eye')

            abrirModalDelete.classList.remove('open-modal')
        })

        document.getElementById('deletar').addEventListener('click', async () => {
            await desativarLojista(logista.id_lojista)
            abrirModalDelete.classList.remove('open-modal')
        })

        document.getElementById('naoDeletar').addEventListener('click', async () => {
            abrirModalDelete.classList.remove('open-modal')
        })
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

const desativarLojista = async (idLojista) => {
    const url = `https://avicultura-silsa-api.cyclic.app/v1/avicultura-silsan/desativar-lojista/${idLojista}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(url, options)
        .then(response => {
            console.log(response);
            if (response.ok) {
                location.reload();
            } else {
                console.log(response.body);
                console.log(response.json);
                console.log(response.status);
                console.log(response.text);
                console.log(response.ok);
                console.log('Erro ao desativar usuario');
            }
        })
        .catch(error => {
            console.log('Ocorreu um erro na requisição:', error);
        });
}