/*const Ferrari = {
    modelo: 'f40',
    velocidadeMaxima : 320
}

const Volvo = {
    modelo:'V40',
    velocidadeMaxima: 240
}

console.log(Ferrari.__proto__); 
console.log(Ferrari); */

Object.prototype.attr0 ='Z';

const avo = {
    attr1 : 'A'
}

const pai = {
    __proto__: avo, attr2 :'B'
}

const filho = {
    __proto__:pai,attr3 :'C'
}

console.log(filho.attr1,filho.attr0,filho.attr2,filho.attr3);
