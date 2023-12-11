class Avo {
    constructor(sobreNome){
        this.sobreNome = sobreNome;
    }

}

class Pai extends Avo{
constructor(sobreNome,profissao = 'Developer'){
    super(sobreNome);
    this.profissao = profissao;

}
}

class Filho extends Pai{
    
    constructor(){
        super('Heller')
        var nome;
    }
}

const filho = new Filho;
filho.nome = 'Andre';
console.log(filho);