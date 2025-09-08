// Aula >> 08/09/2025 ; 20:09

let entrada = require('prompt-sync')();
console.log('');

let frase = entrada('Digite uma frase: ');
let nova_frase = '';
let i = -1; // O primeiro caractere da string é o 0, então iniciamos com -1 para que no primeiro incremento fique 0 >> 08/09/2025 ; 20:01

while (i < frase.length) {
    i++;

    if ( // O programa anula as vogais inseridas na frase >> 08/09/2025 ; 19:59
        frase[i] == 'a' ||
        frase[i] == 'e' ||
        frase[i] == 'i' ||
        frase[i] == 'o' ||
        frase[i] == 'u' ||

        frase[i] == 'A' ||
        frase[i] == 'E' ||
        frase[i] == 'I' ||
        frase[i] == 'O' ||
        frase[i] == 'U'
    ) {
        continue;
    }

    nova_frase = nova_frase + frase.charAt(i);
}

console.log(nova_frase);