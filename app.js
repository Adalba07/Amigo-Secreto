//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let participantes = []; // Lista de participantes

// Função para adicionar um nome à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (participantes.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    participantes.push(nome);
    atualizarLista();
    input.value = "";
}

// Função para atualizar a lista na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    participantes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Adicione pelo menos dois participantes para o sorteio.");
        return;
    }

    let sorteio = [...participantes]; // Copia a lista
    let resultado = [];

    for (let i = 0; i < participantes.length; i++) {
        let indiceSorteado;

        do {
            indiceSorteado = Math.floor(Math.random() * sorteio.length);
        } while (sorteio[indiceSorteado] === participantes[i]);

        resultado.push(`${participantes[i]} → ${sorteio[indiceSorteado]}`);
        sorteio.splice(indiceSorteado, 1);
    }

    exibirResultado(resultado);
}

// Função para exibir os pares sorteados na tela
function exibirResultado(resultado) {
    let lista = document.getElementById("resultado");
    lista.innerHTML = "";

    resultado.forEach(par => {
        let li = document.createElement("li");
        li.textContent = par;
        lista.appendChild(li);
    });
}
