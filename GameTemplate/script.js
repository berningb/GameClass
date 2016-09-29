var stage, preload, queue;

var FPS = 30;
var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 600;

manifest = [
    {src:"asstes/images/title.png", id:"title"},
    {src:"asstes/images/gameArea.png", id:"background"},
    {src:"asstes/images/Instruction.png", id:"instructions"},
    {src:"asstes/images/GameOver.png", id:"gameover"}  
];

function setupCanvas() {
    var canvas = document.getElementById("game"); //get canvas with id='game'
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    stage = new createjs.Stage(canvas); //makes stage object from the canvas
}
 
function loadFiles() {
    queue = new createjs.LoadQueue(true, "assets/images");  //files are stored in 'images' directory
    queue.on("complete", loadComplete, this);  //when loading is done run 'loadComplete()'
    queue.loadManifest(manifest);  //load files listed in 'manifest'
}
 
function loadComplete(evt) {
    //once the files are loaded, put them into usable objects
    titleScreen = new createjs.Bitmap(queue.getResult("title"));
    backgroundScreen = new createjs.Bitmap(queue.getResult("background"));
    instructionScreen = new createjs.Bitmap(queue.getResult("instructions"));
    gameoverScreen = new createjs.Bitmap(queue.getResult("gameover"));
}

function loop() {
    runGameTImer();
    inLoopMusicMuteCHeck();
    switch (gamestate) {
        case CONSTRUCT:
            gameState = HOLD;
        break;
        case TITLE:
        break;
        case INSTRUCTION:
        break;
        case START_GAME:
            startGame();
            showGame();
            hideTitle();
            playMusic();
            gameState = START_LEVEL;
        break;
        case START_LEVEL:
            gameState = hold;
        break;
        case IN_GAME:
            gameLoop();
            if(gameTimer > 10) {
                gameState = GAME_OVER;
                stopMusic();
            }
        break;
        case GAME_OVER:
            showGameOver();
            hideGame();
        break;
        default:
    }
    stage.update();
}


(function main() {
    setupCanvas();
    loadFiles();
})();
