// Aula >> 18/08/2025 ; 20:38

let entrada = require ('prompt-sync')(); //Permite ao usuário digitar dados no console >> 18/08/2025 ; 21:39

let n1 = entrada('Digite o primeiro número: ');
let n2 = entrada('Digite o segundo número: ');

let soma = parseInt(n1) + parseInt(n2); //Transforma a variável em número inteiro >> 18/08/2025 ; 21:40

console.log(' ');
console.log(`Resultado da soma = ${soma}`);
console.log(' ');

entrada('Pressione <Enter> para encerrar o programa!');

console.log(' ');
console.log('Prorograma encerrado!');