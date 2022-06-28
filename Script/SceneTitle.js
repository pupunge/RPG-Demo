var UITitle = {
    titleText : [8, 48],
    startGameButton : [128, 128, 768, 64],
    startGameText : [136, 176],
    collectionButton : [128, 192, 768, 64],
    collectionText : [136, 240],
}

function loopTitle() {
    displayTitle();
}

function displayTitle() {
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.font = '48px Opensans';
    context.lineWidth = 2;

    context.clearRect(0, 0, 1024, 640);

    context.fillText(`Desserterria RPG`, UITitle.titleText[0], UITitle.titleText[1]);

    context.drawImage(img.button.title, UITitle.startGameButton[0], UITitle.startGameButton[1]);
    context.fillText(`Start Game`, UITitle.startGameText[0], UITitle.startGameText[1]);
    context.drawImage(img.button.title, UITitle.collectionButton[0], UITitle.collectionButton[1]);
    context.fillText(`Collection`, UITitle.collectionText[0], UITitle.collectionText[1]);
}
