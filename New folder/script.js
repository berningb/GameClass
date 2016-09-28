var stage, circle, rect;

function setupCanvas() {
    var canvas = document.getElementById("game"); //get canvas with id='game'
    canvas.width = 800;
    canvas.height = 600;
    stage = new createjs.Stage(canvas); //makes stage object from the canvas
}

function addCircle() {
    circle = new createjs.Shape();
    circle.graphics.beginFill('#a77').drawCircle(0,0,40);
    circle.x = circle.y = 50;
    stage.addChild(circle);
}

function addRect() {
    rect = new createjs.Shape();
    rect.graphics.beginFill('#77a').drawRect(0,0,80,80);
    rect.x = rect.y = 200;
    stage.addChild(rect);

}

function loop(){
    circle.x += 4;
    rect.rotation += 400;
    stage.update();
}

function startLoop() {
    var FPS = 30;
    createjs.Ticker.addEventListener('tick', loop);
    createjs.Ticker.setFPS(FPS);
}

//self executing function
(function main() {
    setupCanvas();
    addCircle();
    addRect();
    startLoop();
})();
