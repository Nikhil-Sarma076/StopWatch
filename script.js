// Get HTML elements
var startBtn = document.getElementById("start");
var stopBtn = document.getElementById("stop");
var resetBtn = document.getElementById("reset");
var timerDisplay = document.getElementById("timer");

// Initialize stopwatch variables
var startTime, elapsedTime = 0, timerInterval;

// Format time in HH:MM:SS
function formatTime(time) {
  var hours = Math.floor(time / (60 * 60 * 1000));
  var minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
  var seconds = Math.floor((time % (60 * 1000)) / 1000);

  return (
    ("0" + hours).slice(-2) +
    ":" +
    ("0" + minutes).slice(-2) +
    ":" +
    ("0" + seconds).slice(-2)
  );
}

// Update the stopwatch
function updateTimer() {
  var currentTime = Date.now();
  elapsedTime += currentTime - startTime;
  startTime = currentTime;
  timerDisplay.innerHTML = formatTime(elapsedTime);
}

// Start the stopwatch
function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = true;
}

// Stop the stopwatch
function stopTimer() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
}

// Reset the stopwatch
function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timerDisplay.innerHTML = formatTime(elapsedTime);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
}

// Attach event listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
