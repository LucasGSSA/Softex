const pessoa = {};

pessoa.nome = "joao";

console.log(pessoa.nome);

const usuario = {
    idade: 18,
};

console.log(usuario.idade);

const produto = {
    preço: 50,
}

produto.preço = 75;

console.log(produto.preço);

const contato = {
    email: "blablabla@gmail.com"
}
console.log(contato.email);

delete contato.email;
console.log(contato.email);

const cliente = {};

cliente.endereço = "Rua A, 123"

console.log(cliente.endereço);

const empresa = {
    departamentos: [1,2,3],
}
console.log(empresa.departamentos[0]);

const alunos = {
    notas: [85,90,78],
}

console.log(alunos.notas[1]);
alunos.notas[1] = 95;
console.log(alunos.notas[1]);

const dados = {
    valores: [10,20,30],
}
console.log(dados.valores[1]);
dados.valores.splice(1,1)
console.log(dados.valores[1]);

const objetos = {
    titulo: "Livro",
    autor: "maria",
}
console.log(objetos.titulo);