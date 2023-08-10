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

// function mostrarNumeros(numeroInicio, numeroFim){
//     if(numeroInicio == undefined){
//         mostrarNumeros = readline.question("Digite o numero de Inicio da lista: ")
//     };
//     if(numeroFim == undefined){
//         numeroFim = readline.question("Digite o numero do final da lista: ")
//     }
//     while(numeroInicio <= numeroFim){
//         console.log(numeroInicio);
//         numeroInicio++;
//     };
// };

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
// mostrarNumeros(,5);
// verificarPar();
// imprimirLista(frutas);

function exibirSaudacao2(nome, saudacao='hello', pergunta='tudo bem?'){
    console.log(`${saudacao}, ${nome}, ${pergunta}`)
};






function saudacao(nome='Pessoa'){
    console.log(`Ola, ${nome}`);
};


function calculadora(num1, num2, operacao ="+"){
    switch(operacao){
        case '+':
            console.log(num1 + num2);
            break;
        case '-': 
            console.log(num1 - num2);
            break 
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            console.log(num1 / num2);
            break
        default:
    };
};


function contagemRegressiva(numMaior='10'){
    for(let i = numMaior; i > 0; i--){
    console.log(i);
    };
};



function apresentacao(nome="Pessoa", idade="18", profissao="trabalhador"){
    console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}.`);
};

function mensagemPersonalizada(texto, estilo='normal'){  
    console.log(`"${texto}" está no estilo ${estilo}.`);

};

function criarMensagemDeSaudacao(nome){
    const mensagem = `helo, ${nome}`;
    return mensagem;
}

function somar(num1, num2){
    const soma = num1 + num2;
    return soma;
}

function ehPar(num){
    const resposta = num%2 == 0;
    return resposta;
}

function maiorNumero(num1, num2, num3){
    const maior = Math.max(num1,num2,num3)
    return maior;
}

function calcularIMC(peso, altura){
    const IMC = peso / (altura*altura);
    return IMC;
}

function respostaIMC(peso, altura){
    calcularIMC(peso, altura);
    if (calcularIMC()< 18){
        const frase = `IMC baixo}`
        return frase;
    } else if (calcularIMC()> 24){
        const frase = `IMC baixo}`;
        return frase;
    } else {
        const frase = `IMC normal`;
        return frase;
    }
}

console.log(respostaIMC(70, 1.80));