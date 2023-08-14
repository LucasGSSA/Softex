const readline = require('readline-sync');
let perguntaNumero = readline.question("Digite um numero Par: ");

// function refazerPergunta(variavel, texto){
//     variavel = readline.question(`${texto}`);
// };


while (true){
    try{
    if(perguntaNumero % 2 === 0){
        break;
    } else if(typeof(perguntaNumero) != 'number') {
        console.log("voce digitou um numero impar, por favor digite um numero par.");
        perguntaNumero = readline.question("Digite novamente: ");
    } else{
        return error;
    }
} catch(error){
    console.log("voce digitou um caractere que nao é um numero.");
};
};

console.log(typeof(perguntaNumero));

