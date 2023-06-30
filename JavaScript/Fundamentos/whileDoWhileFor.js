let contador = 0;
console.log('while');

while(contador<=10){
    console.log(`contador ${contador}` )
    contador++
}
contador =1;
console.log('Do while');
do{
    console.log(`contador ${contador}` )
    contador++
}while(contador <=10);

console.log('Primeiro for');
for(let i = 0; i<=10;i++){
    console.log(`for ${i}`)
}


const notas = [7,9.5,8,5,4.6];
notas.forEach(nota => {
    console.log(`nota ${nota}`)
    
});

console.log('segundo for')

for (let i = 0; i < notas.length; i++) {
   console.log(`nota ${notas[i]}`)
    
}


