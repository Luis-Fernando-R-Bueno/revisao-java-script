// Aula >> 08/09/2025 ; 20:28

let entrada = require('prompt-sync')();
console.log('');

let n1 = entrada('Digite o primeiro número: ');
let n2 = entrada('Digite o segundo número : ');

if (n1 <= n2) {
    while (n1 <= n2) {

        console.log('');
        for (let i = 1; i <= 10; i++) {
            console.log(`${n1} x ${i} = ${parseInt(n1 * i)}`);
        }

        n1++;
    }
}

else {
    while (n2 <= n1) {

        console.log('');
        for (let i = 1; i <= 10; i++) {
            console.log(`${n2} x ${i} = ${parseInt(n1 * i)}`);
        }

        n2++;
    }
}