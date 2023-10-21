var rollingContent = document.getElementById('rolling-content');
var isPaused = false;

function togglePause() {
    isPaused = !isPaused;
    if (isPaused) {
        rollingContent.style.animationPlayState = 'paused';
    } else {
        rollingContent.style.animationPlayState = 'running';
    }
}

rollingContent.addEventListener('mouseenter', togglePause);
rollingContent.addEventListener('mouseleave', togglePause);