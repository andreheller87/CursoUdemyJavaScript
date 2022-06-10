function imprimirSomar(a , b){
console.log(a+b);
}

imprimirSomar(10,50);


function imprimirSubtrair(a,b){
    console.log(a - b);
}

imprimirSubtrair(50,30);


function soma (a,b=0){
    return a + b;
}

console.log(soma(110,55));


// variavel recebe função

const imprimirSoma = function (a,b){
console.log(a+b);
}

imprimirSoma(2,3);

// funcao arrow

const soma2 = (a,b) =>{
    return a + b ;
}

console.log(soma2(14,20));

// implicita

const subtracao = (a,b) => a-b;

console.log(subtracao(60,30));
