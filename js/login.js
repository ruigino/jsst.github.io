const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "USERNAME";
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paingGreetings(username);
}

function paingGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = `Hello ${username}`;
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
}
// loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);
if (savedUsername === null) {
  // show the form
  toDoForm.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  paingGreetings(savedUsername);
}
