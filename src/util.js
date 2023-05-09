import { ToDoItem } from "./ToDoItem";
import { createForm } from "./view";

export function getInputColl(...args) {
  const valueArr = [];
    for( let arg of args ){
    let value = document.getElementsByClassName('input')[arg].value;
    valueArr.push(value);
  }
  return valueArr;
 }

 const button = document.getElementById('add-task-button');
 button.addEventListener('click', () => { console.log('btn');let item = new ToDoItem(...(getInputColl('0', '1', '2', '3')))
item.createUI()  })

//  const button = document.getElementById('add-task-button');
//  if(button){
// import("./view").then(()=> { 
// button.addEventListener('click', () => { console.log('btn');let item = new ToDoItem(...(getInputColl('0', '1', '2', '3')))
// item.createUI()  })} );}

