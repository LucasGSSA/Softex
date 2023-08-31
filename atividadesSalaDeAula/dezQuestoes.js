const readline = require("readline-sync");

// let perguntaNome = readline.question("Qual o seu nome? ")
// let nota1 = readline.questionInt("Qual sua primeira nota? ")
// let nota2 = readline.questionInt("Qual sua segunda nota? ")
// let nota3 = readline.questionInt("Qual sua terceira nota? ")
// let media = (nota1 + nota2 + nota3) / 3;
// console.log(`Aluno: ${perguntaNome}, Média: ${media}`);

// let perguntaAno = readline.questionInt("Digite um ano: ")
// let respostaAnoBissexto = "Não é bissexto";
// if((perguntaAno % 4 == 0 || perguntaAno % 400 == 0) && perguntaAno % 100 !== 0) respostaAnoBissexto = "É bissexto";
// console.log( respostaAnoBissexto);

// let valor = readline.questionInt("Qual o valor? ")
// let estado = readline.question("Qual o estado? ")
// let impostoEstado = 0;
// switch(estado){
//     case "MG":
//         impostoEstado = 1.07;
//         break;
//     case "SP":
//         impostoEstado = 1.12;
//         break;
//     case "RJ":
//         impostoEstado = 1.15;
//         break;
//     case "MS":
//         impostoEstado = 1.08;
//         break;
//     default:
//         throw console.error(`Estado nao listado, Estados: "MG", "SP", "RJ", "MS".`);
// };
// let calculo = valor * impostoEstado;
// console.log(`Preço do produto de valor ${valor} para estado ${estado}: ${calculo}`);


// let paresFor = [];
// for(i = 0; paresFor.length < 50; i++) if(i%2==0)paresFor.push(i);
// console.log(paresFor);

// let paresWhile = [];
// let j = 0;
// while(paresWhile.length < 50){
//     if (j%2==0) paresWhile.push(j);
//     j++;
// }
// console.log(paresWhile);

// let paresDo = [];
// let k = 0;
// do {
//     if(k%2==0) paresDo.push(k);
//     k++;
// } while (paresDo.length < 50);
// console.log(paresDo);

//for melhor, mais enxuto e mais facil de modificar, também precisa declarar menos coisa


// let numeroUsuario = readline.questionInt("Quantos primeiros numeros pares voce deseja? ");
// let numerosImpares = [];
// for(i=0;numerosImpares.length<numeroUsuario; i++) if(i%2!=0) numerosImpares.push(i);
// console.log(numerosImpares);



// let quantidadeDias = readline.questionInt("Quantos dias de trabalho? ");
// let calculoValorLiquido = (30 * quantidadeDias) * 0.92;
// console.log(calculoValorLiquido);



let horario = readline.question("Digite o horario no formato (hh:mm:ss): ").split(":");
let horarioAdicional = readline.question("Digite o tempo que voce deseja adicionar no formato (hh:mm:ss): ").split(":");

console.log(horario, horarioAdicional);


let tempoTotal = [];

for(i=0; i<3; i++) tempoTotal[i] = parseInt(horario[i]) + parseInt(horarioAdicional[i]);
console.log(`Tempo total: (${tempoTotal[0]}:${tempoTotal[1]}:${tempoTotal[2]})`);


