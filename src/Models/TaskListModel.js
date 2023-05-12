import { createDateFormat } from "../util";

export class Model{

  constructor(){

  }
}

export class TaskListModel{

  constructor(){
  this.itemList = [];
  }

  addItem({title: title, description: description, dueDate: dueDate, priority: priority, project: project} = {}){
    const item = {
      Project: project ?? 'default',
      id: this.itemList.length > 0 ? id = this.items[this.items.length--].id++ : 1,
      title: title,
      description: description,
      dueDate: createDateFormat(dueDate),
      priority: priority,
      completed: false,
    }
    this.itemList.push(item);
  }

  updateItem(id, {title: title, description: description, dueDate: dueDate, priority: priority, project: project, completed: completed} = {}){
      this.itemList = this.itemList.map(((item)=> {
        item.id === id ?? {id: item.id, title: title, description: description, dueDate: dueDate, priority: priority, project: project, completed: completed}
        }
      )
    )
  }

  deleteItem(id){
    this.itemList = this.itemList.filter((item) => item.id !== item);
  }

}

export class ToDoItem {

  constructor(title, description, dueDate, priority) {
    this.title = title ? title : 'Missing title';
    this.description = description ? description : 'Missing description';
    this.dueDate = dueDate;
    this.priority = priority ? priority : 'A';
  }

  createDateFormat(){
    if (this.dueDate != undefined) { 
      let dateArr = this.dueDate.toString().split('-'); 
      return this.dateString = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`; 
      }
  }

  createUI(){
    const div = document.createElement('div');
    div.id = 'todo-item';
    div.innerHTML = `
    <p> ${this.title ? this.title : 'Missing title'} </p>
    <p>${this.description ? this.description : 'Missing description'}</p>
    <p>${ this.createDateFormat()} </p>
    <p>${this.priority[0] ?? 'Missing priority'}</p>
    <p> Completed <input type="checkbox" id="complete" name="complete" unchecked> </p> `
    document.getElementById('item-container').appendChild(div);
  }
}