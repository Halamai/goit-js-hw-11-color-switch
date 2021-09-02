const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const min = 0;
const max = colors.length - 1;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');

buttonStart.addEventListener('click', startChangeColors);
buttonStop.addEventListener('click', stopChangeColors);

let id;

function startChangeColors() {
  id = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(min, max)];
  }, 1000);
  buttonStart.disabled = true;
}
function stopChangeColors() {
  clearInterval(id);
  buttonStart.disabled = false;
}
