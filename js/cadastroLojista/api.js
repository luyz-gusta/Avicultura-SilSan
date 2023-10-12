'use strict'

export const createLojistaUsuario = async (lojista) => {
    const url = `https://avicultura-silsa-api.cyclic.app/v1/avicultura-silsan/lojista-usuario`

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lojista)
    };

    fetch(url, options)
        .then(response => {
            if (response.ok) {
                location.reload();
                window.location.href = '../pages/adm.html'
            } else {
                alert('Erro ao criar a o usuario do lijista confira os valores')
                console.log('Erro ao criar lojista.');
                console.log(response.status);
                console.log(response.json);
                console.log(response.text);
                console.log(response.body);
                console.log(response.ok);
            }
        })
        .catch(error => {
            console.log('Ocorreu um erro na requisição:', error);
        });
}


