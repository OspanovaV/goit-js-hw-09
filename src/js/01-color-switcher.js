const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

stopBtn.setAttribute('disabled', false);
 //запускаем таймер
startBtn.addEventListener("click", () => {
  setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  stopBtn.removeAttribute('disabled', true);
  startBtn.setAttribute('disabled', false);
});
//останавливаем таймер
stopBtn.addEventListener("click", () => {
  clearInterval();   
  startBtn.removeAttribute('disabled', true);
  stopBtn.setAttribute('disabled', false);
});
//генерим случайный цвет
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
