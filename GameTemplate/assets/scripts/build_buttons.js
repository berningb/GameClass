function buildButtons() {
    IButton.x = 250;
    IButton.y = 500;
    IButton.on("click", (showInstruction));


    SButton.x = 500;
    SButton.y = 500;
    SButton.on("click", (startGame));


    TButton.x = 10;
    TButton.y = 10;
    TButton.on("click", (showTitle));

}