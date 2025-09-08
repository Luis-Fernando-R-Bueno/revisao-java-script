// Aula >> 29/08/2025 ; 21:39

const entrada = require('prompt-sync')();

console.log('');
console.log('|-------------------------------------------------------|');
console.log('|                 Verificação de entrada                |');
console.log('|-------------------------------------------------------|');
console.log('');
let n1Str = entrada('Digite o primeiro número: ');
let n2Str = entrada('Digite o segundo número : ');
let n1 = parseInt(n1Str);
let n2 = parseInt(n2Str);
let i = 0;
console.log('');
console.log('|-------------------------------------------------------|');
console.log('');

if (n1Str.length > 6 || n2Str.length > 6) { // Verifica se o número tem mais de 6 dígitos
    console.log('Por favor, digite números com no máximo 6 dígitos.');
    return;
}

else if (isNaN(n1) || isNaN(n2)) { // Imprimi a informação de Erro no código >> 29/08/2025 ; 22:06
    console.log('É necessário preencher todas as informações com números!');
}

else if (n1 === n2) { // Identifica se n1 e n2 são iguais para que não tenha as próximas verificações >> 29/08/2025 ; 22:06
    console.log('O primeiro e o segundo número são iguais!');
}

else if ((n1) <= (n2)) { // Calcula os casos de n2 maior que n1 >> 29/08/2025 ; 22:07
    while (n1 <= n2) {
        console.log(n1);
        n1++;
        i++;
    }
    console.log(`\nO total de repetições foi de ${i} vezes.`);
}

else {
    while (n1 >= n2) { // Calcula os casos de n1 maior que n2 >> 29/08/2025 ; 22:07
        console.log(n1);
        n1--;
        i++;
    }
    console.log(`\nO total de repetições foi de ${i} vezes.`);
}