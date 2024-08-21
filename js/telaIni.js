import { Cxmsg } from "./Cxmsg.js";

//Verificação para ver se usuário está logado
// if(localStorage.getItem("token") == null){
//     alert("Você precisa estar logado para acessar esssa página")
//     window.location.href = "../login.html"
// }

// Pegando o usuário logado do localStorage
// let userLogado = JSON.parse(localStorage.getItem("userLogado"));
// let msg = document.querySelector("#msg");
// msg.innerHTML = `Seja Bem Vindo ${userLogado.nome}`;

// Pegando os cards

let cards = [...document.querySelectorAll(".card")];

// pegando um card por card
cards.forEach((elemento)=>{
    elemento.addEventListener("click",()=>{
        let endpoint = elemento.firstElementChild.nextElementSibling.innerHTML
        endpoint = endpoint.split(" ").join("");
        endpoint = endpoint.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        window.open(`locais/${endpoint}.html`);
    })
});

//Colocando imagem de perfil

let fotoPerfil = document.querySelector(".fotoPerfil")

fotoPerfil.addEventListener("click",()=>{
    const config = {
        cor: "#800",
        tipo: "ok"
    }
    Cxmsg.mostrar(config,"TESTE","TESTE");
})