import { Cxmsg } from "./Cxmsg.js";

// Pegando o elemento Botão

document.getElementById("btn_entrar").addEventListener("click",()=>{
    // Pegando os elementos do login 

    let usuario = document.querySelector("#Usuario");
    let senha = document.querySelector("#Senha");

    if(usuario.value.length == 0 || senha.value.length == 0){
        const config = {
            cor: "#800",
            tipo: "ok"
        }
      return Cxmsg.mostrar(config,"TENTE NOVAMENTE!!!", "Falta de dados para o login!");
    }

    const endpoint = `http://127.0.0.1:1880/loginUsu/${usuario.value}/${senha.value}`;

    fetch(endpoint)
    .then(res => res.json())
    .then(res=>{
        if(res[0] == undefined){
            const config = {
                cor: "#800",
                tipo: "ok"
            }
            return Cxmsg.mostrar(config,"ERRO!!!", "Email ou Senha não estão cadastrados!");
        }
        window.open("../telaInicial.html","_self");
    })
});