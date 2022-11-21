var tank = document.querySelector('.tank'), soundMove = document.querySelector('.sound_move'), soundStop = document.querySelector('.sound_stop'), w = document.body, h = document.body;
soundMove.volume = 0.3;
soundStop.volume = 0.3;
window.addEventListener('resize', function () {
    w.clientWidth;
    h.clientHeight;
});
document.addEventListener('keydown', moveTank);
document.addEventListener('keyup', stopTank);
function stopTank(e) {
    soundStop.pause();
    soundStop.currentTime = 0;
    soundStop.play();
}
function moveTank(e) {
    soundStop.pause();
    soundMove.play();
    var key = e.key;
    var x = tank.offsetLeft;
    var y = tank.offsetTop;
    if (key == 'ArrowRight') {
        tank.className = 'tank';
        tank.classList.add('right');
        if (x < w.clientWidth - 150)
            tank.style.left = x + 10 + 'px';
    }
    if (key == 'ArrowLeft') {
        tank.className = 'tank';
        tank.classList.add('left');
        if (x > 0)
            tank.style.left = x - 10 + 'px';
    }
    if (key == 'ArrowDown') {
        tank.className = 'tank';
        tank.classList.add('down');
        if (y < h.clientHeight - 150)
            tank.style.top = y + 10 + 'px';
    }
    if (key == 'ArrowUp') {
        tank.className = 'tank';
        tank.classList.add('up');
        if (y > 0)
            tank.style.top = y - 10 + 'px';
    }
}
