function area(largura, altura){
    const area = largura*altura;
    if(area> 100){
        console.log(`Area maior que a permitida ${area}m2`);
    }else {
        return area;
    }
}
console.log("A area é: " + area(10,1) +"m2");



console.log("-----------")
area(10,20)