var UIGame = {
    inventory : {
        rect : [128, 128, 768, 384],
    }
};

function loopGame() {
    displayGame();
}

function displayGame() {
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.font = '48px Opensans';
    context.lineWidth = 2;

    context.clearRect(0, 0, 1024, 640);

    if (state === 'Inventory') {
        context.strokeRect(UIGame.inventory.rect[0], UIGame.inventory.rect[1], UIGame.inventory.rect[2], UIGame.inventory.rect[3]);
    }
}

function mouseUpGame(x, y) {
    if (menu === false) {
        if (state === '') {
            
        }
    }
}

function keyDownGame(key) {
    if (menu === false) {
        if (state === '') {
            if (key === 73 || key === 105) {
                state = 'Inventory';
            }
        } else if (state === 'Inventory') {
            if (key === 73 || key === 105) {
                state = ''; 
            }
        }
    }
}
