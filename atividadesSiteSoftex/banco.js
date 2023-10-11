// Crie um código com um objeto chamado "Banco". Ele deverá ter propriedades que incluem conta, saldo, tipo de
// conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.
// Observações:
// - buscar saldo deve retornar o valor atual do saldo;
// - para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
// - para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
// - o número da conta deve retornar o número da conta.
// Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no
// campo ao lado para que outros desenvolvedores possam analisá-lo.
let numConta = 0;
class ContaBancaria{

    constructor(tipoConta,){
        this.conta = ++numConta;
        this.saldo = 0;
        this.tipo = tipoConta;
        this.agencia = "001";
    };

    deposito(valor){
        this.saldo += valor;
    };

    saque(valor){
        this.saldo -= valor;
    };
    buscarSaldo(){
        console.log(`Saldo: R$${this.saldo}`);
    }
    numConta(){
        console.log(`Conta: ${this.conta}, agencia: ${this.agencia}`);
    }
}

const Banco = new ContaBancaria("Conta corrente");//criando uma conta Banco
const NovoBanco = new ContaBancaria("Conta Poupança");//crianco uma nova conta


Banco.buscarSaldo();//saldo inicial:0
Banco.deposito(150);//adicionando 150 de saldo
Banco.buscarSaldo();//mostrando os 150 de saldo
Banco.saque(50);//removendo 50 de saldo
Banco.buscarSaldo();//mostrando o novo saldo após saque
Banco.numConta();//mostrando o numero da conta e agencia

NovoBanco.numConta();//Testando o numero da conta para checar se nao está se repetindo.