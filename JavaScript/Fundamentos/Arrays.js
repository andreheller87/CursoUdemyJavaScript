const valores = [10, 2, 6.9, 8 , 9.2 ,7 ,5];
console.log(valores[0] , valores[3]);
console.log(valores[4]);
console.log(valores.length);
valores.push( false, null ,'teste');
console.log(valores);

delete valores[0];
console.log(valores);
console.log(typeof valores);

