let listaDeAmigos = [];
function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    listaDeAmigos.push(nomeAmigo.value)

    let listaComNomes = document.getElementById('lista-amigos')
    listaComNomes.innerText = listaDeAmigos
    nomeAmigo.value = '';
}

function sortear() {
    embaralha(listaDeAmigos);
    let listaSorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < listaDeAmigos.length; i++) {
        if (i == listaDeAmigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaDeAmigos[i] + '-->' + listaDeAmigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaDeAmigos[i] + '-->' + listaDeAmigos[i + 1] + '<br>';
        }
    }
}

function reiniciar() {
    listaDeAmigos = [];
    let listaComNomes = document.getElementById('lista-amigos');
    let listaSorteio = document.getElementById('lista-sorteio');
    listaComNomes.innerText = '';
    listaSorteio.innerText = '';
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}