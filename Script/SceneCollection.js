var UICollection = {
    titleText : [8, 48],
    backButton : [928, 32, 64, 64],
};

function loopCollection() {
    displayCollection();
}

function displayCollection() {
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.font = '48px Opensans';
    context.lineWidth = 2;

    context.clearRect(0, 0, 1024, 640);

    context.fillText(`Collection`, UICollection.titleText[0], UICollection.titleText[1]);

    context.drawImage(img.button.back, UICollection.backButton[0], UICollection.backButton[1]);
}

function mouseUpCollection(x, y) {
    if (menu === false) {
        if (state === '') {
            if (pointInsideRectArray(x, y, UICollection.backButton)) {
                scene = 'Title';
            }
        }
    }
}

function keyDownCollection(key) {
    if (menu === false) {
        if (state === '') {
            if (key === 27) {
                scene = 'Title';
            }
        }
    }
}
