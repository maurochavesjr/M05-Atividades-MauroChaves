let numeros = [1, 2, 7, 14, 5, 0, 10, 23, 13, 17, 8, 19];

//QUESTÃO 01
function ehPrimo (numero){
    if (numero <=1) return false;
    for(let i = 2; i < numero; i++){
        if (numero%i ===0){
            return false;
        }
    }
    return true;
}

//QUESTÃO 02
let numerosPrimos = numeros.filter(ehPrimo);
console.log("Lista com números primos: ");
console.log(numerosPrimos);

//QUESTÃO 03
let quadradosDosPrimos = numerosPrimos.map(numero => numero **2);
console.log("Lista com o quadrado dos números primos: ");
console.log(quadradosDosPrimos);