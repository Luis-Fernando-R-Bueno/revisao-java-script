//Aula >> 22/08/2025 ; 22:24

let entrada = require('prompt-sync')();
let nome = entrada('Digite seu nome: ');
let idade = entrada('Digite sua idade: ');
let amigo = entrada(`Você é amigo do dono (sim/não)? `);

if (nome === '' || idade === '' || amigo === ''){ // Verificação de dados >> 22/08/2025 ; 22:45
    console.log(' ');
    console.log('Por favor, preencha todos os campos corretamente!');
}

else if (amigo == 'sim' || amigo == 'Sim' || amigo == 'SIM' || amigo == 's' || amigo == 'S'){
    if (isNaN(idade) >= 18){
        console.log(' ');
        console.log(`${nome}, você teve o acesso liberado e uma bebida grátis por ser maior de idade e amigo do dono!`);
    }

    else {
        console.log(' ');
        console.log(`${nome}, você teve o acesso liberado por ser amigo do dono!`);
    }
} 

else if (isNaN(idade) >= 18){
        console.log(' ');
        console.log(`${nome}, você teve o acesso liberado por ser maior de idade!`);
}   

else {
    console.log(' ');
    console.log (`${nome}, você teve o acesso negado por ser menor de idade e não ser amigo do dono!`);
}
