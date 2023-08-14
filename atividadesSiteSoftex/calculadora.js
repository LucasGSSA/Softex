function calculadora(numero1, numero2, acao){
    if(acao == 1){
        let resposta = numero1 + numero2;
        return resposta;
    } else if(acao == 2){
        let resposta = numero1 - numero2;
        return resposta;
    } else if(acao == 3){
        let resposta = numero1 * numero2;
        return resposta;
    } else if(acao == 4){
        if(numero2 == 0){
            let resposta = "Um numero nao pode ser divido por 0"
            return resposta;
        } else if(numero2 != 0){
        let resposta = numero1 / numero2;
        return resposta;
        };
    } else{
        let resposta = "opcão invalida"
        return resposta;
    };
}

console.log(calculadora(2,2,4))