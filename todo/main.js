// alert('Hi')
const input = document.getElementById('input')
const form = document.getElementById('form')
const todoItem = document.getElementById('todoItem')
const todoList = document.getElementById('todoList')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()


})

function addTodo (todo) {
    let todoText = input.value
    
    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const newTodoEl = document.createElement('li')

        if(todo && todo.complited) {
            newTodoEl.classList.add('complited')

        }

        newTodoEl.innerText = todoText

        todoList.appendChild(newTodoEl)

        input.value = ''

    }
    


    


}


