const prompt = require ('prompt-sync')();

let entrada = prompt ('Digite uma palavra: ');

let tamanho = entrada.length;
let palavraInvertida = '';
for (let i = tamanho-1; i >= 0; i--){
    palavraInvertida += entrada[i];
}

console.log(`A palavra invertida é: ${palavraInvertida}`);