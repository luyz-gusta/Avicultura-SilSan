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
                if(response.status == 400){
                    alert('ERRO, email já existente')
                }else{
                    alert('Erro ao criar a o usuario do lijista confira os valores')
                }
            }
        })
        .catch(error => {
            console.log('Ocorreu um erro na requisição:', error);
        });
}


