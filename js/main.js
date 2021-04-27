// console.log("JS externo!");
// console.log(window);

// alert("Bem vindo!");

// let adulto = confirm("Você tem mais de 18 anos?");

// let nomeUsuario = prompt("Qual seu nome?");

// let elementHeader = document.querySelector(".olaUsuario");

// elementHeader.innerHTML += `<strong>Olá, ${nomeUsuario}</strong>`;

// let logo = document.getElementById("logo");
// console.log(logo);

// logo.style.color = "orange";

let bottomDark = () => {
    if (document.getElementById("checkbox").checked) {
        let elementBody = document.querySelector("body").style.backgroundColor = "black";
        let elementHeader = document.querySelector("header");
        elementHeader.style.boxShadow = "0px 2px 10px rgba(255, 255, 255, 0.5)";
        elementHeader.style.backgroundColor = "black";
        let elementInfo = document.getElementByClassName("info").style.backgroundColor = "black";
        let elementArticle = document.querySelectorAll("article").style.boxShadow = "0px 5px 10px rgba(255, 255, 255, 0.5)";
    } else {
        let elementBody = document.querySelector("body").style.backgroundColor = "white";
        let elementHeader = document.querySelector("header");
        elementHeader.style.boxShadow = "0px 2px 10px rgba(0, 0, 0, 0.3)";
        elementHeader.style.backgroundColor = "white";
        elementHeader.style.zIndex = 10;
        let elementInfo = document.getElementByClassName("info").style.backgroundColor = "white";
        let elementArticle = document.querySelectorAll("article").style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.5)";
    }
}

let modal = document.getElementById("modal");
let fechar = document.getElementById("fechar");

setTimeout(() => {modal.style.display = "block"}, 5000);

fechar.onclick = () => {
    modal.style.display = "none";
}

// document.querySelector("#btn-submit-contact").addEventListener("click", (evento) => {
//     evento.preventDefault();

//     let nome = document.querySelector("#input_nome").value;
//     let email = document.querySelector("#input_email").value;
// });

let formContact = document.querySelector("#form-contact");

formContact.addEventListener("submit", (evento) => {
    let nome = document.querySelector("#input_nome").value;
    let email = document.querySelector("#input_email").value;
    let telefone = document.querySelector("#input_telefone").value;
    let mensagem = document.querySelector("#mensagem").value;
    let emailValidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    evento.preventDefault();
    if (!nome || !email || !telefone || !mensagem)
        alert("Preencha todos os campos");
    else if (telefone.length < 8)
        alert("Telefone precisa ter 8 dígitos");
    else if (nome.length < 2)
        alert("Nome precisa ter mais de 2 letras");
    else if(!emailValidate.test(email))
        alert("Email inválido");
    else
        formContact.submit()
})