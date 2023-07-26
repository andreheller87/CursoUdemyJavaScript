// novo recurso ES2015


//Objeto
const pessoa = {
    nome: 'André',
    idade: 35,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 1000
    }

}

const { nome: n, idade: i } = pessoa;

console.log(n, i);

const { sobrenome, bemHumorado = true } = pessoa;

console.log(sobrenome, bemHumorado);

const {endereco :{logradouro,numero,cep}} = pessoa;

console.log(logradouro,numero,cep);

//Array

const [a] = [10];
console.log(a);

const [n1,,n3,,n5,n6 = 0] = [10,7,9,8];
console.log(n1,n3,n5,n6);

const [,[,nota]] = [[,8,8],[9,6,8]];
console.log(nota);

//função com objeto

function rand({mim=0,max=1000}){
    const valor = Math.random() * (max - mim) + mim;
    return Math.floor(valor)
}
const obj = {max:50,mim:40};
console.log(rand(obj));
console.log(rand({mim : 955}));
console.log(rand({}));

//função com array
function rand2([min =0 , maximo = 1000]){
    if(min> maximo) [min, maximo] = [maximo,min]
    const valor2 = Math.random() * (maximo - min) +min
    return Math.floor(valor2);
    }

console.log(rand2([50, 100]));
console.log(rand2([955]));
console.log(rand2([,100]));
console.log(rand2([]));
