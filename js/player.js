

// LE PLAYER
function playerCreation(){
    let player = document.createElement("div");
    player.setAttribute("id", "player");
    container.append(player);
}

function playerLevelUp(){
    const playerStyle = window.getComputedStyle(player, null);
    let playerSize = playerStyle.getPropertyValue("background-size");
    if(playerSize == "auto"){
        player.style.backgroundSize = "contain";
        bulle("+1 vie")
    }
    else if(playerSize == "contain"){
        player.style.backgroundSize = "cover";
        bulle("+1 vie")
    } 
    else {
        bulle("tro costo la");
    }
}
function playerDestruction(){
    const playerStyle = window.getComputedStyle(player, null);
    let playerSize = playerStyle.getPropertyValue("background-size");
    if(playerSize == "cover"){
        player.style.backgroundSize = "contain";
        bulle("Meh")
    }
    else if(playerSize == "contain"){
        player.style.backgroundSize = "auto";
        bulle("last chance")
    } 
    else {
        bulle("ouch");
        setTimeout(function () { alert("You OUT"); }, 400);
        setTimeout(function () { location.reload(); }, 500);
}
}
// BULLES MESSAGES
function bulle(message) {
    let bulle = document.createElement("p");
    bulle.classList.add("bulle");
    bulle.innerHTML = message;
    player.append(bulle);
    setTimeout(function () { effacerBulle(); }, 1100);
    function effacerBulle() {
        let toutesLesBulles = document.getElementsByClassName("bulle");
        toutesLesBulles[0].parentNode.removeChild(bulle);
    }
}