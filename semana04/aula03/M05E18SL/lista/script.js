function esconderFoto() {
    const divFoto = document.getElementById('foto');
    if (divFoto.style.visibility == 'visible') {
        divFoto.style.visibility = 'hidden';
    }
    else{
        divFoto.style.visibility = 'visible';
    }
}

function formataTexto() {
    const divTexto = document.getElementById('sobre');
    const input = document.getElementById('formato');
    divTexto.style.textAlign = input.value;
}

function alteraCor() {
    const footer = document.getElementById('footer');
    const header = document.getElementById('header');
    const input = document.getElementById('cor');

    if(input.value == 'white'){
        footer.style.backgroundColor = 'white';
        header.style.backgroundColor = 'white';
        footer.style.color = 'black';
        header.style.color = 'black';
    }
    else if(input.value == 'black'){
        footer.style.backgroundColor = 'black';
        header.style.backgroundColor = 'black';
        footer.style.color = 'white';
        header.style.color = 'white';
    }
    else{
        footer.style.backgroundColor = input.value;
        header.style.backgroundColor = input.value;
        footer.style.color = 'white';
        header.style.color = 'white';
    }
}

function alteraFonte() {
    const divTexto = document.getElementById('sobre');
    const input = document.getElementById('fonte');
    divTexto.style.fontFamily = input.value;
}

function alteraModo() {
    const section = document.getElementById('conteudo');
    if (section.style.backgroundColor == 'white') {
        section.style.backgroundColor = 'black';
        section.style.color = 'white';
    }
    else{
        section.style.backgroundColor = 'white';
        section.style.color = 'black';
    }
}