import { date } from "./util";

// let dateArr = date.toString().split('-');
// let dateString = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;

export class ToDoItem {

  constructor(title, description, dueDate, priority) {
    this.title = title ? title : 'ok';
    this.description = description ? description : 'ok';
    this.dueDate = dueDate ? dueDate : 'ok';
    this.priority = priority ? priority : 'A';
  }

  createUI(){
     if (this.dueDate != undefined) { 
      let dateArr = this.dueDate.toString().split('-'); 
      this.dateString = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`; 
      }
    const div = document.createElement('div');
    div.id = 'todo-item';
    div.innerHTML = `
    <p> ${this.title ? this.title : 'Missing title'} </p>
    <p>${this.description ? this.description : 'Missing description'}</p>
    <p>${ this.dateString} </p>
    <p>${this.priority[0] == 'A' ||
         this.priority[0] == 'B' ||
         this.priority[0] == 'C' ? this.priority : 'Missing priority'}</p>
    <p> Completed <input type="checkbox" id="complete" name="complete" unchecked> </p> `
    document.body.appendChild(div);
  }
}