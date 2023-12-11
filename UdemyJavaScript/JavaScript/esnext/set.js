const times = new Set()
times.add('Vasco')
times.add('São paulo').add('Palmeira').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.has('Flamengo'))
times.delete('Vasco')
console.log(times)

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomeSet = new Set(nomes)
console.log(nomeSet)