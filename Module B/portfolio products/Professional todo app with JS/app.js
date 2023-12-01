const form = document.getElementById('form');
const entry = document.getElementById('entry');
const ul = document.getElementById('todo-list');
const alertP = document.querySelector(".alert")
const clearBtn = document.querySelector(".clear-btn")
const cancelBtn = document.querySelector(".cancel-btn")
const submitBtn = document.querySelector(".submit-btn")

form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems)
cancelBtn.addEventListener("click", setBackToDefault)

let editFlag = false
let editElement; // undefined
let editID; // undefined
// set our localstorage items with the window global object
window.addEventListener("DOMContentLoaded", setItems)

function addItem(e) {
    e.preventDefault();
    const val = entry.value;
    const id = new Date().getTime().toString()

    if (val && !editFlag) {
        createList(val, id)
        displayAlert('A new item has been added !', 'alert-success')
        clearBtn.classList.remove('d-none')
        // local storage
        addToLS(val, id)
    }
    else if (val && editFlag) {
        editElement.innerHTML = val
        displayAlert("value changed", "alert-success")
        // local storage 
        editLocalStorage(val, editID)
        ul.querySelectorAll('.bx').forEach(i => [
            i.classList.remove('v-none')
        ])
        clearBtn.classList.remove('d-none')
    }
    else {
        displayAlert('You did not filled any todo !', 'alert-danger')
    }
    // clear entry
    entry.value = null;

}

function createList(val, id) {
    const li = document.createElement("li");
    li.setAttribute('data-id', id)
    li.className = 'list-item';
    li.innerHTML = `<p class="text">${val}</p>
                    <i class='bx bxs-edit bx-sm'></i>
                    <i class='bx bx-check bx-sm'></i>
                    <i class='bx bxs-trash bx-sm'></i>`


    ul.appendChild(li)
    li.querySelector('.bx.bxs-edit').addEventListener('click', editItem)
    li.querySelector('.bx.bx-check').addEventListener('click', checkItem)
    li.querySelector('.bx.bxs-trash').addEventListener('click', trashItem)
}
function editItem() {
    editFlag = true
    console.log('edit item')
    console.log(this.previousElementSibling)
    editID = this.parentElement.dataset.id
    let pText = this.previousElementSibling;
    editElement = pText
    entry.value = this.previousElementSibling.innerHTML
    submitBtn.innerHTML = 'Edit'
    cancelBtn.classList.remove('d-none')
    ul.querySelectorAll('.bx').forEach(i => [
        i.classList.add('v-none')
    ])
    clearBtn.classList.add('d-none')

}
function checkItem() {
    console.log('check item')
    this.parentElement.classList.toggle('liChecked')

}
function trashItem() {
    console.log('trash item')
    let id = ul.parentElement.dataset.id
    ul.removeChild(this.parentElement)
    displayAlert("One item has removed !", "alert-danger")
    if (ul.children.length === 0) {
        clearBtn.classList.add("d-none")
    }
    removeFromLS(id)
}
function displayAlert(msg, style) {
    alertP.innerHTML = msg;
    alertP.className = style
    setTimeout(() => {
        alertP.innerHTML = '';
        alertP.className = '';
    }, (2000))
}

function clearItems() {
    ul.innerHTML = null  // or ''
    displayAlert("All items were removed !", 'alert-success')
    clearBtn.classList.add("d-none")
    // local storage
    localStorage.clear()
}
function setBackToDefault() {
    editFlag = false
    editElement = undefined
    entry.value = null // or ''
    submitBtn.innerHTML = 'Sumbit'
    cancelBtn.classList.add('d-none')
    ul.querySelectorAll('.bx').forEach(i => [
        i.classList.remove('v-none')
    ])
    clearBtn.classList.remove('d-none')
}
function addToLS(val, id) {
    const obj = { id, val } //  {id:id , val:val}
    let items = getLocalStorage()
    items.push(obj)
    localStorage.setItem('items', JSON.stringify(items))
}
function getLocalStorage() {
    return localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
}
function removeFromLS(id) {
    let items = getLocalStorage()
    items = items.filter(item => item.id !== id)
    // update my LS
    localStorage.setItem("items", JSON.stringify(items))
    if (items.length === 0) {
        localStorage.removeItem('items')
    }
}
function editLocalStorage(val, editID) {
    let items = getLocalStorage()
    items = items.map(item => {
        if (item.id === editID){
            item.val = val;
            return item
        }
    })
    // update my LS
    localStorage.setItem("items", JSON.stringify(items))
}
function setItems() {
    console.log(localStorage.getItem('items'))
    let items = getLocalStorage();
    if (items.length > 0) {
        items.forEach(item => {
            const { id, val } = item
            console.log(val)
            createList(val)
        })
        clearBtn.classList.remove('d-none')
    }
}