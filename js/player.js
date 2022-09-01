

// LE PLAYER
function playerCreation() {
    let player = document.createElement("div");
    player.setAttribute("id", "player");
    container.append(player);
}

function playerLevelUp() {
    const playerStyle = window.getComputedStyle(player, null);
    let playerSize = playerStyle.getPropertyValue("background-size");
    if (playerSize == "auto") {
        player.style.backgroundSize = "contain";
        bulle("+1 vie")
    }
    else if (playerSize == "contain") {
        player.classList.add("borderLife");
        bulle("+1 vie")
    }
    else {
        bulle("tro costo la");
    }
}
function playerDestruction() {
    const playerStyle = window.getComputedStyle(player, null);
    let playerSize = playerStyle.getPropertyValue("background-size");
    if (playerSize == "contain" && player.classList == "borderLife") {
        player.style.backgroundSize = "contain";
        player.classList.remove("borderLife");
        bulle("Meh");
    }
    else if (playerSize == "contain") {
        player.style.backgroundSize = "auto";
        bulle("last chance");
    }
    else {
        bulle("ouch");
        setTimeout(function () {
            var retrievedObject = localStorage.getItem("record");
            var stored = JSON.parse(retrievedObject);
            let name = prompt("Quel est votre nom ou pseudo?");
            let niveau = document.title;
            let newEntry = {
                "nom": name,
                "level": niveau
            };
            stored.push(newEntry);

            localStorage.setItem("record", JSON.stringify(stored));
            console.log("normalement ça a rajouter dans le tableau");

        }, 400);

        // la mort
        setTimeout(function () { alert("You OUT"); }, 500);
        setTimeout(function () { location.reload(); }, 600);

    }
}

// enregistrer record 
function addARecord() {
    let
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