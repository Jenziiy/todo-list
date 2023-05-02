import { ToDoItem } from "./ToDoItem";
import css from "./file.css";

function component() {
  const div = document.createElement('div');
  div.id = 'mainComponent';
  div.innerHTML = ` <div id="add-task"> 
  <input type="text" placeholder="Insert future accomplishment"> 
  <button id="add-task-button">Lets go</button>
</div> `
document.body.appendChild(div);
}

component();
const item = new ToDoItem("hi","hi","hi");