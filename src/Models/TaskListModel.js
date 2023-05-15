import { createDateFormat } from "../util";


class TaskListModel{

  constructor(){
  this.itemList = [];
  this.otherProjectsArr =  [];
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
  //updateItem(id, {title: title, description: description, dueDate: dueDate, priority: priority, project: project}){
    //this.itemList[this.itemList.findIndex((item) => item.id === id)].key = description;}

  deleteItem(id){
    this.itemList = this.itemList.filter((item) => item.id !== item);
  }

  toggleComplete(id){
    this.itemList = this.itemList.map((item) => 
    { if(item.id === id ){
       item = item; item.completed = !item.completed
      return item; }
      else {
        return item = item
      }
    })
      return this.itemList;
  }

  readItemList(){
    return this.itemList;
  }

  isProjectDefault(){
    for(let i = 0; i < this.itemList.length; i++){ 
      if (this.itemList[i].project != 'default'){
        this.otherProjectsArr.push(this.itemList[i]);
        this.itemList.splice(i, 1);
        i--
      }}
      return this.otherProjectsArr;
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

// create link between other projects array and creating new objects/ updating existing project objects