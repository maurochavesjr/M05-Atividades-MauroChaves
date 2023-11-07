const prompt = require ('prompt-sync')();
let primeiro_num = parseInt(prompt ("Digite o primeiro número: "));
let segundo_num = parseInt (prompt ("Digite o segundo número: "));

let resultado = 0;
for (let i = primeiro_num; i >=1; i++) {
    resultado += segundo_num;
}

console.log (`O resultado da multiplicação é: ${resultado}`);