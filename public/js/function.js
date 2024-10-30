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