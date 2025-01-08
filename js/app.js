let listaAmigos = []; // Declaramos uma lista para armazenarmos os nomes dos amigos

// Função para adicionar os nomes dentro do site
function adicionar() {
    let nome = document.getElementById('nome-amigo'); // Armazenamos o nome em uma variável

    // Verificação para saber se o campo de nome está vazio ou não
    if (nome.value == '') {
        alert('Informe um nome.')
        return;
}
    // Verificação para saber se o nome já está na lista
    if (listaAmigos.includes(nome.value)) {
        alert('Nome já adicionado!');
        return;
    } else {
        listaAmigos.push(nome.value); // Adicionamos na lista
    }

    let listaAmigosSite = document.getElementById('lista-amigos'); // Pegamos o campo da lista do site
    listaAmigosSite.innerText = listaAmigos.join(', '); // Adicionamos a lista no site
    nome.value = ''; // E limpamos o campo do nome de amigo para facilitar o uso
}

// Função para sortearmos os amigos
function sortear() {
    embaralhaNomes(listaAmigos); // Embaralhamos os nomes

        // Verifica a quantidade de participantes
        if (listaAmigos.length < 4) {
            alert('Lista faltando participantes!');
            return;
        }

    let sorteio = document.getElementById('lista-sorteio'); // Pegamos o campo do sorteio do site

    // Em seguida, fazemos um loop para percorrer a lista e ir adicionando os nomes no site
    for (let i = 0; i < listaAmigos.length; i++) {

        // Se o amigo for igual ao último elemento da lista, ele irá tirar o primeiro nome da lista
        if (i == listaAmigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + ' --> ' + listaAmigos[0] + '<br>';

        // Se não, ele apenas irá tirar o próximo amigo da lista
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + ' --> ' + listaAmigos[i + 1] + '<br>';
        }
    }
}

// Função para reiniciar o sorteador
function reiniciar () {

    // Enquanto houver nomes na lista, eles serão removidos
    while (listaAmigos != '') {
        listaAmigos.pop()
    };

    // Limpamos o campo de amigos do site
    let listaAmigosSite = document.getElementById('lista-amigos');
    listaAmigosSite.innerText = '';

    // E também limpamos o campo do sorteio
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

// Função para embaralhar os nomes
function embaralhaNomes (lista) {

    // Pegamos o número total da lista
    let indice = lista.length;

    // Em seguida, enquanto o indice for igual ao tamanho da lista
    while (indice) {
        // Será gerado uma posição aleatória para este nome na lista e ele trocará com a posição atual
        let indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] =
        [lista[indiceAleatorio], lista[indice]];
    }
}