// Desenvolva um código que simule uma eleição com três candidatos.
// - candidato_X => 889
// - candidato_Y => 847
// - candidato_Z => 515
// - branco => 0

// O código deve perguntar se deseja finalizar a votação depois do voto. 
// Caso o número do voto não corresponda a nenhum candidato ou seja branco, 
// ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, 
// o código deve retornar uma mensagem para votar novamente.

// Quando a votação for finalizada, o código deverá mostrar o vencedor, 
// aquele com o maior número de votos e, também, a quantidade de 
// votos de cada candidato, os brancos e nulos. 

const readline = require("readline-sync");

let candidato_X = 0;
let candidato_Y = 0;
let candidato_Z = 0;
let brancosOuNulos = 0;
/* Eu nao entendi se os valores eram para ser a quantidade de votos que aquele candidato tinha
ou se era pra ser o numero para votar naquele candidato, como nao foi especificado, eu coloquei 
a quantidade de votos para 0 e usei os valores como o numero para votação */

let votacao = true;
while(votacao){
    let perguntaVoto = readline.questionInt("Digite o numero que voce quer votar: ");
    switch(perguntaVoto){
        case 889:
            candidato_X += 1;
            break;
        case 847:
            candidato_Y += 1;
            break;
        case 515:
            candidato_Z += 1;
            break;
        default:
            brancosOuNulos += 1;
            break;
    };

    let repeticao = true;
    while(repeticao){
        let perguntaFimVoto = readline.question(`deseja finalizar as votacoes? Digite "sim" ou "nao": `);
        switch(perguntaFimVoto){
            case 'sim':
                votacao = false;
                repeticao = false;
                break;
            case 'nao':
                repeticao = false;
                break;
            default:
                console.log(`Nao entendi, digite apenas "sim" ou "nao"`);
            break;               
        }   
    }
}

let vencedor = '';
let calculoVencedor = Math.max(candidato_X, candidato_Y, candidato_Z);
console.log(calculoVencedor);


if(calculoVencedor == candidato_X){
    vencedor = "Candidato X"
} else if(calculoVencedor == candidato_Y){
    vencedor = "candidato Y"
} else if(calculoVencedor == candidato_Z){
    vencedor = "candidato Z"
} else{
    vencedor = "empate"
}

console.log(`O vencedor é ${vencedor}.`);

console.log(`Votos para Candidato X = ${candidato_X}.`);
console.log(`Votos para Candidato Y = ${candidato_Y}.`);
console.log(`Votos para Candidato Z = ${candidato_Z}.`);
console.log(`Votos Brancos ou Nulos = ${brancosOuNulos}.`);
