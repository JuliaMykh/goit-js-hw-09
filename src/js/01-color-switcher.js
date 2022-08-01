function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', startChangeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);

function startChangeColor() {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;

    timerId =  setInterval(() => document.body.style.backgroundColor = getRandomHexColor(), 1000);
};

function stopChangeColor() {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;

    clearInterval(timerId);
};


