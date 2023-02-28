function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  inputNumberEl: document.querySelector('[type="number]'),
  btnCreateEl: document.querySelector('[data-create]'),
  btnDestroyEl: document.querySelector('[data-destroy]'),
  divBoxesEl: document.querySelector('#boxes')
}
refs.btnCreateEl.addEventListener('click', getAmount);
refs.btnDestroyEl.addEventListener('click', destroyBoxes);
