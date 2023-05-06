import { ToDoItem } from "./ToDoItem";
import css from "./file.css";

function component() {
  const date = new Date().toLocaleDateString('en-CA');
  const div = document.createElement('div');
  div.id = 'mainComponent';
  div.innerHTML = ` <div id="add-task"> 
  <input type="text" id="input-title" placeholder="Insert future accomplishment"> 
  <input type="text" id="input-description" placeholder="Insert future accomplishment description">
  <input type="date" id="input-date" value="${date}">  
  <select id = "input-dropdown">
<option> Priority </option>
<option> A ~ ASAP </option>
<option> B ~ this week </option>
<option> C ~ 4 fun </option>
</select>
  <button id="add-task-button">Lets go</button>
</div> `
document.body.appendChild(div);
}

component();
const button = document.getElementById('add-task-button');
button.addEventListener('click', () => { let inputTitle = document.getElementById('input-title')
let inputTitleValue = inputTitle.value;
  let item = new ToDoItem(inputTitleValue, 'a', 'b', 'c')
item.createUI()  } );