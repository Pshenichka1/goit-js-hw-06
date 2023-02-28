const inputFontSize = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

inputFontSize.addEventListener('input', (event) => {
    console.log(event);
    textSize.style.fontSize = event.target.value + 'px';
})