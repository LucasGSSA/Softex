// function aleatorio(min, max){
//     return Math.random() * (max * min) + min;
// }
// let carta1= aleatorio(1,10);

// console.log(carta1)








// let carta1 = aleatorio(0,10);
// let carta2;
// let carta3;

// let resultado = carta1 + carta2 + carta3;

// if(resultado > 21){
//     console.log(resultado + " voce perdeu")
// }   else{
//     console.log(resultado + " sao seus pontos")

// console.log(carta1);




let carta1 = 10;
let carta2 = 10;
let carta3 = 1;
let resultado = carta1 + carta2 + carta3;

if(resultado > 21){
    console.log("voce perdeu")
} else {
    console.log("seus pontos sao " + resultado)
};

console.log(carta1 + " + " + carta2 + " + " + carta3 + " = " + resultado);

let cartab1 = 3;
let cartab2 = 3;
let cartab3 = 3;
let cartab4 = 3;
let resultadoBanco = cartab1 + cartab2 + cartab3 + cartab4;

if(resultadoBanco > 21){
    console.log("o banco perdeu")
} else if(resultado < 22 && resultado > resultadoBanco){
    console.log("o banco perdeu");
}   else{
    console.log("o banco venceu")
};