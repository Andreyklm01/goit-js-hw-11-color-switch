import './styles.css';

// Напиши скрипт, который после нажатия кнопки Start,
// раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн - стиль.
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
// warning Учти, на кнопку Start можно нажать бесконечное количество раз.
// Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
// Для генерации случайного числа(индекс элемента массива цветов),
// используй функцию randomIntegerFromInterval

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');
startBtn.addEventListener('click', startChangeColor);
stopBtn.addEventListener('click', stopChangeColor);
let interval;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setRandomColor(arr, ref) {
  const lastColorValue = arr.length - 1;
  const result = randomIntegerFromInterval(0, lastColorValue);
  ref.style.backgroundColor = arr[result];
}

function startChangeColor() {
  startBtn.setAttribute('disabled', 'disabled');
  interval = setInterval(() => {
    setRandomColor(colors, body);
    console.log('Запущен');
  }, 2000);
}
function stopChangeColor() {
  stopBtn.removeAttribute('disabled');
  clearInterval(interval);
  console.log('Остановлен');
}
