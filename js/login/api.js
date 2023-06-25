'use strict'

export const getUsuarioLogin = async (email, senha) => {
    const url = `https://avicultura-silsa-api.cyclic.app/v1/avicultura-silsan/usuario-email-senha/${email}?senha=${senha}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}