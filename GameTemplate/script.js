var stage, preload, queue, loader, gameState;

var FPS = 30;
var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 600;

var gameStates = {
    CONSTRUCT: 1,
    TITLE: 2,
    INSTRUCTION: 3,
    START_GAME: 4,
    IN_GAME: 5,
    GAME_OVER: 6,
    HOLD: 7
}

var titleScreen, backgroundScreen, instructionScreen, gameoverScreen;
var IButton, TButton;

function setupCanvas() {
    var canvas = document.getElementById("game"); //get canvas with id='game'
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    stage = new createjs.Stage(canvas); //makes stage object from the canvas
}

function loadFiles() {
    queue = new createjs.LoadQueue(true, "assets/images"); //files are stored in 'images' directory
    queue.on("complete", loadComplete, this); //when loading is done run 'loadComplete()'
    queue.loadManifest(manifest); //load files listed in 'manifest'
}

function loadComplete(evt) {
    //once the files are loaded, put them into usable objects
    titleScreen = new createjs.Bitmap(queue.getResult("title"));
    backgroundScreen = new createjs.Bitmap(queue.getResult("background"));
    instructionScreen = new createjs.Bitmap(queue.getResult("instructions"));
    gameoverScreen = new createjs.Bitmap(queue.getResult("gameover"));
    IButton = new createjs.Bitmap(queue.getResult("IButton"));
    TButton = new createjs.Bitmap(queue.getResult("TButton"));
    startLoop();
}

function startLoop() {
    var FPS = 30;
    createjs.Ticker.addEventListener('tick', loop);
    createjs.Ticker.setFPS(FPS);
    buildAll();
}



function loop() {
    // runGameTimer();
    // inLoopMusicMuteCHeck();
    switch (gameState) {
        case gameStates.CONSTRUCT:

            gameState = HOLD;
            break;
        case gameStates.TITLE:
            break;
        case gameStates.INSTRUCTION:
            break;
        case gameStates.START_GAME:
            startGame();
            showGame();
            hideTitle();
            playMusic();
            gameState = IN_GAME;
            break;
        case gameStates.IN_GAME:
            gameLoop();
            if (gameTimer > 10) {
                gameStates = GAME_OVER;
                stopMusic();
            }
            break;
        case gameStates.GAME_OVER:
            showGameOver();
            hideGame();
            break;
        default:
    }
    stage.update();
}


(function main() {

    gameState = gameStates.HOLD;

    manifest = [
        { src: "/assets/scripts/build_title.js" },
        { src: "/assets/images/title.png", id: "title" },
        { src: "/assets/images/gameArea.png", id: "background" },
        { src: "/assets/images/Instruction.png", id: "instructions" },
        { src: "/assets/images/GameOver.png", id: "gameover" },
        { src: "/assets/images/buttonInstructions.png", id: "IButton" },
        { src: "/assets/images/buttonTitle.png", id: "TButton" }
    ];

    setupCanvas();
    loadFiles();
})();