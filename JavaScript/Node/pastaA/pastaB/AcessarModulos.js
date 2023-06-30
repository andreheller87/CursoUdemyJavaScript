const moduloA = require('../../ModuloA')

console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const http = require('http')
http.createServer((req, res) =>{
    res.write('Bom Dia!!!!')
    res.end()
}).listen(8080)