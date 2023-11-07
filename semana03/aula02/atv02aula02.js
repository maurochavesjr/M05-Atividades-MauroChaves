const prompt = require ('prompt-sync')();

let num = 1;
let resultado = 0;
let contador = 0;

while (num != 0) {
    num = parseInt (prompt('Digite um número ou 0 para sair: '));
    if (num == 0 && contador != 0) {
        console.log('A média dos números digitados é: ' + resultado / contador);
        break;
    }
    else if (num == 0 && contador == 0) {
        console.log('Nenhum número foi digitado!');
        break;
    }
    resultado += num;
    contador++;
}