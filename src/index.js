import css from "./file.css";
import { hello } from "./util";
import { createForm, createPageStructure } from "./view";

function component() {

  // createPageStructure();
  // const mainWrapper = document.getElementById('main-wrapper');
  // mainWrapper.appendChild(createForm());
}
 
import('./view').then(()=> component());