const addForm = document.querySelector('.ekle');
const list = document.querySelector('.maddeler');
const search = document.querySelector('.search input');

const generateTemplate = todo =>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span> ${todo}</span>
    <i class="fa-solid fa-trash "></i>
    `;
    list.innerHTML+= html;


}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.ekle.value.trim();
    if( todo.length > 0 ){
        generateTemplate(todo)
    }
})

list.addEventListener('click', e=> {

    if(e.target.classList.contains('fa-trash'))
    {
        e.target.parentElement.remove();
    }
})

const filtreleme = term => {
    Array.from (list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));
}

search.addEventListener('keyup', () => {

    const term = search.value.trim().toLowerCase();
    filtreleme(term);
})