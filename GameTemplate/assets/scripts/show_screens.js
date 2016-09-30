function showTitle() {
    hideAll();
    titleScreen.visible = true;
    IButton.visible = true;
    SButton.visible = true;
}

function showInstruction() {
    hideAll();
    instructionScreen.visible = true;
    TButton.visible = true;
}

function showBackground() {
    hideAll();
    backgroundScreen.visible = true;
}

function showGameOver() {
    hideAll();
    console.log("gameOver");
    gameoverScreen.visible = true;
}

function showText() {
    context.visible = true;
}


function showMouseText() {
    mouseText.visible = true;
}

function showSprite() {
    walk.visible = true;
}