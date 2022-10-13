/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

jQuery(document).ready(function(){
    var qtd = 0;

    $('#qtdeCarrinho')[0].innerHTML = qtd;

    var carrinho = $('.carrinho');

    for(let i = 0; i < carrinho.length; i++){
        carrinho[i].innerHTML = `<input hidden value="${i}"></input>Adicionar no Carrinho`;
    }
    
    $('.carrinho').on('click', function(e){
        let elementValue = $(this).children().val();
        
        for(let i = 0; i < carrinho.length; i++){
            // debugger;
            if(elementValue == carrinho[i].children[0].value){
                if($( `#removido_${i}`).length){ 
                    carrinho[i].innerHTML = `<input hidden value="${i}"></input>Adicionar no Carrinho`;
                    qtd--;
                    $('#qtdeCarrinho')[0].innerHTML = qtd;
                    toastr.error('Item removido do carrinho!'); 
                } else {
                    carrinho[i].innerHTML = `<input id="removido_${i}" hidden value="${i}"></input>Remover do Carrinho`;
                    qtd++;
                    $('#qtdeCarrinho')[0].innerHTML = qtd;
                    toastr.success('Item adicionado ao carrinho!');
                }
                break;
            }
        }
    });
});