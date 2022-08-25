

// touches directionnelles
document.onkeydown = checkKey;
function checkKey(e) {
    // onkeydown
    e = e || window.event;
    if (e.keyCode == '38') {
        moveUp("player", 1);
    }
    else if (e.keyCode == '40') {
            // player move
            moveDown("player", 1);
            // enemie moves
            if (document.title == "Level 2") {
                moveLeft("velo1", 1);
            }
            if (document.title == "Level 3") {
                moveUp("viking1", 1);
            }
            // move velo 2, haut + gauche quand player va vers le bas
            if (document.title == "Level 4") {
                moveUp("velo2", 1);
                moveLeft("velo2", 1);
            }
            if (document.title == "Level 5") {
                moveUp("foot1", 1);
                moveLeft("foot1", 1);
                moveUp("foot2", 1);
                moveRight("foot2", 1);
            }
            if (document.title == "Level 6") {
                moveLeft("foot3", 1);
                moveRight("foot4", 1);
            }
            // ESSAI LEVEL 1 
            if (document.title == "First Level") {
                console.log("premier level pour faire des essaies");
            }
    }
    else if (e.keyCode == '37') {
         // player move
        moveLeft("player", 1);
    }
    else if (e.keyCode == '39') {
         // player move
        moveRight("player", 1);
    }
    verifierSiColisionAll();
}
function verifierSiColisionAll(){
    verifierSiColision("Level 2", "velo1");
    verifierSiColision("Level 3", "viking1");
    verifierSiColision("Level 4", "velo2");
    verifierSiColision("Level 5", "foot1");
    verifierSiColision("Level 5", "foot2");
    verifierSiColision("Level 6", "foot3");
    verifierSiColision("Level 6", "foot4");
}

// au click top bot left right
// function InvisibleButtons(id, onclick) {
//     let button = document.createElement("input");
//     button.setAttribute("type", "button");
//     button.setAttribute("id", id);
//     button.setAttribute("onclick", onclick)
//     container.append(button);
// }
// function creerLesButtonsInvisible() {
//     InvisibleButtons("topButton", `checkKey('38')`);
//     InvisibleButtons("rightButton", `checkKey('39')`);
//     InvisibleButtons("botButton", `checkKey('40')`);
//     InvisibleButtons("leftButton", `checkKey('37')`);
// }
// let topButton = document.getElementById("topButton");
// let rightButton = document.getElementById("rightButton");
// let botButton = document.getElementById("botButton");
// let leftButton = document.getElementById("leftButton");

// HAUT DROITE BAS GAUCHE
function moveUp(name, up) {
    let enemi = document.getElementById(name);
    const styleEnemi = window.getComputedStyle(enemi, null);
    let positionRowEnemi = styleEnemi.getPropertyValue("grid-row-start");
    if (positionRowEnemi <= 1) {
        if (enemi.id == "player") {
            bulle("trop haut");
        }
        else {
            enemi.style.gridRowStart = 7;
        }
    }
    else {
        enemi.style.gridRowStart = Number(positionRowEnemi) - up;
    }
}
function moveRight(name, right) {
    let enemi = document.getElementById(name);
    const styleEnemi = window.getComputedStyle(enemi, null);
    let positionColumnEnemi = styleEnemi.getPropertyValue("grid-column-start");
    if (positionColumnEnemi == 4) {
        if (enemi.id == "player") {
            bulle("almost out");
        }
        else {
            enemi.style.gridColumnStart = 1;
        }

    }
    else {
        enemi.style.gridColumnStart = Number(positionColumnEnemi) + right;
    }
}
function moveDown(name, down) {
    let enemi = document.getElementById(name);
    const styleEnemi = window.getComputedStyle(enemi, null);
    let positionRowEnemi = styleEnemi.getPropertyValue("grid-row-start");
    if (positionRowEnemi == 6 && enemi.id == "player") {
        // player move
        enemi.style.gridRowStart = down;
        bulle("TOUCH DOWN");
        setTimeout(function () { touchDowm(); }, 1100);;
    }
    if (positionRowEnemi == 7) {
        enemi.style.gridRowStart = 1;
    }
    else {
        enemi.style.gridRowStart = Number(positionRowEnemi) + down;
    }

}
function moveLeft(name, left) {
    let enemi = document.getElementById(name);
    const styleEnemi = window.getComputedStyle(enemi, null);
    let positionColumnEnemi = styleEnemi.getPropertyValue("grid-column-start");
    if (positionColumnEnemi == 1) {
        if(enemi.id == "player"){
            bulle("almost out");
        }
        else {
            enemi.style.gridColumnStart = 4;
        }
    }
    else {
        enemi.style.gridColumnStart = Number(positionColumnEnemi) - left;
    }
}