const livro = {
    titulo: 'Aventuras de Alice no País das Maravilhas',
    autor: 'Lewis Carroll',
    anoPublicacao: 1865,
    genero: 'Fantasia',
    disponivel: true,
    emprestarLivro: function() {
        this.disponivel = false;
    }
};

console.log(`Informações do livro: `);
console.log(`Título: ${livro.titulo}`);
console.log(`Autor: ${livro.autor}`);
console.log(`Ano de publicação: ${livro.anoPublicacao}`);
console.log(`Gênero: ${livro.genero}`);
console.log(`Disponível: ${livro.disponivel}`);

livro.emprestarLivro();
console.log(`Disponível após empréstimo: ${livro.disponivel}`);

