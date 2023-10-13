// Com base no que estudamos, escolha dois objetos materiais e dois abstratos. Em seguida, faça uma lista com,
// pelo menos, três atributos e três métodos para cada tipo de objeto. Para finalizar, demonstre esses objetos em
// JavaScript e exemplifique as suas características e ações.

//telivisao ventilador // certeza perdao/

class Tv {
    constructor(cor, tamanho, marca) {
        this.cor = cor;
        this.tamanho = tamanho;
        this.marca = marca;
        this.ligada = false;
        this.canal = 0;
        this.volume = 0;
    }

    ligar() {
        if (this.ligada == true) console.log(`A tv ja está ligada!`)
        else {
            this.ligada = true;
            console.log(`A Tv foi Ligada!`);
        };
    }

    desligar(){
        if (this.ligada == false) console.log(`A Tv ja está desligada!`);
        else {
            this.ligada = false;
            console.log(`A Tv foi desligada!`);
        }
    }

    canal(numeroCanal){
        if(this.tv == false) console.log(`A Tv está desligada!`);
        else{
            this.canal = numeroCanal;
            console.log(`Canal mudado para ${this.canal}`);
        }
    }
    status(){
        console.log(`Status da TV:`);
        console.log(`Tv de marca: ${this.marca}`)
        console.log(`Tamanho: ${this.tamanho}`)
        console.log(`Cor: ${this.cor}`)
        console.log(`Canal atual: ${this.canal}`)
        console.log(`Tv Ligada: ${this.ligada}`)
    }
}

// const MinhaTv = new Tv("Prateada", "19 Polegadas", "LG");

// MinhaTv.status();


class Ventilador {
    constructor(marca, tamanho, potencia){
        this.marca = marca;
        this.tamanho = tamanho;
        this.potencia = potencia;
        this.speed = 0;
        this.ligado = false;
    }


    ligar(velocidade){
        if(this.ligado == true) console.log(`Ventilador ja ligado na velocidade${this.speed}`);
        else {
            this.ligado = true;
            console.log(`Ventilador ligado, está na velocidade ${this.speed}`);
        }
    }
    desligar(){
        if(this.ligado == false)console.log(`Ventilador ja está desligado`);
        else{
            this.ligado = false;
            console.log(`Ventilador desligado.`);
        }
    }

    mudarVelocidade(velocidade){
        if(this.ligado == false) console.log("Ventilador está desligado, ligue-o antes.");
        else{
            this.speed = velocidade;
            console.log(`Velocidade alterada para ${this.speed}`);
        }
    }
    status(){
        console.log(`Status do ventilador:`);
        console.log(`Ventilador de marca: ${this.marca}`)
        console.log(`Tamanho: ${this.tamanho}`)
        console.log(`Potencia eletrica: ${this.potencia}`)
        console.log(`Velocidade Atual: ${this.speed}`)
        console.log(`Ventilador Ligado: ${this.ligada}`)
    }
}
const MeuVentilador = new Ventilador("ARNO", "20 cm", "220w");

MeuVentilador.ligar();
MeuVentilador.mudarVelocidade(3);
MeuVentilador.status();