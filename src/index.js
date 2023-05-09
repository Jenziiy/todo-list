import css from "./file.css";
import { hello } from "./util";
import { createForm, createPageStructure } from "./view";

function component() {

   createPageStructure();
   const mainWrapper = document.getElementById('main-wrapper');
   mainWrapper.appendChild(createForm());
   
}
 
component();
const button = document.getElementById('add-task-button');
button.onclick = console.log(1);