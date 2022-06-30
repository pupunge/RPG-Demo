var img = {
    button : {
        title : new Image(),
        back : new Image(),
        saveFile : new Image(),
    },

    floor : {
        grass : [0, new Image(), new Image],
    },

    thing : {
    },

    item : {
    },

    card : [
        0,
        new Image(),
    ],

    effect : [
        0,
        new Image(),
    ],

    player : {
        'Up' : new Image(), 'Left' : new Image(), 'Down' : new Image(), 'Right' : new Image()
    },

    enemy : [
        0,
        [0, new Image(), new Image],
    ],
};

function imageLoad() {
    img.button.title.src = 'Image/Button/TitleButton.png';
    img.button.back.src = 'Image/Button/BackButton.png';
    img.button.saveFile.src = 'Image/Button/SaveFileButton.png';

    img.floor.grass[1].src = 'Image/Floor/Grass01.png';
    img.floor.grass[2].src = 'Image/Floor/Grass02.png';

    img.card[1].src = 'Image/Card/EnergyBolt.png';
    img.effect[1].src = 'Image/Effect/EnergyBolt.png';

    img.player['Up'].src = 'Image/Character/PlayerUp.png';
    img.player['Left'].src = 'Image/Character/PlayerLeft.png';
    img.player['Down'].src = 'Image/Character/PlayerDown.png';
    img.player['Right'].src = 'Image/Character/PlayerRight.png';

    img.enemy[1][1].src = 'Image/Character/GreenSlime.png';
    img.enemy[1][2].src = 'Image/Character/GreenSlimeJump.png';
}

function createOffscreenCanvas() {
}
