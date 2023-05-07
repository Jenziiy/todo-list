import { ToDoItem } from "./ToDoItem";
import css from "./file.css";

function component() {
  const date = new Date().toLocaleDateString('en-CA');
  const div = document.createElement('div');
  div.id = 'mainComponent';
  div.innerHTML = ` <div id="add-task">
  <div id="container-1">
  <input type="text" class="input" id="input-title" placeholder="Insert future accomplishment"> 
  <input type="text" class="input" id="input-description" placeholder="Insert future accomplishment description">
  <input type="date" class="input" id="input-date" value="${date}">  
  </div>
  <div id="container-2">
  <select class="input" id = "input-dropdown">
<option> Priority </option>
<option> A ~ ASAP </option>
<option> B ~ this week </option>
<option> C ~ 4 fun </option>
</select>
  <button id="add-task-button">Lets go</button>
  </div>
</div> `
document.body.appendChild(div);
}

function getInputColl(...n) {
  const valueArr = [];
    for( let i of n ){
    let value = document.getElementsByClassName('input')[i].value;
    valueArr.push(value);
  }
  return valueArr;
 }
 
component();
const button = document.getElementById('add-task-button');
button.addEventListener('click', () => { let inputTitle = document.getElementById('input-title')
  let item = new ToDoItem(...(getInputColl('0', '1', '2', '3')))
item.createUI()  } );

