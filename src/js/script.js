// Declarando variaveis
let imagens = ['/src/assets/img/bike1.jpg', '/src/assets/img/bike2.jpg', '/src/assets/img/bike3.jpg', '/src/assets/img/bike4.jpg']
let index = 0;
let time = 4000;

function mudarCor(cor){
    var body = document.body;

    body.style.backgroundColor = cor;
}

function slideShow(){
    document.getElementById('imgSlideshow').src = imagens[index];
    index++;

    if(index == imagens.length){
        index = 0;
    }
    setTimeout('slideShow()', time);
}
slideShow();