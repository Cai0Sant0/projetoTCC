import { Cxmsg } from "./Cxmsg.js";

// pegando o elemento do botão

const btn_cadastro = document.getElementById("btn_enviar");

btn_cadastro.addEventListener("click",()=>{
    // pegando os elementos do login

    let input_email = document.getElementById("email");
    let input_NomeUsu = document.getElementById("nomeUsu");
    let input_Senha = document.getElementById("senhaUsu");

    if(input_email.value.length == 0 || input_NomeUsu.value.length == 0 || input_Senha.value.length == 0){
        const config = {
            cor: "#800",
            tipo: "ok"
        }
      return Cxmsg.mostrar(config,"TENTE NOVAMENTE!!!", "Falta de dados para o cadastro!");
    }

    const endpoint = `http://127.0.0.1:1880/cadastroUsu/${input_email.value}/${input_NomeUsu.value}/${input_Senha.value}`;

    fetch(endpoint)
    .then(res => res.json())
    .then(res=>{
        input_email.value = "";
        input_NomeUsu.value = "";
        input_Senha.value = "";
        console.log(res);
        if(res.affectedRows == 1){
            const config = {
                cor: "blue",
                tipo: "sn",
                textos: ["SIM","NÃO"],
                comando_sn: ()=>{
                    window.open("../login.html","_self");
                }
            }
             return Cxmsg.mostrar(config,"CADASTRO REALIZADO!", "Ir para a tela de login ?");
        }
        console.log("erro");
    })
        
});
