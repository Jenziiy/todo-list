import css from "./file.css";
import { createForm, createPageStructure } from "./view";
function component() {
  
  const div = document.createElement('div');
  div.id = 'mainComponent';
  createPageStructure();
  const mainWrapper = document.getElementById('main-wrapper');
  const form = document.getElementById('add-task');
  mainWrapper.appendChild(form);
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