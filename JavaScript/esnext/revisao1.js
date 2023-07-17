//let and const

{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)

//Template String

const produto = 'ipad'
console.log(`${produto} é caro!`);

//Destructuring

const [l, e, ...tras] = "Cod3r";
console.log(l, e, tras)

const [x, , y] = [1,2,3,4];
console.log(x,y)

const { idade:i, nome} = {nome: 'Ana', idade:5}

console.log(nome, i)

//Arrow Function

const soma =(a,b) => a + b

console.log(soma(2,3))

// Arrow Function (this)

const lexico1 = () => console.log(this === exports)

const lexico2 = lexico1.bind({})

lexico1()
lexico2()

//parametro default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log('Sou mais forte');

//operador rest

function total(...numeros){
    let total =0
    numeros.forEach(n => total +=n)
    return total
}
console.log(total(2,3,4,5))

// ES8: object.values/ Object.entries

const obj = { a:1, b:2, c:3, d:4}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na Notação Literal

const nome2 = 'Carla'

const pessoa = {
    nome2,
    ola(){
        return 'Oi gente'
    }
}

console.log(pessoa.nome2, pessoa.ola())

//class
class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'au au!'
    }
}

console.log(new Cachorro().falar())