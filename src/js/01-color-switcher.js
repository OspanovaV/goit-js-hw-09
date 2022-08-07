const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let timerId = null;

stopBtn.setAttribute('disabled', false);
 //запускаем таймер
startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  stopBtn.removeAttribute('disabled', true);
  startBtn.setAttribute('disabled', false);
});
// останавливаем таймер
stopBtn.addEventListener("click", () => {
  clearInterval(timerId);   
  startBtn.removeAttribute('disabled', true);
  stopBtn.setAttribute('disabled', false);
});
//генерим случайный цвет
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
