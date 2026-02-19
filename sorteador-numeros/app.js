function LimparCampo(){
    document.getElementById('quantidade').value = "";
}
function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) { // Irá verificar se o botão esta com um estado.
        botao.classList.remove('container__botao-desabilitado')
        botao.classList.add('container__botao')
        // Caso esteja, este estado será alterado.
    } else{
        botao.classList.remove('container__botao')
        botao.classList.add('container__botao-desabilitado')
        // caso não, não será.
    }
}
function reiniciar(){
    // Esta função irá fazer com que todos os campos apaguem os dados inseridos.
    document.getElementById('quantidade').value = ''; 
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado'). innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}
function sortear(){
    let quantnum = parseInt (document.getElementById('quantidade').value);
    let desdo = parseInt (document.getElementById('de').value);
    let ateNum = parseInt (document.getElementById('ate').value);
    // As 3 variáveis acima pegará apenas os dados numéricos inseridos nos campos.
    let sorteador = [];
    let resultado = document.getElementById('resultado');
     
           for (let i = 0; i < quantnum; i++){
            let numero = Math.floor(Math.random() * (ateNum - desdo + 1)) + desdo; // Este for fará com numeros entre os 2 inseridos pelo usuário sejam sorteados.
            
            while ( sorteador.includes(numero)){
                numero = Math.floor(Math.random() * (ateNum - desdo + 1)) + desdo; // Este while é para garantir que nenhum numero dentro dos sorteados sejam repetidos já que será sorteado novamente. Será verificado se já estão contidos.
            }
            sorteador.push(numero) // O array Sorteador receberá os numeros dentro da váriavel numero
        }
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteador}</label>`
    alterarStatusBotao()
           }


    


