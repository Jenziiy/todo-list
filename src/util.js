import { ToDoItem } from "./ToDoItem";
import { createForm } from "./view";

export function el(id) { return document.getElementById(id); }

export function getInputColl(...args) {
  const valueArr = [];
    for( let arg of args ){
    let value = document.getElementsByClassName('input')[arg].value;
    valueArr.push(value);
  }
  return valueArr;
 }

  export function buttonLogic(){
    const button = document.getElementById('add-task-button');
    return button.addEventListener('click', () => { console.log('btn');let item = new ToDoItem(...(getInputColl('0', '1', '2')))
                          item.createUI()  })};

