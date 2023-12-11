class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é:  ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('Andre')
const pessoa2 = new Pessoa('Márcia')
pessoa1.falar();
pessoa2.falar();


const criarPessoa = nome =>{
        return{
            falar: () => console.log(`Meu nome é:  ${nome}`)
        }
}

const pessoa3 = criarPessoa('Enzo');
pessoa3.falar();