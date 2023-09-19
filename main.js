const display = document.querySelector('.display')
const btnClear = document.querySelector('.btn-clear')
const btnDelete = document.querySelector('.btn-delete')

const click = document.addEventListener('click', (e) => {
    const eventClick = e.target
    if (eventClick.classList.contains('btn-num')) {
        console.log(eventClick.innerText);
        display.value += eventClick.innerText;
    } else if (eventClick.classList.contains('btn-del')) {
        display.value = display.value.slice(0, -1);
    } else if (eventClick.classList.contains('btn-clear')) {
        display.value = '';
    };
})

