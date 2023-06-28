'use strict'

import { createProduto, getProdutos, getTipoProduto, deleteProduto } from "./api.js"

document.getElementById('nome_usuario').textContent = localStorage.getItem('nome')
var produtos = await getProdutos()
var tiposProdutos = await getTipoProduto()
localStorage.setItem('tipo', 1)

const criarProdutos = (produto) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const imagem_produto = document.createElement('img')
    imagem_produto.src = produto.url

    const nome_produto = document.createElement('div')
    nome_produto.classList.add('descricao')
    nome_produto.textContent = produto.nome

    const preco_produto = document.createElement('div')
    preco_produto.classList.add('preco')
    preco_produto.textContent = 'R$ ' + produto.preco_original

    const preco_produto_desconto = document.createElement('div')
    preco_produto_desconto.classList.add('preco-desconto')
    preco_produto_desconto.textContent = 'R$ ' + produto.preco_desconto

    const editar_deletar = document.createElement('div')
    editar_deletar.classList.add('editar-deletar')

    const cupom = document.createElement('div')
    cupom.classList.add('cupom')

    const icon_cupom = document.createElement('img')
    icon_cupom.src = "../../imgs/lojista/codigo-promocional.png"

    const dados_cupom = document.createElement('p')
    dados_cupom.textContent = produto.cupom


    const editar = document.createElement('div')
    editar.classList.add('editar')

    const icone_editar = document.createElement('i')
    icone_editar.classList.add('fas')
    icone_editar.classList.add('fa-edit')

    icone_editar.addEventListener('click', () => {
        localStorage.setItem('updateProduto', produto.id)

        let abrirModal = document.getElementById('modal__editar')

        abrirModal.classList.add('open-modal')
        document.getElementById('myInputNomeEditar').value = produto.nome
        document.getElementById('myInputPesoEditar').value = produto.peso
        document.getElementById('myInputPrecoEditar').value = produto.preco_original
        document.getElementById('myInputPrecoDescontoEditar').value = produto.preco_desconto
        document.getElementById('codigoGeradoEditar').value = produto.cupom
        document.getElementById('myInputDescricaoEditar').value = produto.descricao
        document.getElementById('tiposEditar').value = produto.tipo
        document.getElementById('myInputUrlEditar').value = produto.url


        document.querySelector('.modal__editar--close').addEventListener('click', () => {
            abrirModal.classList.remove('open-modal')
        })
    })

    const deletar = document.createElement('div')
    deletar.classList.add('deletar')

    const icone_deletar = document.createElement('i')
    icone_deletar.classList.add('fa-solid')
    icone_deletar.classList.add('fa-trash')

    deletar.addEventListener('click', () => {
        let abrirModalDelete = document.getElementById('modal__deletar__produto')

        abrirModalDelete.classList.add('open__modal-delete')
        console.log(abrirModalDelete);
        document.querySelector('.modal__deletar--closer__produto').addEventListener('click', () => {
            abrirModalDelete.classList.remove('open__modal-delete')
        })

        document.getElementById('deletar').addEventListener('click', async () => {
            await deleteProduto(produto.id)
            abrirModalDelete.classList.remove('open__modal-delete')
        })

        document.getElementById('naoDeletar').addEventListener('click', async () => {
            abrirModalDelete.classList.remove('open__modal-delete')
        })
    })

    card.append(imagem_produto, nome_produto, preco_produto, preco_produto_desconto, editar_deletar)
    editar_deletar.append(cupom, editar, deletar)
    cupom.append(icon_cupom, dados_cupom)
    editar.append(icone_editar)
    deletar.append(icone_deletar)

    return card
}

const carregarCardProdutos = async () => {
    const cards = document.querySelector('.cards-produtos')
    const cardsJSON = await produtos.itens.map(criarProdutos)

    cards.replaceChildren(...cardsJSON)
}

carregarCardProdutos()


const criarTipoProduto = (tipo) => {
    const opcaoTipo = document.createElement('option')
    opcaoTipo.textContent = tipo.tipo
    opcaoTipo.id = tipo.id

    return opcaoTipo
}

const carregarTiposProdutos = async () => {
    const select = document.querySelector('#tipos')
    select.addEventListener('change', () => {
        localStorage.setItem('tipo', select.options[select.selectedIndex].id)
    })
    const cardsJSON = await tiposProdutos.tipos.map(criarTipoProduto)

    select.replaceChildren(...cardsJSON)
}

carregarTiposProdutos()


const criarNovoProduto = async () => {
    let nome = document.getElementById('myInputNome').value
    let peso = document.getElementById('myInputPeso').value
    let precoOriginal = document.getElementById('myInputPreco').value
    let precoDesconto = document.getElementById('myInputPrecoDesconto').value
    let cupom = document.getElementById('codigoGerado').value
    let descricao = document.getElementById('myInputDescricao').value
    let tipoProduto = localStorage.getItem('tipo')
    let urlImagem = document.getElementById('myInputUrl').value

    if (
        nome == '' || nome == null || peso == '' || peso == null ||
        precoOriginal == '' || precoOriginal == null || precoDesconto == '' || precoDesconto == null ||
        cupom == '' || cupom == null || descricao == '' || descricao == null ||
        urlImagem == '' || urlImagem == null
    ) {
        let abrirModalErro = document.getElementById('modal__deletar')
        abrirModalErro.classList.add('open-erro')
        document.querySelector('.modal__deletar--close').addEventListener('click', () => {
            abrirModalErro.classList.remove('open-erro')
        })
    } else {
        let jsonProduto = {
            nome: nome,
            descricao: descricao,
            peso: parseFloat(peso),
            cupom: cupom,
            url: urlImagem,
            preco_original: parseFloat(precoOriginal),
            preco_desconto: parseFloat(precoDesconto),
            id_tipo_produto: parseFloat(tipoProduto)
        }

        let abrirModal = document.getElementById('modal__adicionar')
        abrirModal.classList.remove('open-modal')
        let inserirProduto = await createProduto(jsonProduto)
    }
}

const openModal = () => {
    let abrirModal = document.getElementById('modal__adicionar')

    abrirModal.classList.add('open-modal')
    document.querySelector('.modal__adicionar--close').addEventListener('click', () => {
        abrirModal.classList.remove('open-modal')
    })
}

document.getElementById('openModal').addEventListener('click', openModal)

document.getElementById('salvarBtn').addEventListener('click', criarNovoProduto)