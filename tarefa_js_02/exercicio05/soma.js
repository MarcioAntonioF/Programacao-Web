
function calcular(){

    let n = document.getElementById("termos").value;
    let numero = "";
    let soma = 0;
    let serie = "";

    for(let i = 1; i <= n; i++){
        numero += "1";
        soma += Number(numero);

        serie += numero;

        if(i < n){
            serie += " + ";
        }
    }

    document.getElementById("serie").innerHTML = serie;
    document.getElementById("soma").innerHTML = "A soma é: " + soma;

}
