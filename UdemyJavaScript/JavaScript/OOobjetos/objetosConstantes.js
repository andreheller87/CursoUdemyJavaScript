// pessoa ->  123 -> {...}
const  pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa.nome)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'maria'}

Object.freeze(pessoa)

pessoa.nome = 'Ana'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome:'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)