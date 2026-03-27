let contador = 0;

const elementos = {
    contador: document.getElementById("contador"),
    btnMais: document.getElementById("incrementar"),
    btnMenos: document.getElementById("decrementar"),
    input: document.getElementById("inputTexto"),
    charCount: document.getElementById("charCount"),
    paragrafos: document.getElementById("paragrafos"),
    tipoLista: document.getElementById("tipoLista"),
    btnLista: document.getElementById("adicionarLista"),
    listas: document.getElementById("listas"),
    btnReset: document.getElementById("resetar")
};

function atualizarContador() {
    elementos.contador.textContent = contador;
}

function incrementar() {
    contador++;
    atualizarContador();
}

function decrementar() {
    if (contador === 0) {
        alert("O contador já está em zero!");
        return;
    }
    contador--;
    atualizarContador();
}

function atualizarCharCount() {
    const textoSemEspaco = elementos.input.value.replace(/\s/g, "");
    elementos.charCount.textContent = textoSemEspaco.length;
}

function adicionarParagrafo(texto) {
    const p = document.createElement("p");
    p.textContent = texto;
    elementos.paragrafos.appendChild(p);
}

function tratarEnter(event) {
    if (event.key === "Enter") {
        const texto = elementos.input.value.trim();

        if (texto === "") return;

        adicionarParagrafo(texto);
        elementos.input.value = "";
        atualizarCharCount();
    }
}

function criarLista(tipo) {
    const lista = document.createElement(tipo);

    for (let i = 1; i <= 3; i++) {
        const item = document.createElement("li");
        item.textContent = "Item " + i;
        lista.appendChild(item);
    }

    return lista;
}

function adicionarLista() {
    const tipo = elementos.tipoLista.value;
    const lista = criarLista(tipo);
    elementos.listas.appendChild(lista);
}

function resetarTudo() {
    contador = 0;
    atualizarContador();

    elementos.paragrafos.innerHTML = "";
    elementos.listas.innerHTML = "";

    elementos.input.value = "";
    atualizarCharCount();
}

function iniciarEventos() {
    elementos.btnMais.addEventListener("click", incrementar);
    elementos.btnMenos.addEventListener("click", decrementar);

    elementos.input.addEventListener("input", atualizarCharCount);
    elementos.input.addEventListener("keydown", tratarEnter);

    elementos.btnLista.addEventListener("click", adicionarLista);
    elementos.btnReset.addEventListener("click", resetarTudo);
}

function init() {
    atualizarContador();
    iniciarEventos();
}

init();