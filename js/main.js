
// LE CONTAINER DU JEU
let container = document.getElementById("container");

// PAGES 
window.onload = buttonsMenu(), buttonsMenuEvent();

// LA FUNCTION POUR CREER DES BUTTONS
function buttons(id, value) {
    let button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("id", id);
    button.setAttribute("value", value);
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
    affichage.classList.add("personalRecord");
    let alphabet = recordPerso.forEach(element => {
    //    console.log(element); 
       console.log(element["nom"])
    });
    
    console.log(alphabet);
    // console.log(recordPerso);

    affichage.innerHTML = `<h1>Your personal Records :</h1> <br>
                            <ul> <li><h1>${recordPerso[0]["nom"]} : ${recordPerso[0]["level"]}</h1> </li>
                                    </ul>`;
    container.append(affichage);

    let buttonBack = document.createElement("input");
    buttonBack.setAttribute("id", "buttonBack");
    buttonBack.setAttribute("value", "Menu");
    buttonBack.addEventListener("click", menuPrincipal);
    container.append(buttonBack);
}

function menuPrincipal() {
    location.reload();
}
// creation du player  dans  ======> player.js
// FAIRE BOUGER LE PLAYER dans  ===> move.js
// FAIRE BOUGER LES ENEMIES DANS ==> enemies.js


// let player = [{
//     "nom": choixNom.value,
//     "race": choixRace.value,
//     "image": `<img src='../images/perso/` + choixRace.value + `.png' alt'' id='imgPerso' title='Voir plus de stats'>`
//   }];
//   localStorage.setItem("player", JSON.stringify(player));



// let retrievedObject = localStorage.getItem("player");
// let player = JSON.parse(retrievedObject);

// let nom = player[0]["nom"];
// let race = player[0]["race"];
// let img = player[0]["image"];