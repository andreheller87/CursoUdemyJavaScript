let a = 7;
let b = 97;
let c = 7;
let d = 97;

let temp = a;
a=b;
b=temp;
[c,d] = [d,c] //usando [] para fazer a troca

console.log("Valor de a = " +a + " e o valor de b = " + b) ;
console.log("Valor de c = " +c + " e o valor de d = " + d) ;