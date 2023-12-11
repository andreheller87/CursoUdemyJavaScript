

function primeiroElemnto(array){
    return array[0]
}

function primeiraletra(string){
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(cumprirpromessa){
    cumprirpromessa(['Ana','Bia','Carlos','Daniel'])
})
.then(primeiroElemnto)
.then( primeiraletra)
.then(letraMinuscula)
.then(console.log)