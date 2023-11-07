const prompt = require('prompt-sync')();

function verificaemail(email){
    
    if (email.indexOf("@gmail.com") != -1){
        console.log("O e-mail contém o domínio @gmail.com");
        console.log("O domínio é: " + email.slice(0, email.indexOf("@")))
    } else {
        console.log("O e-mail não contém o domínio @gmail.com");
        console.log("O domínio é: " + email.slice(0, email.indexOf("@")))
    } 
}

const email = prompt('Qual é o seu email? ');
verificaemail(email);
