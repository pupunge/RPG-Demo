var UISaveSelect = {
    titleText : [8, 48],
    backButton : [928, 32, 64, 64],
    saveFileButton : [128, 128, 768, 256],
    saveText1 : [136, 176],
    saveText2 : [136, 240],
    saveText3 : [136, 304],
};

function loopSaveSelect() {
    displaySaveSelect();
}

function displaySaveSelect() {
    context.fillStyle = 'Black';
    context.strokeSytle = 'Black';
    context.font = '48px Opensans';
    context.lineWidth = 2;

    context.clearRect(0, 0, 1024, 640);

    context.fillText(`Select Save File`, UISaveSelect.titleText[0], UISaveSelect.titleText[1]);
    context.drawImage(img.button.back, UISaveSelect.backButton[0], UISaveSelect.backButton[1]);

    // Save File Rect
    context.drawImage(img.button.saveFile, UISaveSelect.saveFileButton[0], UISaveSelect.saveFileButton[1]);
    
    if (save.new === true) {
        context.fillText(`New`, UISaveSelect.saveText1[0], UISaveSelect.saveText1[1]);
    }
}

function mouseUpSaveSelect(x, y) {
    if (menu === false) {
        if (state === '') {
            if (pointInsideRectArray(x, y, UISaveSelect.backButton)) {
                scene = 'Title';
            } else if (pointInsideRectArray(x, y, UISaveSelect.saveFileButton)) {
                scene = 'Game';
            }
        }
    }
}

function keyDownSaveSelect(key) {
    if (menu === false) {
        if (state === '') {
            if (key === 27) {
                scene = 'Title';
            }
        }
    }
}
