import { createDateFormat } from "../util";


class TaskListModel{

  constructor(){
  this.itemList = [];
  }

  addItem({title: title, description: description, dueDate: dueDate, priority: priority, project: project}){
    const item = {
      id: this.itemList.length > 0 ? this.itemList[this.itemList.length - 1].id + 1 : 1,
      project: project ?? 'default',
      title: title,
      description: description,
      dueDate: createDateFormat(dueDate),
      priority: priority,
      completed: false,
    }
    this.itemList.push(item);
  }

  updateItem(id, {title: title, description: description, dueDate: dueDate, priority: priority, project: project, completed: completed} = {}){
      this.itemList = this.itemList.map((item)=> 
        item.id === id ? {id: item.id, project: project ?? item.project, title: title ?? item.title,  description: description ?? item.description,
           dueDate: dueDate ?? item.dueDate, priority: priority ?? item.priority, completed: completed ?? item.completed} : item,
      )
      
    return this.itemList;
  }

  deleteItem(id){
    this.itemList = this.itemList.filter((item) => item.id !== item);
  }

  readItemList(){
    return this.itemList;
  }

}

export class ToDoItem {

  constructor(title, description, dueDate, priority) {
    this.title = title ?? 'Missing title';
    this.description = description ?? 'Missing description';
    this.dueDate = dueDate;
    this.priority = priority ?? 'A';
  }

  createDateFormat(){
    if (this.dueDate != undefined) { 
      let dateArr = this.dueDate.toString().split('-'); 
      return this.dateString = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`; 
      }
  }

  // remove view logic from model
  showToDoItem(){
    const div = document.createElement('div');
    div.id = 'todo-item';
    div.innerHTML = `
    <p> ${this.title ? this.title : 'Missing title'} </p>
    <p>${this.description ? this.description : 'Missing description'}</p>
    <p>${ this.createDateFormat()} </p>
    <p>${this.priority ?? 'Missing priority'}</p>
    <p> Completed <input type="checkbox" id="complete" name="complete" unchecked> </p> `
    document.getElementById('item-container').appendChild(div);
  }
}

export default new TaskListModel();