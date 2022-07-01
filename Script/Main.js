window.onload = start;
window.oncontextmenu = rightClick;

function start() {
    canvas = document.getElementById('game');
    context = canvas.getContext('2d');
    canvasRect = canvas.getBoundingClientRect();

    canvas.addEventListener('mouseup', mouseUp);
    window.addEventListener('keydown', keyDown);

    saveInit();
    imageLoad();
    createOffscreenCanvas();

    loop();
}

function loop() {
    if (scene === 'Title') {
        loopTitle();
    } else if (scene === 'SaveSelect') {
        loopSaveSelect();
    } else if (scene === 'Game') {
        loopGame();
    } else if (scene === 'Collection') {
        loopCollection();
    }

    requestAnimationFrame(loop);
}

function mouseUp(event) {
    var x = event.clientX - canvasRect.left;
    var y = event.clientY - canvasRect.top;

    if (scene === 'Title') {
        mouseUpTitle(x, y); 
    } else if (scene === 'SaveSelect') {
        mouseUpSaveSelect(x, y);
    } else if (scene === 'Game') {
        mouseUpGame(x, y);
    } else if (scene === 'Collection') {
        mouseUpCollection(x, y);
    }
}

function keyDown(event) {
    var key = event.keyCode;

    if (scene === 'Title') {
        keyDownTitle(key);
    } else if (scene === 'SaveSelect') {
        keyDownSaveSelect(key);
    } else if (scene === 'Game') {
        keyDownGame(key);
    } else if (scene === 'Collection') {
        keyDownCollection(key);
    }
}

function rightClick() {
    return false;
}
