const animalDeEstimacao = {
    nome: 'Simba',
    especie: 'Cachorro',
    idade: 2,
    barulho: function() {
        console.log(`O ${this.nome} está latindo!`);
    },
    envelhecer: function() {
        this.idade++;
    },
    trocarNome: function(novoNome) {
        this.nome = novoNome;
        console.log(`O nome do animal foi alterado para ${animalDeEstimacao.nome}`);
    },
};

console.log(`Informações do animal de estimação: `);
console.log(`Nome: ${animalDeEstimacao.nome}`);
console.log(`Espécie: ${animalDeEstimacao.especie}`);
console.log(`Idade: ${animalDeEstimacao.idade}`);

animalDeEstimacao.barulho();
animalDeEstimacao.envelhecer();
animalDeEstimacao.envelhecer();
animalDeEstimacao.envelhecer();
console.log(`Idade após envelhecimento: ${animalDeEstimacao.idade}`);

animalDeEstimacao.trocarNome('Bruce');
console.log(`Nome após troca: ${animalDeEstimacao.nome}`);