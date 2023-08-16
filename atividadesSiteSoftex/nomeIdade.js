/* 
Desenvolva um programa que recebe do usuário nome completo e ano de nascimento 
que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome 
do usuário e a idade que completou, ou completará, no ano atual (2022).
Caso o usuário não digite um número ou apareça um inválido no campo do ano, 
o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.
*/
const readline = require('readline-sync')


while(true){
    try{
        let nome = readline.question("informe seu nome completo: ")
        let dataNascimento = readline.questionInt("digite o ano do seu nascimento: ")
        if(isNaN(dataNascimento) == true || dataNascimento < 1922 || dataNascimento > 2022){
            console.log(`${dataNascimento} não é um numero ou é menor que 1922 ou maior que 2022, favor digite um numero`);
        } else{
            let idade = 2023 - dataNascimento
            console.log(`Seu nome é ${nome}, sua idade é de ${idade} anos.`);
            break;
        };
    } catch (error){
        console.log(error);
        console.log(`Erro, por favor preencha novamente `);
    }
};

