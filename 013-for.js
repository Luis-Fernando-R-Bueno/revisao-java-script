// Aula >> 08/09/2025 ; 19:22

let entrada = require('prompt-sync')();
console.log('');

let tabuada = entrada('Digite o número para ver a tabuada: ');
console.log('');

for (let i = 1; i <= 10; i++) { // For é usado quando sabemos o número de repetições >> 08/09/2025 ; 19:30
    console.log(`${tabuada} x ${i} = ${parseInt(tabuada * i)}`);
}