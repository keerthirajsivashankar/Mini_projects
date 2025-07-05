let timer, totalSeconds, isPaused = false;
let stopwatchInterval, stopwatchSeconds = 0;

// Timer Functions
function startTimer() {
    if (isPaused) {
        isPaused = false;
    } else {
        const minutes = parseInt(document.getElementById('minutes').value, 10) || 0;
        const seconds = parseInt(document.getElementById('seconds').value, 10) || 0;
        totalSeconds = minutes * 60 + seconds;
    }

    if (totalSeconds > 0 && !timer) {
        timer = setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                updateTimerDisplay();
            } else {
                clearInterval(timer);
                timer = null;
                alert("Time's Up!");
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
    isPaused = true;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    isPaused = false;
    document.getElementById('timer').innerText = "00:00";
    document.getElementById('minutes').value = "";
    document.getElementById('seconds').value = "";
}

function updateTimerDisplay() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    document.getElementById('timer').innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Stopwatch Functions
function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchSeconds++;
            updateStopwatchDisplay();
        }, 1000);
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchSeconds = 0;
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    const minutes = Math.floor(stopwatchSeconds / 60);
    const seconds = stopwatchSeconds % 60;
    document.getElementById('stopwatch').innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
