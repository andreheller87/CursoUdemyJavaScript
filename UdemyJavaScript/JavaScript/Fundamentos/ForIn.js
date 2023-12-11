const notas = [6.7,7.4,9.8,8.1,7.7];
for(let i in notas){
    console.log(`${i} Notas ${notas[i]}`);
}

const pessoas = {
    nome: 'Andre',
    sobrenome :' Heller',
    Idade: 34,
    peso: 75
}

for(let atributo in pessoas){
    console.log(`${atributo} = ${pessoas[atributo]}`)
}