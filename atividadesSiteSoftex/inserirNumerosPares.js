const readline = require('readline-sync');


while (true){
    try{
        let perguntaNumero = readline.questionInt("Digite um numero Par: ");
        if(isNaN(perguntaNumero) == false){
            if(perguntaNumero % 2 == 0){
            console.log("parabens, voce digitou um numero Par!");
            break;
            } else{
                console.log("voce digitou um numero impar");
            }
        } else{
            throw new error("O valor que voce digitou não é um numero!")
        }
    } catch(error){
        console.log(error);
        console.log("Valor invalido!");
    }
};

