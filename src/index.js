import './sass/styles.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnsRef = document.querySelector('.buttons');
btnsRef.addEventListener('click', handleBtnClick);

const timer = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) return;
    this.isActive = true;
    this.intervalId = setInterval(setRandomBGColor, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    this.intervalId = null;
  },
};

function handleBtnClick({ target }) {
  const { action } = target.dataset;

  if (action === 'start') {
    return timer.start.bind(timer)();
  }

  if (action === 'stop') {
    return timer.stop.bind(timer)();
  }
}

function setRandomBGColor() {
  document.body.setAttribute(
    'style',
    `background-color: ${
      colors[randomIntegerFromInterval(0, colors.length - 1)]
    }`,
  );
}
