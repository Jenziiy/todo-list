import { ToDoItem } from "./ToDoItem";
import css from "./file.css";
import { createForm } from "./view";
import { button, createDiv } from "./util";
const createForms = '"./view"';

function component() {
  
  const div = document.createElement('div');
  div.id = 'mainComponent';
  div.innerHTML =  createForm(); //gaat div.appendchild createform() worden. 
  // div.appendChild(createForm());
  
document.body.appendChild(div);
}

function getInputColl(...args) {
  const valueArr = [];
    for( let arg of args ){
    let value = document.getElementsByClassName('input')[arg].value;
    valueArr.push(value);
  }
  return valueArr;
 }
 
component();

