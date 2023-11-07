const prompt = require('prompt-sync')();

function validaNomeUsuario() {
    let nomeUsuario = '';
  
    while (true) {
      nomeUsuario = prompt("Por favor, insira o seu nome de usuário:");
      if (nomeUsuario.length < 12) {
        console.log("Erro: O nome de usuário deve ter pelo menos 12 caracteres.");
        continue;
      } 
      nomeUsuario = nomeUsuario.toLowerCase(); 
      if (nomeUsuario.indexOf('user@') !== 0) {
        console.log("Erro: Os usuários devem começar o nome com 'user@'.");
        continue;
      }  
      if (nomeUsuario.indexOf('@') === -1) {
        console.log("Erro: O nome de usuário deve conter o caractere '@'.");
        continue;
      }
      console.log("Nome de usuário válido: " + nomeUsuario);
      break;
    }
  }
  
validaNomeUsuario();
