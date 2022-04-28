const fabricante = ["Mercedes" , "Audio","BMW"];

function imprimir(nome, indice){
    console.log(`${indice + 1}.${nome}`);
}

fabricante.forEach(imprimir);
console.log("-----------");
fabricante.forEach(fabricante => console.log(fabricante));

