// Declarando variaveis
let imagens = ['/src/assets/img/bike1.jpg', '/src/assets/img/bike2.jpg', '/src/assets/img/bike3.jpg', '/src/assets/img/bike4.jpg']
let index = 0;
let time = 4000;

if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
    window.onload = function() {
        alert("Seja bem-vindo!");
    };
}

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

function verificarCampos() {
    var campo1 = document.getElementById("username").value;
    var campo2 = document.getElementById("password").value;

    if (campo1 !== "" && campo2 !== "") {
        window.location.href = "./quiz.html";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var errorMessage = "";
  
    if (name.trim() === "") {
      errorMessage += "Por favor, insira seu nome.\n";
    }
    if (phone.trim() === "") {
      errorMessage += "Por favor, insira seu telefone.\n";
    }
    if (email.trim() === "") {
      errorMessage += "Por favor, insira seu email.";
    }
  
    if (errorMessage !== "") {
      alert(errorMessage);
      return false;
    }
  }
  