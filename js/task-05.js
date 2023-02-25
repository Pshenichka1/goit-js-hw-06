const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
const handleInputValue = (event) => {
    spanEl.textContent = event.target.value;
};

inputEl.addEventListener('input', handleInputValue);
