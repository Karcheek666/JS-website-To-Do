const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);

function addToDo(event){
    // preventing form from submitting
    event.preventDefault();
    // todo div
    const todo_div = document.createElement("div");
    todo_div.classList.add("todo");
    //creating <li>
    const newTodo = document.createElement("li");
    newTodo.innerText = "First Task";
    newTodo.classList.add("todo-item");
    todo_div.appendChild(newTodo);    
    //Append to todo_div
    todoList.appendChild(todo_div);
}