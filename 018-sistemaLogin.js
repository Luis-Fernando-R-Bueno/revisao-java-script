// Aula >> 15/09/2025 ; 19:49

let entrada = require('prompt-sync')();
console.log('');

let usuarios = [ // Array de objetos representando os usuários do sistema
    { usuario: 'adm', senha: '123', nome: 'Administrador' },
    { usuario: 'fat', senha: '456', nome: 'Faturista' },
    { usuario: 'med', senha: '789', nome: 'Médico' }
]


function ola_usuario(p_nome) { // Função que retorna a saudação ao usuário
    console.log(`Olá, ${p_nome}! Seja bem-vindo(a)!`);
}


function login_usuario(p_usuario, p_senha) { // Função que valida o login do usuário
    let logado = false;
    let i = 0;

    for (i ; i  < usuarios.length; i++) {

        if (p_usuario == usuarios[i].usuario && p_senha == usuarios[i].senha) {
            logado = true;
            break;
        }
    }

    if (logado) {
        return { sucesso: true, TxtRetorno: usuarios[i].nome }; 
    }

    else{
        return { sucesso: false, TxtRetorno: 'Usuário ou senha inválidos!' };
    }
}
const retorno = login_usuario(p_usuario, p_senha);


const p_usuario = entrada('Digite o usuário: ');
const p_senha = entrada('Digite a senha: ');


if (retorno.sucesso) {
    let nome = retorno.TxtRetorno;
    ola_usuario(nome);
}

else {
    console.log(retorno.TxtRetorno);
}