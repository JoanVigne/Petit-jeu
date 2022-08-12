
// LE CONTAINER DU JEU
let container = document.getElementById("container");


// PAGES 
window.onload = buttonsMenu(),buttonsMenuEvent();


// LA FUNCTION POUR CREER DES BUTTONS
function buttons(id, value){
    let button = document.createElement("input");
    button.setAttribute("type","button");
    button.setAttribute("id", id);
    button.setAttribute("value",value);
    container.append(button);
}

// LE MAIN MENU
function buttonsMenu(){
    buttons("start", "Start");
    buttons("options", "Options");
    buttons("personalRecord", "Personnal Records");
    container.classList.add("menu");
    
}
function buttonsMenuEvent(){
    let buttonStart = document.getElementById("start");
    let buttonOptions = document.getElementById("options");
    let buttonPersonalRecord = document.getElementById("personalRecord");
    buttonStart.addEventListener("click", start);
    buttonOptions.addEventListener("click", options);
    buttonPersonalRecord.addEventListener("click", personalRecord);
    function start(){
        console.log("clicked");
        startGame();
    }
    function options(){
        console.log("options")
    }
    function personalRecord(){
        console.log("personnalRecord");
    }
}




// START GAME
function startGame(){
    // ENLEVER LES BUTTONS
    let buttonStart = document.getElementById("start");
    let buttonOptions = document.getElementById("options");
    let buttonPersonalRecord = document.getElementById("personalRecord");
    buttonStart.remove();
    buttonOptions.remove();
    buttonPersonalRecord.remove();
    document.title = "First Level";
    container.classList.replace("menu", "grid");
    playerCreation();
    creationDesCases()
}

 // boucle pour creer toutes les cases
function creationDesCases(){
    for (let i = 0; i <= 26; i++){
        let div = document.createElement("div");
        div.classList.add("div"+i);
        div.classList.add("cases");
        container.append(div);
    }
};

// creation du player player.js
// FAIRE BOUGER LE PLAYER  move.js



// pour les vies du perso, changer la taille : background-size: auto, contain, cover;