import { date } from "./util"
import { createDiv } from "./util";

export function createForm(){
  const form = document.createElement('div');
  form.id = 'add-task';
  // createDiv('','form');
  // createDiv('form','container-1',  ['input,input-title,input,text,Insert future accomplishment', 
  //                                   'input,input-description,input,text,Insert description',
  //                                   'input,input-date,date']);
  // createDiv('form','container-2',['select,input,input-dropdown',
  //                                 ]);

  return `<div id="add-task">
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
}