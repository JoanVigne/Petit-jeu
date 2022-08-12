

// touches directionnelles
document.onkeydown = checkKey;
function checkKey(e) {
    let player = document.getElementById("player");
    const playerStyle = window.getComputedStyle(player, null);
    let positionColumn = playerStyle.getPropertyValue("grid-column-start");
    let positionRow = playerStyle.getPropertyValue("grid-row-start");
    e = e || window.event;
    if (e.keyCode == '38') {
        if (positionRow > 1) {
            player.style.gridRowStart = Number(positionRow) - 1;
            console.log("touched");
        }
        else {
            bulle("Trop haut");
        }
    }
    else if (e.keyCode == '40') {
        if (positionRow < 6) {
            player.style.gridRowStart = Number(positionRow) + 1;
            console.log("vers le bas");
        }
        else if (positionRow == 6) {
            player.style.gridRowStart = Number(positionRow) + 1;
            bulle("TOUCH DOWN");
            setTimeout(function(){touchDowm(); }, 1300);;
        }
    }
    else if (e.keyCode == '37') {
        if (positionColumn > 1) {
            player.style.gridColumnStart = Number(positionColumn) - 1;
            console.log("touched");
        }
        else {
            bulle("Trop a gauche");
        }
    }
    else if (e.keyCode == '39') {
        if (positionColumn < 4) {
            player.style.gridColumnStart = Number(positionColumn) + 1;
            console.log("touched");
        }
        else {
            bulle("trop à droite !");
        }
    } 
}

function bulle(message) {
    console.log(message);
    let bulle = document.createElement("p");
    bulle.classList.add("bulle");
    bulle.innerHTML = message;
    player.append(bulle);
    setTimeout(function(){ effacerBulle(); }, 1300);
    function effacerBulle(){
        let toutesLesBulles = document.getElementsByClassName("bulle");
            toutesLesBulles[0].parentNode.removeChild(bulle);
        }
}

