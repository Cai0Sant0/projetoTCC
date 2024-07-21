// Pegando os cards

let cards = [...document.querySelectorAll(".card")];

// pegando um card por card
cards.forEach((elemento)=>{
    elemento.addEventListener("click",()=>{
        let endpoint = elemento.firstElementChild.nextElementSibling.innerHTML
        window.open(`${endpoint}.html`);
    })
})