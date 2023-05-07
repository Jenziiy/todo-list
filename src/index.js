import { ToDoItem } from "./ToDoItem";
import css from "./file.css";
import { createForm } from "./view";
import { button, createDiv } from "./util";
const createForms = '"./view"';

function component() {
  
  const div = document.createElement('div');
  div.id = 'mainComponent';
  div.innerHTML =  createForm();
  
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

createDiv('','form');
createDiv('form','container-1',  ['input,input-title,input,text,Insert future accomplishment', 
                                    'input,input-title,input,text,Insert future accomplishment',
                                    'input,input-title,input,text,Insert future accomplishment']);
 createDiv('form','container-2',['select,input,input-dropdown']);