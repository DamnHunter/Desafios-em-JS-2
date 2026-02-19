function LimparCampo(coisas){
    document.getElementById('quantidade').value = "";
}
function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado')
        botao.classList.add('container__botao')
    } else{
        botao.classList.remove('container__botao')
        botao.classList.add('container__botao-desabilitado')
    }
}
function reiniciar(){
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
    let sorteador = [];
    let resultado = document.getElementById('resultado');
     
           for (let i = 0; i < quantnum; i++){
            let numero = Math.floor(Math.random() * (ateNum - desdo + 1)) + desdo;
            
            while ( sorteador.includes(numero)){
                numero = Math.floor(Math.random() * (ateNum - desdo + 1)) + desdo;
            }
            sorteador.push(numero)
        }
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteador}</label>`
    alterarStatusBotao()
           }


    


