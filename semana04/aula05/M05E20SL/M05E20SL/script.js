// Aqui serão adicionados seus scripts

//PASSO 01
document.getElementById("btnClick").onclick = function(){
    alert("Você clicou no botão!");
}

//PASSO 02
document.getElementById("inputText").onchange = function(){
    this.style.color = "green";
}

//PASSO 03
document.getElementById("inputText").oninput = function(){
    this.style.color = "blue";
}

//PASSO 04
document.getElementById("inputText").onkeydown = function(){
   document.getElementById("outputMessage").innerText = "Você pressionou uma tecla!";
}

document.getElementById("inputText").onkeyup = function(){
    document.getElementById("outputMessage").innerText = "Você soltou uma tecla!";
 }

document.getElementById("inputText").onkeypress = function(){
    document.getElementById("outputMessage").innerText = "Você está pressionando uma tecla!";
 }

//PASSO 05
document.getElementById("box").onmouseover = function(){
    this.style.backgroundColor = "red";
}

document.getElementById("box").onmouseout = function(){
    this.style.backgroundColor = "green";
}

//PASSO 06
document.getElementById("box").ondragstart = function(event){
    event.dataTransfer.setData("text/plain", "Texto alterado!");
}

document.getElementById("box").ondragover = function(event){
    event.preventDefault();
}

document.getElementById("box").ondrop = function(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    box.innerText = data;
}

//PASSO 07
window.onload = function(){
    alert("A página foi carregada!");
}

//PASSO EXTRA
var btnChallenge = document.getElementById("btnChallenge");
var contadorClique = 0;

btnChallenge.onclick = function(){
    contadorClique++;
    document.getElementById("count").innerText = contadorClique;
}

setTimeout(function(){
    alert(`O tempo acabou! Você clicou ${contadorClique} vezes!`);
}, 10000);