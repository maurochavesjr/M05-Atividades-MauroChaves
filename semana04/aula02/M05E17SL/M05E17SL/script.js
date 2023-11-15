// Aqui serão adicionados seus scripts

// EXERCÍCIO 1

const noticiaPrincipal = document.getElementById("noticia-principal");
alert(noticiaPrincipal.innerHTML);

// EXERCÍCIO 2

const estiloTitulos = document.getElementsByTagName("h1");
for (const titulo of estiloTitulos) {
    titulo.style.color = "red";
    titulo.style.fontSize = "30px";
}

// EXERCÍCIO 3

const estiloParagrafos = document.getElementsByClassName("paragrafo-noticia");
for (const paragrafo of estiloParagrafos) {
    paragrafo.style.color = "blue";
    paragrafo.style.fontSize = "20px";
    paragrafo.style.backgroundColor = "yellow";
}

// EXERCÍCIO 4

const estiloComentarios = document.getElementById("secao-comentarios");
const novoComentario = document.createElement("p");
novoComentario.innerHTML = "Deixe seu comentário";
estiloComentarios.appendChild(novoComentario);
const novoComentario2 = document.createElement("p");
novoComentario2.innerHTML = "Deixe seu segundo comentário";
estiloComentarios.appendChild(novoComentario2);
estiloComentarios.style.backgroundColor = "green";
novoComentario.style.color = "white";

// EXERCÍCIO 5

const atualizacoes = document.getElementById("ultimas-atualizacoes");
const ultimaAtualizacao = atualizacoes.lastElementChild;
atualizacoes.removeChild(ultimaAtualizacao);

// EXTRA
const alterarTema = document.getElementById("alternar-tema");
alterarTema.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
});