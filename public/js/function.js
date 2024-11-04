import relationSignes from "../data/signes.json" assert  { type: 'json' };
//Eléments du DOM
const rules=document.querySelector(".rules");
const imgRules=document.querySelector(".imgRules");
const pentagoneElement=document.querySelector(".pentagone");
const duelElement=document.querySelector(".duel");
const iconeElement=document.querySelector(".iconePicked");
const iconeHouseElement=document.querySelector(".iconeHouse");
const quiGagne=document.querySelector(".quiGagne");
const rejouer=document.querySelector(".rejouer")

const relationSignes = {
    "scissors": { win: ["paper", "lizards"] },
    "paper": { win: ["rock", "spock"] },
    "rock": { win: ["lizards", "scissors"] },
    "lizards": { win: ["spock", "paper"] },
    "spock": { win: ["scissors", "rock"] },
};
const tbDesSignes=Object.keys(relationSignes);


export const afficherRules = function(){
    rules.textContent="RULES";
    rules.addEventListener("click", (event) => {
    event.preventDefault();
    imgRules.classList.toggle("hidden");
    pentagoneElement.classList.toggle("hidden");
    if (imgRules.classList.contains("hidden")) {
        rules.textContent = "RULES";
    } else {
        rules.textContent = " GO 🚀";
    }
});
}

export const selectIcone =function() {
    const iconeElement=document.querySelectorAll(".icone");
    iconeElement.forEach(icone => {
        icone.addEventListener("click", (event)=>{
        // On récupère le bon icone
            const iconeName=Array.from(icone.classList).find(nomIcone=>nomIcone !=="icone");
            console.log(iconeName); 
        //intérer la fonction pour afficher le duel
        afficherDuel(iconeName);
        signeHouse();
            
        });
    });  
};

export const afficherDuel=function(iconeName){

    console.log(iconeElement);
 
    //Je masque mon pentagone et j'affiche mon duel
    pentagoneElement.classList.toggle("hidden");
    duelElement.classList.toggle("hidden");

    // j'ajoute la classe de mon iconeSélectionn'
    iconeElement.classList.add(iconeName);
};

export const signeHouse=function () {
    const chiffreAleatoire=Math.floor(Math.random()*tbDesSignes.length);
    console.log(chiffreAleatoire);
    
    const signeAleatoire=tbDesSignes[chiffreAleatoire];

    let count = 3;
    // Créer un intervalle pour le compte à rebours
    const countdownInterval = setInterval(() => {
        iconeHouseElement.textContent = count;
        count--;

        // Vérifier si le compte est terminé
        if (count < 0) {
            clearInterval(countdownInterval);
            iconeHouseElement.textContent ="";
            // Ajouter la classe aléatoire après le compte à rebours
            iconeHouseElement.classList.add(signeAleatoire);
            iconeHouseElement.classList.remove("opacity");
            rejouer.classList.remove("hidden");
            quiGagne.textContent="L'ordinateur gagne";
        }
    }, 1000); // Intervalle de 1 seconde (1000 ms)
};
