

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
        bulle("ouch")
    }
    else if(playerSize == "contain"){
        player.style.backgroundSize = "auto";
        bulle("last chance")
    } 
    else {
        buttonsMenu(),buttonsMenuEvent();
    }
}

