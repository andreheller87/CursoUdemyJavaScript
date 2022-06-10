const pilotos = ['vettel','Alonso','raikkonen','massa'];
pilotos.pop();   // pop tira o ultimo do array
console.log(pilotos);

pilotos.push('Vertappen'); // push add no ultimo indice
console.log(pilotos);

pilotos.shift(); // shift retira do primeiro indice
console.log(pilotos);

pilotos.unshift('hamilton'); //unshift add no primeiro indice
console.log(pilotos);

//splice remove e add itens no array
pilotos.splice(2,0, 'Bottas', 'Massa');
console.log(pilotos);

const algunsPilotos = pilotos.slice(2); // novo array
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1,4); // novo array com um pedaço do array piloto
console.log(algunsPilotos2);

