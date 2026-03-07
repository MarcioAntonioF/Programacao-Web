let numeroSecreto = Math.floor(Math.random() * (21 - 1 + 1)) + 1;
    
    function verificar() {
    
        let palpite = Number(document.getElementById("palpite").value);
        let mensagem = document.getElementById("mensagem");
    
        if (palpite === numeroSecreto) {
            mensagem.textContent = " Você acertou!";
        } 
        else if (palpite > numeroSecreto) {
            mensagem.textContent = "O número secreto é MENOR.";
        } 
        else {
            mensagem.textContent = "O número secreto é MAIOR.";
        }
    
    }