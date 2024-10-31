export const afficherRules = function(){
    const rules=document.querySelector(".rules");
    const imgRules=document.querySelector(".imgRules");
    const pentagone=document.querySelector(".pentagone");
    rules.textContent="RULES";

    
    rules.addEventListener("click", (event) => {
    event.preventDefault();
    imgRules.classList.toggle("hidden");
    pentagone.classList.toggle("hidden");
    if (imgRules.classList.contains("hidden")) {
        rules.textContent = "RULES";
    } else {
        rules.textContent = " GO 🚀";
    }
});
}

export const afficherDuel=function(iconeName){
    const pentagoneElement=document.querySelector(".pentagone");
    const duelElement=document.querySelector(".duel");
    const iconeElement=document.querySelector(".iconePicked");
    console.log(iconeElement);
    

    //Je masque mon pentagone et j'affiche mon duel
    pentagoneElement.classList.toggle("hidden");
    duelElement.classList.toggle("hidden");

    // j'ajoute la classe de mon iconeSélectionn'
    iconeElement.classList.add(iconeName);
};

export const signeHouse=function () {
    const tbDesSignes=[
        "scissors",
        "paper",
        "rock",
        "lizards",
        "spock",
    ];
    const chiffreAleatoire=Math.floor(Math.random()*tbDesSignes.length);
    const signeAleatoire=tbDesSignes[chiffreAleatoire];
    const iconeHouseElement=document.querySelector(".iconeHouse");
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
        }
    }, 1000); // Intervalle de 1 seconde (1000 ms)
};
