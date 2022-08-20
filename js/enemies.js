

function enemiesCreation(x){
    let enemie = document.createElement("div");
    enemie.setAttribute("id", x);
    enemie.setAttribute("class", "enemies");
    container.append(enemie);
}
// pour cacher les enemies des niveaux precedents
function hidden(y){
    let element = document.getElementById(y);
    element.style.visibility = "hidden";
}


// HAUT DROITE BAS GAUCHE
function moveUp(name, up){
    let enemi = document.getElementById(name);
    const styleEnemi = window.getComputedStyle(enemi, null);
    let positionRowEnemi = styleEnemi.getPropertyValue("grid-row-start");
    if(positionRowEnemi <= 1){
        enemi.style.gridRowStart = 7;
    }
    else {
        enemi.style.gridRowStart = Number(positionRowEnemi) - up;
    }  
}
function moveRight(name, right){
    let enemi = document.getElementById(name);
    const styleEnemi = window.getComputedStyle(enemi, null);
    let positionColumnEnemi = styleEnemi.getPropertyValue("grid-column-start");
    if(positionColumnEnemi == 4){
        enemi.style.gridColumnStart = 1;
    }
    else {
        enemi.style.gridColumnStart = Number(positionColumnEnemi) + right;
    } 
}
function moveDown(name, down){
    let enemi = document.getElementById(name);
    const styleEnemi = window.getComputedStyle(enemi, null);
    let positionRowEnemi = styleEnemi.getPropertyValue("grid-row-start");
    if(positionRowEnemi == 7){
        enemi.style.gridRowStart = 1;
    }
    else{
        enemi.style.gridRowStart = Number(positionRowEnemi) + down;
    }
   
}
function moveLeft(name, left){
    let enemi = document.getElementById(name);
    const styleEnemi = window.getComputedStyle(enemi, null);
    let positionColumnEnemi = styleEnemi.getPropertyValue("grid-column-start");
    if(positionColumnEnemi == 1){
        enemi.style.gridColumnStart = 4;
    }
    else {
        enemi.style.gridColumnStart = Number(positionColumnEnemi) - left;
    }
}

// verifier les colisions
function verifierSiColisionEssai(level, nom){
    console.log("essai de function colision");
    let player = document.getElementById("player");
    const playerStyle = window.getComputedStyle(player, null);
    let positionColumn = playerStyle.getPropertyValue("grid-column-start");
    let positionRow = playerStyle.getPropertyValue("grid-row-start");
    if(document.title == level){
        let x = document.getElementById(nom);
        const xStyle = window.getComputedStyle(x, null);
        let positionColumnX = xStyle.getPropertyValue("grid-column-start");
        let positionRowX = xStyle.getPropertyValue("grid-row-start");
        if (positionColumn == positionColumnX && positionRow == positionRowX) {
            playerDestruction();
            console.log("destruction");
        }
    }  
}