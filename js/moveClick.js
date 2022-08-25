

// creation buttons
function InvisibleButtons(id, onclick) {
    let buttonDirection = document.createElement("input");
    buttonDirection.setAttribute("type", "button");
    buttonDirection.setAttribute("id", id);
    buttonDirection.setAttribute("onclick", onclick)
    container.append(buttonDirection);
}
function creerLesButtonsInvisible() {
    InvisibleButtons("topButton", "toTop()");
    InvisibleButtons("rightButton", "toRight()");
    InvisibleButtons("botButton", "toBot()");
    InvisibleButtons("leftButton", "toLeft()");
}

// function des buttons
function toTop() {
    moveUp("player", 1);
    verifierSiColisionAll();
}

function toRight() {
    moveRight("player", 1);
    verifierSiColisionAll();
}

function toBot() {
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
    verifierSiColisionAll();
}

function toLeft() {
    moveLeft("player", 1);
    verifierSiColisionAll();
}


