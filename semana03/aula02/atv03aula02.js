const prompt = require ('prompt-sync')();

function retangulo (largura, altura) {
    let resultado = '';
    for (let i = 0; i < altura; i++) {
        for (let j = 0; j < largura; j++) {
            resultado += '*';
        }
        if (1+1 != altura){
            resultado += '\n';
        }
    }
    return resultado;
}
let imprime = 's';
while (imprime == 's' || imprime == 'S') {
    imprime = prompt ('Deseja imprimir um retângulo? (S/N) ');
    if (imprime == 'S' || imprime == 's') {
        let largura = parseInt (+prompt ('Digite a largura: '));
        let altura = parseInt (+prompt ('Digite a altura: '));
        if (largura > altura) {
            console.log (retangulo(largura, altura));
        }
        else{
            console.log('Entrada inválida!');
        }
    }
    else{
        console.log('Fim do programa!');
    }
}