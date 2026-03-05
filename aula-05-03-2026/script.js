console.log("Teste em javascript");

//Variaveis
var animal = "gato";
console.log(animal);

let nomeCompleto = 'Fulano de Tal'
console.log(nomeCompleto);

var valor1;
const valor0 = 10;
console.log(valor0);

valor1 = 12;
valor1 = 15; // var permite reatribuição
//valor0 = 14; -- const, não permite reatribuição

//Verificação de tipos:
console.log(typeof valor1);

//algoritmo: entrada + processamento + saída
/*var nome = window.prompt("Nome: ");
console.log("Seja bem-vindo " + nome + " Aproveite!");
console.log(`Seja bem-vindo ${nome} Aproveite!`); // template literal
document.writeln(`Seja bem-vindo ${nome} Aproveite!`);*/

//operadoes aritméticos: + - * / **

//operadores de comparação: < > <= >= == != === !==
console.log(5 == '5'); //Igualdade -> olha apenas os valores (ignora o tipo)
console.log(5 === '5'); //estritamente igual olhar para tipo e valor

//Criar um algoritmo que realize a soma de 2 números;
//O usuario deverá informar os números e você deve apresentar o resultado;

var numero1 = Number(prompt("Digite o primeiro digito: "));
var numero2 = Number(prompt("Digite o segundo digito: "));
var soma = numero1 + numero2;
console.log(`A soma do número ${numero1} + ${numero2} é = ${soma}`);
document.writeln(`A soma do número ${numero1} + ${numero2} é = ${soma}`);

//estruturas condicionais: if-else, switch-case
var idade = (prompt("Digite sua idade: "));
if (idade >=18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

var hora = (prompt("Digite quantas horas são: "));
if (hora < 12) {
    console.log("Bom-Dia!");
} else if (hora < 18) {
    console.log("Boa-Tarde");
} else {
    console.log("Boa-Noite")
}

var diaSemana = (prompt("Digite qual o dia da semana(Número): "));
switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-Feira");
        break;
    case 3:
        console.log("Terça-Feira");
        break;
    case 4:
        console.log("Quarta-Feira");
        break;
    case 5:
        console.log("Quinta-Feira");
        break;
    case 6:
        console.log("Sexta-Feira");
        break;
    case 7:
        console.log("Sabado");
        break;
    default:
        console.log("Digite um dia da semana correto")
}
//estrutura de repetição: 
for (let i=0; i<5; i++){
    console.log("Iteração: " + i);
}

var i=4;
while(i<5){
    console.log("iteração: " + i);
    i++;
}