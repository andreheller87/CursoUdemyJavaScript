const produto = new Object;
produto.name = 'cadeira';
produto['Marca Do Produto'] = 'Generica';
produto.preco = 220;

//delete produto.preco;

console.log(produto);

const carro = {
modelo:'A4',
preco: 89000,
proprietario: {
    nome : 'Andre',
    sobrenome : 'Heller',
    idade: 34,
    Endereco: 'badenfurt'
},
condutores:[{
    nome:'Andre',
    idade: 34
},
{
    nome:'marcia',
    idade:30
}],
calcularValorSeguro: function(){
 //....
}
}
carro.proprietario.Endereco = 'fortaleza';

console.log(carro.condutores);