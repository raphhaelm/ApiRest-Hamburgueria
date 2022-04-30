class ValidacoesCardapio {

    static validaProduto(produto) {

        if (produto.length >= 5) {
            return true
        } else {
            return false
        }
    }
    static ValidaPreco(preco) {
        const precoNum = parseInt(preco)
        if (precoNum == preco) {
            return true
        } else {
            return false
        }
    }

}

export default ValidacoesCardapio
