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
})