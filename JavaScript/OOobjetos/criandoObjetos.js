//usando notação literal

const obj1 = {};
console.log(obj1);

//objtos em js
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2); 

//funçoes construtoras
function Produto(nome,preco,desc){
    this.nome = nome;
   this.getPrecoDeDesconto = () => {
       return preco * (1- desc)
   }
}
const p1 = new Produto('Caneta',7.99,0.15);
const p2 = new Produto('Notbook', 2999.99,0.25);

console.log(p1.getPrecoDeDesconto(),p2.getPrecoDeDesconto());

//funções factory
function criarFuncionario(nome,salarioBase,faltas){
return{
    nome,salarioBase,faltas,
    getSalario() {
        return (salarioBase /30) * (30 - faltas);
    }
}
}
const f1 = criarFuncionario('Joao', 7800,4);
const f2 = criarFuncionario('maria' , 9000,1);


console.log(f1.getSalario(),f2.getSalario())

// objeto create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);
//funcao famosa que retorna um objeto
const fronJson = JSON.parse('{"info": "Sou JSON"}');
console.log(fronJson.info);
 