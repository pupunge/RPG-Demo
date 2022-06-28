window.onload = start;
window.oncontextmenu = rightClick;

function start() {
    canvas = document.getElementById('game');
    context = canvas.getContext('2d');
    canvasRect = canvas.getBoundingClientRect();

    canvas.addEventListener('mouseup', mouseUp);
    window.addEventListener('keydown', keyDown);

    loop();
}

function loop() {
    if (scene === 'Title') {
        loopTitle();
    }

    requestAnimationFrame(loop);
}

function mouseUp(event) {
    var x = event.clientX - canvasRect.left;
    var y = event.clientY - canvasRect.top;

    if (scene === 'Title') {
        mouseUpTitle(x, y); 
    }
}

function keyDown(event) {
    var key = event.keyCode;

    if (scene === 'Title') {
        keyDownTitle(key);
    }
}
