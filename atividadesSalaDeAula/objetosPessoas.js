// const USUARIOS = [
//     {nome: "Lucas", idade: 18},
//     {nome: "João", idade: 19},
//     {nome: "Pedro", idade: 20},
//     {nome: "Maria", idade: 18},
//     {nome: "José", idade: 23},
//     {nome: "Carla", idade: 28},
//     {nome: "Ana", idade: 20},
//     {nome: "Bia", idade: 23},
// ];

// for(let i in USUARIOS){
//     console.log(`nome: ${USUARIOS[i].nome}, idade: ${USUARIOS[i].idade} `);
// };

// for(let elemento of USUARIOS){
//     console.log(elemento.nome);
// }

// const NUMEROS = [110,123,123,44,25,521,52];
// const PALAVRAS = ["cadeira", "pano", "chao", "agua"];
// const LOGICOS = [true, false, false, true, true];

// for (let i in NUMEROS){
//     console.log(NUMEROS[i]);
// }
// console.log("=================");
// for (let i of NUMEROS){
//     console.log(i);
// }

// console.log("////////////////////////");

// for (i in PALAVRAS){
//     console.log(PALAVRAS[i]);
// }

// console.log("========");

// for (i of PALAVRAS){
//     console.log(i);
// }

// console.log("//////////////////////////");

// for (i in LOGICOS){
//     console.log(LOGICOS[i]);
// }

// console.log("============");

// for (i of LOGICOS){
//     console.log(i);
// }

// const NUMEROS = [3, 7, 2, 9, 5];
// for(i of NUMEROS){
//     console.log(i);
// };

// console.log("///////////////////");

// const OBJETO = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
// };

// for(i in OBJETO){
//     console.log(OBJETO[i]);
// }


// const array = [12, 5, 8, 21, 16, 7, 90, 98]

// let arrayPar = [];

// for(i in array){
//     if(array[i] % 2 == 0){
//         arrayPar.push(array[i])
//     }
// }
// console.log( arrayPar);

// const ESTUDANTES = {
//     alice: 18,
//     bob: 20,
//     carol: 19,
//     david: 21,
// };

// for(i in ESTUDANTES){
//     if(ESTUDANTES[i] == 19){
//         console.log(ESTUDANTES[i]);
//         console.log(i);
//     }
// };


const PONTOS = [
    [2,5,8],
    [3,9,12],
    [4,6,10],
]

let soma = 0;

for(linha of PONTOS){
    for(coluna of linha){
       soma = soma + coluna;
    }
}
console.log(soma);