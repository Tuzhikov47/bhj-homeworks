const startTimer = function() {
    let timerEnd = document.getElementById('timer').textContent;
    if (timerEnd > 0) {
        timerEnd = timerEnd - 1;
        document.getElementById('timer').textContent = timerEnd;
    } else {
        alert('Вы победили в конкурсе!');
        document.getElementById('timer').textContent = 59;
    }
}
setInterval (startTimer,1000);