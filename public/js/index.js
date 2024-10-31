import { afficherRules } from "./function.js";
import { afficherDuel } from "./function.js";
import { signeHouse } from "./function.js";

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
        signeHouse();
            
        });
    });  
};
selectIcone();

