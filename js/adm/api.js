'use strict'

//https://avicultura-silsa-api.cyclic.app/v1/avicultura-silsan/usuario/1

export const getUsuario = async (id) => {
    const url = `https://avicultura-silsa-api.cyclic.app/v1/avicultura-silsan/usuario/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const updateUsuario = async (jsonUsuario, idUsuario) => {
    const url = `https://avicultura-silsa-api.cyclic.app/v1/avicultura-silsan/usuario/${idUsuario}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonUsuario)
    };

    fetch(url, options)
        .then(response => {
            console.log(response);
            if (response.ok) {
                location.reload();
            } else {
                alert('Erro ao trocar senha');
            }
        })
        .catch(error => {
            console.log('Ocorreu um erro na requisição:', error);
        });
}

export const desativarLojista = async (idLojista) => {
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