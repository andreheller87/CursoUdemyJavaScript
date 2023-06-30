function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('NotBook', 3995.5));
console.log(criarProduto('Mouse', 120.99));
