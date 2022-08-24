
// let topButton = document.getElementById("topButton");
// topButton.addEventListener("click", topClick);
// let rightButton = document.getElementById("rightButton");
// rightButton.addEventListener("click", rightClick);
// let botButton = document.getElementById("botButton");
// botButton.addEventListener("click", botClick);
// let leftButton = document.getElementById("leftButton");
// leftButton.addEventListener("click", leftClick);

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
}

function toRight() {
    moveRight("player", 1);
}

function toBot() {
    moveDown("player", 1);
}

function toLeft() {
    moveLeft("player", 1);
}


