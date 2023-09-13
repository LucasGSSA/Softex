const readline = require("readline-sync");

let nota1 = readline.questionInt("Digite o valor da nota 1: ");
let nota2 = readline.questionInt("Digite o valor da nota 2: ");
let nota3 = readline.questionInt("Digite o valor da nota 3: ");

let media = (nota1 + nota2 + nota3)/3;
console.log(`Sua média é ${media}`);