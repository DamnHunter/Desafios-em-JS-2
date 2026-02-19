let amigos = [];
function adicionar(){
    let friend = document.getElementById('nome-amigo');
    let friendlist = document.getElementById('lista-amigos');
      for(let j = 0; j < amigos.length; j++){
        if(friend.value.toLowerCase() == amigos[j].toLowerCase()){
            alert("Já tem um amigo com esse nome, irmão.")
            return;
        }
    }
      if (friend.value == ''){
            alert("Tem amigo não, cumpade?");
            return;
        }
    amigos.push(friend.value);
    if(friendlist.textContent == ''){
     friendlist.textContent = friend.value;
    } else {
        friendlist.textContent = friendlist.textContent + ', ' + friend.value;
    }
  
    friend.value = ''
}

function sortear(){
    if(amigos.length < 4){
        alert("Adicione pelo menos 4 amigos!")
        return;
    }
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0 ; i < amigos.length; i++){
        if (i == amigos.length - 1 ){
        sorteio.innerHTML = sorteio.innerHTML + amigos [i] + '→' + amigos [0] + '<br>';
        } else{
      sorteio.innerHTML = sorteio.innerHTML + amigos [i] + '→' + amigos [i + 1] + '<br>';
        }
    }
}


function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos'). innerHTML = '';

}