function startGame() {
    myTime = (new Date()).getTime();
    hideAll();
    showBackground();
    displaySprites();
    showText();
    timer();
    score();
    // showMouseInfo();
    // buttonListener();
    state = gameStates.IN_GAME;
}

function score() {
    console.log("score");
}