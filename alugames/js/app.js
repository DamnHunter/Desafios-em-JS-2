
 let quantjogosalugados = 1;
function contadordejogosalugados(){
    console.log(`Você alugou ${quantjogosalugados} jogos.`)
}


function alterarStatus(id){
    let gameclicado = document.getElementById(`game-${id}`)
    let img = gameclicado.querySelector('.dashboard__item__img')
    let bt = gameclicado.querySelector('.dashboard__item__button')


    if (img.classList.contains('dashboard__item__img--rented')){
                img.classList.remove('dashboard__item__img--rented');
                bt.classList.remove('dashboard__item__button--return');
                bt.textContent = 'Alugar';
               quantjogosalugados--
            } else{
                img.classList.add('dashboard__item__img--rented');
                bt.classList.add('dashboard__item__button--return');
                bt.textContent = 'Devolver';
                quantjogosalugados++
            }
contadordejogosalugados()
}