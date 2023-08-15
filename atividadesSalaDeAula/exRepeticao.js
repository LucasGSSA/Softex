const readline = require('readline-sync');




let a = 1;
while(a<11){
    console.log(a);
    a++;
}


console.log("------------")

let soma = 0;
let b = 1;

while(b<101){
    soma = soma + b;
    b++;
    console.log(soma);
};

console.log("------------")

let c = 1;

let numPar = [];

while(c<51){
    console.log("c =",c)
    c++;
    if(c%2 == 0){
        numPar.push(c);
    }
};
console.log(numPar);

let d = 1;
while(d<1000){
    d *= 2
    console.log(d)
}

const E = 7;
let div = 1;
while(div < E){
    if(E%div == 0){
        console.log(div)
    }
    div++;
}

const senhaDef = "123";

let senha = readline.question("qual sua senha: ")

while(true){
    if(senha == senhaDef){
        console.log("senha correta!")
        break;
    }   else {console.log("sehna incorreta! ")
        senha = readline.question("tente novamente! Qual sua senha?")
    };
}

let g = 1;
let op = 3;
while(g<31){
    if(g%op == 0){
        console.log(g, "é multiplo de 3")
    };
    g++;
}

let listaNumeros = [1,4,5];
let somaNumeros = 0;
let i = 0;

while(i < listaNumeros.length){
    somaNumeros += listaNumeros[i];
    i++;
}
let media = somaNumeros / listaNumeros.length;
console.log(media);


let calculoFat = 1;
let numFat = 7;
let totalFat = 7;

while (calculoFat < numFat){
    totalFat = totalFat * (numFat - calculoFat);
    calculoFat++;
}
console.log(totalFat);








let numMaior = 10;
while(numMaior>0){
    console.log(numMaior)
    numMaior--;
}