const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
const COLOR_DELAY = 1000;
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnStart.addEventListener('click', onStart);
btnStop.addEventListener('click', onStop);

function onStart() {
  btnStart.disabled = true;
  btnStop.disabled = false;
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, COLOR_DELAY);
}

function onStop() {
  btnStop.disabled = true;
  btnStart.disabled = false;
  timerId = clearInterval(timerId);
}
