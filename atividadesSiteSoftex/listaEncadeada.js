class Pessoa {
    constructor(nome, idade, filho = null) {
        this.nome = nome;
        this.idade = idade;
        this.filho = filho;
    }
}

class No {
    constructor(pessoa) {
        this.pessoa = pessoa;
        this.proximo = null;
    }
}

class ListaLigada {
    constructor() {
        this.cabeca = null;
    }

    // Adiciona no Início
    addFirst(pessoa) {
        const newNo = new No(pessoa);
        newNo.proximo = this.cabeca;
        this.cabeca = newNo;
    }

    // Adiciona no Fim
    addLast(pessoa) {
        const newNo = new No(pessoa);
        if (!this.cabeca) {
            this.cabeca = newNo;
        } else {
            let current = this.cabeca;
            while (current.proximo) {
                current = current.proximo;
            }
            current.proximo = newNo;
        }
    }

    // Remover do Início
    removeFirst() {
        if (!this.cabeca) {
            return null;
        }
        const removedNo = this.cabeca;
        this.cabeca = this.cabeca.proximo;
        removedNo.proximo = null;
        return removedNo.pessoa;
    }

    // Remover do Fim
    removeLast() {
        if (!this.cabeca) {
            return null;
        }
        if (!this.cabeca.proximo) {
            const removedNo = this.cabeca;
            this.cabeca = null;
            return removedNo.pessoa;
        }
        let current = this.cabeca;
        let previous = null;
        while (current.proximo) {
            previous = current;
            current = current.proximo;
        }
        previous.proximo = null;
        return current.pessoa;
    }

    // Buscar por Nome
    search(nome) {
        let current = this.cabeca;
        while (current) {
            if (current.pessoa.nome === nome) {
                return current.pessoa;
            }
            current = current.proximo;
        }
        return null;
    }

    // Tamanho da Lista
    size() {
        let count = 0;
        let current = this.cabeca;
        while (current) {
            count++;
            current = current.proximo;
        }
        return count;
    }

    // Exibir a Lista
    display() {
        let current = this.cabeca;
        while (current) {
            console.log(`Nome: ${current.pessoa.nome}, Idade: ${current.pessoa.idade}, Filho: ${current.pessoa.filho ? current.pessoa.filho.nome : 'Nenhum'}`);
            current = current.proximo;
        }
    }
}

const lista = new ListaLigada();
const pai = new Pessoa("João", 40);
const filho = new Pessoa("Lucas", 10);
pai.filho = filho;

lista.addFirst(pai);
lista.addLast(new Pessoa("Maria", 35));
lista.display();
