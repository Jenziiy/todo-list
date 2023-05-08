import { date, getInputColl } from "./util"
import { createDiv } from "./util";
import { ToDoItem } from "./ToDoItem";

const htmlPageStructure = {
  header: document.createElement('header'),
  main:  document.createElement('main'),
  footer: document.createElement('footer'),
};

export function createPageStructure(){
  for ( const prop in htmlPageStructure ) {
    let element = htmlPageStructure[prop];
    element.classList.add('page-sections');
    document.body.appendChild(element);
  let childWrapper = document.createElement('div');
  childWrapper.setAttribute(`id`, `${prop}-wrapper`);
  element.appendChild(childWrapper);
  }
}

export function createForm(){
  // let form = document.createElement('form');
  let form = document.createElement('div');
  form.id = 'add-task';
  // form.setAttribute("method","post");
  // form.setAttribute("action", "submit");
  form.appendChild(createFormInput('Task: ', 'What you gonna do?'));
  form.appendChild(createFormInput('Description: ', 'pLz eLaBoRaTe?'));
  
  let button = document.createElement('button');
  button.id = 'add-task-button';
  form.appendChild(button);
  return form;
};

function createFormInput(labelName, placeholder){
  let label = document.createElement('label');
  label.innerText = labelName;
  let input = document.createElement('input');
  input.className = 'input';
  input.setAttribute(`placeholder`, placeholder);
  input.appendChild(label);
  return input;
}

function createApp(){
  createPageStructure();
  const mainWrapper = document.getElementById('main-wrapper');
  mainWrapper.appendChild(createForm());
  const button = document.getElementById('add-task-button');
  button.addEventListener('click', () => { console.log('btn');let item = new ToDoItem(...(getInputColl('0', '1', '2', '3')))
item.createUI()  })
}

createApp();

//    `<div id="add-task">
//   <div id="container-1">
//     <input type="text" class="input" id="input-title" placeholder="Insert future accomplishment"> 
//     <input type="text" class="input" id="input-description" placeholder="Insert future accomplishment description">
//     <input type="date" class="input" id="input-date" value="${date}">  
//   </div>
//   <div id="container-2">
//     <select class="input" id = "input-dropdown">
//       <option> Priority </option>
//       <option> A ~ ASAP </option>
//       <option> B ~ this week </option>
//       <option> C ~ 4 fun </option>
//     </select>
//     <button id="add-task-button">Lets go</button>
//   </div>
// </div> `
