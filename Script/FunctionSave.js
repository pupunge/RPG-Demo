function saveInit() {
    if (localStorage.getItem('DesserterriaRPG') === null || localStorage.getItem('DesserterriaRPG') === '[object Object]') {
        localStorage.setItem('DesserterriaRPG', JSON.stringify(emptySave));
    }

    save = JSON.parse(localStorage.getItem('DesserterriaRPG')); 
}

function saveFile() {
    localStorage.setItem('DesserterriaRPG', JSON.stringify(save));
}

function loadFile() {
    save = JSON.parse(localStorage.getItem('DesserterriaRPG')); 
}

function resetFile() {
    localStorage.setItem('DesserterriaRPG', JSON.stringifty(emptySave));
    save = JSON.parse(localStorage.getItem('DesserterriaRPG')); 
}
