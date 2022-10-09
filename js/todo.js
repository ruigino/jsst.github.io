const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  // string로 변환해서 저장하는 방법 JSON.stringify
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(typeof li.id);
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  console.log("i will paing", newTodo);
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  toDoList.appendChild(li);
}

function handelToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handelToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

// console.log(savedTodos);

if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);

  parsedToDos.forEach(paintToDo);
  toDos = parsedToDos;
  console.log("parse", parsedToDos);
}
