const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

let timerId = null;

startBtn.addEventListener('click', onStart);

function onStart(evt) {
  startBtn.disabled = true;
  stopBtn.disabled = false;

  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};