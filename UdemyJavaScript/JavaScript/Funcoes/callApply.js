function getPreco(imposto = 0, moeda='R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'NotBook',
    preco: 4500,
    desc: 0.15,
    getPreco
}
console.log('NotBook' + produto.getPreco());

const carro = {
    preco: 15000,
    desc :0.20
}
const carro2 = {
    preco: 23000,
    desc :0.05
}

console.log('carro ' +getPreco.call( carro));
console.log('carro ' +getPreco.apply( carro))
console.log('carro2 ' + getPreco.call(carro2 , 0.02, '$'))
console.log('carro2 ' + getPreco.apply(carro2 ,[0.01, '$']));