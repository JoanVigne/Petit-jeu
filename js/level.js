function touchDowm(){
    player.style.gridRowStart = 1;
    player.style.gridColumnStart = 1;
    let level = document.title;
    playerLevelUp();
    switch(level){
        case "index" : console.log("Menu principal");
        break;
        case "First Level" : 
        document.title = "Level 2";
        enemiesCreation("velo1");
        break;
        case "Level 2" : 
        document.title = "Level 3";
        hidden("velo1");
        enemiesCreation("viking1");
        break;
        case "Level 3" : 
        document.title = "Level 4";
        hidden("viking1");
        enemiesCreation("velo2");
        break;
        case "Level 4" : 
        document.title = "Level 5";
        hidden("velo2");
        enemiesCreation("foot1");
        enemiesCreation("foot2");
        break;
        case "Level 5" : 
        document.title = "Level 6";
        hidden("foot1");
        hidden("foot2");
        break;
        case "Level 6" : 
        document.title = "Level 7";
        break;
        case "Level 7" : 
        document.title = "Level 8";
        break;
        case "Level 8" : 
        break;
        case "Level 9" : 
        break;
        case "Level 10" : 
        break;
        case "Level 11" : 
        break;
        case "Level 12" : 
        break;
        case "Level 13" : 
        break;
    }
}

