

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
            // move de VELO1 qui ne fait qu'aller vers la gauche, il bouge quand player va vers le bas
            if (document.title == "Level 2") {
                moveVelo1();
            }
            // move de VIKING1 qui ne fait qu'aller vers le haut, il bouge quand player va vers le bas
            if (document.title == "Level 3") {
                moveViking1();
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
    verifierSiColision(); // fonctionne mais erreur sur velo1.getcomputedstyle
}

function moveVelo1() {
    let velo1 = document.getElementById("velo1");
    const velo1Style = window.getComputedStyle(velo1, null);
    let positionColumnVelo1 = velo1Style.getPropertyValue("grid-column-start");
    // let positionRowVelo1 = velo1Style.getPropertyValue("grid-row-start");
    velo1.style.gridColumnStart = Number(positionColumnVelo1) - 1;
}
function moveViking1(){
    let viking1 = document.getElementById("viking1");
    const viking1Style = window.getComputedStyle(viking1, null);
    // let positionColumnVelo1 = viking1Style.getPropertyValue("grid-column-start");
    let positionRowViking1 = viking1Style.getPropertyValue("grid-row-start");
    viking1.style.gridRowStart = Number(positionRowViking1) -1;
}

// RELOU DE DECLARER LES VAR ET TOUT REFAIRE POUR CHAQUE ENEMIES
function verifierSiColision() {
    console.log("verification de colision");
    // encore declarer ces variables ... 
    let player = document.getElementById("player");
    const playerStyle = window.getComputedStyle(player, null);
    let positionColumn = playerStyle.getPropertyValue("grid-column-start");
    let positionRow = playerStyle.getPropertyValue("grid-row-start");
    // puis velo1
    let velo1 = document.getElementById("velo1");
    const velo1Style = window.getComputedStyle(velo1, null);
    let positionColumnVelo1 = velo1Style.getPropertyValue("grid-column-start");
    let positionRowVelo1 = velo1Style.getPropertyValue("grid-row-start");
    if (positionColumn == positionColumnVelo1 && positionRow == positionRowVelo1) {
        playerDestruction();
        console.log("destruction par le velo");
    }
    // puis viking1
    let viking1 = document.getElementById("viking1");
    const viking1Style = window.getComputedStyle(viking1, null);
    let positionColumnViking1 = viking1Style.getPropertyValue("grid-column-start");
    let positionRowViking1 = viking1Style.getPropertyValue("grid-row-start");
    if (positionColumn == positionColumnViking1 && positionRow == positionRowViking1) {
        playerDestruction();
        console.log("destruction par le viking");
    }
}

// modele de function pour tous les enemies....
// function enemieMoves222(nom, haut, droite, bas, gauche) {
//     let enemieDiv = document.createElement("div");
//     enemieDiv.setAttribute("id", nom);
//     enemieDiv.setAttribute("class", "enemies");
//     container.append(enemieDiv);
//     let enemie = document.getElementById(nom);
//     const enemieStyle = window.getComputedStyle(enemie, null);
//     let positionColumnEnemie = enemieStyle.getPropertyValue("grid-column-start");
//     let positionRowEnemie = enemieStyle.getPropertyValue("grid-row-start");
//     enemie.style.gridColumnStart = Number(positionRowEnemie) - haut;
//     enemie.style.gridColumnStart = Number(positionColumnEnemie) + droite;
//     enemie.style.gridColumnStart = Number(positionRowEnemie) + bas;
//     enemie.style.gridColumnStart = Number(positionColumnEnemie) - gauche;
// }

// NE FONCTIONNE PAS 

function enemieMoves(nom, haut, droite, bas, gauche){
    console.log(nom);
    console.log("")
    let enemie = document.getElementById(nom);
    const enemieStyle = window.getComputedStyle(enemie, null);
    let positionColumnEnemie = enemieStyle.getPropertyValue("grid-column-start");
    let positionRowEnemie = enemieStyle.getPropertyValue("grid-row-start");
    enemie.style.gridColumnStart = Number(positionRowEnemie) - haut;
    enemie.style.gridColumnStart = Number(positionColumnEnemie) + droite;
    enemie.style.gridColumnStart = Number(positionRowEnemie) + bas;
    enemie.style.gridColumnStart = Number(positionColumnEnemie) - gauche;
    console.log(enemie);
    console.log("positionRowEnemie: ",positionRowEnemie);
    console.log("positionColumnEnemie: ",positionColumnEnemie);
    console.log("positionRowEnemie mais number: ",Number(positionRowEnemie));
    console.log("positionRowEnemie mais number: ",Number(positionColumnEnemie));

}
// enemieMoves("viking1", 1, 0, 0 ,0);