const from = document.querySelector('form')
const input = document. querySelector('input')
const list = document.querySelector('ul')
const item = document.querySelector('li')


const categories = ['Normal', 'Urgent', 'important']

let todos = [
    {'id': 0, 'txt': 'Buy milk', 'complete': false, 'gategory': `${categories[0]}`},
    {'id': 1, 'txt': 'Walk the dog', 'complete': false, 'gategory': `${categories[1]}`}
]

localStorage.setItem('todos', JSON.stringify(todos))

const ls = JSON.parse(localStorage.getItem('todos'))

// ls.forEach(i => console.log('im in loca', i))



todos.forEach(i => {
    const li = document.createElement('li')
    list.appendChild(li).innerText = i.txt
})

from.addEventListener('submit', i => {
    i.preventDefault()
    addLi()
})

function addLi() {
    
}


