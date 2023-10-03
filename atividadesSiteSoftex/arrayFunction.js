function normal(){
    return "Olá, pessoa"
};

function parametros(nome){
    return `Olá ${nome}`
};

const arquinho = (nome, nota1, nota2) => {
    return `olá ${nome}, média: ${(nota1+nota2)/2}`
};

console.log(arquinho("lucas",7,8));
