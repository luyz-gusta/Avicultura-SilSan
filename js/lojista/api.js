'use strict'

export const getProdutos = async () => {
    const url = `https://avicultura-silsa-api.cyclic.app/v1/avicultura-silsan/produto`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getTipoProduto = async () => {
    const url = `https://avicultura-silsa-api.cyclic.app/v1/avicultura-silsan/tipo-produto`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const createProduto = async (produto) => {
    const url = `https://avicultura-silsa-api.cyclic.app/v1/avicultura-silsan/produto`

    console.log(produto)

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    };

    fetch(url, options)
        .then(response => {
            if (response.ok) {
                location.reload();
            } else {
                console.log(response);
                console.log(response.body);
                console.log(response.json);
                console.log(response.status);
                console.log(response.redirected);
                alert('Erro ao criar a produto confira os valores')
                console.log('Erro ao criar a produto.');
                console.log(url);
                console.log(options);
            }
        })
        .catch(error => {
            console.log('Ocorreu um erro na requisição:', error);
        });
}

export const updateProduto = async (produto) => {
    console.log(produto);
    const url = `https://avicultura-silsa-api.cyclic.app/v1/avicultura-silsan/produto/${produto.id}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    };

    fetch(url, options)
        .then(response => {
            if (response.ok) {
                location.reload();
            } else {
                console.log(response);
                console.log('Erro ao atualizar o produto.');
            }
        })
        .catch(error => {
            console.log('Ocorreu um erro na requisição:', error);
        });

}

export const deleteProduto = async (id) => {
    const url = `https://avicultura-silsa-api.cyclic.app/v1/avicultura-silsan/produto/${id}`;
    const options = {
        method: 'DELETE'
    };

    fetch(url, options)
        .then(response => {
            if (response.ok) {
                location.reload();
            } else {
                console.log('Erro ao apagar produto');
            }
        })
        .catch(error => {
            console.log('Ocorreu um erro na requisição:', error);
        });
}