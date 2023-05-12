export function el(id) { return document.getElementById(id); }

export function getInputColl(...args) {
  const valueArr = [];
    for( let arg of args ){
    valueArr.push(document.getElementsByClassName('input')[arg].value);
  }
  return valueArr;
 }

  export function buttonLogic(){
    return el('add-task-button').addEventListener('click', () => { new ToDoItem(...(
                                    getInputColl('0', '1', '2', '3')))
                                    .createUI()  })};

