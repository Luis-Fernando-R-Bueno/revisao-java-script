// Aula >> 01/08/2025

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite sua idade: ', (idade) => {
  console.log(`Você digitou: ${idade}`);
  rl.close();
});