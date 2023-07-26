//Aritmeticos
const soma = 2 + 2;
const sub = 3-2;
const mult = 4*2;
const div = 10/2;
const modulo = 4 % 2;

console.log(soma, sub, mult,div,modulo);

// relacional
console.log("01) - ", '1' == 1);
console.log("02) - ", '1' === 1);
console.log("03) - ", '3' != 3);
console.log("04) - ", '3' !== 3);
console.log("05) - ", 3 < 1);
console.log("06) - ", 3 > 1);
console.log("07) - ", 3 <= 1);
console.log("08) - ", 3 >= 2);

const d1 = new  Date(0);
const d2 = new Date(0);
console.log("09) - ", d1 === d2);
console.log("10) - ", d1 == d2);
console.log("11) - ", d1.getTime() === d2.getTime());

console.log("12) - ", undefined == null);
console.log("13) - ", undefined === null);


// Logico
function comprar(trabalho1 , trabalho2){
    const compraSorvete = trabalho1 || trabalho2; // ou
    const compraTv50 = trabalho1 && trabalho2;    // e
    const compraTv32 = trabalho1 != trabalho2;    // ou exclusivo
    const manteSaudavel = !compraSorvete;         // negação
    return {compraSorvete, compraTv50 , compraTv32 , manteSaudavel};
}

console.log('exe 01 - ', comprar(true,true));
console.log('exe 02 - ', comprar(true,false));
console.log('exe 03 - ', comprar(false,true));
console.log('exe 04 - ', comprar(false,false));

// unario
let num1 =2;
let num2 = 3;

num1++;
console.log(num1);
--num1;
console.log(num1);

// ternario

const resultado = nota => nota >= 7 ? 'aprovado' : 'reprovado';
console.log(resultado(7.1));
console.log(resultado(5.1));

