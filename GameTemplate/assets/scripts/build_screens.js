function buildAll() {
    buildTitle();
    buildInstructions();
    buildGameOver();
    buildBackground();
    buildButtons();
    buildText();
    buildMouseText();
    loadComponents();
}

function loadComponents() {
    stage.addChild(gameoverScreen);
    stage.addChild(instructionScreen)
    stage.addChild(backgroundScreen);
    stage.addChild(TButton);
    stage.addChild(mouseText);
    stage.addChild(context);
    stage.addChild(titleScreen);
    stage.addChild(IButton);
    stage.addChild(SButton);
    stage.addChild(walk);

}

function buildTitle() {
    titleScreen.x = 0;
    titleScreen.y = 0;
}

function buildInstructions() {
    instructionScreen.x = 0;
    instructionScreen.y = 0;
}

function buildGameOver() {
    gameoverScreen.x = 0;
    gameoverScreen.y = 0;
}

function buildBackground() {
    backgroundScreen.x = 0;
    backgroundScreen.y = 0;
}

function buildText() {
    context = new createjs.Text("", "20px Ariel", "red");
    context.x = 680;
    context.y = 10;
}

function buildMouseText() {
    mouseText = new createjs.Text("", "20px Ariel", "red");
    mouseText.x = 10;
    mouseText.y = 10;
}