// Aula >> 18//08/2025 ; 21:30

let entrada = require ('prompt-sync')();

let n1 = entrada('Digite o primeiro número: ');
let n2 = entrada('Digite o segundo número: ');

let soma = parseFloat(n1) + parseFloat(n2);
let sub= parseFloat(n1) - parseFloat(n2);
let mul= parseFloat(n1) * parseFloat(n2);
let div = parseFloat(n1) / parseFloat(n2);
let resto = parseFloat(n1) % parseFloat(n2);

// Quando usar to.Fixed() e quando usar toLocaleString()? >> 18/08/2025 ; 21:53
console.log(' ');
console.log(`Soma: ${n1} + ${n2} = ${soma.toLocaleString('pt-BR')}`);
console.log(`Subtração: ${n1} - ${n2} = ${sub.toLocaleString('pt-BR')}`);
console.log(`Multiplicação: ${n1} * ${n2} = ${mul.toLocaleString('pt-BR')}`);
console.log(`Divisão: ${n1} / ${n2} = ${div.toLocaleString('pt-BR')}`);
console.log(`Resto: ${n1} % ${2} = ${resto.toFixed(2)}`);