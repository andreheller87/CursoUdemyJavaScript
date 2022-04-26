
//criar de forma literal
function fun1 (){};

//dentro de uma variavel
const fun2 = function (){};

// dentro de uma array
const array =[function(a,b) {return a+b}, fun1 , fun2];
console.log(array[0](2,3));

//Armazenamento em um objetos
const obj = {};
obj.falar = function (){return 'Opa'};

console.log(obj.falar());

//passar uma funcao como parametro

function rum(fun) {
    fun();
}

rum(function(){console.log("Executando ...")});

//um funcao pode retorna / conter um funcao

function soma(a,b){
    return function (c){
        console.log(a + b +c);
    }
}
soma(3,5)(4);
const oitoMais = soma(3,5);
oitoMais(4);
