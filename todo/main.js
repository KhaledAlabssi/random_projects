alert('Hi')

let todos = [];
let i1 = {data:'4:0', body: 'hi from here', complete: true}
let i2 = {data:'5:0', body: 'hi3 from here', complete: false}
todos.push(i1)
todos.push(i2)

const form = document.getElementById('form')
const input = document.getElementById('input')
const ul = document.getElementById('todoList')


form.addEventListener('submit', e => {
    e.preventDefault()

    addTodo()
})

for (let i=0; i<todos.length; i++) {
    let li = document.createElement('li')
    

    li.innerHTML = todos[i].body
    ul.appendChild(li)
    console.log(li)
}




function addTodo (todo) {
    // let todoText = input.value
    // console.log(todoText)
    let li = document.createElement('li')
    li.classList.add('todoItem')
    li.innerHTML = input.value
    ul.appendChild(li)
    input.value = ''

    
}

