const changeColorDelay = 1000;
let idTimer = null;

const refs = {
    dataStartRef: document.querySelector('button[data-start]'),
    dataStopRef: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}

refs.dataStopRef.disabled = true;
refs.dataStartRef.addEventListener('click', onBtnStartChangeColor);
refs.dataStopRef.addEventListener('click', onBtnStopChangeColor);


function onBtnStartChangeColor() {
    refs.dataStartRef.disabled = true;
    refs.dataStopRef.disabled = false;

    idTimer = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor()
    }, changeColorDelay);
}

function onBtnStopChangeColor() {
    refs.dataStartRef.disabled = false;
    refs.dataStopRef.disabled = true;

    clearInterval(idTimer);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}