// operador  ... rest(juntar) || spread(espalhar)
const funcionario = { nome:'Maria', salario:12348.99}
const clone = { ativo: true, ...funcionario}

console.log(clone)

const grupoA = ['João', 'pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']

console.log(grupoFinal)
