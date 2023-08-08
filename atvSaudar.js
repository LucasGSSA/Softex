const readline = require('readline-sync');


/*function exibirSaudacao(nome){
    if(nome === undefined || nome == ""){
        nome = "world"
    };
    console.log("Hello", nome + "!");  
};
exibirSaudacao();

function superSaudacao(nome,idade,dia,mes,ano){
    console.log(`Olá ${nome}, você tem ${idade} anos, nasceu dia ${dia} do mes de ${mes} do ano de ${ano}.`);
};
superSaudacao("lucas", 18, 16, "fev", 2005);
*/

// function saudacao(){
//     console.log(`Olá, mundo!`);
// };

// function dobro(numero){
//     if(numero == undefined){
//         numero = readline.question("Escreva o numero para ser duplicado: ");
//     }
//     var dobroNumero = numero * 2;
//     console.log(`O dobro de ${numero} é ${dobroNumero}`);
// };

function mostrarNumeros(numeroInicio, numeroFim){
    if(numeroInicio == undefined){
        mostrarNumeros = readline.question("Digite o numero de Inicio da lista: ")
    };
    if(numeroFim == undefined){
        numeroFim = readline.question("Digite o numero do final da lista: ")
    }
    while(numeroInicio <= numeroFim){
        console.log(numeroInicio);
        numeroInicio++;
    };
};

// function verificarPar(numero){
//     if(numero == undefined){
//         numero = readline.question("Digite o numero para saber se é par: ")
//     }
//     if(numero%2==0){
//         console.log(`${numero} é par.`);
//     } else {
//         console.log(`${numero} é Impar`);
//     }
// };

// let frutas = ['banana', 'maca','abacaxi'];


// function imprimirLista(array){
//     let i =0;
//     while(i < array.length){
//         console.log(array[i]);
//         i++;
//     }
// }


// saudacao();
// dobro();
mostrarNumeros(,5);
// verificarPar();
// imprimirLista(frutas);