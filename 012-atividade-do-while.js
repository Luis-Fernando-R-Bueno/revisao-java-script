//Aula >> 01/09/2025 ; 19:56

const entrada = require('prompt-sync')();
const senha = '123';
let senha_digitada;
let senha_incorreta = 0;

console.log('');

do { // O comando 'do' aceita as condições do código, enquanto o 'while' abaixo confirma a condição >> 01/09/2025 ; 20:20
    senha_digitada = entrada('Digite a senha para acessar o sistema: ');
    senha_incorreta++;

    if (senha_incorreta >= 3) {
        console.log('\nNúmero de tentaticas excedido. Acesso bloqueado!');
        return;
    }
}

while (senha_digitada != senha);

console.log('\nBem-vindo ao sistema de login!');