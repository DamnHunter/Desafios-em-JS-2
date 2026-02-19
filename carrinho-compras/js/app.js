let valortotal = 0
limpar()
// Ajudará para não permitir que o programa se inicie já com um produto no carrinho

function adicionar(){
let produtoselect = document.getElementById('produto').value;
let quantidadeproduto = document.getElementById('quantidade').value;
let nameproduct = produtoselect.split('-')[0]; // Aqui pegamos o nome do produto
let productvalue = produtoselect.split('R$')[1]; // Pegamos o valor deste
let subtotal = quantidadeproduto * productvalue;
let carrinho = document.getElementById('lista-produtos');
if (quantidadeproduto <= 0){
    alert("Por favor, insira uma quantidade válida."); // Caso no espaço de quantidade esteja o numero "0" ou sem se quer um numero, o usuário será avisado
    return;
}
// Coleto todos os dados necessários do html

carrinho.innerHTML += (`<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeproduto}x</span> ${nameproduct} <span class="texto-azul">R$${subtotal}</span>
        </section>`); // Adicionando texto dentro do painel de produtos do carrinho de acordo com o produto selecionado

valortotal += subtotal;
 let campototal = document.getElementById('valor-total');
 campototal.textContent = `R$ ${valortotal}` // Substitui o texto anterior pelo valor total do carrinho que foi calculado na linha 21
document.getElementById('quantidade').value = 0; // O espaço de quantidades de produto retornará à ficar vazio

}


function limpar(){
document.getElementById('lista-produtos').innerHTML = ''
document.getElementById('valor-total').textContent = 'R$ 0'
// Removerá todos os itens do carinho e iniciará com valor total zero
}