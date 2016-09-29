function buildAll() {
    buildTitle();
    buildInstructions();
    buildBackground();
    buildButtons();
    buildText();
    showTitle();
}

function buildTitle() {
    titleScreen.x = 0;
    titleScreen.y = 0;
    stage.addChild(titleScreen);
}

function buildInstructions() {
    instructionScreen.x = 0;
    instructionScreen.y = 0;
    stage.addChild(instructionScreen)
}

function buildBackground() {
    backgroundScreen.x = 0;
    backgroundScreen.y = 0;
    stage.addChild(backgroundScreen);
}

function buildButtons() {
    IButton.x = 250;
    IButton.y = 500;
    IButton.on("click", (showInstruction))
    stage.addChild(IButton);

    SButton.x = 500;
    SButton.y = 500;
    SButton.on("click", (showBackground))
    stage.addChild(SButton);

    TButton.x = 10;
    TButton.y = 10;
    TButton.on("click", (showTitle))
    stage.addChild(TButton);
}

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

function hideAll() {
    titleScreen.visible = false;
    instructionScreen.visible = false;
    backgroundScreen.visible = false;
    IButton.visible = false;
    TButton.visible = false;
    SButton.visible = false;
    context.visible = false;
}

function buildText() {
    context = new createjs.Text("", "20px Ariel", "red")
    stage.addChild(context);
}

function showText() {
    context.visible = true;
}