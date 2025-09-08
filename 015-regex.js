// Aula >> 08/09/2025 ; 19:32

let entrada = require('prompt-sync')();
console.log('');

let frase = entrada('Digite uma frase: ');
let nova_frase = '';
let i = -1;

const regexVOgais = /[aeiouAEIOU]/;

while (i < frase.length) {
    i++;

    if (regexVOgais.test(frase[i])) {
        continue;
    }

    nova_frase = nova_frase + frase.charAt(i);
}

console.log(nova_frase);