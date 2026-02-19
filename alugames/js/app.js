
 let quantjogosalugados = 1;
function contadordejogosalugados(){
    console.log(`Você alugou ${quantjogosalugados} jogos.`)
    //Contados de quantos jogos foram alugados pelo usuário e em seguida o exibe
}


function alterarStatus(id){
    let gameclicado = document.getElementById(`game-${id}`)
    let img = gameclicado.querySelector('.dashboard__item__img')
    let bt = gameclicado.querySelector('.dashboard__item__button')
    // coletando os "Status" do botão e imagem dos jogos


    if (img.classList.contains('dashboard__item__img--rented')){
                img.classList.remove('dashboard__item__img--rented');
                bt.classList.remove('dashboard__item__button--return');
                bt.textContent = 'Alugar';
               quantjogosalugados--
               // este if verifica se a imagem esta em um certo status, caso esteja, ele será ativado
            } else{
                img.classList.add('dashboard__item__img--rented');
                bt.classList.add('dashboard__item__button--return');
                bt.textContent = 'Devolver';
                // Caso não, será adicionado outros status tanto à imagem quanto ao botão
                quantjogosalugados++
                // Contador de quantos jogos forama lugados pelo usuário
            }
contadordejogosalugados()
}