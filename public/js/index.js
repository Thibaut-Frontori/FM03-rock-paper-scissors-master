import { afficherRules } from "./function.js";

//Afficher la règle du jeux
afficherRules();

const selectIcone =function() {
    const iconeElement=document.querySelectorAll(".icone");
    iconeElement.forEach(icone => {
        icone.addEventListener("click", (event)=>{
        // On récupère le bon icone
            const iconeName=Array.from(icone.classList).find(nomIcone=>nomIcone !=="icone");
            console.log(iconeName); 
        //intérer la fonction pour afficher le duel
        afficherDuel(iconeName);
            
        });
    });  
};
selectIcone();

const afficherDuel=function(iconeName){
    const pentagoneElement=document.querySelector(".pentagone");
    const duelElement=document.querySelector(".duel");
    const iconeElement=document.querySelector(".icone");
    console.log(iconeElement);
    

    //Je masque mon pentagone et j'affiche mon duel
    pentagoneElement.classList.toggle("hidden");
    duelElement.classList.toggle("hidden");

    // j'ajoute la classe de mon iconeSélectionn'
    // iconeElement.classList.add(iconeName);

};
