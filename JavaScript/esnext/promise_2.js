setTimeout(function() {
    console.log('Executando callback')
    setTimeout(function(){
        console.log('Executando dentro')
        setTimeout(function(){
            console.log('Executando dentro 2')
        },2000)
    },2000)
}, 2000);