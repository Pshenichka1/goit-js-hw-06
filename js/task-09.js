function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector('.change-color');
const nameColorSpan = document.querySelector('.color');
const colorBody = document.body;
changeColorBtn.addEventListener('click', (event) => {
  colorBody.style.backgroundColor = getRandomHexColor();
  nameColorSpan.textContent = getRandomHexColor();
})