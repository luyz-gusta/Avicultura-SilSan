import { produtos_cadastrados } from "./jsonFake.js";

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


    const deletar = document.createElement('div')
    deletar.classList.add('deletar')

    const icone_deletar = document.createElement('i')
    icone_deletar.classList.add('fa-solid')
    icone_deletar.classList.add('fa-trash')


    card.append(imagem_produto, nome_produto, preco_produto, editar_deletar)
    editar_deletar.append(cupom, editar, deletar)
    cupom.append(icon_cupom, dados_cupom)
    editar.append(icone_editar)
    deletar.append(icone_deletar)

    return card
}

const carregarCardProdutos = () => {
    const cards = document.querySelector('.cards-produtos')
    const cardsJSON = produtos_cadastrados.itens.map(criarProdutos)

    cards.replaceChildren(...cardsJSON)
}

carregarCardProdutos()