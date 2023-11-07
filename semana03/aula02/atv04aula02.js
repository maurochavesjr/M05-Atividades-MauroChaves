const prompt = require ('prompt-sync')();

let numero = parseInt (prompt ('Digite um número inteiro positivo: '));
if (numero > 0) {
    switch (numero) {
        case 1:
            console.log(`Sequência de Fibonacci até ${numero}:`)
            console.log('0');
            break;
        case 2:
            console.log(`Sequência de Fibonacci até ${numero}:`)
            console.log('0 1');
            break;
        default:
            let primeiro = 0;
            let segundo = 1;
            let resultado = '0 1';
            for (let i = 3; i <= numero; i++) {
                let proximo = primeiro + segundo;
                resultado += ` ${proximo}`;
                primeiro = segundo;
                segundo = proximo;
            }
            console.log(`Sequência de Fibonacci até ${numero}:`)
            console.log(resultado);
            break;
    }
}
else {
    console.log('Nenhum número na sequência!');
}