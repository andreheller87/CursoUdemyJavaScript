function getInteiroAleatorioEntre (Mim , Max){
    const valor =Math.random() * (Max- Mim) + Mim;
    return Math.floor(valor);
}
let opcao = -1;

do{
    opcao = getInteiroAleatorioEntre(-1,10);
    console.log("Imprimir " + opcao);
    console.log(`Imprimir ${opcao}`);
}while (opcao != -1);

console.log("Ate a próxima!")