function carros (velocidadeMacima = 200, delta = 5){
    //Atributo Privado
    let velocidadeAtual =0;
    
    //Metodo Publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMacima){
            velocidadeAtual += delta;
        }else{
            velocidadeAtual = velocidadeMacima;
        }
    }
    // metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual;
    }

}

const uno = new carros;

uno.acelerar();
uno.acelerar();
console.log("Uno velocidade atual: " +uno.getVelocidadeAtual());

const Ferrari = new carros(320,20);

Ferrari.acelerar();
console.log("Ferrari velocidade atual: " + Ferrari.getVelocidadeAtual())