let amigos = [];
function adicionar(){
    let friend = document.getElementById('nome-amigo');
    let friendlist = document.getElementById('lista-amigos');
      for(let j = 0; j < amigos.length; j++){
        if(friend.value.toLowerCase() == amigos[j].toLowerCase()){
            alert("Já tem um amigo com esse nome, irmão.")
            return; // Este if irá verificar se já tem um amigo de acordo com o percorrer do for
        }
    }
      if (friend.value == ''){
            alert("Tem amigo não?");
            return;
            // Caso no espaço de amigos esteja sem nenhum valor, o sistema avisará ao usuário
        }
    amigos.push(friend.value); // Esta linha lançará a String obtida pela variável friends para a lista "amigos"
    if(friendlist.textContent == ''){
     friendlist.textContent = friend.value; // Este if irá verificar se no campo tem espaço vázio, caso esteja, continuará, manterá o que quer que esteja lá.
    } else {
        friendlist.textContent = friendlist.textContent + ', ' + friend.value; // Adicionará o dado inserido pelo usuário e manterá o antigo.
    }
  
    friend.value = ''
}

function sortear(){
    if(amigos.length < 4){
        alert("Adicione pelo menos 4 amigos!") // Irá verificar se à pelo menos 4 nomes
        return;
    }
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0 ; i < amigos.length; i++){
        if (i == amigos.length - 1 ){
        sorteio.innerHTML = sorteio.innerHTML + amigos [i] + '→' + amigos [0] + '<br>';  // Colocará os nomes sorteados no campo de lista de sorteio e em seguida pulará uma linha
        } else{
      sorteio.innerHTML = sorteio.innerHTML + amigos [i] + '→' + amigos [i + 1] + '<br>'; // Esta linha fará com que o ultimo dado sempre pegue o primeiro.
        }
    }
}


function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
        // Esta função serve para emabalhar os nomes armazenados no array
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos'). innerHTML = '';

}