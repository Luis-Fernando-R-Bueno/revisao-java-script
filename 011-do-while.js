//Aula >> 01/09/2025 ; 19:41

const entrada = require('prompt-sync')();

const senha = '1234';
let senha_digitada;

do {
    senha_digitada = entrada('Digite a senha para acessar o sistema: ');
}

while (senha_digitada !== senha);

console.log('\nBem-vindo ao sistema de login!');