/*
Disciplina: WEB Standarts
Autor: Eduardo Elias Ferreira de Lima
Data: 02/09/2023
Objetivo: Fazer um site responsivo com Html, CSS e JS

*/



var menulateral = document.getElementById("menunavegacao");  
var fechar = document.getElementById("fechar");

function PuxarMenu(){
   
    menulateral.classList.add("active");
    fechar.classList.toggle("active");

}

function FecharMenu(){
    menulateral.classList.remove("active");
}

//-----------------------------------------------------------
//Função de trocar as cores e as fotos 

function TrocaCor(Number){
    var n = Number;  //variavel que recebe o parâmetro da função
    var classeColorida = document.querySelectorAll('.color');  //cria as variaveis que selecionam os elementos
    var imgset = document.getElementById("tintaimg");

    var cores = [`#355a72`, `#355a72`,`#7d975a`,`#6f5a47`,`#bf9b23`,`#653e5b`,`#a81917`]; //vetor de todas as cores disponíveis

    for(i = 0; i < classeColorida.length; i++){  //for que pega todas as classes .color do site
        classeColorida[i].style.background = cores[n];    //coloca a cor setada 
        document.getElementById('home').style.backgroundImage=`url(imgs/parede${n}.png)`;  //seleciona a imagem de fundo e coloca a src corresponde ao parametro
        imgset.setAttribute('src', `imgs/tinta${n}.png`); //mesma coisa da foto de fundo, mas coloca a imagem pela src já que tá pelo html
    }

}