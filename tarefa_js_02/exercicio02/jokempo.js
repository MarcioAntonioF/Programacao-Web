function jogar(usuario){

    let opcoes = ["pedra", "papel", "tesoura"];
    let computador = opcoes[Math.floor(Math.random() * 3)];
    let resultado = "";

    if(usuario === computador){
        resultado = "Empate!";
    }
    else if(
        (usuario === "pedra" && computador === "tesoura") ||
        (usuario === "papel" && computador === "pedra") ||
        (usuario === "tesoura" && computador === "papel")
    ){
        resultado = "Você venceu!";
    }
    else{
        resultado = "Computador venceu!";
    }

    document.getElementById("resultado").innerHTML =
    "Computador escolheu: " + computador + "<br>" +
    resultado;

}