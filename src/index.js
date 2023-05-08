import css from "./file.css";
import { mainWrapper } from "./util";
import { createForm, createPageStructure } from "./view";
function component() {

  createPageStructure();
  mainWrapper.appendChild(createForm());
}

function getInputColl(...args) {
  const valueArr = [];
    for( let arg of args ){
    let value = document.getElementsByClassName('input')[arg].value;
    valueArr.push(value);
  }
  return valueArr;
 }
 
import('./view').then(()=> component());