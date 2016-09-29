function buildAll() {
    buildTitle();
    buildInstructions();
    showTitle();
}

function buildTitle() {
    titleScreen.x = 0;
    titleScreen.y = 0;
    stage.addChild(titleScreen);

    IButton.x = 10;
    IButton.y = 10;
    IButton.on("click", (showInstruction))
    stage.addChild(IButton);
}

function buildInstructions() {
    instructionScreen.x = 0;
    instructionScreen.y = 0;
    titleScreen.visible = false;
    stage.addChild(instructionScreen)

    TButton.x = 10;
    TButton.y = 10;
    TButton.on("click", (showTitle))
    stage.addChild(TButton);
}


function showInstruction() {
    hideAll();
    instructionScreen.visible = true;
    TButton.visible = true;
}

function showTitle() {
    hideAll();
    titleScreen.visible = true;
    IButton.visible = true;
}

function hideAll() {
    titleScreen.visible = false;
    instructionScreen.visible = false;
    IButton.visible = false;
    TButton.visible = false;
}