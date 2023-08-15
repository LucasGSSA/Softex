const readline = require('readline-sync');
let perguntaNumero = readline.questionInt("Digite um numero Par: ");

// function refazerPergunta(variavel, texto){
//     variavel = readline.question(`${texto}`);
// };


while (true){
   if(perguntaNumero % 2 === 0){
        break;
    } else if(typeof(perguntaNumero) == 'number' && perguntaNumero % 2 != 0) {
        console.log("voce digitou um numero impar, por favor digite um numero par.");
        perguntaNumero = readline.question("Digite novamente: ");
    } else{
    }
};

console.log(typeof(perguntaNumero));

