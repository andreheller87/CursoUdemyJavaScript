const notas = [6.5,4.8,4,10,9,8.5];

// sem callback

let notasBaixas =[];
for (let i in notas) {
    if (notas [i]<7) {
        notasBaixas.push(notas[i]);
        
    }
}
console.log(notasBaixas);

//com callback

const notasBaixas2 = notas.filter(function(nota){
    return nota <7;
});

console.log(notasBaixas2);

const notasBaixas3 = notas.filter(notas => notas<7);

console.log(notasBaixas3);

//com callBack e arrow