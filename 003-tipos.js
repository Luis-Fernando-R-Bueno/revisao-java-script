// Aula >> 11/08/2025 ; 19:48

let cidade = 'Tupã';                                                        // Texto-String
let populacao = 62000;                                                      // Inteiro-Number
let temperatura_media = 34.5;                                               // Decimal-Number
let tem_mcdonalds = true;                                                   // Sim/Não-Boolean
let total_animais_rua;                                                      // Indefinido-Undefined
let mortes_terremoto = null;                                                // Nulo-Null
const fundacao_cidade = new Date('12/10/1929');                             // Data-Date
let principais_avenidas = ['Tamoios', 'Aimorés', 'Lélio Pizza'];            // Array

// Objeto-Object
let endereco_prefeitura = {
    logradouro: 'Praça da Bandeira',
    numero: 1,
    complemento: null,
    cep: '17600-000',
    fundacao_cidade: `${fundacao_cidade.getDate() + 2} / ${fundacao_cidade.getMonth() - 1} / ${fundacao_cidade.getFullYear()}` // Autoria própria >> 12/08/2025 ; 19:57
};

// Função
function ExibeDados() {
    console.log(`
        A cidade de ${cidade} tem uma população de ${populacao.toLocaleString('pt-BR')} habitantes. 
        A prefeitura está localizada na ${endereco_prefeitura.logradouro}, nº ${endereco_prefeitura.numero} - CEP: ${endereco_prefeitura.cep}.
        As principais avenidas são: ${principais_avenidas[0]}, ${principais_avenidas[1]} e ${principais_avenidas[2]}.
        A cidade de ${cidade} possui McDonald's? ${tem_mcdonalds ? 'Sim' : 'Não'}.
        ${cidade} possui um total ${total_animais_rua == undefined , 'indefinido'} de animais de rua.
        Data de fundação: ${endereco_prefeitura.fundacao_cidade}.
    `); // toLocaleString formata o número com separadores de milhar >> 12/08/2025 ; 20:20
}

// Chamando a função para exibir os dados
ExibeDados(); 


// Aula >> 18/08/2025 ; 19:55

console.log(' ');
console.log('Tipo de variável: ExibeDaods');
console.log(typeof(ExibeDados));                            // O typeoff confere o tipo da variável >> 18/08/2025 ; 19:55
console.log(Array.isArray(ExibeDados));                     // O Array.isArray verifica se a variável é um array 18/08/2025 ; 20:11
console.log(Array.isArray(principais_avenidas));            // O Array.isArray verifica se a variável é um array 18/08/2025 ; 20:11