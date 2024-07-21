// Pegando os cards

let cards = [...document.querySelectorAll(".card")];

console.log(cards[0].firstElementChild.nextElementSibling.innerHTML.replace("ã","a"))

// pegando um card por card
cards.forEach((elemento)=>{
    elemento.addEventListener("click",()=>{
        let endpoint = elemento.firstElementChild.nextElementSibling.innerHTML
        window.open(`${endpoint}.html`);
    })
})