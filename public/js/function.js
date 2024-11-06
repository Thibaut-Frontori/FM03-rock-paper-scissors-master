// Importation du JSON
import relationSignes from "../data/signes.json" assert { type: "json" };

// Éléments du DOM
const rules = document.querySelector(".rules");
const imgRules = document.querySelector(".imgRules");
const pentagoneElement = document.querySelector(".pentagone");
const duelElement = document.querySelector(".duel");
const iconeElement = document.querySelector(".iconePicked");
const iconeHouseElement = document.querySelector(".iconeHouse");
const quiGagneElement = document.querySelector(".quiGagne");
const scoreElement =document.querySelector(".scoreNombre");
const resultatDuelElement = document.querySelector(".resultatDuel");
const rejouerElement = document.querySelector(".rejouer");
const scoreVousElement = document.querySelector(".scoreVous");
const scoreOrdiElement = document.querySelector(".scoreOrdi");
const cardScoreVousElement = document.querySelector(".cardScoreVous");
const cardScoreOrdiElement = document.querySelector(".cardScoreOrdi");
const iconeElements = document.querySelectorAll(".icone");

//Variables
let scoreVous=0;
let scoreOrdi=0;
const tbDesSignes = Object.keys(relationSignes);

// fonction de simplification
const verifClassHidden =function(element){
    return element.classList.contains("hidden");
}
const toggleHidden =function(element){
    return element.classList.toggle("hidden");
}

// Fonction pour afficher les règles
export const afficherRules = function () {
    rules.textContent = "RULES";
    rules.addEventListener("click", () => {
        if (verifClassHidden(pentagoneElement) && verifClassHidden(duelElement) && duelElement.classList.contains("partieLancee"))  {
            toggleHidden(imgRules);
            toggleHidden(duelElement);
        } else if (verifClassHidden(duelElement)) {
            toggleHidden(pentagoneElement);
            toggleHidden(imgRules);
        } else {
            toggleHidden(duelElement);
            toggleHidden(imgRules);
        }
    });
};

// Fonction pour sélectionner une icône
export const lancerLeJeu = function () {
    iconeElements.forEach(icone => {
        icone.addEventListener("click", (event) => {
            event.preventDefault();
            duelElement.classList.add("partieLancee");
            // Récupérer le nom de l'icône sélectionnée
            const iconeName = Array.from(icone.classList).find(nomIcone => nomIcone !== "icone");

            // Afficher le duel
            afficherDuel(iconeName);

            // Obtenir le signe aléatoire de la maison
            const signeAleatoire = signeHouse();

            // Déterminer qui gagne
            afficherResultat(iconeName,signeAleatoire)
        });
    });
};

// Fonction pour afficher le duel
export const afficherDuel = function (iconeName) {
    // Masquer le pentagone et afficher le duel
    pentagoneElement.classList.add("hidden");
    duelElement.classList.remove("hidden");

    // Ajouter la classe de l'icône sélectionnée
    iconeElement.classList.add(iconeName);
};

// Fonction pour obtenir un signe aléatoire
export const signeHouse = function () {
    let signeAleatoire="";
    let chiffreAleatoire="";
    chiffreAleatoire = Math.floor(Math.random() * tbDesSignes.length);
    signeAleatoire = tbDesSignes[chiffreAleatoire];
    console.log(signeAleatoire);
    return signeAleatoire; // Retourne le signe aléatoire
}

const afficherResultat=function(iconeName,signeAleatoire){
    let count = 3;

    iconeHouseElement.className = "iconDuel iconeHouse opacity";
    // Créer un intervalle pour le compte à rebours
    const countdownInterval = setInterval(() => {
        
        iconeHouseElement.textContent = count;
        count--;

        // Vérifier si le compte est terminé
        if (count < 0) {
            clearInterval(countdownInterval);
            iconeHouseElement.textContent = "";
            // Ajouter la classe aléatoire après le compte à rebours
            iconeHouseElement.classList.add(signeAleatoire);
            iconeHouseElement.classList.remove("opacity");
            quiGagneElement.classList.remove("hidden");
            rejouerElement.classList.remove("hidden");
            quiGagne(iconeName, signeAleatoire);
        }
    }, 500); // Intervalle de 1 seconde (500 ms)
};

// Fonction pour déterminer qui gagne
const quiGagne = function (iconeName, signeAleatoire) {
    // Récupérer l'objet du signe sélectionné
    const tbSigneSelectionne = relationSignes[iconeName];

    // Vérifier si la structure de tbSigneSelectionne est correcte
    if (!tbSigneSelectionne || !Array.isArray(tbSigneSelectionne.win)) {
        console.error("Structure de tbSigneSelectionne incorrecte :", tbSigneSelectionne);
        return;
    }

    // Vérifier si le signe aléatoire est battu par iconeName
    const signeTrouve = tbSigneSelectionne.win.includes(signeAleatoire);

    // Déterminer le résultat
    if (iconeName === signeAleatoire) {
        quiGagneElement.textContent = "Égalité !";
    } else if (signeTrouve) {
        quiGagneElement.textContent = "Victoire !";
        iconeElement.classList.add("victoire");
        scoreVous++;
        scoreVousElement.textContent = scoreVous;
    } else {
        quiGagneElement.textContent = "Défaite !";
        iconeHouseElement.classList.add("victoire");
        scoreOrdi++;
        scoreOrdiElement.textContent = scoreOrdi;
    }

    if (scoreVous>scoreOrdi) {
        cardScoreVousElement.classList.add("vainqueurActuel");
        cardScoreOrdiElement.classList.remove("vainqueurActuel");
    }else if (scoreVous<scoreOrdi) {
        cardScoreOrdiElement.classList.add("vainqueurActuel");
        cardScoreVousElement.classList.remove("vainqueurActuel");
    }else{
        cardScoreVousElement.classList.remove("vainqueurActuel");
        cardScoreOrdiElement.classList.remove("vainqueurActuel");
    }
};
export const rejouer=function(){
    rejouerElement.addEventListener("click", (event)=> {
        duelElement.className="duel hidden";
        pentagoneElement.className="pentagone";
        iconeHouseElement.className="iconDuel iconeHouse opacity";
        iconeElement.className="iconDuel iconePicked ";
        rejouerElement.classList.add("hidden");
        quiGagneElement.classList.add("hidden");
    })
};
