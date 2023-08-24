let nomes = ['lucas', 'joao', 'julia', 'clara', 'maria','josé', 'pedro', 'miguel','guilherme','luiza'];
let idades = [18,18,19,17,19,20,30,29,20,39];
let cor = ['azul','verde','vermelho','roxo','cinza','amarelho','laranja','marrom','ciano','rosa'];

console.log(nomes);
console.log(idades);
console.log(cor);

cor.splice(2,1,'branco');
idades.splice(1,1,20)

console.log(nomes);
console.log(idades);
console.log(cor);
