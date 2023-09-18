const readline = require("readline-sync");

let valor1 = readline.questionInt("Digite o primeiro valor: ");
let operacao = readline.question("Qual operação? ");
let valor2 = readline.questionInt("Digite o segundo valor: ");
let resultado;

switch (operacao) {
    case "+":
        resultado = valor1 + valor2;
        console.log(`Resultado: ${resultado}`);
        break;
    case "-":
        resultado = valor1 - valor2;
        console.log(`Resultado: ${resultado}`);
        break;
    case "*":
        resultado = valor1 * valor2;
        console.log(`Resultado: ${resultado}`);
        break;
    case "/":
        resultado = valor1 / valor2;
        console.log(`Resultado: ${resultado}`);
        break;
    case "%":
        resultado = valor1 % valor2;
        console.log(`Resultado: ${resultado}`);
        break;
    default:
        console.log("Operação invalida, digite (/ ou * ou - ou + ou %)");
        break;
};