//Aula >> 18/08/2025 ; 22:38

let entrada = require('prompt-sync')();

let nome = entrada('Digite seu nome: ');
let idade = entrada('Digite sua idade: ');
console.log(' ');


if (isNaN(idade)) {
    console.log(`${nome}, insira um valor numérico para a idade: `);
} 

else {
    if (idade >= 18) {
        console.log(`${nome}, você é maior de idade.`);
    }

    else{
        console.log(`${nome}, você é menor de idade.`);
    }
}