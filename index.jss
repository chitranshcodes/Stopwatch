    function startTimer() {
      startTime = Date.now() - elapsedTime;
      intervalId = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        displayTimer();
      }, 10);
      startBtn.disabled = true;
      stopBtn.disabled = false;
      resetBtn.disabled = false;
    }

    // function to stop the timer
    function stopTimer() {
      clearInterval(intervalId);
      startBtn.disabled = false;
      stopBtn.disabled = true;
    }

    // function to reset the timer
    function resetTimer() {
      clearInterval(intervalId);
      elapsedTime = 0;
      displayTimer();
      startBtn.disabled = false;
      stopBtn.disabled = true;
      resetBtn.disabled = true;
    }

    // add event listeners to the buttons
    startBtn.addEventListener("click", startTimer);
    stopBtn.addEventListener("click", stopTimer);
    resetBtn.addEventListener("click", resetTimer);