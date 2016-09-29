function timer() {
        minutesLabel = document.getElementById("minutes");
        secondsLabel = document.getElementById("seconds");
        totalSeconds = 0;
        setInterval(setTime, 1000);

        function setTime()
        {
            ++totalSeconds;
            secondsLabel.innerHTML = pad(totalSeconds%60);
            minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
            context.Text = "sex";
        }

}
