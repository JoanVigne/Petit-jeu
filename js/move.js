

// touches directionnelles
document.onkeydown = checkKey;
function checkKey(e) {
    //PLAYER
    let player = document.getElementById("player");
    const playerStyle = window.getComputedStyle(player, null);
    let positionColumn = playerStyle.getPropertyValue("grid-column-start");
    let positionRow = playerStyle.getPropertyValue("grid-row-start");

    // onkeydown
    e = e || window.event;
    if (e.keyCode == '38') {
        if (positionRow > 1) {
            // player move
            player.style.gridRowStart = Number(positionRow) - 1;
        }
        else {
            bulle("Trop haut");
        }
    }
    else if (e.keyCode == '40') {
        if (positionRow < 6) {
            // player move
            player.style.gridRowStart = Number(positionRow) + 1;
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
            if (document.title == "Level 5"){
                moveUp("foot1", 1);
                moveLeft("foot1", 1);
                moveUp("foot2", 1);
                moveRight("foot2", 1);
            }
            // ESSAI LEVEL 1 
            if (document.title == "First Level"){
                console.log("premier level pour faire des essaies");
            }
        }
        else if (positionRow == 6) {
            // player move
            player.style.gridRowStart = Number(positionRow) + 1;
            bulle("TOUCH DOWN");
            setTimeout(function () { touchDowm(); }, 1100);;
        }
    }
    else if (e.keyCode == '37') {
        if (positionColumn > 1) {
            // player move
            player.style.gridColumnStart = Number(positionColumn) - 1;
        }
        else {
            bulle("Trop a gauche");
        }
    }
    else if (e.keyCode == '39') {
        if (positionColumn < 4) {
            // player move
            player.style.gridColumnStart = Number(positionColumn) + 1;
        }
        else {
            bulle("trop à droite !");
        }
    }
    verifierSiColisionEssai("Level 2", "velo1");
    verifierSiColisionEssai("Level 3", "viking1");
    verifierSiColisionEssai("Level 4", "velo2");
    verifierSiColisionEssai("Level 5", "foot1");
    verifierSiColisionEssai("Level 5", "foot2");
}
