class ValidacoesClientes {
    
    static validaNome(nome){
        const nomeNum = (nome)
        if(nome.length >= 3 ){
            return true
        } else {
            return false
        }
    }

    static validaEmail(email){
        if( email.length >= 8 ){
            return true
        } else {
            return false
        }
    }
}

export default ValidacoesClientes