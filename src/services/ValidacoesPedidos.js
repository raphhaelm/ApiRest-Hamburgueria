class ValidacoesPedidos {
    static validaNome(str) {
        if (str.length >= 3) {
            return true
        } else {
            return false
        }
    };
    static validaPedido(produto) {
        if (produto.length > 0) {
            return true
        } else {
            return false
        }
    };
    static validaPreco(preco) {
        const precoNum = parseInt(preco);
        if (precoNum == preco) {
            return true
        } else {
            return false
        }
    };
};

export default ValidacoesPedidos;