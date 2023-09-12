const readline = require("readline-sync")
let pessoa1 = {};

pessoa1.nome = readline.question("Qual o seu nome? ");
pessoa1.idade = readline.questionInt("Qual sua idade? ");
pessoa1.salario = readline.questionInt("Qual o seu salário? ");
let perguntaDiploma = readline.question(`Voçê possui diploma? responda com "sim" ou "nao" `);
if (perguntaDiploma == "sim") perguntaDiploma = true
else perguntaDiploma = false;
pessoa1.diploma = perguntaDiploma

console.log(pessoa1);



