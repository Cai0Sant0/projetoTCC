// CRIANDO CAIXA COM MAIORES CONFIGURAÇÕES E BOTÕES

import { Cxmsg } from "./Cxmsg.js";

const config={
    cor : "#48f",
    tipo: "ok", //tipos: ok, sn -> sim ou nao
    textos: ["SIM","NÃO"],
    comando_sn: ()=>{
        
    }
}

const f_sim = ()=>{
    console.log("BOTÃO SIM PRESSIONADO");
}

const botaoCx01 = document.querySelector("#btn_caixa1");
const botaoCx02 = document.querySelector("#btn_caixa2");
const botaoCx03 = document.querySelector("#btn_caixa3");

botaoCx01.addEventListener("click",()=>{
    config.tipo = "ok";
    Cxmsg.mostrar(config,"Caio","Curso JS");
});

botaoCx02.addEventListener("click",()=>{
    config.tipo = "sn";
    config.comando_sn = ()=>{f_sim()};
    Cxmsg.mostrar(config,"ba","Testando...");
});

botaoCx03.addEventListener("click",()=>{
    config.tipo = "sn";
    config.textos = ["OK","CANCELA"];
    config.comando_sn = ()=>{};
    Cxmsg.mostrar(config,"600","Deu certo :)");
});