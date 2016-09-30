var stage, preload, queue, loader, state, gameTime;

var canvas;
var FPS = 30;
var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 600;

var gameStates = {
    CONSTRUCT: 1,
    TITLE: 2,
    INSTRUCTION: 3,
    IN_GAME: 4,
    START_GAME: 5,
    GAME_OVER: 6,
    HOLD: 7
}
var sprites, walk;
var titleScreen, backgroundScreen, instructionScreen, gameoverScreen;
var IButton, TButton, SButton;
var minutesLabel, totalSeconds, context, myTime, inGameTime, mouseText;

function setupCanvas() {
    canvas = document.getElementById("game"); //get canvas with id='game'
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    stage = new createjs.Stage(canvas); //makes stage object from the canvas
    stage.on("stagemousemove", function(evt) {
        mouseText.text = "Mouse X: " + evt.stageX + ', Mouse Y: ' + evt.stageY;
    })
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
    SButton = new createjs.Bitmap(queue.getResult("SButton"));
    var walkSheet = new createjs.SpriteSheet({
        images: [queue.getResult("mySprites")],
        frames: [
            [160, 0, 19, 49, 0, 10.05, 48.6],
            [179, 0, 34, 44, 0, 17.05, 43.6],
            [213, 0, 22, 46, 0, 9.05, 45.6],
            [235, 0, 17, 49, 0, 8.05, 48.6],
            [0, 49, 25, 49, 0, 10.05, 48.6],
            [25, 49, 31, 46, 0, 14.05, 45.6],
            [56, 49, 33, 44, 0, 16.05, 43.6],
            [89, 49, 30, 44, 0, 17.05, 43.6],
            [119, 49, 28, 46, 0, 17.05, 45.6],
            [147, 49, 19, 49, 0, 10.05, 48.6],
            [166, 49, 23, 49, 0, 14.05, 48.6],
            [189, 49, 31, 46, 0, 16.05, 45.6],
            [220, 49, 34, 44, 0, 17.05, 43.6],
            [0, 98, 19, 49, 0, 9.05, 48.6],
            [19, 98, 34, 44, 0, 17.05, 43.6],
            [53, 98, 22, 46, 0, 13.05, 45.6],
            [75, 98, 17, 49, 0, 9.05, 48.6],
            [92, 98, 25, 49, 0, 15.05, 48.6],
            [117, 98, 31, 46, 0, 17.05, 45.6],
            [148, 98, 33, 44, 0, 17.05, 43.6],
            [181, 98, 30, 44, 0, 13.05, 43.6],
            [211, 98, 28, 46, 0, 11.05, 45.6],
            [0, 147, 19, 49, 0, 9.05, 48.6],
            [19, 147, 23, 49, 0, 9.05, 48.6],
            [42, 147, 31, 46, 0, 15.05, 45.6],
            [73, 147, 34, 44, 0, 17.05, 43.6]
        ],
        animations: {
            standRight: [0, 0, "standRight"],
            walkRight: [1, 12, "walkRight", .5],
            standLeft: [13, 13, "standLeft"],
            walkLeft: [14, 25, "walkLeft", .5]
        }
    });
    walk = new createjs.Sprite(walkSheet); //create a sprite from the frame and animation data

    startLoop();
}

function startLoop() {
    var FPS = 30;
    createjs.Ticker.addEventListener('tick', loop);
    createjs.Ticker.setFPS(FPS);
    buildAll();
}



function loop() {
    switch (state) {
        case gameStates.CONSTRUCT:
            state = gameStates.HOLD;
            break;
        case gameStates.TITLE:
            break;
        case gameStates.INSTRUCTION:
            break;
        case gameStates.START_GAME:
            startGame();
            break;
        case gameStates.IN_GAME:
            showSprite();
            showMouseText();
            timer();
            break;
        case gameStates.GAME_OVER:
            showGameOver();
            break;
        default:
    }
    stage.update();
}


(function main() {

    gameState = gameStates.HOLD;

    manifest = [

        { src: "/assets/scripts/hide.js" },
        { src: "/assets/scripts/timer.js" },
        { src: "/assets/scripts/walk_key.js" },
        { src: "/assets/scripts/start_game.js" },
        { src: "/assets/scripts/show_screens.js" },
        { src: "/assets/scripts/build_sprites.js" },
        { src: "/assets/scripts/build_screens.js" },
        { src: "/assets/scripts/build_buttons.js" },
        { src: "/assets/images/title.png", id: "title" },
        { src: "/assets/images/sprites.png", id: "mySprites" },
        { src: "/assets/images/GameOver.png", id: "gameover" },
        { src: "/assets/images/buttonTitle.png", id: "TButton" },
        { src: "/assets/images/buttonStart.png", id: "SButton" },
        { src: "/assets/images/gameArea.png", id: "background" },
        { src: "/assets/images/Instruction.png", id: "instructions" },
        { src: "/assets/images/buttonInstructions.png", id: "IButton" }
    ];

    setupCanvas();
    loadFiles();
})();