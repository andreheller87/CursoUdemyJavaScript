const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })


console.log(tecnologias.get('react').framework)
console.log(tecnologias.get('angular'))

const chavesVaraidas = new Map([
    [function () { }, 'Função'], [{}, 'Objeto'], [123, 'Numero'],
])

chavesVaraidas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVaraidas.has(123))
chavesVaraidas.delete(123)
console.log(chavesVaraidas.has(123))
console.log(chavesVaraidas.size)