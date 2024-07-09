let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let lapsContainer = document.getElementById("lapsContainer");
let timer = null;
let lapCount = 0;
let isRunning = false;

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function toggleWatch() {
    if (isRunning) {
        watchPause();
    } else {
        watchStart();
    }
}

function watchStart() {
    console.log("Start button clicked");
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
    document.getElementById("playPauseButton").src = "pause..png";
    isRunning = true;
}

function watchPause() {
    console.log("Pause button clicked");
    clearInterval(timer);
    document.getElementById("playPauseButton").src = "start.png";
    isRunning = false;
}

function watchReset() {
    console.log("Reset button clicked");
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
    lapsContainer.innerHTML = "";
    lapCount = 0;
    isRunning = false;
    document.getElementById("playPauseButton").src = "start.png";
}

function recordLap() {
    lapCount++;
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let lapTime = h + ":" + m + ":" + s;

    let lapElement = document.createElement("div");
    lapElement.className = "lap";
    lapElement.innerText = "Lap " + lapCount + ": " + lapTime;

    lapsContainer.appendChild(lapElement);
}
