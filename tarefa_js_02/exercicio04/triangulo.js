function desenhar(){

    let linhas = document.getElementById("linhas").value;
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    for(let i = 1; i <= linhas; i++){
        for(let j = 1; j <= i; j++){
            resultado.innerHTML += "*";
        }

        resultado.innerHTML += "<br>";
    }

}
