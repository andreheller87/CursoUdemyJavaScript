
function getInteiroAleatorioEntre(mim , max){
    const valor = Math.random()*(max - mim) + mim;
    return Math.floor(valor)
}

let opcao = 0;
while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1,20);
    if(opcao != -1){
        console.log(`Numero ${opcao}` )
    }
}


console.log("Ate a próxima!")