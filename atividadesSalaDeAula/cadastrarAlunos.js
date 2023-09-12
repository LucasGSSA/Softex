const readline = require("readline-sync");

const aluno1 = {
    matricula: 1,
    nome: "Lucas",
    notas: [10,10,1],
};
const aluno2 = {
    matricula: 2,
    nome: "Matheus",
    notas: [7,7,7],
}

let geradorMatricula = 2;


let alunos = [aluno1, aluno2];

function novoCadastro(nome, nota1, nota2, nota3){
    this.matricula = geradorMatricula;
    this.nome = nome;
    this.notas = [nota1, nota2, nota3];
    this.media = (this.nota1 + this.nota2 + this.nota3) /3
}




console.log(alunos);



let loopSistema = true;
while(loopSistema){

    console.log("===== MENU =====");
    console.log("ESCOLHA UMA OPÇÃO");
    console.log("0 - SAIR");
    console.log("1 - ADICIONAR ALUNO");
    console.log("2 - Listar alunos");
    console.log("3 - Editar alunos");
    console.log("4 - Excluir aluno");
    

    let escolha = readline.questionInt("Digite a opção: ")
    switch (escolha) {
        case 0:
            console.log("Saindo do Sistema...");
            loopSistema = false;
            break;
        case 1:
            let nomeNovoAluno = readline.question("Digite o nome do aluno: ");
            let notas = [];
            for(let i = 0; i < 3; i++){
                notas[i] = readline.questionInt(`Digite a nota ${i+1} do aluno: `);
            }
            geradorMatricula++
            const novoAluno = new novoCadastro(nomeNovoAluno, notas[0], notas[1], notas[2])
            alunos.push(novoAluno);
            break;
        case 2:
            for(let num of alunos){
                console.log(num.nome);
                for(let i in num){
                    console.log(`${i}: ${num[i]}`);
                }
                console.log("//////////");
            }
            break;
        case 3:
            console.log(alunos);
            let edicao = readline.questionInt("Digite o numero da matricula ");
            for(let n of alunos){
                if(n.matricula === edicao){
                    console.log(n);
                    let mudanca = readline.question(`O que voce deseja editar? `);
                    let alteracao = readline.question("deseja mudar para que coisa? ")
                    n[mudanca] = alteracao;
                };
            };
            break;

        case 4:
            console.log(alunos);
            let apagarAluno = readline.questionInt("Digite o numero da matricula do aluno que voce deseja apagar: ")
            for(let i of alunos){
                if(i.matricula == apagarAluno){
                    alunos.splice(alunos.indexOf(i), 1);
                }
            }
            break;
        default:
            console.log("Opção invalida, digite uma opção valida.");
            break;
    };


};
