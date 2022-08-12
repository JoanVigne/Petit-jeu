function touchDowm(){
    // let player = document.getElementById("player");
    player.style.gridRowStart = 1;
    player.style.gridColumnStart = 1;
    let level = document.title;
    playerLevelUp();
    switch(level){
        case "index" : console.log("Menu principal");
        break;
        case "First Level" : console.log("Level One");
        document.title = "Level 2";
        break;
        case "Level 2" : console.log("Level One");
        document.title = "Level 3";
        break;
        case "Level 3" : console.log("Level One");
        document.title = "Level 4";
        break;
        case "Level 4" : console.log("Level One");
        document.title = "Level 5";
        break;
        case "Level 5" : console.log("Level One");
        document.title = "Level 6";
        break;
        case "Level 6" : console.log("Level One");
        document.title = "Level 7";
        break;
        case "Level 7" : console.log("Level One");
        document.title = "Level 8";
        break;
        case "Level 8" : console.log("Level One");
        break;
        case "Level 9" : console.log("Level One");
        break;
        case "Level 10" : console.log("Level One");
        break;
        case "Level 11" : console.log("Level One");
        break;
        case "Level 12" : console.log("Level One");
        break;
        case "Level 13" : console.log("Level One");
        break;
    }
}


// function newLevel(){
//     let level = document.title;
//     switch(level){
//         case "index" : console.log("Menu principal");
//         break;
//         case "First Level" : console.log("Level One");
//         break;
//         case "First 2" : console.log("Level One");
//         break;
//         case "First 3" : console.log("Level One");
//         break;
//         case "First 4" : console.log("Level One");
//         break;
//         case "First 5" : console.log("Level One");
//         break;
//         case "First 6" : console.log("Level One");
//         break;
//         case "First 7" : console.log("Level One");
//         break;
//         case "First 8" : console.log("Level One");
//         break;
//         case "First 9" : console.log("Level One");
//         break;
//         case "First 10" : console.log("Level One");
//         break;
//         case "First 11" : console.log("Level One");
//         break;
//         case "First 12" : console.log("Level One");
//         break;
//         case "First 13" : console.log("Level One");
//         break;
//     }
// }

