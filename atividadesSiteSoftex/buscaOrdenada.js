numeros = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
let buscado = 20;

function buscaOrdenada(array, procurado) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === procurado) return `${procurado} está na posição ${i + 1} do Array [${array}]`;
    }
    return `Não foi encontrado o ${procurado} no Array [${array}]`;
}

console.log(buscaOrdenada(numeros, buscado));