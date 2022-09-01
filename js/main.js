
// LE CONTAINER DU JEU
let container = document.getElementById("container");

// PAGES 
window.onload = buttonsMenu(), buttonsMenuEvent(), setLocalStorage();



// LA FUNCTION POUR CREER DES BUTTONS
function buttons(id, value) {
    let button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("id", id);
    button.setAttribute("value", value);
    button.setAttribute("class", "inputMenu")
    container.append(button);
}

// LE MAIN MENU
function buttonsMenu() {
    buttons("start", "Start");
    buttons("options", "Options");
    buttons("personalRecord", "Personal Records");
    container.classList.add("menu");
}

function buttonsMenuEvent() {
    let buttonStart = document.getElementById("start");
    let buttonOptions = document.getElementById("options");
    let buttonPersonalRecord = document.getElementById("personalRecord");
    buttonStart.addEventListener("click", start);
    buttonOptions.addEventListener("click", options);
    buttonPersonalRecord.addEventListener("click", personalRecord);
    function start() {
        startGame();
    }
    function options() {
        console.log("options")
    }
    function personalRecord() {
        affichageRecords();
    }
}

// START GAME
function startGame() {
    // ENLEVER LES BUTTONS
    let buttonStart = document.getElementById("start");
    let buttonOptions = document.getElementById("options");
    let buttonPersonalRecord = document.getElementById("personalRecord");
    buttonStart.remove();
    buttonOptions.remove();
    buttonPersonalRecord.remove();
    // 
    document.title = "First Level";
    container.classList.replace("menu", "grid");
    playerCreation();
    creerLesButtonsInvisible();
}

// OPTIONS

// PERSONAL RECORD
// POUR METTRE LE TABLEAU DANS LE LOCAL STORAGE

function setLocalStorage() {
    let stored = localStorage.getItem("record");
    if (stored == null) {
        console.log("stored null");
        let record = [];
        let newbe = {
            "nom": "Newbe",
            "level": "5"
        }
        record.push(newbe);
        localStorage.setItem("record", JSON.stringify(record));
    }
    else {
        console.log("le storage record est la")
    }
}

function affichageRecords() {
    let buttonStart = document.getElementById("start");
    let buttonOptions = document.getElementById("options");
    let buttonPersonalRecord = document.getElementById("personalRecord");
    buttonStart.remove();
    buttonOptions.remove();
    buttonPersonalRecord.remove();
    document.title = "Personal Records";
    // affichage des records
    let retrievedObject = localStorage.getItem("record");
    let recordPerso = JSON.parse(retrievedObject);
    let affichage = document.createElement("div");

    recordPerso.sort(function(a, b){return a.level - b.level});
    recordPerso.reverse();
    
    affichage.innerHTML = `<h1>Personal records</h1>`;
    if (recordPerso != null) {
        recordPerso.forEach(element => {
            affichage.innerHTML += `<p> ${element["nom"]} =>
                                    ${element["level"]}</p>`
        });
    }


    affichage.classList.add("personalRecord");
    container.append(affichage);

    let buttonBack = document.createElement("input");
    buttonBack.setAttribute("id", "buttonBack");
    buttonBack.setAttribute("value", "Menu");
    buttonBack.setAttribute("type", "button");
    buttonBack.setAttribute("class", "inputMenu")
    buttonBack.addEventListener("click", menuPrincipal);
    container.append(buttonBack);
}

function menuPrincipal() {
    location.reload();
}
// creation du player  dans  ======> player.js
// FAIRE BOUGER LE PLAYER dans  ===> move.js
// FAIRE BOUGER LES ENEMIES DANS ==> enemies.js
