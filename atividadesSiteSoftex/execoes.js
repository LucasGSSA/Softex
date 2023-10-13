// Utilizando a linguagem JavaScript, crie uma situação matemática na qual os números precisam ser informados
// pelo usuário. Além disso, deve ocorrer uma exceção dentro do código. Utilize os métodos try(), catch() e finally()
// para realizar a captura e o tratamento dessa exceção.

const readline = require('readline-sync');

const numero1 = readline.questionInt("Digite o primeiro numero")
const numero2 = readline.questionInt("Digite o segundo para ser divisor")

try {
    const resultado = (numero1/numero2);
    if (resultado == Infinity) throw new error;
    console.log(resultado);
} catch (error) {
    console.log("error");
} finally{
    console.log("Operação realizada... saindo do programa.");
}
