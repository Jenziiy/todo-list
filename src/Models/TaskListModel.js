export class Model{

  constructor(){

  }
}

export class TaskListModel{

  constructor(){
  this.itemList = [];
  }

  addItem(title, description, dueDate, priority){
    const item = {
      Project: 'default',
      id: this.items.length > 0 ? id = this.items[this.items.length--].id++ : 1,
      title: title,
      description: description,
      dueDate: createDateFormat(dueDate),
      priority: priority,
      completed: false,
    }
  }

    createDateFormat(dueDate){
      if (dueDate != undefined) { 
        dueDate.toString().split('-'); 
        return `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`; 
        }
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
    <p>${this.priority[0] == 'A' ||
         this.priority[0] == 'B' ||
         this.priority[0] == 'C' ? this.priority : 'Missing priority'}</p>
    <p> Completed <input type="checkbox" id="complete" name="complete" unchecked> </p> `
    document.getElementById('item-container').appendChild(div);
  }
}