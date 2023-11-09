const pessoa = {};

pessoa.nome = 'Mauro Chaves';
pessoa.idade = 28;

console.log(`Nome: ${pessoa.nome} - Idade: ${pessoa.idade}`);

pessoa.idade = "25";
console.log(`Idade atualizada: ${pessoa.idade}`);

const pessoa2 = {
    nome: "Davi",
    idade: 2,
};

for (propriedade in pessoa2) {
    console.log(`${propriedade}: ${pessoa2[propriedade]}`);
};

pessoa2.apresentacao = function() {
    console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
};
pessoa2.apresentacao();

pessoa2.email = "davichaves@gmail.com";
console.log(`Email: ${pessoa2.email}`);