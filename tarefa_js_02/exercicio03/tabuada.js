document.getElementById("btn").addEventListener("click", () => {

    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    for(let i = 1; i <= 10; i++){
        resultado.innerHTML += numero + " x " + i + " = " + (numero * i) + "<br>";
    }
});