const readline = require('readline-sync');

let perguntaNumero = readline.questionInt("diga um numero inteiro: ")





function fatorial(numero){
    if(numero == 1 || numero == 0){
        return 1;
    } else {
        return numero * fatorial(numero - 1);
    };
};










function somaRecursiva(numero){
    if(numero == 0){
        return 0;
    } else {
        return numero + somaRecursiva(numero-1);
    };
}


function fibonacci(numeroInicial){
    if (numeroInicial == 1){
        return 1;
    } else{
    numeroInicial = fibonacci(numeroInicial - 1) + fibonacci(numeroInicial - 2)
    };
}

fibonacci(perguntaNumero);

