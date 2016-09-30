var KEYCODE_LEFT = 37;
var KEYCODE_UP = 38;
var KEYCODE_RIGHT = 39;
var KEYCODE_DOWN = 40;

var KEYCODE_W = 87;
var KEYCODE_A = 65;
var KEYCODE_D = 68;
var KEYCODE_S = 83;

var KEYCODE_SPACE_BAR = 32;

function handleKeyDown(evt) {
    if (!evt) {
        var evt = window.event;
    } //browser compatibility
    switch (evt.keyCode) {
        case KEYCODE_LEFT:
            console.log(evt.keyCode + " down");
            break;
        case KEYCODE_RIGHT:
            console.log(evt.keyCode + " down");
            break;
        case KEYCODE_UP:
            console.log(evt.keyCode + " down");
            break;
        case KEYCODE_DOWN:
            console.log(evt.keyCode + " down");
            break;
        case KEYCODE_A:
            console.log(evt.keyCode + " down");
            break;
        case KEYCODE_W:
            console.log(evt.keyCode + " down");
            break;
        case KEYCODE_S:
            console.log(evt.keyCode + " down");
            break;
        case KEYCODE_D:
            console.log(evt.keyCode + " down");
            break;
        case KEYCODE_SPACE_BAR:
            console.log(evt.keyCode + " down");
            break;
    }
}

function handleKeyUp(evt) {
    if (!evt) {
        var evt = window.event;
    } //browser compatibility
    switch (evt.keyCode) {
        case KEYCODE_LEFT:
            console.log(evt.keyCode + " up");
            break;
        case KEYCODE_RIGHT:
            console.log(evt.keyCode + " up");
            break;
        case KEYCODE_UP:
            console.log(evt.keyCode + " up");
            break;
        case KEYCODE_DOWN:
            console.log(evt.keyCode + " up");
            break;
        case KEYCODE_A:
            console.log(evt.keyCode + " up");
            break;
        case KEYCODE_W:
            console.log(evt.keyCode + " up");
            break;
        case KEYCODE_S:
            console.log(evt.keyCode + " up");
            break;
        case KEYCODE_D:
            console.log(evt.keyCode + " up");
            break;
        case KEYCODE_SPACE_BAR:
            console.log(evt.keyCode + " up");
            break;
    }
}

document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;