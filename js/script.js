const inputBox = document.querySelector('.text-input');
const addBtn = document.querySelector('.add');
let listContainer = document.querySelector('.note-card');
let listItems = document.querySelector('.listItems');

addBtn.addEventListener('click', () => {
    if (inputBox.value === '') {
        alert('You must enter a Task')
    } else {

        let listItem = document.createElement('li');
        listItem.innerHTML = inputBox.value;
        
        listItems.appendChild(listItem);
        
        let remove = document.createElement('i');
        remove.className = 'fa-solid fa-xmark';
        listItem.appendChild(remove);
    }

    inputBox.value = '';
    saveData()
})

listItems.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if  (e.target.tagName === 'I') {
        e.target.parentElement.remove()
    }
    saveData()
})

function saveData() {
    localStorage.setItem('data', listItems.innerHTML)
}

function showData() {
    listItems.innerHTML = localStorage.getItem('data')
}

showData()