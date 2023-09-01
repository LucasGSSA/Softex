
//REMOÇÃO EM PILHA:
let elementos =  [3, 7, 9, 1, 0];
function removerPilha(array){
    if(array.length === 0) return console.log("Pilha vazia, operação cancelada")
    return array.pop();
};
console.log(elementos);//output esperado: [ 3, 7, 9, 1, 0 ]
removerPilha(elementos);//função de remover o ultimo indice dentro do Array
console.log(elementos);//output esperado: [ 3, 7, 9, 1 ]


//REMOÇÃO EM FILA:
elementos =  [3, 7, 9, 1, 0];
function removerFila(array){
    if(array.length === 0) return console.log("Fila vazia, operação cancelada")
    return array.shift();
};
console.log(elementos);//output esperado: [ 3, 7, 9, 1, 0 ]
removerFila(elementos);//Função de remover o primeiro indice dentro do Array
console.log(elementos);//output esperado: [ 7, 9, 1, 0 ]


//REMOÇÃO EM LISTA:
elementos =  [3, 7, 9, 1, 0];
function removerLista(array, indice){
    if(array.length === 0) return console.log("Lista vazia, operação cancelada")
    return array.splice(indice, 1);
};

console.log(elementos);//output esperado: [ 3, 7, 9, 1, 0 ]
removerLista(elementos, 2);//Função de remover o indice 2 (3º item) do array
console.log(elementos);//output esperado: [ 3, 7, 1, 0 ]