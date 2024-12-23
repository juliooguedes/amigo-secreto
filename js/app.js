let listaDeAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    if (nomeAmigo == '') {
        alert('Informe um nome!');
        return;
    }
    
    if (listaDeAmigos.includes(nomeAmigo.value)) {
        alert('Nome ja adicionado!');
        return;
    }
    

    let listaComNomes = document.getElementById('lista-amigos')
    
    listaDeAmigos.push(nomeAmigo.value)    
    
    listaComNomes.innerText = listaDeAmigos
    nomeAmigo.value = '';
}

function sortear() {
    if (listaDeAmigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }
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
    listaComNomes = document.getElementById('lista-amigos').innerText = '';
    listaSorteio = document.getElementById('lista-sorteio').innerText = '';
    
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}