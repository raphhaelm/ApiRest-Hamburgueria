class ValidacoesPedidos{
static validaNome(str){
    if(str.length >= 3){
        return true
    } else {
        return false
    }
}
static ValidaPedido(produto){
    if(produto != ""){
        return true
    } else {
        return false
    }
}

}  
export default ValidacoesPedidos