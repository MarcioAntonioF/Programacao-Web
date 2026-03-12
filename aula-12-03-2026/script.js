//buscar o elemento via javascript
let meuElemento = document.getElementById("paragrafo"); //id
console.log(meuElemento);
console.log(meuElemento.textContent); //pegar o conteudo dentro da tag

//buscar o elemento HTML pela classe
let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);
for(let i=0; i<paragrafo1.length; i++){
    console.log(paragrafo1[i].textContent);
}

//buscar o elemento pela tag
let paragrafo2 = document.getElementsByTagName("p");
console.log(paragrafo2);

//ciar um elemento HTML
let destino = document.getElementById("elemento"); //buscando o elemento HTML
let p = document.createElement("p"); //criar um elemento HTML
p.textContent = "Paragrafo criado via JavaScript"; //adicionando o conteudo de texto na tag
destino.append(p); //adicionar ao DOM

//criar lista
let lista = document.getElementById("lista"); //busca o elemento HTML
let ul = document.createElement("ul"); //cria o elemento HTML no javaScript
let itens = ["Arroz", "Feijão", "Suco"]; //adiiona os intens
for(let i=0; i<itens.length; i++){
    let li = document.createElement("li"); //cria o elemento da lista
    li.textContent = itens[i]; //adiciona o conteudo da lista ao elemento LI
    ul.append(li); //junta o LI ao UL
}
lista.append(ul); //adiciona a UL ao DOM (pagina HTML)

//função somar
function somar(){
    //pegar os dois numeros digitados pelo usuario
    let n1 = parseFloat(document.getElementById("num1").value); //conversao de tipo, vem do usuario string e transforma em numero 
    let n2 = parseFloat(document.getElementById("num2").value);
    let soma = n1 + n2;
    //console.log(soma);
    let saida = `Resultado: <b>${soma}</b>`;
    document.getElementById("resultado").innerHTML = saida;
}

//eventos = botao
let botao = document.getElementById("botao1");
botao.onclick = function(){
    alert("Clicou!");
    botao.textContent = "Você clicou!";
    botao.style.backgroundColor = "red"; // estilizando por meio do css
}
