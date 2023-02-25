const refs = {
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]'),
    span: document.querySelector('#value'),
};

let counterValue = 0;
refs.decrement.addEventListener('click',  () => {
    refs.span.textContent = counterValue -= 1;
});

refs.increment.addEventListener('click', () => {
    refs.span.textContent = counterValue += 1;
});
