function timer() {
    inGameTime = (new Date()).getTime();
    var sec = ((inGameTime - myTime) / 1000).toFixed(1);
    // ++totalSeconds;
    // var sec = pad(totalSeconds % 60)
    context.text = "Time: " + (sec) + " sec";
    checkTime(sec);
    // console.log(sec);
}

function resetGameTime() {
    gameTime = 0;
}

function checkTime(seconds) {
    if (seconds >= 5) {
        state = gameStates.GAME_OVER;
    }
}