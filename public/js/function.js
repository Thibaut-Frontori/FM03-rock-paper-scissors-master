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
const rejouer = document.querySelector(".rejouer");

const tbDesSignes = Object.keys(relationSignes);

// Fonction pour afficher les règles
export const afficherRules = function () {
    rules.textContent = "RULES";
    rules.addEventListener("click", (event) => {
        event.preventDefault();
        imgRules.classList.toggle("hidden");
        pentagoneElement.classList.toggle("hidden");
        if (imgRules.classList.contains("hidden")) {
            rules.textContent = "RULES";
        } else {
            rules.textContent = "GO 🚀";
        }
    });
};

// Fonction pour sélectionner une icône
export const selectIcone = function () {
    const iconeElements = document.querySelectorAll(".icone");
    iconeElements.forEach(icone => {
        icone.addEventListener("click", (event) => {
            event.preventDefault();
            // Récupérer le nom de l'icône sélectionnée
            const iconeName = Array.from(icone.classList).find(nomIcone => nomIcone !== "icone");
            console.log("Icône sélectionnée : " + iconeName);

            // Afficher le duel
            afficherDuel(iconeName);

            // Obtenir le signe aléatoire de la maison
            const signeAleatoire = signeHouse();

            // Déterminer qui gagne
            quiGagne(iconeName, signeAleatoire);
        });
    });
};

// Fonction pour afficher le duel
export const afficherDuel = function (iconeName) {
    // Masquer le pentagone et afficher le duel
    pentagoneElement.classList.toggle("hidden");
    duelElement.classList.toggle("hidden");

    // Ajouter la classe de l'icône sélectionnée
    iconeElement.classList.add(iconeName);
};

// Fonction pour obtenir un signe aléatoire
export const signeHouse = function () {
    const chiffreAleatoire = Math.floor(Math.random() * tbDesSignes.length);
    const signeAleatoire = tbDesSignes[chiffreAleatoire];
    console.log("Icône aléatoire : " + signeAleatoire);

    let count = 3;
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
            rejouer.classList.remove("hidden");
        }
    }, 1000); // Intervalle de 1 seconde (1000 ms)

    return signeAleatoire; // Retourne le signe aléatoire
};

// Fonction pour déterminer qui gagne
const quiGagne = function (iconeName, signeAleatoire) {
    // Récupérer l'objet du signe sélectionné
    const tbSigneSelectionne = relationSignes[iconeName];
    const signesBattu1 = tbSigneSelectionne.win[0];
    const signesBattu2 = tbSigneSelectionne.win[1];
    console.log("Signes battus : ", signesBattu1, signesBattu2);

    // Vérifier si le signe aléatoire est battu
    if (iconeName === signeAleatoire) {
        quiGagneElement.textContent = "Égalité !";
    } else if (signesBattu1 === signeAleatoire || signesBattu2 === signeAleatoire) {
        quiGagneElement.textContent = "Victoire !";
    } else {
        quiGagneElement.textContent = "Défaite !";
    }
};
