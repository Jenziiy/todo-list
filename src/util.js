import { ToDoItem } from "./ToDoItem";

function getInputColl(...args) {
  const valueArr = [];
    for( let arg of args ){
    let value = document.getElementsByClassName('input')[arg].value;
    valueArr.push(value);
  }
  return valueArr;
 }

 function createChild(div,children) {children.forEach(child => {
  const childArr = child.split(',');
  const childItem = document.createElement(childArr[0]);
  childItem.id = childArr[1];
  childItem.className = childArr[2];
  if (childArr.length > 3){
  childItem.type = childArr[3];
  childItem.placeholder = childArr[4];
    }
  div.appendChild(childItem);
})}

import("./view").then(()=> { const button = document.getElementById('add-task-button');
button.addEventListener('click', () => { let item = new ToDoItem(...(getInputColl('0', '1', '2', '3')))
item.createUI()  })} );
export const date = new Date().toLocaleDateString('en-CA');
export function createDiv(parentName,idName, children ){
  let div = document.createElement('div');
  div.id = idName;
  if (parentName == '') document.body.appendChild(div);
  else if (parentName.length > 3) {
    let parent = document.getElementById(parentName); 
    parent.appendChild(div)
  };
  if (children){
    createChild(div,children);
  }
  return;

}
