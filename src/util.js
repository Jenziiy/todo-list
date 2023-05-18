import taskListModel from "./Models/ObjectModel";
import view from "./view";

export function el(id) { return document.getElementById(id); }

export function getInputColl(...args) {
  const valueArr = [];
    for( let arg of args ){
    valueArr.push(document.getElementsByClassName('input')[arg].value);
  }
  return valueArr;
 }

  export function buttonLogic(){
    let res;
    return el('add-task-button').addEventListener('click', () => { taskListModel.addItem(...(
                                    (res = getInputColl('0', '1', '2', '3', '4'))));
                                    view.buildItemView(res);
                                  Array.from(document.getElementsByClassName('reset')).forEach(element => {
                                    element.value = '';
                                  });
                                   document.getElementById('project-dropdown').selectedIndex = 0;

                                })};

 export function createDateFormat(dueDate){
  if (dueDate != undefined) { 
    const dateArr = dueDate.toString().split('-'); 
    return `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`; 
         }
      }
export function addProjectLogic(){
document.getElementById('project-button').addEventListener('click', () => {taskListModel.addProject('hello');
const projectInput = document.getElementById('project-input');
projectInput.style.display == 'none' ? projectInput.style.display = 'block' : projectInput.style.display = 'none';
})
  }