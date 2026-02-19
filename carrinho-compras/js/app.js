let valortotal = 0
limpar()

function adicionar(){
let produtoselect = document.getElementById('produto').value;
let quantidadeproduto = document.getElementById('quantidade').value;
let nameproduct = produtoselect.split('-')[0];
let productvalue = produtoselect.split('R$')[1];
let subtotal = quantidadeproduto * productvalue;
let carrinho = document.getElementById('lista-produtos');
if (quantidadeproduto <= 0){
    alert("Por favor, insira uma quantidade válida.");
    return;
}

carrinho.innerHTML += (`<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeproduto}x</span> ${nameproduct} <span class="texto-azul">R$${subtotal}</span>
        </section>`);

valortotal += subtotal;
 let campototal = document.getElementById('valor-total');
 campototal.textContent = `R$ ${valortotal}`
document.getElementById('quantidade').value = 0;

}


function limpar(){
document.getElementById('lista-produtos').innerHTML = ''
document.getElementById('valor-total').textContent = 'R$ 0'
}