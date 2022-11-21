let tank = document.querySelector('.tank') as HTMLDivElement,
    soundMove = document.querySelector('.sound_move') as HTMLAudioElement,
    soundStop = document.querySelector('.sound_stop') as HTMLAudioElement,
    w = document.body as HTMLBodyElement, h = document.body as HTMLBodyElement;

soundMove.volume = 0.3;
soundStop.volume = 0.3;


window.addEventListener('resize', function () {
    w.clientWidth;
    h.clientHeight;
});

document.addEventListener('keydown', moveTank);
document.addEventListener('keyup', stopTank);

function stopTank(e: any): void {
    soundStop.pause();
    soundStop.currentTime = 0;
    soundStop.play();
}

function moveTank(e: any): void {
    soundStop.pause();
    soundMove.play();
    let key: any = e.key;
    let x: any = tank.offsetLeft;
    let y: any = tank.offsetTop;

    if(key == 'ArrowRight'){
        tank.className = 'tank';
        tank.classList.add('right');
        if(x < w.clientWidth-150) tank.style.left = x+10+'px';
    }

    if(key == 'ArrowLeft') {
        tank.className = 'tank';
        tank.classList.add('left');
        if(x > 0) tank.style.left = x-10+'px';
       }

       if(key == 'ArrowDown') {
        tank.className = 'tank';
        tank.classList.add('down');
        if(y < h.clientHeight-150) tank.style.top = y+10+'px';
       }

       if(key == 'ArrowUp') {
        tank.className = 'tank';
        tank.classList.add('up');
        if(y > 0) tank.style.top = y-10+'px';
       }
}





