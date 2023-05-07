import { ToDoItem } from "./ToDoItem";

function getInputColl(...args) {
  const valueArr = [];
    for( let arg of args ){
    let value = document.getElementsByClassName('input')[arg].value;
    valueArr.push(value);
  }
  return valueArr;
 }

import("./view").then(()=> { const button = document.getElementById('add-task-button');
button.addEventListener('click', () => { let item = new ToDoItem(...(getInputColl('0', '1', '2', '3')))
item.createUI()  })} );
export const date = new Date().toLocaleDateString('en-CA');
