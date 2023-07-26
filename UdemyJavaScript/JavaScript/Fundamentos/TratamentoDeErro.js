function tratarErroELancar(erro){
throw new Error('Name e não nome!!')
}

function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    }catch (e){
        tratarErroELancar(e);
    }
}

const obj = {
    nome: 'André'
}

imprimirNomeGritando(obj)