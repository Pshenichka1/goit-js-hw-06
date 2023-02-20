const itemEl = document.querySelectorAll('.item');
console.log('Number of Categories:', itemEl.length);
itemEl.forEach(element => {
    const titleCategory = element.firstElementChild.textContent;
    const itemLiEl = element.lastElementChild.children.length;
    console.log('Category:', titleCategory);
    console.log('Elements:', itemLiEl);
})
