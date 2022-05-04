export class ValidacoesFornecedores {
    
    // static validaInsertAndUpdate(nome, ramo, cnpj){
    //     const cnpjNum = parseInt(cnpj)
    //     if(nome.length >= 3 && ramo.length >= 3 && cnpj.length == 14 && cnpjNum == cnpj){
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    static validaNomeFornecedor(nome){
        if(nome.length >= 3){
            return true
        } else {
            return false
        }
    }

    static validaRamoFornecedor(ramo){
        if(ramo.length >= 3){
            return true
        } else {
            return false
        }
    }

    static validaCnpjFornecedor(cnpj){
        const cnpjNum = parseInt(cnpj)
        if(cnpj.length == 14 && cnpj == cnpjNum){
            return true
        } else {
            return false
        }
    }
}

