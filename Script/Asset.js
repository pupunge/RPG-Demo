var img = {
    button : {
        title : new Image(),
    },

    floor : {
        grass : [0, new Image(), new Image],
    },

    thing : {
    },

    item : {
    },

    player : {
        'Up' : new Image(), 'Left' : new Image(), 'Down' : new Image(), 'Right' : new Image()
    },

    enemy : {
    },
};

function imageLoad() {
    img.button.title.src = 'Image/Button/TitleButton.png';

    img.player['Up'].src = 'Image/Character/PlayerUp.png';
    img.player['Left'].src = 'Image/Character/PlayerLeft.png';
    img.player['Down'].src = 'Image/Character/PlayerDown.png';
    img.player['Right'].src = 'Image/Character/PlayerRight.png';
}

function createOffscreenCanvas() {
}
