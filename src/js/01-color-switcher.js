
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
//запускаем таймер 
startBtn.addEventListener("click", () => {
    colorTimerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.setAttribute('disabled', false);//делаем кнопку не активной
});
//останавливаем таймер
stopBtn.addEventListener("click", () => {
  clearInterval(colorTimerId);
    console.log(`Interval with id ${colorTimerId} has stopped!`);
    startBtn.removeAttribute('disabled', true);//делаем кнопку активной
});
//генерим случайный цвет
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
