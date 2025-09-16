// Aula >> 15/09/2025 ; 19:27

let entrada = require('prompt-sync')();
console.log('');


function ola_usuario(p_nome) { 
    console.log(`Olá, ${p_nome}! Seja bem-vindo(a)!`);
}


function login_usuario(p_usuario, p_senha) {
    if (p_usuario == 'admin' && p_senha == '1234') {
        return true;
    } else {
        return false;
    }
}
const p_usuario = entrada('Digite o usuário: ');
const p_senha = entrada('Digite a senha: ');


if (login_usuario(p_usuario, p_senha)) {
    let p_nome = entrada('Digite seu nome: ');
    ola_usuario(p_nome);
}
else {
    console.log('Usuário ou senha inválidos!');
}