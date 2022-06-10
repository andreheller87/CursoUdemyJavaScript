function getInteiroAleatorioEntre (Mim , Max){
    const valor =Math.random() * (Max- Mim) + Mim;
    return Math.floor(valor);
}
let opcao = 0;

while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1,10);
    console.log("Imprimir " + opcao);
    console.log(`Imprimir ${opcao}`);
}

console.log("Ate a próxima!")