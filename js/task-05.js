const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
inputEl.addEventListener('input', handleInputValue);

function handleInputValue (event) {
    spanEl.textContent = event.target.value.trim();
    if (spanEl.textContent.length === 0) {
        spanEl.textContent = 'Anonymous';
}
};

inputEl.addEventListener('input', handleInputValue);
