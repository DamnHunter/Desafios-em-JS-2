function comprarpista(quanticket){
    let quantpista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quanticket > quantpista){// Irá verificar se o numero de tickets colocado pelo usuário é compatível com o numero disponível de ingressos.
        alert("Foi mal, não há mais ingressos.") 
    } else {
        quantpista = quantpista - quanticket;
        document.getElementById('qtd-pista').textContent = quantpista;
        alert("Compra realizada, parábens!")
    }
}
function ComprarInfChair(quanticket){
    let quantinfchair = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quanticket > quantinfchair){// Irá verificar se o numero de tickets colocado pelo usuário é compatível com o numero disponível de ingressos.
        alert("Foi mal, não há mais ingressos.")
    } else {
        quantinfchair = quantinfchair - quanticket;
        document.getElementById('qtd-inferior').textContent = quantinfchair;
        alert("Compra realizada, parábens!")
    }
}
function ComprarSupChair(quanticket){
    let quantsupchair = parseInt(document.getElementById('qtd-superior').textContent);
    if (quanticket > quantsupchair){// Irá verificar se o numero de tickets colocado pelo usuário é compatível com o numero disponível de ingressos.
        alert("Foi mal, não há mais ingressos.")
    } else {
        quantsupchair = quantsupchair - quanticket;
        document.getElementById('qtd-superior').textContent = quantsupchair;
        alert("Compra realizada, parábens!")
    }
}

function comprar(){
    let quanticket = parseInt(document.getElementById('qtd').value);
    let typeticket = document.getElementById('tipo-ingresso');
    
    
    if(isNaN(quanticket) || quanticket <= 0 ){ // Irá verificar se o numero de tickets do usuário foi nenhum, igual ou menor que zero. Caso seja, ele será alertado e será pedido valores válidos.
        alert('Por favor, insira um numero válido.');
        return;
    }

    if (typeticket.value == 'pista'){
        comprarpista(quanticket)
    }
    
    if (typeticket.value =="inferior"){
        ComprarInfChair(quanticket);
    }

    if (typeticket.value =="superior"){
        ComprarSupChair(quanticket);
    }
}
