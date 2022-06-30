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

    
}